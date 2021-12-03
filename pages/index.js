import React, { Component } from 'react';
import factory from '../ethereum/factory';

class newcampaign extends Component {
    static async getInitialProps(){
        const campaigns=await factory.methods.getDeployedCampaigns().call();

        return {campaigns:campaigns};
    }
    
    render() {
        const {campaigns}=this.props;
        return (
            <div>
                this is the campaign list page!
                {campaigns[0]}
            </div>
        );
    }
}

export default newcampaign;