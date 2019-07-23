import axios from 'axios';

let BaseURL;
if (process.env === 'development') {
	BaseURL = 'http://192.168.100.3:8000/api';
}else{
	BaseURL = 'http://192.168.100.3:8000/api';
};


axios.defaults.headers.common['accessToken'] = 123;
axios.defaults.headers.common['projId'] = 213;

export {BaseURL,axios};