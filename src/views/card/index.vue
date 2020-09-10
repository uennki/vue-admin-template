<template>
  <ProContainer>
    <el-row :gutter="24">
      <el-col :span="8">
        <ProCard title="Card title">
          <template v-slot:extra>
            <el-button type="text" size="mini">Click Me</el-button>
          </template>
        </ProCard>
      </el-col>

      <el-col :span="8">
        <ProCard title="Card title">
          <template v-slot:extra>
            <el-button type="text" size="mini">Click Me</el-button>
          </template>
        </ProCard>
      </el-col>
    </el-row>
  </ProContainer>
</template>

<script>
import ProContainer from '@/components/ProContainer'
import ProCard from '@/components/ProCard'

export default {
  components: {
    ProContainer,
    ProCard
  }
}
</script>

<style lang="scss" scoped></style>
