import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

// eslint-disable-next-line no-unused-vars
const createInstance = (headers: any) => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_CONSUMER_API,
    headers: {
      Authorization: `Bearer ${cookies.get('access_token')}`,
      'Content-Type': 'application/json'
    }
  })
}

const handleResponse = (res: any) =>
  !res.data.error ? Promise.resolve(res) : Promise.reject(new Error(res))

const catchError = (err: any) => Promise.reject(err)

export default {
  get: (path: string, headers = {}) =>
    createInstance(headers).get(path).then(handleResponse).catch(catchError),
  post: (path: string, body = {}, headers = {}) =>
    createInstance(headers)
      .request({
        url: path,
        method: 'POST',
        data: body
      })
      .then(handleResponse)
      .catch(catchError),
  put: (path: string, body = {}, headers = {}) =>
    createInstance(headers)
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse)
      .catch(catchError),
  delete: (path: string, body = {}, headers = {}) =>
    createInstance(headers)
      .request({
        url: path,
        method: 'DELETE',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
}