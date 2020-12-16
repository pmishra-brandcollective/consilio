import axios from 'axios'

const baseURL = '/api'


// Products Related

export const getAllProducts = () => {
  return axios.get(`${baseURL}/products`)
}

export const getSingleProduct = id => {
  return axios.get(`${baseURL}/products/${id}`)
}

// User Related

export const loginUser = data => {
  return axios.post(`${baseURL}/login`, data)
}

export const registerUser = data => {
  return axios.post(`${baseURL}/register`, data)
}

