import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input ,Message} from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import {Router} from '../../routes';
import router from "next/router";

class newCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimumContribution: "",
      errorMessage: "",
      isLoading:false
    };
  }

  handleInputchange = (e) => {
    this.setState({
      minimumContribution: e.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      isLoading:true,
      errorMessage:''
    })
    try {
      
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({ from: accounts[0] });
      Router.pushRoute('/');  
    } catch (error) {
      this.setState({
        errorMessage: error.message,
      });
    }
    this.setState({
      isLoading:false
    })
  };

  render() {
    return (
      <Layout>
        <h3>Create A Campaign</h3>
        <Form onSubmit={this.handleSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="Wei"
              placeholder=""
              // type="number"
              labelPosition="right"
              onChange={this.handleInputchange}
              value={this.state.minimumContribution}
            />
          </Form.Field>
          {/* message will only print when error is true */}
          <Message error header="OOPS!" content={this.state.errorMessage}/>

          <Button primary loading={this.state.isLoading} type="Submit">
            Create
          </Button>
        </Form>
        
      </Layout>
    );
  }
}

export default newCampaign;
