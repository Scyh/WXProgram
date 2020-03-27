import request from './request.js'

export function getOrder() {
  return request('https://api.myjson.com/bins/13qn4a')
}