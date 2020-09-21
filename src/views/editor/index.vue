<template>
  <div>
    <Tinymce ref="editor" v-model="content" :height="400" />
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  components: {
    Tinymce
  },
  data: function() {
    return {
      content: '123123'
    }
  }
}
</script>

<style lang="scss" scoped></style>
