import axios from "axios";
const baseURL = "http://realworld.api.fed.lagounews.com"
// const baseURL = 'https://conduit.productionready.io'
export const request = axios.create({
  baseURL
});
// let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjYyNDE2NzI4NEBxcS5jb20iLCJ1c2VybmFtZSI6Inh4MTIzIiwicGFzc3dvcmQiOiIkMmEkMTAkOUt6YnhzZlJvUlhHRXY5akxzMVlMLkFuZ0dWaTdaRzl6dXR5bXFpd0ZPQlg1a0xNbGtzeU8iLCJiaW8iOm51bGwsImltYWdlIjoiaHR0cHM6Ly9hcGkucmVhbHdvcmxkLmlvL2ltYWdlcy9zbWlsZXktY3lydXMuanBlZyIsImlhdCI6MTYzNjQ2Mjk1OSwiZXhwIjoxNjQxNjQ2OTU5fQ.pSD16Xra_OK6NBN5YgVrRrCCQI61xbs1Q59n0vtW1ik'
// console.log("direct set token",token);
//     request.interceptors.request.use(function(config){
//       config.headers.Authorization=`Token ${token}`
//       return config;
//     },function(error){
//       return Promise.reject(error);
//     });
export function updateToken(token){
  request.interceptors.request.use(function(config){
    config.headers.Authorization=`Token ${token}`
    return config;
  },function(error){
    return Promise.reject(error);
  });
}
export default function(ctx){
  let {user} = ctx.store.state;
  console.log("plugins.request enter");
  if(user && user.token){
    console.log("plugins.request set token",user.token);
    updateToken(user.token);
  }
}