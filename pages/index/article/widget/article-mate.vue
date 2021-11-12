<template>
  <div class="article-meta">
    <nuxt-link :to="'/profile/' + article.author.username">
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link :to="'/profile/' + article.author.username">
        {{ article.author.username }}
      </nuxt-link>
      <span class="date">{{ article.createdAt | datetime("MMM,DD") }}</span>
    </div>

    <button
      class="btn btn-sm"
      @click="onFollowUser($event,article.author)"
      :class="article.author.following?'btn-outline-primary':'btn-outline-secondary'"
    >
      <i class="ion-plus-round"></i>
      &nbsp; {{article.author.following?'Unfollow':'Follow'}} Eric Simons
    </button>
    &nbsp;
    <button
      class="btn btn-sm"
      :class="article.favorited?'btn-outline-primary':'btn-outline-secondary'"
      @click="onFav($event,article)"
    >
      <i class="ion-heart"></i>
      &nbsp; {{article.favorited?'Unfavorite':'Favorite'}} Post
      <span class="counter">({{ article.favoritesCount }})</span>
    </button>
  </div>
</template>

<script>
import {followUser} from '@/api/user'
import {addFav,delFav} from '@/api/article'
import ActionLocker from '@/component/ActionLocker'
export default {
  props: ["article"],
  methods:{
    async onFollowUser(e,author){
      let lock=new ActionLocker(e.currentTarget);
      try{
        const {data} = await followUser(author.username,author.following);
        author.following=!author.following;
      }finally{
        lock.unlock();
      }
    },
    async onFav(e,article){
      let lock=new ActionLocker(e.currentTarget);
      try{
        if (!article.favorited) {
          await addFav(article.slug);
          ++article.favoritesCount;
        } else {
          await delFav(article.slug);
          --article.favoritesCount;
        }
        article.favorited = !article.favorited;
      }finally{
        lock.unlock();
      }
    }
  }
};
</script>

<style>
</style>