<script lang="ts" setup></script>

<template>
  <el-container class="layout-container-demo" h="screen">
    <el-aside>
      <layout-aside />
    </el-aside>

    <el-container>
      <el-main>
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
