import Vue from 'vue'
if(process.client){
  Vue.prototype.$message = (msg)=>{
    globalThis.alert(msg);
  };
}