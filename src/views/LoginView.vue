<template>
  <div>
    <app-nav></app-nav>
    <div v-for="(v, i) in list" class="row">
      <div v-for="(text, k) in v" class="item">
        <div>
          <text>{{text}}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.item {
  flex: 1;
  justify-content: center;
  align-items: center;
  border-width: 1;
}

.row {
  flex-direction: row;
  height: 80px;
}
</style>

<script>
import AppNav from '../components/app-nav.vue'

module.exports = {
  components: { AppNav },
  data: function () {
    return {
      list: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I']
      ]
    }
  }
}
</script>