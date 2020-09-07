<script>
export default {
  name: "pro-table-column",
  props: {
    options: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  render: function (h) {
    let { render } = this.options;
    let scopedSlots = {};

    if (render) {
      /* 绑定作用域 */
      scopedSlots.default = (scoped) => render(h, scoped);
    }

    return h("el-table-column", {
      props: this.options,
      scopedSlots,
    });
  },
};
</script>
