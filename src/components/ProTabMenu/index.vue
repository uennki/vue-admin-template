<template>
  <el-menu
    mode="vertical"
    :default-active="defaultActive"
    @select="handleMeneSelect"
  >
    <el-menu-item v-for="item in options" :key="item.value" :index="item.value">
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'ProTabMenu',
  props: {
    defaultActive: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleMeneSelect(value) {
      this.$emit('select', value)
    }
  }
}
</script>

<style lang="scss">
.user-wrapper {
  .el-menu-item {
    display: flex;
    align-items: center;
    margin: 6px 0;
    height: 40px;
    line-height: 40px;
  }
  .el-menu-item:hover {
    background-color: #fff;
    color: #409eff;
  }

  .el-menu-item.is-active {
    position: relative;
    font-weight: 700;
    background-color: rgb(230, 247, 255);

    &::after {
      position: absolute;
      content: ' ';
      top: 0;
      bottom: 0;
      right: -1px;
      width: 2px;
      background-color: #1890ff;
      z-index: 999;
    }
  }
}
</style>
