<template>
  <div class="pro-form-table-thead">
    <div class="tr" :style="grideStyle">
      <template v-for="(item, index) in column">
        <div
          :key="index"
          :class="['th', item.rules && 'required']"
          :style="{ width: `${item.width}px` }"
        >
          {{ item.label }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProFormTableHeader',
  props: {
    column: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  computed: {
    grideStyle: function() {
      const len = this.column.length
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${len}, 1fr)`,
        alignItems: 'center'
        // gridColumnGap: "14px"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-form-table-thead {
  font-size: 13px;
  font-weight: 500 !important;
  color: rgba(0, 0, 0, 0.85);

  .tr {
    .th {
      padding: 0 24px;
      height: 40px;
      line-height: 40px;
      background-color: #fafafa;
      border-bottom: 1px solid #ebeef5;
    }

    .required {
      position: relative;

      &::before {
        content: '*';
        color: #f56c6c;
        margin-right: 4px;
      }
    }
  }
}
</style>
