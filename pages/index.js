import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import {Link} from '../routes';

class newcampaign extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns: campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((campaign) => {
      return {
        header: campaign,
        description: <Link to={`/campaigns/${campaign}`}><a><Button>view campaign</Button></a></Link>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    const { campaigns } = this.props;
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link to='/campaigns/new'>
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary="true"
              />
            </a>
          </Link>
          {this.renderCampaigns()}
          
        </div>
      </Layout>
    );
  }
}

export default newcampaign;
