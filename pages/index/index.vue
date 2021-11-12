<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="user" class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :to="'/?tab=your_feed'"
                  exact
                  :class="{ active: tab === 'your_feed' }"
                  >Your Feed</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :to="'/?tab=global_feed'"
                  exact
                  :class="{ active: tab === 'global_feed' }"
                  >Global Feed</nuxt-link
                >
              </li>
              <li v-if="tag" class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :to="'/?tab=tag&tag=' + tag"
                  exact
                  :class="{ active: tab === 'tag' }"
                  >#{{ tag }}</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div
            v-for="article in articles"
            v-bind:key="article.id"
            class="article-preview"
          >
            <div class="article-meta">
              <nuxt-link :to="{ path: '/profile/' + article.author.username }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  :to="{ path: '/profile/' + article.author.username }"
                  class="author"
                  >{{ article.author.username }}</nuxt-link
                >
                <span class="date">{{
                  article.createdAt | datetime("MMM DD,YYYY")
                }}</span>
              </div>
              <button
                @click="onFav($event, article)"
                :class="{ active: article.favorited }"
                class="btn btn-outline-primary btn-sm pull-xs-right"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link class="preview-link" :to="'/article/' + article.slug">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
          <nav>
            <ul class="pagination">
              <li
                v-for="i in totalPage"
                v-bind:key="i"
                class="page-item"
                :class="{ active: page === i }"
              >
                <nuxt-link
                  class="page-link ng-binding"
                  :to="
                    '/?page=' + i + '&tab=' + tab + (tag ? '&tag=' + tag : '')
                  "
                  >{{ i }}</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                :to="'/?tag=' + tag + '&tab=tag'"
                v-for="tag in tags"
                v-bind:key="tag"
                class="tag-pill tag-default"
                >{{ tag }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArticle,
  getFeedArticle,
  addFav,
  delFav,
  getTags,
} from "../../api/article";
import ActionLocker from "@/component/ActionLocker";
import { mapState } from "vuex";
const limit = 10;
export default {
  async asyncData(ctx) {
    let page = Number(ctx.query.page) || 1;
    let tag = ctx.query.tag;
    let tab = ctx.query.tab || "global_feed";
    let funArticle = tab === "your_feed" ? getFeedArticle : getArticle;
    let articlePromise = funArticle({ limit, tag, offset: (page - 1) * limit });
    let tagsPromise = getTags();
    const resp = await articlePromise;
    const data = resp.data;
    const { data: tagData } = await tagsPromise;
    return {
      articles: data.articles,
      articlesCount: data.articlesCount,
      tags: tagData.tags,
      page,
      tag,
      tab,
    };
  },
  computed: {
    ...mapState(["user"]),
    totalPage() {
      return Math.ceil(this.articlesCount / limit);
    },
  },
  watchQuery: ["page", "tag", "tab"],
  mounted() {
    console.log(this.$data);
  },
  created() {},
  methods: {
    async onFav(e, article) {
      let lock = new ActionLocker(e.currentTarget);
      try {
        if (!article.favorited) {
          await addFav(article.slug);
          ++article.favoritesCount;
        } else {
          await delFav(article.slug);
          --article.favoritesCount;
        }
        article.favorited = !article.favorited;
      } finally {
        lock.unlock();
      }
    },
  },
};
</script>

<style>
</style>