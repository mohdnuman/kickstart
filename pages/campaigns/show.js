import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';

class Campaignshow extends Component {
    static async getInitialProps(props){
        const address=props.query.address;
        const campaign=Campaign(address);

        const info=await campaign.methods.getSummary().call();
        console.log(info);
        return{
            minimumContribution:info[0],
            balance:info[1],
            requests:info[2],
            approvers:info[3],
            manager:info[4]
        };
    }

    renderCampaignData=()=>{
        const {minimumContribution,balance,requests,approvers,manager}=this.props;
        const items=[
            {
                header:manager,
                meta:'Address of Manager',
                description:'The manager created this campaign and can create requests to withdraw money.',
                style:{overflowWrap:'break-word'}
            },
            {
                header:minimumContribution,
                meta:'Minimum Contribution(Wei)',
                description:'You must contribute this much way to become a approver.',
                style:{overflowWrap:'break-word'}
            },
            {
                header:requests,
                meta:'No. of requests',
                description:'A request tries to withdraw money from contract. A request must be approved by approvers',
                style:{overflowWrap:'break-word'}
            },
            {
                header:approvers,
                meta:'Number of approvers',
                description:'No. of people who have already donated to this campaign',
                style:{overflowWrap:'break-word'}
            },
            {
                header:web3.utils.fromWei(balance,'ether'),
                meta:'Campaign Balance(ether)',
                description:'this balance is how much money this campaign has left to spend.',
                style:{overflowWrap:'break-word'}
            }

        ];
        return <Card.Group items={items}/>
    }

    render() {
        return (
            <Layout>
                {this.renderCampaignData()}
            </Layout>
        );
    }
}

export default Campaignshow;