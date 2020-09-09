/**
 * 导出EXCEL文件
 * 注意: 发起的请求中需设置 responseType: 'blob' 格式
 * @param {*} arg 文件流数据
 * @param {*} fileName 下载文件名称
 */
export const exportExcel = (arg, fileName = '下载文件') => {
  var blob = new Blob([arg], {
    type: 'application/vnd.ms-excel;charset=utf-8'
  })
  var downloadElement = document.createElement('a')
  var href = window.URL.createObjectURL(blob) // 创建下载的链接
  downloadElement.href = href
  downloadElement.download = `${fileName}.xlsx` // 下载后文件名

  document.body.appendChild(downloadElement)
  downloadElement.click() // 点击下载
  document.body.removeChild(downloadElement) // 下载完成移除元素
  window.URL.revokeObjectURL(href) // 释放掉blob对象
}
