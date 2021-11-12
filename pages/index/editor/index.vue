<template>
  <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form @submit.prevent="onSubmitArticle">
          <fieldset>
            <fieldset class="form-group">
                <input required v-model="form.title" type="text" class="form-control form-control-lg" placeholder="Article Title">
            </fieldset>
            <fieldset class="form-group">
                <input required v-model="form.description" type="text" class="form-control" placeholder="What's this article about?">
            </fieldset>
            <fieldset class="form-group">
                <textarea required v-model="form.body" class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input v-model="tagstr" type="text" class="form-control" placeholder="Enter tags and split by ,"><div class="tag-list"></div>
            </fieldset>
            <button ref="submitBtn" class="btn btn-lg pull-xs-right btn-primary" type="submit">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import {addArticle} from '@/api/article'
import ActionLocker from '@/component/ActionLocker'
export default {
  middleware:['auth'],
  data(){
    return {
      form:{
        title:"",
        description:"",
        body:"",
        tagList:[]
      },
      tagstr:""
    }
  },
  methods:{
    async onSubmitArticle(){
      let lock = new ActionLocker(this.$refs.submitBtn);
      try{
        this.form.tagList=this.tagstr.split(',');
        const {data} = await addArticle(this.form);
        this.$message('发布成功');
        this.$router.push('/');
      }finally{
        lock.unlock();
      }
    }
  }
}
</script>

<style>

</style>