<script setup lang="ts">
const { t } = $(useI18n())
const name = $ref('')
const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const tableData = ref()
const randomData = () => Array.from({ length: 20 }, (item, index) => {
  return {
    date: `201${randomNumber(1, 9)}-${randomNumber(10, 12)}-${randomNumber(10, 28)}`,
    name: randomString(6),
    desc: randomString(30),
  }
})
tableData.value = randomData()

ElMessage({
  message: t('test.hello'),
})
</script>

<template>
  <main>
    <div flex items-center justify-evenly>
      <div text-center>
        <div space-x-2>
          <i i-logos:mysql-icon text-2xl />
          <i i-logos:redis text-2xl />
        </div>
        <div py-2>
          <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
            Sql Manage
          </a>
        </div>
      </div>
      <div py-4>
        <el-input
          v-model="name" text="center" min-w="250px" p="x-4 y-2" :placeholder="t('test.whats-your-name')"
          @keydown.enter="go"
        />
      </div>
      <div>
        <el-button round plain type="primary" :disabled="!name" @click="go">
          {{ t('test.go') }}
        </el-button>
      </div>
    </div>
    <el-table :data="tableData" table-layout="auto">
      <el-table-column prop="name" :label="t('test.name')" />
      <el-table-column prop="desc" :label="t('test.address')" />
      <el-table-column prop="date" :label="t('test.date')" />
    </el-table>
  </main>
</template>
