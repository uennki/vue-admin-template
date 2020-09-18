<template>
  <div ref="table" class="pro-table-wrapper">
    <!-- 标题栏 -->
    <el-row
      v-if="headerTitle || toolbar || slotExtra"
      class="pro-table-bar"
      :style="proTableBarStyleComputed"
    >
      <el-col :span="12">
        <span v-if="headerTitle" class="title">{{ headerTitle }}</span>
      </el-col>

      <!-- 工具区 -->
      <el-col :span="headerTitle ? 12 : 24">
        <div class="extra">
          <div :style="{ marginRight: toolbar ? '14px' : '' }">
            <slot name="extra" />
          </div>

          <div v-if="toolbar" class="toolbar">
            <el-tooltip
              class="icon"
              effect="dark"
              content="刷新"
              placement="top"
            >
              <i class="el-icon-refresh" @click="handleRefresh" />
            </el-tooltip>
            <el-tooltip
              class="icon"
              effect="dark"
              content="全屏"
              placement="top"
            >
              <i class="el-icon-full-screen" @click="handleFullScreen" />
            </el-tooltip>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 表格主体 -->
    <el-table
      :data="dataSource"
      style="width: 100%"
      v-bind="proTableBind"
      v-on="proTableOn"
    >
      <template v-for="(row, index) in column">
        <ProTableColumn :key="index" :row="row" />
      </template>
    </el-table>

    <!-- 表格分页 -->
    <el-pagination
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
    headerTitle: {
      type: String,
      default: '高级表格'
    },
    toolbar: {
      type: Boolean,
      default: false
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
      default: () => {}
    },
    /* 绑定表格事件 */
    proTableOn: {
      type: Object,
      default: () => {}
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
  },
  mounted() {
    console.log(this.$slots.extra)
  },
  methods: {
    /* 表格刷新 */
    handleRefresh() {
      console.log('refresh')
      this.$emit('refresh')
    },
    /* 表格全屏 */
    handleFullScreen() {
      const tableElement = this.$refs['table']
      if (tableElement.requestFullscreen) {
        tableElement.requestFullscreen()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-table-wrapper {
  overflow: auto;
  background-color: #ffffff;

  .pro-table-bar {
    // padding: 0 24px;
    // height: 64px;
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    // background-color: #ffffff;

    .title {
      font-weight: 500;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      opacity: 0.85;
    }

    .extra {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      overflow: hidden;

      .icon {
        margin-left: 14px;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }

  .el-pagination {
    padding: 18px 24px;
    text-align: right;
  }
}
</style>
