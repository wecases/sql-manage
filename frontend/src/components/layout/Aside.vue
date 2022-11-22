<script setup lang="ts">
const { t } = useI18n()

const activeNames = $ref([])
const model = $ref(['mysql', 'redis'])
const data = ref()

const randomData = () => Array.from({ length: 20 }, (item, index) => {
  return {
    model: model[randomNumber(0, 1)],
    name: randomString(20),
    lists: Array.from({ length: 10 }, () => { return { name: randomString(10) } }),
  }
})
data.value = randomData()

const handleChange = (val: string[]) => {
  // console.log(val)
}
</script>

<template>
  <main h="screen">
    <el-scrollbar>
      <div>
        <div>
          <el-affix :offset="0">
            <el-main opacity="98">
              <div flex flex-auto items-center justify-around>
                <el-button plain text-xs @click="toggleDark()">
                  <div i-carbon-sun dark:i-carbon-moon />
                </el-button>
                <el-button plain bg text-xs type="info">
                  <i i-carbon:add-alt />
                  <span px2>{{ t('layout.add') }}</span>
                </el-button>
                <el-button plain bg text-xs :disabled="activeNames.length === 0" @click="activeNames = []">
                  <div i-bi:arrows-collapse />
                </el-button>
              </div>
            </el-main>
          </el-affix>
        </div>

        <el-main pt="0" pb="0">
          <el-collapse v-model="activeNames" @change="handleChange">
            <template v-for="item in data" :key="item.name">
              <el-collapse-item :name="item.name">
                <template #title>
                  <div v-if="item.model === 'redis'" i-logos:redis />
                  <div v-if="item.model === 'mysql'" i-logos:mysql-icon />
                  <div px="2" truncate>
                    {{ item.name }}
                  </div>
                </template>
                <el-menu>
                  <template v-for="list in item.lists" :key="list.name">
                    <el-menu-item :index="list.name" h-max>
                      <span leading-loose p-2>{{ list.name }}</span>
                    </el-menu-item>
                  </template>
                </el-menu>
              </el-collapse-item>
            </template>
          </el-collapse>
        </el-main>
      </div>
    </el-scrollbar>
  </main>
</template>

<style scoped>
.el-main {
  background: var(--el-bg-color);
}
</style>
