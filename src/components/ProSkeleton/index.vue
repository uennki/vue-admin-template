<template>
  <div class="pro-skeleton-wrapper">
    <template v-if="loading">
      <h3 v-if="title" class="skeleton-title" />
      <ul class="skeleton-content">
        <li v-for="item in rows" :key="item" class="skeleton-row" />
      </ul>
    </template>

    <template v-else>
      <slot name="default" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'ProSkeleton',
  props: {
    title: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: true
    },
    rows: {
      type: Number,
      default: 3
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes skeleton {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.animation-skeleton {
  height: 16px;
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  animation: skeleton 1.4s ease infinite;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.skeleton-title {
  margin-bottom: 24px;
  width: 38%;
  @extend .animation-skeleton;
}

.skeleton-content {
  .skeleton-row {
    margin-top: 16px;
    width: 100%;
    @extend .animation-skeleton;

    &:last-of-type {
      width: 61%;
    }
  }
}
</style>
