<template>
  <div>
    <el-cascader
      v-model="value"
      size="small"
      :options="options"
      @change="handleChange"
    />
  </div>
</template>

<script>
import {
  provinceAndCityData, // 省市二级联动（不带“全部”选项）
  provinceAndCityDataPlus, // 省市二级联动（带“全部”选项
  regionData, // 省市区三级联动（不带“全部”选项）
  regionDataPlus, // 省市区三级联动（带“全部”选项）
  CodeToText,
  TextToCode
} from 'element-china-area-data'

export default {
  props: {
    defaultValue: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      options: regionData,
      value: this.defaultValue
    }
  },
  methods: {
    handleCodeToText() {
      return [
        TextToCode[this.value[0]],
        TextToCode[this.value[0][1]],
        TextToCode[this.value[0][1][3]]
      ]
    },
    handleChange(value) {
      const area = value.map(item => CodeToText[item])
      console.log(value, area)
    }
  }
}
</script>

<style lang="scss" scoped></style>
