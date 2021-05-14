import request from 'superagent';

export const API_URL = `http://127.0.0.1:8000/api/`;

const API = {
    get: url => request.get(`${API_URL}${url}`)
    // .set('Authorization', getAuthorizationHeader())
        .then(res => res.body, err => Promise.reject(err)),
    post: (url, body = {}, opts = {}) => {
        const { passFullRes = false } = opts;
        return request.post(`${API_URL}${url}`)
            .set('Accept', 'application/json')
            // .set('Authorization', getAuthorizationHeader())
            .send(body)
            .then(res => (passFullRes ? res : res.body), err => Promise.reject(err));
    },
    put: (url, body = {}) => request.put(`${API_URL}${url}`)
        .set('Accept', 'application/json')
        // .set('Authorization', getAuthorizationHeader())
        .send(body)
        .then(res => res.body, err => Promise.reject(err)),
    patch: (url, body = {}) => request.patch(`${API_URL}${url}`)
        .set('Accept', 'application/json')
        // .set('Authorization', getAuthorizationHeader())
        .send(body)
        .then(res => res.body, err => Promise.reject(err)),
    delete: url => request.delete(`${API_URL}${url}`)
        .set('Accept', 'application/json')
        // .set('Authorization', getAuthorizationHeader())
        .then(res => res.body, err => Promise.reject(err)),
};

export function getAuthorizationHeader() {
    return `Bearer ${getToken()}`;
}

export function getToken() {
    return 'cb79960e5857ab02ba9d8a9c8aaf511fed14a543';
}

const bedcaApi = {
    ...API,
    getToken
}

export default bedcaApi;