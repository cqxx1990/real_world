const cookieparser = process.server?require('cookieparser'):undefined;
import {updateToken} from '@/plugins/request'
export const state=()=>{
  return {
    user:null
  }
}
export const mutations={
  setUser(state,user){
    state.user=user;
    if(user && user.token)
      updateToken(user.token);
  }
}
export const actions={
  nuxtServerInit({commit},{req}){
    let user = null;
    if(req.headers.cookie){
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        user = JSON.parse(parsed.user);
        console.log("nuxtServerInit setUser");
      } catch (error) {
        console.log('nuxtServerInit err',error);
      }
    }
    commit('setUser',user);
  }
}