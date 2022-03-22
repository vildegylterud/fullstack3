import axios from "axios"
//import https from 'https'

//const agent = new https.Agent({
   // rejectUnauthorized: false,

//});

const config = {
  //  httpsAgent: agent,
    auth: {
        username: 'admin',
        password: 'password'
    }
};

export function doLogout () {
    return axios.post(
        `http://localhost:8085/calculator/login/logout`,config
    ).then(( resonse )=> {
        return resonse.data;
    });
}

export function doRegister (registerRequest) {
    return axios.post(
        `http://localhost:8085/calculator/register`,
        registerRequest, config
    ).then(( resonse )=> {
        return resonse.data;
    });
}

export function doLogin (loginRequest) {
    return axios.post(
        `http://localhost:8085/calculator/login`,
        loginRequest, config
    ).then(( resonse )=> {
        return resonse.data;
    });

}



