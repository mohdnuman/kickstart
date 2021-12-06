import { getRouteMatcher } from "next/dist/shared/lib/router/utils";
import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ContributeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      loading:false,
      errorMessage:''
    };
  }
  // handleSample=()=>{
  //   Router.reload();
  // }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    this.setState({loading:true,errorMessage:''});
    const address = this.props.address;
    const campaign = Campaign(address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .contribute()
        .send({ from: accounts[0], value: web3.utils.toWei(this.state.value,'ether') });

      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (error) {
      this.setState({
        errorMessage:error.message
      });
    }
    this.setState({
      loading:false,
      value:''
    })
  };
  render() {
    const { address } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount To Contribute</label>
          <Input
            label="Ether"
            labelPosition="right"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Message error header="OOPS!" content={this.state.errorMessage}/>

        <Button primary loading={this.state.loading}>Contribute</Button>
        {/* <Button onClick={this.handleSample}>hello</Button> */}
      </Form>
    );
  }
}

export default ContributeForm;
