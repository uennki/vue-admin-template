<template>
  <div class="pro-form-wrapper">
    <el-form ref="form" :model="model" v-bind="proFormBind">
      <el-row :gutter="16">
        <el-col v-for="(col, index) in column" :span="col.span" :key="index">
          <pro-item :model="model" :options="col"></pro-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit">submit</el-button>
        <el-button type="primary" @click="handleReset">reset</el-button>
        <el-button type="primary" @click="handleValidate">validate</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ProFormItem from "./ProFormItem.vue";
import ProItem from "./ProItem.vue";

export default {
  name: "pro-form",
  components: {
    ProItem
  },
  props: {
    column: Array,
    model: Object,
    rules: Object,
    proFormBind: {
      type: Object,
      default: () => ({
        labelWidth: "140px",
        size: "medium"
      })
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.model);
    },
    handleReset() {
      console.log(this.$refs["form"]);
      this.$refs["form"].resetFields();
    },
    handleValidate() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          console.log("success!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
