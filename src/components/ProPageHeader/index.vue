<template>
  <div class="pro-page-header">
    <el-button
      class="icon-back"
      type="text"
      icon="el-icon-arrow-left"
      style="color: #444444"
      @click="handleBack"
    >
      返回
    </el-button>
    <span class="title">{{ title }}</span>
    <span class="subtitle">{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleBack() {
      window.history.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-page-header {
  margin-bottom: 24px;

  .icon-back {
    margin-right: 24px;
  }

  .title {
    margin-right: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 20px;
    overflow: hidden;
  }

  .subtitle {
    margin-right: 12px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
