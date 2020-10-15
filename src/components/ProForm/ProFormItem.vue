<script>
export default {
  name: 'ProFormItem',
  props: {
    model: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  render: function(h) {
    const {
      component,
      label,
      prop,
      rules,
      options = [],
      width = '100%',
      render = null
    } = this.options

    /* render 存在第一优先 */
    if (render) {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          {render(h, this.model)}
        </el-form-item>
      )
    }

    /* 输入框 */
    if (component === 'input') {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-input
            vModel={this.model[prop]}
            {...{ props: this.options, attrs: this.options }}
            style={{ width: width }}
          />
        </el-form-item>
      )
    }

    /* 数字输入框 */
    if (component === 'input-number') {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-input-number
            vModel={this.model[prop]}
            {...{ props: this.options }}
          />
        </el-form-item>
      )
    }

    /* 时间选择框 */
    if (component === 'time-select') {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-time-select
            vModel={this.model[prop]}
            style={{ width: width }}
            {...{ props: this.options }}
          />
        </el-form-item>
      )
    }

    /* 日期选择框 */
    if (component === 'date-picker') {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-date-picker
            vModel={this.model[prop]}
            {...{ props: this.options }}
            style={{ width: width }}
          />
        </el-form-item>
      )
    }

    /* 级联下拉框 */
    if (component === 'cascader') {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-cascader
            vModel={this.model[prop]}
            {...{ props: this.options }}
            style={{ width: width }}
          />
        </el-form-item>
      )
    }

    /* switch按钮 */
    if (component === 'switch') {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-switch vModel={this.model[prop]} {...{ props: this.options }} />
        </el-form-item>
      )
    }

    /* 下拉框 */
    if (component === 'select') {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-select
            vModel={this.model[prop]}
            {...{ props: this.options }}
            style={{ width: width }}
          >
            {options.map(item => {
              return <el-option {...{ props: item }} />
            })}
          </el-select>
        </el-form-item>
      )
    }

    /* 单选框 */
    if (component === 'radio') {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-radio-group
            vModel={this.model[prop]}
            {...{ props: this.options }}
          >
            {options.map(item => {
              const { label, value } = item
              return <el-radio label={value}>{label}</el-radio>
            })}
          </el-radio-group>
        </el-form-item>
      )
    }

    /* 复选框 */
    if (component === 'checkbox') {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-checkbox-group
            vModel={this.model[prop]}
            {...{ props: this.options }}
          >
            {options.map(item => {
              const { label, value } = item
              return <el-checkbox label={value}>{label}</el-checkbox>
            })}
          </el-checkbox-group>
        </el-form-item>
      )
    }

    return null
  }
}
</script>
