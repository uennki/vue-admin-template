<template>
  <el-col class="descriptions-item" :span="span || colon">
    <span class="label">{{ label }} :</span>
    <span>
      <slot>{{ content }}</slot>
    </span>
  </el-col>
</template>

<script>
export default {
  name: 'ProDescriptionsItem',
  inject: ['colon'],
  props: {
    label: {
      type: [String, Number],
      default: ''
    },
    content: {
      type: [String, Number],
      default: ''
    },
    span: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.descriptions-item {
  line-height: 38px;
  background-color: #ffffff;

  /* 单行省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  .label {
    margin-right: 9px;
  }
}
</style>
