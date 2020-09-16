<script>
export default {
  name: 'ProTableColumn',
  props: {
    row: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  render: function(h) {
    const { render } = this.row
    const scopedSlots = {}

    /* 绑定作用域 */
    if (render) {
      scopedSlots.default = scoped => render(h, scoped)
    }

    return (
      <el-table-column
        {...{ props: this.row }}
        scopedSlots={scopedSlots}
      ></el-table-column>
    )
  }
}
</script>
