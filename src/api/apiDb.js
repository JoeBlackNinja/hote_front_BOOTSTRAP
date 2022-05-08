import axios from 'axios';

const apiDb = axios.create({
    baseURL: 'http://localhost:9000/api',
    // headers: {
    //     Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    // }

});


export default apiDb;