<script>
export default {
  name: "pro-form-item",
  props: {
    model: Object,
    options: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  render: function(h) {
    let {
      valueType,
      label,
      prop,
      rules,
      options = [],
      width = "100%"
    } = this.options;

    if (valueType === "input") {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-input
            vModel={this.model[prop]}
            {...{ props: this.options }}
            style={{ width: width }}
          ></el-input>
        </el-form-item>
      );
    }

    if (valueType === "input-number") {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-input-number
            vModel={this.model[prop]}
            {...{ props: this.options }}
          ></el-input-number>
        </el-form-item>
      );
    }

    if (valueType === "time-select") {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-time-select
            vModel={this.model[prop]}
            style={{ width: width }}
            {...{ props: this.options }}
          ></el-time-select>
        </el-form-item>
      );
    }

    if (valueType === "date-picker") {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-date-picker
            vModel={this.model[prop]}
            {...{ props: this.options }}
            style={{ width: width }}
          ></el-date-picker>
        </el-form-item>
      );
    }

    if (valueType === "cascader") {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-cascader
            vModel={this.model[prop]}
            {...{ props: this.options }}
            style={{ width: width }}
          ></el-cascader>
        </el-form-item>
      );
    }

    if (valueType === "date-picker") {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-date-picker
            vModel={this.model[prop]}
            {...{ props: this.options }}
            style={{ width: width }}
          ></el-date-picker>
        </el-form-item>
      );
    }

    if (valueType === "switch") {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-switch
            vModel={this.model[prop]}
            {...{ props: this.options }}
          ></el-switch>
        </el-form-item>
      );
    }

    if (valueType === "select") {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-select
            vModel={this.model[prop]}
            {...{ props: this.options }}
            style={{ width: width }}
          >
            {options.map(item => {
              return <el-option {...{ props: item }}></el-option>;
            })}
          </el-select>
        </el-form-item>
      );
    }

    if (valueType === "radio") {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-radio-group
            vModel={this.model[prop]}
            {...{ props: this.options }}
          >
            {options.map(item => {
              const { label, value } = item;
              return <el-radio label={value}>{label}</el-radio>;
            })}
          </el-radio-group>
        </el-form-item>
      );
    }

    if (valueType === "checkbox") {
      return (
        <el-form-item label={label} prop={prop} rules={rules}>
          <el-checkbox-group
            vModel={this.model[prop]}
            {...{ props: this.options }}
          >
            {options.map(item => {
              const { label, value } = item;
              return <el-checkbox label={value}>{label}</el-checkbox>;
            })}
          </el-checkbox-group>
        </el-form-item>
      );
    }
  }
};
</script>
