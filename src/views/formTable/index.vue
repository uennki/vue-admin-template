<template>
  <ProContainer>
    <ProFormTable :column="column" :form-data="formData" />
  </ProContainer>
</template>

<script>
import ProContainer from '@/components/ProContainer'
import ProFormTable from '@/components/ProFormTable/index'
export default {
  components: {
    ProContainer,
    ProFormTable
  },
  data: function() {
    return {
      column: [
        {
          prop: 'id',
          label: 'id'
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
          display_time: '2020-09-11 21:20',
          note: ''
        },
        {
          id: 1,
          code: 'DCK20200911345',
          status: 5000,
          author: '李白',
          payTime: '2020-09-11 17:39',
          display_time: '2020-09-11 21:20',
          note: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
