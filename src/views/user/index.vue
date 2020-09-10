<template>
  <div class="user-wrapper">
    <div class="sider-bar">
      <ProTabMenu
        :default-active="active"
        :options="options"
        @select="handleMeneSelect"
      />
    </div>
    <div class="content">
      123
      <!-- <component v-bind:is="currentTabComponent"></component> -->
    </div>
  </div>
</template>

<script>
import ProTabMenu from '@/components/ProTabMenu'

export default {
  components: {
    ProTabMenu
  },
  data() {
    return {
      active: '0',
      options: [
        { label: '基本设置', value: '0' },
        { label: '安全设置', value: '1' },
        { label: '账号绑定', value: '2' }
      ]
    }
  },
  methods: {
    handleMeneSelect(active) {
      console.log(active)
    }
  }
}
</script>

<style lang="scss" scoped>
.user-wrapper {
  padding: 16px 0;
  display: flex;
  background-color: #ffffff;

  .sider-bar {
    flex: 0 0 224px;
    width: 224px;
  }

  .content {
    padding: 24px 32px;
    flex: 1;
  }
}
</style>
