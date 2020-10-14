<template>
  <div class="pro-form-wrapper">
    <el-form
      ref="form"
      :model="model"
      :rules="rules"
      v-bind="proFormBindComputed"
    >
      <el-row :gutter="16">
        <el-col
          v-for="(col, index) in columnComputed"
          :key="index"
          :span="col.span || span"
        >
          <ProFormItem :model="model" :options="col" />
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import ProFormItem from "./ProFormItem";

export default {
  name: "ProForm",
  components: {
    ProFormItem
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
      default: 24
    },
    proFormBind: {
      type: Object,
      default: () => {}
    },
  },
  data: function() {
    return {
      defaultFormConfig: {
        labelWidth: "80px",
        size: "small",
        inline: false
      }
    };
  },
  computed: {
    proFormBindComputed: function() {
      return { ...this.defaultFormConfig, ...this.proFormBind };
    }
  },
  methods: {
    handleResetForm() {
      this.$refs["form"].resetFields();
    },
    handleValidate() {
      let pass;
      this.$refs["form"].validate(valid => {
        if (valid) {
          pass = true;
          console.log("success!");
          return true;
        } else {
          pass = false;
          console.log("error submit!!");
          return false;
        }
      });
      return pass;
    }
  }
};
</script>

<style lang="scss" scoped>
.pro-form-wrapper {
  background-color: #ffffff;
}
</style>
