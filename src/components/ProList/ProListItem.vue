<template>
  <li class="list-item">
    <slot name="default" />
  </li>
</template>

<script>
export default {
  name: 'ProListItem'
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  min-height: 60px;
  border-bottom: 1px solid #e8e8e8;
}
</style>
