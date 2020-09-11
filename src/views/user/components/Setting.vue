<template>
  <div>
    <ProList title="个人信息">
      <ProListItem>姓名: 李白</ProListItem>
      <ProListItem>年龄: 28</ProListItem>
      <ProListItem>地址: XXxxxxxx</ProListItem>
    </ProList>
  </div>
</template>

<script>
import ProList from '@/components/ProList'
import ProListItem from '@/components/ProList/ProListItem'

export default {
  components: {
    ProList,
    ProListItem
  }
}
</script>

<style lang="scss" scoped></style>
