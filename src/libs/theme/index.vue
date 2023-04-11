<template>
  <el-switch
    v-model="isDark"
    class="mt-2"
    style="margin-left: 24px"
    inline-prompt
    :active-icon="Sunny"
    :inactive-icon="Moon"
    @change="toggleDark"
  />
</template>

<script setup>
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<style lang="scss" scoped></style>
