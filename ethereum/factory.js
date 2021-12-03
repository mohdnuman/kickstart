import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance=new web3.eth.Contract(JSON.parse(campaignFactory.interface),"0xA301E7996FF222b1A95F90F7FF7deda0902cC5Fd");

export default instance;