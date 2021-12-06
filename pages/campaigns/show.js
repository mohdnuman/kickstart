import React, { Component } from "react";
import { Button, Card, Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

class Campaignshow extends Component {
  static async getInitialProps(props) {
    const address = props.query.address;
    const campaign = Campaign(address);

    const info = await campaign.methods.getSummary().call();
    // console.log(info);
    return {
      address: address,
      minimumContribution: info[0],
      balance: info[1],
      requests: info[2],
      approvers: info[3],
      manager: info[4],
    };
  }

  renderCampaignData = () => {
    const { minimumContribution, balance, requests, approvers, manager } =
      this.props;
    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution(Wei)",
        description: "You must contribute this much way to become a approver.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: requests,
        meta: "No. of requests",
        description:
          "A request tries to withdraw money from contract. A request must be approved by approvers",
        style: { overflowWrap: "break-word" },
      },
      {
        header: approvers,
        meta: "Number of approvers",
        description: "No. of people who have already donated to this campaign",
        style: { overflowWrap: "break-word" },
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance(ether)",
        description:
          "this balance is how much money this campaign has left to spend.",
        style: { overflowWrap: "break-word" },
      },
    ];
    return <Card.Group items={items} />;
  };

  render() {
    return (
      <Layout>
        <h1>Campaign Details!</h1>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCampaignData()}</Grid.Column>
            <Grid.Column width={5}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <Link to={`/campaigns/${this.props.address}/requests`}>
              <a>
              <Button primary>View Requests</Button>
              </a>
            </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default Campaignshow;
