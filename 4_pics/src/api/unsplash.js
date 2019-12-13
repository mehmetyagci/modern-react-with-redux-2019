import axios from 'axios';

export default axios.create ({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID dba28937347d88249d994981b554ecc4d4b2b770ade79a0419adcb2823f744e4',
  },
});
