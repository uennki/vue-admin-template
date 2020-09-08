<template>
  <div class="app-container">
    <pro-form :model="model" :column="column"></pro-form>
  </div>
</template>
<script>
import ProForm from "@/components/ProForm";

export default {
  components: {
    ProForm
  },
  data() {
    return {
      model: {
        input: "hello world",
        number: 200,
        time: "",
        date: "",
        switch: false,

        select: "0",
        radio: "0",
        checkbox: ["1"],
        cascader: ["zhinan", "shejiyuanze", "yizhi"]
      },
      column: [
        {
          prop: "input",
          valueType: "input",
          label: "input",
          span: 12,
          placeholder: "请输入具体事项",
          rules: { required: true, trigger: "blur" }
        },

        {
          prop: "time",
          span: 12,
          valueType: "time-select",
          label: "time",
          placeholder: "请选择时间",
          rules: { required: true, trigger: "blur" }
        },
        {
          prop: "date",
          span: 12,
          valueType: "date-picker",
          label: "date",
          type: "date",
          placeholder: "请选择日期",
          valueFormat: "yyyy-MM-dd",
          rules: { required: true, trigger: "blur" }
        },
        {
          prop: "select",
          span: 12,
          valueType: "select",
          label: "select",
          placeholder: "请选择",
          options: [
            { value: "0", label: "beijin" },
            { value: "1", label: "shanghai" }
          ]
        },
        {
          prop: "cascader",
          span: 12,
          valueType: "cascader",
          label: "cascader",
          placeholder: "请选择",
          options: [
            {
              value: "zhinan",
              label: "指南",
              children: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    { value: "yizhi", label: "一致" },
                    { value: "fankui", label: "反馈" }
                  ]
                },
                {
                  value: "daohang",
                  label: "导航",
                  children: [
                    { value: "cexiangdaohang", label: "侧向导航" },
                    { value: "dingbudaohang", label: "顶部导航" }
                  ]
                }
              ]
            }
          ]
        },
        {
          prop: "number",
          span: 12,
          valueType: "input-number",
          label: "input-number",
          placeholder: "请输入",
          rules: { required: true, trigger: "blur" }
        },
        {
          prop: "radio",
          valueType: "radio",
          label: "radio",
          placeholder: "请选择",
          options: [
            { value: "0", label: "hz" },
            { value: "1", label: "wh" }
          ]
        },
        {
          prop: "checkbox",
          valueType: "checkbox",
          label: "checkbox",
          placeholder: "请选择",
          options: [
            { label: "libai", value: "1" },
            { label: "dufu", value: "2" }
          ]
        },
        {
          prop: "switch",
          valueType: "switch",
          label: "switch"
        }
      ]
    };
  },
  methods: {
    handleClick() {
      console.log(this.model);
    }
  }
};
</script>
