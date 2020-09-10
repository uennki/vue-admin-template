<template>
  <div class="pro-descriptions-wrapper">
    <div class="descriptions-title">{{ title }}</div>
    <el-row class="descriptions-content" :gutter="24">
      <slot />
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ProDescriptions',
  props: {
    title: {
      type: String,
      default: ''
    },
    colon: {
      type: Number,
      default: 8
    }
  },
  provide() {
    return {
      colon: this.colon
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-descriptions-wrapper {
  // padding: 32px 24px 32px 24px;
  padding-top: 4px;
  background-color: #ffffff;
  overflow: hidden;

  .descriptions-title {
    font-size: 18px;
    letter-spacing: 1px;
    padding-bottom: 16px;
  }

  .descriptions-content {
    background-color: #ffffff;
  }
}
</style>
