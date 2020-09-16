<template>
  <div>
    <ProFormTableHeader :column="column" />
    <el-form ref="form" size="mini" :model="{ formData }">
      <ProFormTableColumn :column="column" :form-data="formData" />
    </el-form>
  </div>
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
  }
}
</script>

<style lang="scss" scoped></style>
