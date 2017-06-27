<template>
  <div>
    <app-nav></app-nav>
    <text class="btn" @click="toast">toast</text>
  </div>
</template>

<style scoped>
  .btn{
    font-size: 60px;
    border: solid 1px #cccccc;
    background-color: blue;
    text-align: center;
    margin-bottom: 5px;
    padding: 15px;
  }
</style>

<script>
  import AppNav from '../components/app-nav.vue'
  var modal = weex.requireModule('modal') 

  export default {
    components: { AppNav},
    methods: {
      toast () {
        modal.toast({
          message: 'This is a toast',
          duration: 0.3
        })
      },
    }
  }
</script>