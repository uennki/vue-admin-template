<script>
export default {
  name: 'ProFormTableColumn',
  props: {
    column: {
      type: Array,
      default: () => [],
      required: true
    },
    formData: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  computed: {
    grideStyle: function() {
      const len = this.column.length
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${len}, 1fr)`,
        alignItems: 'center',
        gridColumnGap: '14px'
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  render: function(h) {
    const ProFormItem = this.formData.map((scoped, index) => {
      return (
        <div class="tr" key={index} style={this.grideStyle}>
          {this.column.map((item, itemIndex) => {
            const { label, prop, rules, render } = item

            return (
              <div class="td" key={`${index}-${itemIndex}`}>
                <el-form-item
                  // label={label}
                  prop={`formData[${index}][${prop}]`}
                  rules={rules}
                >
                  {(render && render(h, scoped)) || scoped[prop]}
                </el-form-item>
              </div>
            )
          })}
        </div>
      )
    })

    return <div class="pro-form-table-tbody">{ProFormItem}</div>
  }
}
</script>

<style lang="scss" scoped>
.pro-form-table-tbody {
  .tr {
    border-bottom: 1px solid #ebeef5;
    height: 64px;

    .td {
      padding: 0 14px;

      .el-form-item {
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>
