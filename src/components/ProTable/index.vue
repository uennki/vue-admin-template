<template>
  <div ref="table" class="pro-table-wrapper">
    <el-row
      v-if="title || slotExtra"
      class="pro-table-bar"
      :style="proTableBarStyleComputed"
    >
      <!-- 标题栏 -->
      <el-col v-if="title" :span="12" class="title">
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
      </el-col>

      <!-- 工具区 -->
      <el-col class="extra" :span="title ? 12 : 24">
        <slot name="extra" />
      </el-col>
    </el-row>

    <!-- 表格主体 -->
    <el-table :data="dataSource" v-bind="proTableBind" v-on="proTableOn">
      <template v-for="(row, index) in column">
        <ProTableColumn :key="index" :row="row" />
      </template>
    </el-table>

    <!-- 表格分页 -->
    <el-pagination
      v-if="proPagination"
      class="el-pagination"
      v-bind="proPaginationBindComputed"
      v-on="proPaginationOn"
    />
  </div>
</template>
<script>
import ProTableColumn from './ProTableColumn'
export default {
  name: 'ProTable',
  components: {
    ProTableColumn
  },
  props: {
    proTableBarStyle: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: '高级表格'
    },
    /* 表格项 */
    column: {
      type: Array,
      default: () => []
    },
    /* 表格数据 */
    dataSource: {
      type: Array,
      default: () => []
    },
    /* 绑定表格属性 */
    proTableBind: {
      type: Object,
      default: () => ({})
    },
    /* 绑定表格事件 */
    proTableOn: {
      type: Object,
      default: () => {}
    },
    /* 分页是否显示 */
    proPagination: {
      type: Boolean,
      default: true
    },
    /* 绑定分页属性 */
    proPaginationBind: {
      type: Object,
      default: () => {}
    },
    /* 绑定分页事件 */
    proPaginationOn: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    proTableBarStyleComputed: function() {
      const defaultStyle = {
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff'
      }

      return { ...defaultStyle, ...this.proTableBarStyle }
    },
    proPaginationBindComputed: function() {
      const defaultSetting = {
        background: true,
        layout: 'total, prev, pager, next, jumper',
        total: 100
      }
      return { ...defaultSetting, ...this.proPaginationBind }
    },
    slotExtra: function() {
      const slot = this.$slots.extra
      return slot
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-table-wrapper {
  overflow: auto;
  background-color: #ffffff;

  .pro-table-bar {
    .title {
      font-weight: 500;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      opacity: 0.85;
    }

    .extra {
      text-align: right;
    }
  }

  .el-pagination {
    padding: 18px 24px;
    text-align: right;
  }
}
</style>
