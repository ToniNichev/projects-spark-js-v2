import PageData from '../src/containers/PageLayout/PageData'; 
const url = require('url');
const querystring = require('querystring');
import queries from '../src/queries';

const stringToObject = (str) => {
  const fullString = str == '' ? '[]' : '[' + str.split("][").join("],[") + ']';
  return JSON.parse(fullString);
}

const sendResponse = (res, responseString) => {
  res.status(200);
  res.removeHeader('X-Powered-By');
  res.removeHeader('Set-Cookie');
  res.removeHeader('Connection');
  res.send(responseString);  
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} devicesData 
 * @param {*} usersData 
 * @param {*} next 
 * @returns 
 */
const requestDataFromAPI = async (req, res, usersData, next) => { 

  req.parsedUrl = url.parse(req.url);
  req.pathname = req.parsedUrl.pathname;
  req.template = PageData[req.pathname]?.template || null;
  req.parsedQs = querystring.parse(req.parsedUrl.query);
  req.apiData = {};
  
  next();

}

export default requestDataFromAPI;