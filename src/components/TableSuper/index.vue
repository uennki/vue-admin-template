<template>
  <div class="table-super-wrapper">
    <div v-if="title" class="table-header">
      {{ title }}
    </div>
    <div class="table-content">
      <template v-for="(item, index) in dataSource">
        <div :key="index" class="table-row">
          <div class="checkbox">
            <el-checkbox
              v-model="item.checkbox"
              @change="val => handleCheckboxChange(val, item)"
            />
          </div>
          <div>
            <div>
              <span class="title">Order Code : </span>
              <span class="text">{{ item.code }}</span>
            </div>
            <div>
              <span class="title">Order Amount : </span>
              <span class="text">{{ item.amount }}</span>
            </div>
            <div>
              <span class="title">Recipient : </span>
              <span class="text">{{ item.user }}</span>
            </div>
          </div>
          <div>
            <div>
              <span class="title">Order Time : </span>
              <span class="text">{{ item.payTime }}</span>
            </div>
            <div>
              <span class="title">Delivery Time : </span>
              <span class="text">{{ item.deliverTime }}</span>
            </div>
            <div>
              <span class="title">Note : </span>
              <span class="text">{{ item.note }}</span>
            </div>
          </div>

          <!-- 按钮组 -->
          <div>
            <slot name="extra" v-bind="item" />
          </div>
        </div>
      </template>
    </div>

    <div class="table-pagination">
      <el-pagination v-bind="proPaginationBind" v-on="proPaginationOn" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableSuper',
  props: {
    title: {
      type: String,
      default: 'Table Title'
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    /* 绑定分页属性 */
    proPaginationBind: {
      type: Object,
      default: () => ({
        background: true,
        layout: 'total, prev, pager, next, jumper',
        total: 100
      })
    },
    /* 绑定分页事件 */
    proPaginationOn: {
      type: Object,
      default: () => ({})
    }
  },
  data: function() {
    return {
      select: []
    }
  },
  methods: {
    handleCheckboxChange(value, scoped) {
      if (value) {
        this.select.push(scoped)
      } else {
        const select = this.select.filter(item => item.id !== scoped.id)
        this.select = select
      }
      this.$emit('select-change', this.select)
    }
  }
}
</script>

<style lang="scss" scoped>
.table-super-wrapper {
  background-color: #ffffff;

  .table-header {
    padding: 0 24px;
    height: 64px;
    line-height: 64px;
    border-bottom: 1px solid #ebeef5;
  }

  .table-content {
    .table-row {
      height: 110px;
      display: grid;
      grid-template-columns: 60px 1fr 1fr 160px;
      align-items: center;

      font-size: 13px;
      line-height: 2;
      transition: all 0.3s;
      border-bottom: 1px solid #ebeef5;
      background-color: #ffffff;

      gap: 16px;

      &:hover {
        background-color: #f5f7fa;
      }

      .title {
        margin-right: 7px;
      }

      .checkbox {
        justify-self: center;
      }
    }
  }

  .table-pagination {
    padding: 18px 24px;
    text-align: right;
    background-color: #ffffff;
  }
}
</style>
