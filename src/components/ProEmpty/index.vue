<template>
  <div class="pro-empty-wrapper">
    <i class="el-icon-receiving icon" />
    <span v-if="description" class="text">{{ description }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProEmpty',
  props: {
    description: {
      type: String,
      default: 'No Data'
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-empty-wrapper {
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: #ffffff;

  .icon {
    font-size: 60px;
    color: rgba(0, 0, 0, 0.15);
  }

  .text {
    font-size: 14px;
    line-height: 1.5715;
    color: rgba(0, 0, 0, 0.25);
  }
}
</style>
