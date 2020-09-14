<template>
  <el-menu
    class="pro-tab-menu"
    mode="vertical"
    :default-active="defaultActive"
    @select="handleMeneSelect"
  >
    <template v-for="item in options">
      <!-- 有子菜单 -->
      <el-submenu v-if="item.children" :key="item.value" :index="item.value">
        <template slot="title">
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item
          v-for="child in item.children"
          :key="child.value"
          :index="child.value"
        >
          {{ child.label }}
        </el-menu-item>
      </el-submenu>

      <!-- 无子菜单 -->
      <el-menu-item v-else :key="item.value" :index="item.value">
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
    </template>
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
.pro-tab-menu {
  height: 100%;

  .el-menu-item {
    display: flex;
    align-items: center;
    margin: 6px 0;
    height: 50px;
    line-height: 50px;
  }

  .el-submenu__title:hover {
    background-color: rgb(230, 247, 255);
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
