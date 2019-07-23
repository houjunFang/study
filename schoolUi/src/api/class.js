import {BaseURL, axios} from './config';

//-----------------------------------班级列表---------------------------------------------
export const getClassesList = params => { return axios.get(`${BaseURL}/classes/list`, { params: params })};

//-----------------------------------删除班级---------------------------------------------
export const removeClassById = params => { return axios.get(`${BaseURL}/classes/deleteClass`, { params: params })};


//-----------------------------------新增班级---------------------------------------------
export const addClasses = params => { return axios.post(`${BaseURL}/classes/addClass`,  params)};

//-----------------------------------更新班级---------------------------------------------
export const updateClasses = params => { return axios.post(`${BaseURL}/classes/updateClass`,  params)};
