<template>
  <div :style="cardStyle">
    <el-card class="pro-card" v-bind="proCardBind">
      <!-- Card 标题栏 -->
      <div v-if="showHeader" slot="header" class="header">
        <div>{{ title }}</div>
        <div><slot name="extra" /></div>
      </div>

      <!-- Card 主体 -->
      <slot name="default">
        <ProEmpty />
      </slot>
    </el-card>
  </div>
</template>

<script>
import ProEmpty from '../ProEmpty'

export default {
  name: 'ProCard',
  components: {
    ProEmpty
  },
  props: {
    showHeader: {
      type: Boolean,
      default: true
    },
    cardStyle: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    proCardBind: {
      type: Object,
      default: () => ({
        shadow: 'never'
      })
    }
  }
}
</script>

<style lang="scss">
.pro-card {
  .el-card__header {
    padding: 14px 24px !important;
  }
}
</style>

<style lang="scss" scoped>
.pro-card {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
