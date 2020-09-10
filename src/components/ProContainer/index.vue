<template>
  <div class="pro-container-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ProContainer'
}
</script>

<style lang="scss" scoped>
.pro-container-wrapper {
  margin-bottom: 24px;
  padding: 24px;
  background-color: #ffffff;
}
</style>
