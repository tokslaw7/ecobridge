import axios from "axios"


axios.interceptors.request.use(
    config => {
        config.headers = {
            // Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Expose-Headers": "Access-Control-Allow-Origin",
            // "Access-Control-Allow-Headers": "Origin, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Allow-Headers, Authorization, observe, enctype, Content-Length, X-Csrf-Token",
            // "Content-Type": "application/json;charset=UTF-8",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          };
    // config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    // config.baseURL = process.env.REACT_APP_MAIN_API
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

const postAuxEnd = (path, postData, media=false) => {
    const basePath = media ? process.env.REACT_APP_MAIN_API : process.env.REACT_APP_MAIN_API
    return axios.post(`${basePath}${path}`, postData).then(res => {
        return res
    }).catch(err => {
        throw new Error(err.response.data.message);
    })
}

const getAuxEnd = (path, reqData= null) => {
    const basePath = process.env.REACT_APP_MAIN_API
    return axios.get(`${basePath}${path}`,{ params: reqData }).then(res => {
        return res
        // localStorage.clear();
        // window.location.href = `/login?sessionExpired=true`;
    }).catch(err => {
        throw new Error(err);
        // throw new Error(err.response.data.message);
        // return err
    })
}

// FUNCTION TO LOGIN USER IN
export const loginUser = (reqData) => {
    let postData = {
        ...reqData
    }
    return postAuxEnd('/panel/auth/login', postData, false)
}

// FUNCTION TO REGISTER USER
export const signUpUser = (reqData) => {
    let postData = {
        ...reqData
    }
    return postAuxEnd('/panel/auth/register', postData, false)
}

// FUNCTION TO VERIFY EMAIL
export const verifyEmail = (reqData) => {
    let postData = {
        ...reqData
    }
    return postAuxEnd('/panel/auth/register/verify', postData, false)
}

// FUNCTION TO COMPLETE REGISTRATION
export const completeRegistration = (reqData) => {
    let postData = {
        ...reqData
    }
    return postAuxEnd('/panel/auth/register/complete', postData, false)
}

// FUNCTION TO SUBSCRIBE
export const subscribe = (reqData) => {
    let postData = {
        ...reqData
    }
    return postAuxEnd('/panel/myproduct/subscription', postData, false)
}


// FUNCTION TO RESET USER PASSWORD
export const recoverPWD = (reqData) => {
    let postData = {
        ...reqData
    }
    return postAuxEnd('/panel/auth/reset', postData, false)
}

// FUNCTION TO GET DASHBOARD DATA
export const accountDashboard = () => {
    return getAuxEnd(`/panel/account/dash`)
}

// FUNCTION TO GET DASHBOARD TOP BAR SECTION
export const topBar = () => {
    return getAuxEnd(`/panel/account/bar`)
}

// FUNCTION TO GET CALENDAR EVENTS
export const getCalendarEvents = () => {
    return getAuxEnd(`/panel/account/calendar`)
}

// FUNCTION TO GET DASHBOARD RECENT ACTIONS SECTION
export const recentActions = () => {
    return getAuxEnd(`/panel/account/actions`)
}

// FUNCTION TO GET MY PRODUCT PROVISION DATA
export const productProvision = (reqData) => {
    const postData = { ...reqData }
    return getAuxEnd(`/panel/myproduct/provision`, postData)
}

// FUNCTION TO GET DASHBOARD PRODUCT DATA SECTION
export const productData = () => {
    return getAuxEnd(`/panel/account/products`)
}

// FUNCTION TO GET DASHBOARD PRODUCT DATA SECTION
export const contactData = () => {
    return getAuxEnd(`/panel/contacts`)
}

// FUNCTION TO GET DASHBOARD PRODUCT URL DATA SECTION
export const productsURL = () => {
    return getAuxEnd(`/panel/account/products/url`)
}

export const MyProductData = (productID) => {
    const reqData = { product_id : productID}
    //console.log(reqData)
    return getAuxEnd(`/panel/myproduct/dash`,reqData)
}