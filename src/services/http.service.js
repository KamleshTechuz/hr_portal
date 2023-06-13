import axios from 'axios';
// variables
import { environment } from '../environments/environment';
// import { decrypt } from './helper.service';

const baseUrl = environment.apiUrl;

const defaultHeaders = {'Content-Type': 'application/json',};

axios.interceptors.request.use(async (config) => {
	const token = localStorage.getItem('accessToken');
	// const encUser = localStorage.getItem('loggedInUser') as string;
	// const user = encUser ?  decrypt(encUser) : '';

	if (token) {
		config.headers.authorization = `Bearer ${token}`;
	}
	config.baseURL = baseUrl;
	config.headers['Access-Control-Allow-Origin'] = '*';
	return config;
}, (error) => {
	return Promise.reject(error);
});

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		throw error.response.data;
	}
);

// Get request
const getData = async (reqUrl, params = {}) => {
	const response = await axios.get(reqUrl, {params});
	return response;
};

//  post request
const postData = async (reqUrl, data = {}, headers) => {
	const response = await axios.post(reqUrl, data, {headers: { ...defaultHeaders, ...headers } });
	return response;
};

//  Put request
const putData = async (reqUrl, data = {}, headers) => {
	const response = await axios.put(reqUrl, data, {headers: { ...defaultHeaders, ...headers } });
	return response;
};

// Delete request
const deleteData = async (reqUrl, params = {}) => {
	const response = await axios.delete(reqUrl, params);
	return response;
};

export default {
	getData, postData, putData, deleteData
};