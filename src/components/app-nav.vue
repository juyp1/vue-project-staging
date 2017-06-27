<template>
  <div class="app-nav">
    <div class="nav">
      <div class="link" @click="jump('/index')">
        <text class="title">Home</text>
      </div>
      <div class="link" @click="jump('/login')">
        <text>Login</text>
      </div>
     <router-link :to="{name:'fabu'}" tag="div">
       <text>fabu</text>
     </router-link>
    </div>
  </div>
</template>