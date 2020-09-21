<template>
  <el-scrollbar class="pro-form-table-wrapper">
    <ProFormTableHeader :column="column" />
    <el-form ref="form" size="mini" :model="{ formData }">
      <ProFormTableColumn :column="column" :form-data="formData" />
    </el-form>
  </el-scrollbar>
</template>

<script>
import ProFormTableHeader from './ProFormTableHeader'
import ProFormTableColumn from './ProFormTableColumn'

export default {
  name: 'ProFormTable',
  components: {
    ProFormTableColumn,
    ProFormTableHeader
  },
  props: {
    column: {
      type: Array,
      default: () => []
    },
    formData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    validate() {
      let result
      this.$refs['form'].validate(valid => {
        if (valid) {
          result = true
        } else {
          result = false
          return false
        }
      })
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-form-table-wrapper {
  height: 100%;
  // overflow: auto;
}
</style>
