<template>
  <div class="pro-divider" :style="borderStyle"></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "solid"
    }
  },
  computed: {
    borderStyle: function() {
      return {
        borderBottom: `1px ${this.type} #dfe6ec`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.pro-divider {
  margin: 24px 0;
  border-bottom: 1px solid #dfe6ec;
}
</style>
