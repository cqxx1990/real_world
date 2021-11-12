<template>
  <div class="col-xs-12 col-md-8 offset-md-2">
    <form @submit.prevent="onPostComment" class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="myComment"
        ></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>

    <div v-for="item in list" v-bind:key="item.id" class="card">
      <div class="card-block">
        <p class="card-text">
         {{item.body}}
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="'/profile/'+item.author.username">
          <img
            :src="item.author.image"
            class="comment-author-img"
          />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="'/profile/'+item.author.username">
          {{item.author.username}}
        </nuxt-link>
        <span class="date-posted">{{item.createAt | datetime('MMM DD, YYYY')}}</span>
        <span v-if="item.author.username === user.username" class="mod-options">
          <i @click="$message('sorry，没有实现哦')" class="ion-edit"></i>
          <i @click="delComment($event,item)" class="ion-trash-a"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {getComments,addComments,delComments} from '@/api/article'
import ActionLocker from '@/component/ActionLocker'
import {mapState} from 'vuex'
export default {
  props:['slug'],
  data(){
    return {
      list:[],
      myComment:""
    }
  },
  computed:{
    ...mapState(['user'])
  },
  async mounted(){
    const {data} = await getComments(this.slug)
    this.list=data.comments;
  },
  methods:{
    async onPostComment(e){
      let lock=new ActionLocker(e.currentTarget);
      try{
        if(!this.myComment){
          console.log(this);
          return this.$message('请输入评论内容');
        }
        const {data} = await addComments(this.slug,this.myComment);
        this.list.unshift(data.comment);
        this.myComment="";
      }finally{
        lock.unlock();
      }
    },
    async delComment(e,item){
      let lock=new ActionLocker(e.currentTarget);
      try{
        const {data} = await delComments(this.slug,item.id);
        let index = this.list.indexOf(item);
        this.list.splice(index,1);
      }finally{
        lock.unlock();
      }
    }
  }
};
</script>

<style>
</style>