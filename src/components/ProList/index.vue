<template>
  <div class="pro-list-wrapper">
    <h3 v-if="title" class="list-title">{{ title }}</h3>
    <ul class="list-content">
      <slot name="default" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProList',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-list-wrapper {
  overflow: hidden;
  background-color: #ffffff;

  .list-title {
    margin-bottom: 32px;
  }

  .list-content {
    li:last-of-type {
      border-bottom: none;
    }
  }
}
</style>
