<template>
  <el-scrollbar class="pro-form-table-wrapper">
    <ProFormTableHeader :column="column" />
    <el-form ref="form" size="mini" :model="{ formData }">
      <ProFormTableColumn :column="column" :form-data="formData" />
      <ProEmpty v-if="!formData.length" style="width: 100%" />
    </el-form>
  </el-scrollbar>
</template>

<script>
import ProFormTableHeader from "./ProFormTableHeader";
import ProFormTableColumn from "./ProFormTableColumn";
import ProEmpty from "../ProEmpty";

export default {
  name: "ProFormTable",
  components: {
    ProFormTableColumn,
    ProFormTableHeader,
    ProEmpty
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
      let result;
      this.$refs["form"].validate(valid => {
        if (valid) {
          result = true;
        } else {
          result = false;
          return false;
        }
      });
      return result;
    },
    resetFields() {
      this.$refs["form"].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.pro-form-table-wrapper {
  height: 100%;
  // overflow: auto;
}
::v-deep .pro-form-table-tbody .el-form-item__error {
  display: block;
}
</style>
