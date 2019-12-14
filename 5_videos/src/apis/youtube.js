import axios from 'axios';

const KEY = 'AIzaSyBH-HqAC5irr7WcKUwnaHKx5tbvg6RKngE';

export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
