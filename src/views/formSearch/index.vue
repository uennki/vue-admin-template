<template>
  <div>
    <ProFormSearch
      class="form"
      :model="model"
      :column="column"
      @submit="handleSubmit"
      @reset="handleReset"
    />
    <br />
    <TableSuper :data-source="dataSource" @select-change="handleSelectChange">
      <template v-slot:toolbar>
        <el-button size="mini">消息</el-button>
      </template>

      <template v-slot:extra="scoped">
        <el-button type="text" size="small" @click="() => handleClick(scoped)">
          编辑
        </el-button>
        <el-divider direction="vertical" />
        <el-button type="text" size="small">删除</el-button>
        <el-divider direction="vertical" />
        <el-button type="text" size="small">关闭</el-button>
      </template>
    </TableSuper>

    <el-dialog title="dialog-title" :visible.sync="dialogVisible" width="35%">
      <ProForm
        ref="pro-form"
        :default-collapse="true"
        :show-button-group="false"
        :span="24"
        :model="model"
        :column="column"
      />

      <span slot="footer">
        <el-button size="small">取 消</el-button>
        <el-button type="primary" size="small" @click="handleSure">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import ProFormSearch from '@/components/ProFormSearch'
import TableSuper from '@/components/TableSuper'

export default {
  components: {
    ProFormSearch,
    TableSuper
  },
  data() {
    return {
      dialogVisible: false,
      dataSource: [
        {
          id: 1,
          code: 'DCK20200911345',
          amount: 5000,
          user: '李白',
          payTime: '2020-09-11 17:39',
          deliverTime: '2020-09-11 21:20',
          note: ''
        },
        {
          id: 2,
          code: 'DCK20200911346',
          amount: 2300,
          user: '杜甫',
          payTime: '2020-09-11 12:32',
          deliverTime: '2020-09-11 21:20',
          note: ''
        }
      ],
      model: {
        input: '',
        time: '',
        date: '',
        number: 200,
        switch: false,

        select: '',
        radio: '',
        checkbox: [],
        cascader: []
      },
      column: [
        {
          prop: 'input',
          valueType: 'input',
          label: 'input',
          placeholder: '请输入',
          rules: { required: true, trigger: 'blur' }
        },
        {
          prop: 'time',
          valueType: 'time-select',
          label: 'time',
          placeholder: '请选择时间'
        },
        {
          prop: 'date',
          valueType: 'date-picker',
          label: 'date',
          type: 'date',
          placeholder: '请选择日期',
          valueFormat: 'yyyy-MM-dd'
        },
        {
          prop: 'dateTime',
          valueType: 'date-picker',
          label: 'dateTime',
          type: 'datetime',
          placeholder: '请选择日期时间'
        },
        {
          prop: 'select',
          valueType: 'select',
          label: 'select',
          placeholder: '请选择',
          options: [
            { value: '0', label: 'beijin' },
            { value: '1', label: 'shanghai' }
          ]
        },
        {
          prop: 'cascader',
          valueType: 'cascader',
          label: 'cascader',
          placeholder: '请选择',
          options: [
            {
              value: 'zhinan',
              label: '指南',
              children: [
                {
                  value: 'shejiyuanze',
                  label: '设计原则',
                  children: [
                    { value: 'yizhi', label: '一致' },
                    { value: 'fankui', label: '反馈' }
                  ]
                },
                {
                  value: 'daohang',
                  label: '导航',
                  children: [
                    { value: 'cexiangdaohang', label: '侧向导航' },
                    { value: 'dingbudaohang', label: '顶部导航' }
                  ]
                }
              ]
            }
          ]
        },
        {
          prop: 'daterange',
          valueType: 'date-picker',
          type: 'daterange',
          label: 'daterange',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
          valueFormat: 'yyyy-MM-dd'
        }
        // {
        //   prop: "number",
        //   valueType: "input-number",
        //   label: "number",
        //   placeholder: "请输入"
        // },
        // {
        //   prop: "radio",
        //   valueType: "radio",
        //   label: "radio",
        //   placeholder: "请选择",
        //   options: [
        //     { value: "0", label: "hz" },
        //     { value: "1", label: "wh" }
        //   ]
        // },
        // {
        //   prop: "checkbox",
        //   valueType: "checkbox",
        //   label: "checkbox",
        //   placeholder: "请选择",
        //   options: [
        //     { label: "libai", value: "1" },
        //     { label: "dufu", value: "2" }
        //   ]
        // },
        // {
        //   prop: 'switch',
        //   valueType: 'switch',
        //   label: 'switch'
        // }
      ]
    }
  },
  methods: {
    handleSubmit() {
      console.log('submit:', this.model)
    },
    handleReset() {
      console.log('reset', this.model)
    },
    handleSelectChange(val) {
      console.log(val)
    },
    handleClick(row) {
      this.dialogVisible = true
      console.log(row)
    },
    handleSure() {
      const validate = this.$refs['pro-form'].handleValidate()
      if (validate) this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding: 28px 24px 10px 24px;
}
</style>
