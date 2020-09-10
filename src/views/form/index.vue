<template>
  <div>
    <ProForm
      :model="model"
      :column="column"
      :button-group-span="12"
      @submit="handleSubmit"
    />
  </div>
</template>
<script>
import ProForm from '@/components/ProForm'

export default {
  components: {
    ProForm
  },
  data() {
    return {
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
    handleSubmit(val) {
      console.log('$on:', val)
      console.log('model:', this.model)
    }
  }
}
</script>
