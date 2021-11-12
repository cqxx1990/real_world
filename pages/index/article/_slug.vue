<template>
  <div class="article-page">

  <div class="banner">
    <div class="container">

      <h1>{{article.title}}</h1>

      <ArticleMeta :article="article"/>

    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12" v-html="article.body">
      </div>
    </div>

    <hr />

    <div class="article-actions">
      <ArticleMeta :article="article"/>
    </div>

    <div class="row">
      <ArticleComments :slug="article.slug"/>
    </div>

  </div>

</div>
</template>

<script>
import {articleDetail} from '../../../api/article'
import MarkdownIt from 'markdown-it'
import ArticleMeta from './widget/article-mate.vue'
import ArticleComments from './widget/article-comments.vue'
export default {
  components:{ArticleMeta,ArticleComments},
  async asyncData(ctx){
    const {data} = await articleDetail(ctx.params.slug);
    data.article.body=new MarkdownIt().render(data.article.body);
    return data;
  },
  head(){
    return {
      title:`${this.article.title} - REAL-WORLD`,
      meta:[
        {
          hid:'description',	//指定meta标签的id，可以在子组件中覆盖父组件的meta
         	name:'description',
          content:`${this.article.description}`
        }
      ]
    }
  }
}
</script>

<style>

</style>