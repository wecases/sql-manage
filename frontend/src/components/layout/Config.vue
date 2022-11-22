<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', isShow: boolean): void
}>()
const { t, locale, availableLocales } = useI18n()
const lang = useStorage('lang', locale)

const isShow = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const dark = $ref(isDark)
const themeList = reactive({
  auto: {
    value: 'auto',
    label: t('config.theme.auto'),
  },
  light: {
    value: 'light',
    label: t('config.theme.light'),
  },
  dark: {
    value: 'dark',
    label: t('config.theme.dark'),
  },
})
</script>

<template>
  <el-dialog v-model="isShow" :title="t('config.title')">
    <el-form label-position="top">
      <el-row :gutter="30" justify="center">
        <el-col :span="12">
          <el-form-item :label="t('config.theme.name')">
            <el-select v-model="dark" :placeholder="t('common.select') + t('config.theme.name')">
              <el-option v-for="item, index in themeList" :key="index" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="t('config.language')">
            <el-select v-model="lang" :placeholder="t('common.select') + t('config.language')">
              <el-option v-for="item in availableLocales" :key="item" :label="item" :value="item" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</template>
