import request from '@/utils/request'

export const loginIn = (data) => {
  return request({
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    url: '/user/login',
    method: 'post',
    data
  })
}
