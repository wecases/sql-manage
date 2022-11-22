<script setup lang="ts">
const props = defineProps<{
  collapseStatus: boolean
}>()
const emit = defineEmits<{
  (e: 'collapse'): void
  (e: 'showConfig'): void
}>()
const { t } = useI18n()

const collapse = () => {
  emit('collapse')
}
const showConfig = () => {
  emit('showConfig')
}
</script>

<template>
  <el-main opacity="98">
    <div flex flex-auto items-center justify-around>
      <!-- <el-button plain text-xs @click="toggleDark()">
                  <div i-carbon-sun dark:i-carbon-moon />
                </el-button> -->
      <el-button plain text-xs @click="showConfig">
        <div i-icon-park-outline:config />
      </el-button>
      <el-button plain bg text-xs type="info">
        <i i-carbon:add-alt />
        <span px2>{{ t('layout.add') }}</span>
      </el-button>
      <el-button plain bg text-xs :disabled="props.collapseStatus" @click="collapse">
        <div i-bi:arrows-collapse />
      </el-button>
    </div>
  </el-main>
</template>
