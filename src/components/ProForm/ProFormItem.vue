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
  methods: {
    /* 构造下拉项 */
    handleCreateOptions(options = [], h) {
      let VNodes = options.map(item => h("el-option", { props: item }));
      return VNodes;
    },
    /* 构造单选项 */
    handleCreateElRadio(options = [], h) {
      let VNodes = options.map(item => {
        const { label, value } = item;
        return h("el-radio", { props: { ...item, label: value } }, label);
      });
      return VNodes;
    },
    /* 构造多选项 */
    handleCreateElCheckbox(options = [], h) {
      let VNodes = options.map(item => {
        const { label, value } = item;
        return h("el-checkbox", { props: { ...item, label: value } }, label);
      });
      return VNodes;
    },
    /* 构造子项 */
    handleCreateChildrenInit(valueType = "", options = [], h) {
      switch (valueType) {
        case "el-select":
          return this.handleCreateOptions(options, h);
        case "el-radio-group":
          return this.handleCreateElRadio(options, h);
        case "el-checkbox-group":
          return this.handleCreateElCheckbox(options, h);
        default:
          return [];
      }
    }
  },
  render: function(h) {
    let { valueType, options = [], value = "", key = "" } = this.options;
    let modelValue = this.model[key];
    let defaultValue = value || modelValue;
    let VNodes = this.handleCreateChildrenInit(valueType, options, h);

    return h(
      valueType,
      {
        attrs: { ...this.options, value: defaultValue },
        props: { ...this.options, value: defaultValue },
        domProps: { ...this.options, value: defaultValue },
        on: {
          input: event => {
            this.$set(this.options, "value", event);
            this.$emit("input", { key: key, value: event });
          },
          change: event => {},
          blur: event => {},
          focus: event => {},
          clear: event => {}
        }
      },
      VNodes
    );
  }
};
</script>
