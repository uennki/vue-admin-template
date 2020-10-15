<template>
  <el-upload
    ref="upload"
    :limit="limit"
    :accept="accept"
    :headers="headers"
    :action="url"
    :disabled="isUploading"
    :on-progress="handleFileUploadProgress"
    :on-remove="handleFileRemove"
    :on-success="handleFileSuccess"
    :drag="drag"
    :auto-upload="false"
  >
    <template v-if="drag">
      <div>将文件拖到此处，或 <em>点击上传</em></div>
    </template>
    <template v-else>
      <el-button type="text" size="mini">点击上传文件</el-button>
    </template>
    <div style="color: #999999; font-size: 12px;" slot="tip">
      ( 提示：{{ tipText }} )
      <slot></slot>
    </div>
  </el-upload>
</template>

<script>
// import { getToken } from "@/utils/auth";

export default {
  props: {
    drag: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 3
    },
    tipText: {
      type: String,
      default: '提示文字信息'
    },
    path: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
      // headers: { Authorization: "Bearer " + getToken() }, // 设置上传的请求头部
      headers: {},
      isUploading: false // 是否禁用上传
    }
  },
  computed: {
    url: function() {
      return process.env.VUE_APP_BASE_API + this.path
    }
  },
  methods: {
    handleFileUploadProgress(event, file, fileList) {
      this.isUploading = true
    },
    handleFileSuccess(response, file, fileList) {
      this._clearFiles()
      this.$alert(response.msg, '导入结果', { dangerouslyUseHTMLString: true })
      this.$emit('success')
    },
    handleFileRemove(file, fileList) {
      console.log(file, fileList)
    },
    _clearFiles() {
      this.upload.isUploading = false
      this.$refs.upload.clearFiles()
    },
    _submit() {
      this.$refs.upload.submit()
    }
  }
}
</script>
