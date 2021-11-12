import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('datetime',(value,fmt = 'YYYY-MM-DD HH:mm:ss')=>{
  return dayjs(value).format(fmt)
})