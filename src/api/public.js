/* eslint-disable */
import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
export default {
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {params}).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}, token) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.post['token'] = token;
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    });
  }
};
