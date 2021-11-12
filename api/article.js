import {request} from '@/plugins/request';

/**
 * 
 * @param {tag?,auther?,favorited?,limit?,offset?} params 
 * @returns 
 */
export const getArticle = params=>{
  return request({
    method:'GET',
    url:'/api/articles',
    params
  });
}
export const getFeedArticle = params=>{
  return request({
    method:'GET',
    url:'/api/articles/feed',
    params
  }).catch(e=>console.dir(e));
}
export const getTags = ()=>{
  return request({
    method:'GET',
    url:'/api/tags'
  });
}
export const addFav = slug => {
  return request({
    method:'POST',
    url:`/api/articles/${slug}/favorite`
  });
}
export const delFav = slug => {
  return request({
    method:'DELETE',
    url:`/api/articles/${slug}/favorite`
  });
}
export const articleDetail = slug=>{
  return request({
    method:'GET',
    url:`/api/articles/${slug}`
  });
}
export const getComments = slug=>{
  return request({
    method:'GET',
    url:`/api/articles/${slug}/comments`
  });
}
export const addComments = (slug,body)=>{
  return request({
    method:'POST',
    url:`/api/articles/${slug}/comments`,
    data:{
      comment:{body}
    }
  });
}
export const delComments = (slug,commentid) => {
  return request({
    method:'DELETE',
    url:`/api/articles/${slug}/comments/${commentid}`
  });
}
export const addArticle = (article)=>{
  return request({
    method:'POST',
    url:`/api/articles`,
    data:{
      article
    }
  });
}