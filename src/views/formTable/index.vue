<template>
  <ProContainer>
    <ProChinaArea :default-value="value" />
    <br />
    <ProFormTable :column="column" :form-data="formData" />
  </ProContainer>
</template>

<script>
import ProContainer from '@/components/ProContainer'
import ProFormTable from '@/components/ProFormTable/index'
import ProChinaArea from '@/components/ProChinaArea/index'

export default {
  components: {
    ProContainer,
    ProFormTable,
    ProChinaArea
  },
  data: function() {
    return {
      value: [],
      column: [
        {
          prop: 'id',
          label: 'id',
          width: 300
        },
        {
          prop: 'author',
          label: 'author'
        },
        {
          prop: 'status',
          label: 'status'
        },
        {
          prop: 'display_time',
          label: 'display_time',
          rules: { required: true, message: '必填项' },
          render: (h, scoped) => {
            return <el-input v-model={scoped.display_time}></el-input>
          }
        }
      ],
      formData: [
        {
          id: 1,
          code: 'DCK20200911345',
          status: 5000,
          author: '李白',
          payTime: '2020-09-11 17:39',
          display_time: '',
          note: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
