<template>
  <div class="app-container">
    <ProTable
      v-loading="loading"
      :toolbar="true"
      :column="column"
      :data-source="dataSource"
      :pro-table-on="proTableOn"
      :pro-pagination-on="proPaginationOn"
    >
      <template v-slot:extra>
        <el-button type="primary" size="small" icon="el-icon-plus">
          新建
        </el-button>
      </template>
    </ProTable>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import ProTable from '@/components/ProTable'

export default {
  components: { ProTable },
  data() {
    return {
      loading: false,
      proTableOn: {
        'selection-change': value => {
          console.log(value)
        }
      },
      proPaginationOn: {
        'current-change': value => {
          console.log(value)
        }
      },
      dataSource: [
        { name: 'sz', age: 19, birthday: '2001-05-02' },
        { name: 'ls', age: 9, birthday: '2011-08-21' },
        { name: 'ww', age: 29, birthday: '1991-09-13' }
      ],
      column: [
        {
          type: 'selection',
          width: 55
        },
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
          label: 'display_time'
        },
        {
          label: 'options',
          render: (h, scoped) => {
            const { row } = scoped
            return h(
              'el-button',
              {
                props: {
                  type: 'text',
                  size: 'mini',
                  icon: 'el-icon-edit'
                },
                nativeOn: { click: e => console.log(row) }
              },
              'Edit'
            )
          }
        }
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      getList().then(response => {
        const { data } = response
        this.dataSource = data.items
        this.loading = false
      })
    }
  }
}
</script>
