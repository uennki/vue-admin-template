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
      <ProList title="个人信息">
        <ProListItem>123</ProListItem>
        <ProListItem>123</ProListItem>
        <ProListItem>123</ProListItem>
      </ProList>
      <!-- <component v-bind:is="currentTabComponent"></component> -->
    </div>
  </div>
</template>

<script>
import ProTabMenu from '@/components/ProTabMenu'
import ProList from '@/components/ProList'
import ProListItem from '@/components/ProList/ProListItem'

export default {
  components: {
    ProTabMenu,
    ProList,
    ProListItem
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
    padding: 0 32px;
    flex: 1;
  }
}
</style>
