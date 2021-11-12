<template>
  <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form @submit.prevent="onSaveProfile">
          <fieldset>
              <fieldset class="form-group">
                <input required v-model="form.image" class="form-control" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="form.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="form.bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input required v-model="form.email" class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input required v-model="form.password" class="form-control form-control-lg" type="password" placeholder="Password">
              </fieldset>
              <button ref="submitBtn" class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import {getProfile,updateUser} from '@/api/user'
import ActionLocker from '@/component/ActionLocker'
export default {
  middleware:"auth",
  data(){
    return {
      form:{
        email:"",
        bio:"",
        image:"",
        username:"",
        password:""
      }
    }
  },
  computed:{
    ...mapState(['user'])
  },
  async mounted(){
    const {data} = await getProfile();
    this.form=data.user;
  },
  methods:{
    async onSaveProfile(){
      let lock = new ActionLocker(this.$refs.submitBtn);
      try{
        const {data} = await updateUser(this.form);
        console.log(data);
        this.$message("更新成功");
      }finally{
        lock.unlock();
      }
    }
  }
}
</script>

<style>

</style>