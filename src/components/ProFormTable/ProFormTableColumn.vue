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
        alignItems: 'center'
        // gridColumnGap: "14px"
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
            const { label, prop, rules, render, width } = item

            return (
              <div
                class="td"
                style={{ width: `${width}px` }}
                key={`${index}-${itemIndex}`}
              >
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

<style lang="scss">
.pro-form-table-tbody {
  .el-form-item {
    margin-bottom: 0 !important;
  }

  .el-form-item__content {
    font-size: 13px !important;
  }

  .el-form-item__error {
    color: #f56c6c;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
  }
}
</style>
<style lang="scss" scoped>
.pro-form-table-tbody {
  padding-bottom: 3px;
  // min-height: 200px;

  .tr {
    font-size: 12px;

    .td {
      height: 46px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ebeef5;
      padding: 0 24px;
    }
  }
}
</style>
