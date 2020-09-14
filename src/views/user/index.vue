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
      <component :is="currentTabMenuComponent" />
    </div>
  </div>
</template>

<script>
import ProTabMenu from '@/components/ProTabMenu'
import Account from './components/Account'
import Safe from './components/Safe'
import Setting from './components/Setting'

export default {
  components: {
    ProTabMenu,
    Setting,
    Safe,
    Account
  },
  data() {
    return {
      active: '0',
      options: [
        { label: '基本设置', value: '0' },
        { label: '安全设置', value: '1' },
        {
          label: '账号绑定',
          value: '2',
          children: [
            { label: '微信', value: '2-1' },
            { label: 'QQ', value: '2-2' }
          ]
        }
      ]
    }
  },
  computed: {
    currentTabMenuComponent: function() {
      switch (this.active) {
        case '0':
          return Setting
        case '1':
          return Safe
        case '2':
          return Account
        default:
          return null
      }
    }
  },
  methods: {
    handleMeneSelect(active) {
      this.active = active
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
