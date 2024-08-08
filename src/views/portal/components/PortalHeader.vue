<template>
  <header>
    <div class="index-nav">
      <div class="logo">
        <a href="#/portal" />
        <span class="logo-title">Rooike Admin</span>
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
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin: 0;
  background: rgb(251 251 253 / 80%);
  backdrop-filter: saturate(180%) blur(20px);

  .index-nav {
    display: flex;
    align-items: center;
    min-width: 1152px;
    max-width: 1366px;
    padding: 0;
    margin: auto;

    .logo {
      display: flex;
      flex: 1;
      align-items: center;
      height: 70px;
      font-size: 20px;
      line-height: 70px;

      a {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-right: 15px;
        background: url("@/assets/login/avatar.svg") center center no-repeat;
        background-size: 100% 100%;
      }

      span {
        margin-right: 40px;
      }
    }

    :deep() {
      .el-tabs {
        &__header {
          margin: 0;
        }
      }
    }
  }
}
</style>
