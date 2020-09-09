<script>
export default {
  name: 'ProTableColumn',
  props: {
    options: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  render: function(h) {
    const { render } = this.options
    const scopedSlots = {}

    if (render) {
      /* 绑定作用域 */
      scopedSlots.default = scoped => render(h, scoped)
    }

    return (
      <el-table-column
        {...{ props: this.options }}
        scopedSlots={scopedSlots}
      ></el-table-column>
    )
  }
}
</script>
