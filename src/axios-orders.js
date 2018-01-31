import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e0eac.firebaseio.com/' 
});

export default instance;