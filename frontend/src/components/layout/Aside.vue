<script setup lang="ts">
const activeNames = $ref([])
const model = $ref(['mysql', 'redis'])
const data = ref()
const showConfig = $ref(false)

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
        <el-affix :offset="0">
          <layout-tool :collapse-status="activeNames.length === 0" @collapse="activeNames = []" @show-config="showConfig = true" />
        </el-affix>

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
      <layout-config v-model="showConfig" @close="showConfig = false" />
    </el-scrollbar>
  </main>
</template>

<style scoped>
.el-main {
  background: var(--el-bg-color);
}
</style>
