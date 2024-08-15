import axios from 'axios';

const getBasicAuthorization = () => {
    const token = localStorage.getItem('token');
    return `Bearer ${token}`;
}

export const PublicInterceptor = ()=> {

    axios.interceptors.request.use(function (request) {
        if (request.url.includes("assets") || request.headers.Authorization) {
            return request;
        }
        const token = getBasicAuthorization();
        const newHeaders = {
            Authorization: token,
            'Content-Type': 'application/json',
        };
        request.headers = newHeaders;
        return request;
    });

    axios.interceptors.response.use((response)=>{
        window.location.href = '/reset-success';
        return response;
    }, function(error) {
        if (error.response.data.error.code) return null //En esta parte va la alerta
    })
}