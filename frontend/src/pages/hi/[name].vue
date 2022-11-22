<script lang="ts" setup>
const props = defineProps<{ name: string }>()
const router = useRouter()
const { t } = useI18n()

const name = $ref('')
let result = $ref('...')

function greet() {
  Greet(name).then((res) => {
    result = res
  })
}
</script>

<template>
  <main>
    <div h-20 />
    <div flex flex-col items-center justify-around>
      <div text-center>
        <div space-x-2>
          <div i-carbon-pedestrian text-4xl inline-block />
        </div>
        <div py-2>
          {{ t('test.hi') }}, {{ props.name }}
        </div>
      </div>
      <p>
        <em text-sm op75>{{ t('test.please-enter-your-name-below') }}</em>
      </p>
      <div py-2>
        <el-input
          v-model="name" text="center" min-w="250px" p="x-4 y-2" :placeholder="t('test.whats-your-name')"
          @keydown.enter="greet"
        />
      </div>
      <div py-2>
        <code>{{ t('test.server-result') }} : {{ result }}</code>
      </div>
      <div>
        <el-button round plain @click="router.back()">
          {{ t('test.back') }}
        </el-button>
        <el-button round plain type="primary" :disabled="!name" @click="greet">
          {{ t('test.go') }}
        </el-button>
      </div>
    </div>
  </main>
</template>
