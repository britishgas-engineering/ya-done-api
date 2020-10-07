const axios = require('axios');
const https = require('https');

/*
===============================================================================
COMMMON INPUTS for the all the functions:

1. header - Should be an Object which should hold all the required headers
   e.g.: { 'X-Client-ID': 'abc' },
2. endPoint - Should be the endpoint Path details which has to be hit
   e.g.: https://api.postcodes.io/random/postcodes
   If we want to pass queryParams, we need to pass after including in endPoint
===============================================================================
*/

/*
===============================================================================
After getting the response, check status and return the response if success
if there is an error throw an Error
===============================================================================
*/
const onError = (error) => {
  return error;
};

const onSuccess = (response) => {
  return response;
};

/*
===============================================================================
GET Method is used to get response for any API.
Input Details: Refer COMMON INPUTS
===============================================================================
*/
async function GET(header, endPoint) {
  return axios
    .create({
      headers: header,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
    .get(endPoint)
    .then((response) => onSuccess(response))
    .catch((error) => onError(error));
}

/*
===============================================================================
POST Method is used to POST any information to Backend.
Input Details: Input Details: Refer COMMON INPUTS
3. requestBody - The request body, this should also be an Object.
  e.g: {
    username: 'bipz@abc.com',
    password: 'password12345',
    grant_type: 'password'
  };
===============================================================================
*/
async function POST(header, endPoint, requestBody) {
  return axios
    .create({
      headers: header,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
    .post(endPoint, requestBody)
    .then((response) => onSuccess(response))
    .catch((error) => onError(error));
}

/*
===============================================================================
PUT Method is used to PUT any information to Backend.
Input Details: Input Details: Refer COMMON INPUTS
3. requestBody - The request body, this should also be an Object.
  e.g: {
    username: 'bipz@abc.com'
  };
===============================================================================
*/
async function PUT(header, endPoint, requestBody) {
  return axios
    .create({
      headers: header,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
    .put(endPoint, requestBody)
    .then((response) => onSuccess(response))
    .catch((error) => onError(error));
}

/*
===============================================================================
PATCH Method is used to PATCH any information to Backend.
Input Details: Input Details: Refer COMMON INPUTS
3. requestBody - The request body, this should also be an Object.
  e.g: {
    username: 'bipz@abc.com'
  };
===============================================================================
*/
async function PATCH(header, endPoint, requestBody) {
  return axios
    .create({
      headers: header,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
    .patch(endPoint, requestBody)
    .then((response) => onSuccess(response))
    .catch((error) => onError(error));
}

/*
===============================================================================
DELETE Method is used to delete any information from Backend.
Input Details: Input Details: Refer COMMON INPUTS
===============================================================================
*/
async function DELETE(header, endPoint) {
  return axios
    .create({
      headers: header,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
    .delete(endPoint)
    .then((response) => onSuccess(response))
    .catch((error) => onError(error));
}

/*
===============================================================================
HEAD Method is used get the auth headers/ token from backends
Input Details: Input Details: Refer COMMON INPUTS
3. requestBody - The request body, this should also be an Object.
  e.g: {
    username: 'bipz@abc.com'
  };
The request bosy in not required in all cases
===============================================================================
*/
async function HEAD(header, endPoint, requestBody) {
  const axiosFunc = axios.create({
    headers: header,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });

  if (requestBody === undefined) {
    return axiosFunc
      .patch(endPoint)
      .then((response) => onSuccess(response))
      .catch((error) => onError(error));
  } else {
    return axiosFunc
      .patch(endPoint, requestBody)
      .then((response) => onSuccess(response))
      .catch((error) => onError(error));
  }
}

/*
===============================================================================
OPTIONS Method is used to check whether the method is available or not.
Check for CORS enabled or not
Input Details: Input Details: Refer COMMON INPUTS
3. requestBody - The request body, this should also be an Object.
  e.g: {
    username: 'bipz@abc.com'
  };
The request bosy in not required in all cases
===============================================================================
*/
async function OPTIONS(header, endPoint, requestBody) {
  const axiosFunc = axios.create({
    headers: header,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });

  if (requestBody === undefined) {
    return axiosFunc
      .patch(endPoint)
      .then((response) => onSuccess(response))
      .catch((error) => onError(error));
  } else {
    return axiosFunc
      .patch(endPoint, requestBody)
      .then((response) => onSuccess(response))
      .catch((error) => onError(error));
  }
}

/*
===============================================================================
If we have to wait for sometime for the status change of any status, we can
use this wait function
===============================================================================
*/
async function wait(ms) {
  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

//Exporting all the functions which will be available for all other repo
module.exports = {
  GET: GET,
  POST: POST,
  PUT: PUT,
  PATCH: PATCH,
  DELETE: DELETE,
  HEAD: HEAD,
  OPTIONS: OPTIONS,
  wait: wait
};
