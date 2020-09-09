<template>
  <div class="pro-form-wrapper">
    <el-form ref="form" :model="model" :rules="rules" v-bind="proFormBind">
      <el-row :gutter="16">
        <el-col
          v-for="(col, index) in column"
          :key="index"
          :span="col.span || span"
        >
          <pro-item :model="model" :options="col" />
        </el-col>

        <el-col :span="span">
          <el-form-item>
            <el-button
              type="primary"
              icon="el-icon-search"
              @click="handleSubmit"
            >
              Search
            </el-button>
            <el-button
              icon="el-icon-refresh"
              type="primary"
              @click="handleReset"
            >
              Reset
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import ProItem from './ProItem.vue'

export default {
  name: 'ProForm',
  components: {
    ProItem
  },
  props: {
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
      default: 8
    },
    proFormBind: {
      type: Object,
      default: () => ({
        labelWidth: '80px',
        size: 'small'
      })
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.model)
    },
    handleReset() {
      console.log(this.$refs['form'])
      this.$refs['form'].resetFields()
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

<style lang="scss">
.pro-form-wrapper {
  margin-bottom: 24px;
  padding: 28px 24px 9px 24px;
  background-color: #ffffff;

  .el-form-item__label {
    color: rgba(0, 0, 0, 0.85) !important;
    font-weight: 500 !important;
  }
}
</style>
