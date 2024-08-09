<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 flex items-center justify-center h-20 bg-opacity-80 bg-gray-100 backdrop-filter backdrop-blur-lg"
  >
    <div
      class="flex items-center min-w-screen min-w-[1152px] max-w-[1366px] p-0 m-auto"
    >
      <div class="flex flex-1 items-center h-16 text-lg leading-16">
        <a
          class="inline-block w-10 h-10 mr-4 bg-center bg-no-repeat bg-cover bg-[url('@/assets/login/avatar.svg')]"
          href="#/portal"
        />
        <span>Rooike Admin</span>
      </div>

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item, index) in tabsList"
          :key="index"
          :label="item.label"
          :name="item.name"
        />
      </el-tabs>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();

defineOptions({
  name: "PortalHeader"
});

const props = defineProps({
  activeMenu: {
    type: String,
    default: "portal"
  }
});

const activeName = ref<any>(props.activeMenu);
const tabsList = reactive<any>([
  {
    label: "主页",
    name: "portal"
  },
  {
    label: "产品简介",
    name: "product"
  },
  {
    label: "合作伙伴",
    name: "partner"
  },
  {
    label: "后台管理",
    name: "welcome"
  }
]);

const handleClick = (tab: TabsPaneContext) => {
  router.push(`/${tab.props.name}`);
};

onMounted(() => {
  document.querySelectorAll("body")[0].className = "";
});
</script>

<style lang="scss" scoped>
:deep() {
  .el-tabs {
    &__header {
      margin: 0;
    }
  }
}
</style>
