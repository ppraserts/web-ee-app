<template>
    <form>
        <h2>{{ $t('message.login.title') }}</h2>
        <div class="form-group">
            <label>{{ $t('message.login.username') }}</label>
            <input type="text" class="form-control" v-model="username">
        </div>
        <div class="form-group">
            <label>{{ $t('message.login.password') }}</label>
            <input type="password" class="form-control" v-model="password">
        </div>
        <div class="alert alert-danger" role="alert" v-if="isHasError">
            {{ msg }}
        </div>
        <button type="button" v-on:click="login" class="btn btn-primary">{{ $t('message.login.title') }}</button>
    </form>
</template>
<script>
import axios from 'axios'
import config from '../config'
export default {
  name: 'Login',
  components: {},
  data: () => {
    return { 
        username : '',
        password : '',
        isHasError: false,
        msg: ''
    }
  },
  methods: {
    login() {     
        let router = this.$router
        let self = this
        self.$store.dispatch('applications/togglePreloader', true)


        let loginRequest =  axios.get(config.api.path + config.api.auth)

        if (!config.isMock) {
            loginRequest = axios.post(config.api.path + config.api.auth, {
                username: this.username,
                password: this.password
            })
        }

        loginRequest.then(function (response) {
            let token = response.data.token
            localStorage.setItem('jwt', token)
            self.isHasError = false
            self.$store.dispatch('applications/initBaseData')
            self.$store.dispatch('applications/togglePreloader',false)
            let redirect = self.$route.query.redirect !== undefined ? self.$route.query.redirect : '/import'
            router.push(redirect)
        })
        .catch(function (error) {
            self.isHasError = true
            self.msg = error.response.data.msg
            self.$store.dispatch('applications/togglePreloader', false)
        })
        
    }
  }
}
</script>
<style scoped>
form {
    margin-top: 15px;
    width: 300px;
}
</style>
