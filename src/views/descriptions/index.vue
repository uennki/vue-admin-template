<template>
  <ProContainer>
    <ProDescriptions title="个人信息">
      <ProDescriptionsItem label="姓名">李白</ProDescriptionsItem>
      <ProDescriptionsItem label="生卒">
        长安元年（701年）- 宝应元年（762年）
      </ProDescriptionsItem>
      <ProDescriptionsItem label="祖籍">陇西成纪</ProDescriptionsItem>
      <ProDescriptionsItem label="联系方式">158xxxxxxxx</ProDescriptionsItem>
      <ProDescriptionsItem label="备注" :span="16">
        暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无
      </ProDescriptionsItem>
    </ProDescriptions>
  </ProContainer>
</template>

<script>
import ProContainer from '@/components/ProContainer'
import ProDescriptions from '@/components/ProDescriptions'
import ProDescriptionsItem from '@/components/ProDescriptions/ProDescriptionsItem'

export default {
  components: {
    ProContainer,
    ProDescriptions,
    ProDescriptionsItem
  }
}
</script>

<style lang="scss" scoped></style>
