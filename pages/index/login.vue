<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link v-if="isLogin" to="/register"
              >Need an account?</nuxt-link
            >
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(msgs, field) in err">
              <template v-if="Array.isArray(msgs)">
                <li v-for="msg in msgs" v-bind:key="msg">
                {{ field }} {{ msg }}
              </li>
              </template>
              <template v-else>
                {{ field }} {{ msgs }}
              </template>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input
                v-model="user.username"
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                required
                v-model="user.email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                required
                v-model="user.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "../../api/user";
const Cookie = process.client? require('js-cookie'):undefined;
export default {
  middleware:'logined',
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      err: {},
    };
  },
  computed: {
    isLogin() {
      return this.$route.path === "/login";
    },
  },
  methods: {
    async onSubmit() {
      try {
        let fun = this.isLogin?login:register;
        const { data } = await fun({ user: this.user });
        this.$store.commit('setUser',data.user);
        Cookie.set('user',JSON.stringify(data.user));
        console.log(data);
        this.$router.push("/");
      } catch (error) {
        this.err = error.response.data.errors;
      }
    },
  },
};
</script>

<style>
</style>