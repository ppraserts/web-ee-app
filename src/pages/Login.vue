<template>
    <form>
        <h2>{{ $t('message.login.title') }}</h2>
        <div class="form-group">
            <label>{{ $t('message.login.username') }}</label>
            <input type="text" class="form-control">
        </div>
        <div class="form-group">
            <label>{{ $t('message.login.password') }}</label>
            <input type="password" class="form-control">
        </div>
        <button type="button" class="btn btn-primary">{{ $t('message.login.title') }}</button>
    </form>
</template>
<script>
export default {
  name: 'Login',
  components: {}
}
</script>
<style scoped>
form {
    margin-top: 15px;
    width: 300px;
}
</style>
