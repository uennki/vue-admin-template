<template>
  <div class="pro-form-wrapper">
    <el-form ref="form" :model="model" :rules="rules" v-bind="proFormBind">
      <el-row :gutter="16">
        <el-col
          v-for="(col, index) in columnComputed"
          :key="index"
          :span="col.span || span"
        >
          <ProFormItem :model="model" :options="col" />
        </el-col>

        <el-col
          v-if="showButtonGroup"
          :span="buttonGroupSpan || span"
          :style="{ textAlign: buttonGroupAlign }"
        >
          <el-form-item>
            <el-button @click="handleReset">
              重置
            </el-button>
            <el-button type="primary" @click="handleSubmit">
              查询
            </el-button>
            <el-button
              v-if="showCollapse"
              :icon="iconComputed"
              type="text"
              @click="handleCollapse"
            >
              {{ collapseText }}
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import ProFormItem from './ProFormItem'

export default {
  name: 'ProForm',
  components: {
    ProFormItem
  },
  props: {
    defaultCollapse: {
      type: Boolean,
      default: false
    },
    column: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => {}
    },
    model: {
      type: Object,
      default: () => {}
    },
    span: {
      type: Number,
      default: 6
    },
    buttonGroupSpan: {
      type: Number,
      default: 0
    },
    buttonGroupAlign: {
      type: String,
      default: 'right'
    },
    showButtonGroup: {
      type: Boolean,
      default: true
    },
    proFormBind: {
      type: Object,
      default: () => ({
        labelWidth: '80px',
        size: 'small'
      })
    }
  },
  data: function() {
    return {
      collapse: this.defaultCollapse,
      arrowUp: 'el-icon-arrow-up',
      arrowDown: 'el-icon-arrow-down',
      length: 4
    }
  },
  computed: {
    collapseText: function() {
      if (this.collapse) {
        return '收起'
      } else {
        return '展开'
      }
    },
    showCollapse: function() {
      return this.column.length > this.length
    },
    iconComputed: function() {
      if (this.collapse) {
        return this.arrowUp
      } else {
        return this.arrowDown
      }
    },
    columnComputed: function() {
      if (this.collapse) {
        return this.column
      } else {
        return this.column.slice(0, this.length - 1)
      }
    }
  },
  methods: {
    handleCollapse() {
      this.collapse = !this.collapse
    },
    handleSubmit() {
      this.$emit('submit')
    },
    handleReset() {
      this.$refs['form'].resetFields()
      this.$emit('reset')
    },
    handleValidate() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          console.log('success!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-form-wrapper {
  // margin-bottom: 14px;
  padding: 28px 24px 10px 24px;
  background-color: #ffffff;
}
</style>
