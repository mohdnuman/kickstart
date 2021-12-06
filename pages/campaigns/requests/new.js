import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import web3 from "../../../ethereum/web3";
import Campaign from "../../../ethereum/campaign";
import { Link, Router } from "../../../routes";
import Layout from "../../../components/Layout";

class AddRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      description: "",
      recipient: "",
      loading:false,
      errorMessage:''
    };
  }
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }
  handleSubmit=async(event)=>{
    event.preventDefault();
    this.setState({
        loading:true,
        errorMessage:''
    })
    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({ from: accounts[0] });
      Router.pushRoute('/campaigns/{this.props.address/requests');  
    } catch (err) {
        this.setState({
            errorMessage:err.message
        });
    }
    this.setState({
        loading:false
    })
  }
  render() {
    return (
      <Layout>
          <Link>
          
          <h3>Create A Request</h3>
        <Form onSubmit={this.handleSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={(event) => {
                this.setState({ description: event.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input
              value={this.state.value}
              onChange={(event) => {
                this.setState({ value: event.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient Address</label>
            <Input
              value={this.state.recipient}
              onChange={(event) => {
                this.setState({ recipient: event.target.value });
              }}
            />
          </Form.Field>
          <Message error header="oops!" content={this.state.errorMessage}/>
          <Button primary loading={this.state.loading}>Create</Button>
        </Form>
      </Layout>
    );
  }
}
