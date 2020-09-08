<template>
  <div class="pro-table-wrapper">
    <!-- 表格 -->
    <el-table
      :data="dataSource"
      v-bind="proTableBind"
      v-on="proTableOn"
      style="width: 100%"
    >
      <template v-for="(col, index) in column">
        <pro-table-column :options="col" :key="index"></pro-table-column>
      </template>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      class="el-pagination"
      v-bind="proPaginationBind"
      v-on="proPaginationOn"
    />
  </div>
</template>
<script>
import ProTableColumn from "./ProTableColumn.vue";
export default {
  name: "pro-table",
  components: {
    ProTableColumn
  },
  props: {
    /* 表格项 */
    column: Array,
    /* 表格数据 */
    dataSource: Array,
    /* 绑定表格属性 */
    proTableBind: {
      type: Object,
      default: () => ({})
    },
    /* 绑定表格事件 */
    proTableOn: {
      type: Object,
      default: () => ({})
    },
    /* 绑定分页属性 */
    proPaginationBind: {
      type: Object,
      default: () => ({
        background: true,
        layout: "prev, pager, next",
        total: 1000
      })
    },
    /* 绑定分页事件 */
    proPaginationOn: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
<style lang="scss">
.pro-table-wrapper {
  .el-table-column--selection {
    /* 覆写ELEMENT　UI表格多选项居中 */
    text-align: center !important;
  }

  .el-table::before {
    /* 覆写ELEMENT UI表格最后一行底边样式 */
    height: 0px;
  }

  .el-table th {
    color: rgba(0, 0, 0, 0.85) !important;
    font-weight: 500 !important;
    background-color: #fafafa !important;
  }
}
</style>
<style lang="scss" scoped>
.pro-table-wrapper {
  background-color: #ffffff;

  .el-pagination {
    padding: 17px 24px;
    text-align: right;
  }
}
</style>
