import {request} from '@/plugins/request';

export async function login(data){
  return await request({
    method:"POST",
    url:'/api/users/login',
    data
  })
}
export async function register(data){
  return await request({
    method:"POST",
    url:'/api/users',
    data
  })
}
export async function followUser(username,isFollowed){
  return await request({
    method:isFollowed?"POST":"DELETE",
    url:`/api/profiles/${username}/follow`
  })
}
export async function getProfile(){
  return await request({
    method:"GET",
    url:'/api/user'
  })
}
export async function updateUser(user){
  return await request({
    method:"PUT",
    url:'/api/user',
    data:{user}
  })
}