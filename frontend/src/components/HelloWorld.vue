<script lang="ts" setup>
const data = reactive({
  name: '',
  resultText: 'Please enter your name below 👇',
})

function greet() {
  Greet(data.name).then((result) => {
    data.resultText = result
  })
}
</script>

<template>
  <main>
    <div py-4 />
    <p>
      <em text-sm op75>{{ data.resultText }}</em>
    </p>
    <div py-4 />
    <input
      id="name"
      v-model="data.name"
      type="text"
      autocomplete="off"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    >

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!data.name"
        @click="greet"
      >
        Greet
      </button>
    </div>
  </main>
</template>
