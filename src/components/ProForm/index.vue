<template>
  <div class="pro-form-wrapper">
    <el-form ref="form" :model="model" v-bind="proFormBindComputed">
      <el-row :gutter="16">
        <el-col
          v-for="(options, index) in column"
          :key="index"
          :span="options.span || 24"
        >
          <ProFormItem :model="model" :options="options" />
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
    column: {
      type: Array,
      default: () => []
    },
    model: {
      type: Object,
      default: () => {}
    },
    proFormBind: {
      type: Object,
      default: () => {}
    }
  },
  data: function() {
    return {
      defaultFormConfig: {
        labelWidth: '80px',
        size: 'small',
        inline: false
      }
    }
  },
  computed: {
    proFormBindComputed: function() {
      return { ...this.defaultFormConfig, ...this.proFormBind }
    }
  },
  methods: {
    reset() {
      this.$refs['form'].resetFields()
    },
    validate() {
      let pass
      this.$refs['form'].validate(valid => {
        if (valid) {
          pass = true
          return true
        } else {
          pass = false
          return false
        }
      })
      return pass
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-form-wrapper {
  background-color: #ffffff;
}
</style>
