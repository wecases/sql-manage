<script setup lang="ts">
const { t } = useI18n()
const activeNames = $ref([])
const handleChange = (val: string[]) => {
  // console.log(val)
}
const model = $ref(['mysql', 'redis'])
const _charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789'

function getRandomString(len: number) {
  const min = 0; const max = _charStr.length - 1; let _str = ''
  // 判断是否指定长度，否则默认长度为15
  len = len || 15
  // 循环生成字符串
  for (let i = 0, index; i < len; i++) {
    index = RandomIndex(min, max, i)
    _str += _charStr[index]
  }
  return _str
}
function RandomIndex(min: number, max: number, i: number) {
  let index = Math.floor(Math.random() * (max - min + 1) + min)
  const numStart = _charStr.length - 10
  // 如果字符串第一位是数字，则递归重新获取
  if (i === 0 && index >= numStart)
    index = RandomIndex(min, max, i)

  // 返回最终索引值
  return index
}
const data = $ref(Array.from({ length: 20 }, (item, index) => {
  return {
    model: model[RandomIndex(0, 1, 0)],
    name: getRandomString(20),
    lists: Array.from({ length: 10 }, (item, index) => {
      return {
        name: getRandomString(10),
      }
    }),
  }
}))
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
