import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance=new web3.eth.Contract(JSON.parse(campaignFactory.interface),"0x3E5b5B53fAd12A29fD995CBAC4fF68E40DdFaecA");

export default instance;