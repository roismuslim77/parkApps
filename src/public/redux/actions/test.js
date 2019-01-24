import axios from 'axios';

const IP ='http://192.168.0.13:3333/'

export const get = (data) => {
  return {
    type: 'GET_TEST',
    payload: data
  }
}

export const getdata = (data) => {
  return {
    type: 'SHOW_TEST',
    payload: data
    
  }
}

export const add = (data) => {
  return {
    type: 'ADD_TEST',
    payload: data
  }
}

export const edit = (data) => {
  return {
    type: 'EDIT_TEST',
    payload: data
  }
}

export const del = (data) => {
  return {
    type: 'DELETE_TEST',
    payload: data
    
  }
}