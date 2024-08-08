<template>
  <div
    v-loading="treeLoading"
    class="h-full bg-bg_color overflow-auto"
    :style="{ minHeight: `calc(100vh - 141px)` }"
  >
    <div class="flex justify-center p-2">
      <el-button
        class="w-full"
        type="primary"
        :icon="useRenderIcon(AddFill)"
        @click="openDictList()"
      >
        新增字典
      </el-button>
    </div>
    <div class="flex items-center h-[34px] p-2">
      <el-input
        v-model="searchValue"
        size="small"
        placeholder="请输入字典名称"
        clearable
      >
        <template #suffix>
          <el-icon class="el-input__icon">
            <IconifyIconOffline
              v-show="searchValue.length === 0"
              icon="ri:search-line"
            />
          </el-icon>
        </template>
      </el-input>
    </div>
    <el-divider />
    <el-tree
      ref="treeRef"
      :data="treeData"
      node-key="id"
      size="small"
      :props="defaultProps"
      default-expand-all
      :expand-on-click-node="false"
      :filter-node-method="filterNode"
      @node-click="nodeClick"
    >
      <template #default="{ node, data }">
        <span
          :class="[
            'pl-1',
            'pr-1',
            'rounded',
            'flex',
            'items-center',
            'select-none',
            'hover:text-primary',
            searchValue.trim().length > 0 &&
              node.label.includes(searchValue) &&
              'text-red-500',
            highlightMap[node.id]?.highlight ? 'dark:text-primary' : ''
          ]"
          :style="{
            color: highlightMap[node.id]?.highlight
              ? 'var(--el-color-primary)'
              : '',
            background: highlightMap[node.id]?.highlight
              ? 'var(--el-color-primary-light-7)'
              : 'transparent'
          }"
        >
          <IconifyIconOffline
            :icon="
              data.type === 1
                ? OfficeBuilding
                : data.type === 2
                  ? LocationCompany
                  : Dept
            "
          />
          {{ node.label }}
        </span>
      </template>
    </el-tree>
  </div>
</template>
<script setup lang="ts">
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { ref, computed, watch, getCurrentInstance } from "vue";
import { useUser } from "./utils/hook";
import Dept from "@iconify-icons/ri/git-branch-line";
// import Reset from "@iconify-icons/ri/restart-line";
import OfficeBuilding from "@iconify-icons/ep/office-building";
import LocationCompany from "@iconify-icons/ep/add-location";
import AddFill from "@iconify-icons/ri/add-circle-line";
import ExpandIcon from "./svg/expand.svg?component";
import UnExpandIcon from "./svg/unexpand.svg?component";

interface Tree {
  id: number;
  name: string;
  highlight?: boolean;
  children?: Tree[];
}

defineProps({
  treeLoading: Boolean,
  treeData: Array
});

const emit = defineEmits(["tree-select"]);

const treeRef = ref();
// TODO 无用字段，待解决
const dictListRef = ref();
const searchValue = ref("");
const highlightMap = ref({});
const { proxy } = getCurrentInstance();
const defaultProps = {
  children: "children",
  label: "name"
};

const { openDictList } = useUser(treeRef, dictListRef);

const buttonClass = computed(() => {
  return [
    "!h-[20px]",
    "!text-sm",
    "reset-margin",
    "!text-[var(--el-text-color-regular)]",
    "dark:!text-white",
    "dark:hover:!text-primary"
  ];
});

const filterNode = (value: string, data: Tree) => {
  if (!value) return true;
  return data.name.includes(value);
};

function nodeClick(value) {
  const nodeId = value.$treeNodeId;
  highlightMap.value[nodeId] = highlightMap.value[nodeId]?.highlight
    ? Object.assign({ id: nodeId }, highlightMap.value[nodeId], {
        highlight: false
      })
    : Object.assign({ id: nodeId }, highlightMap.value[nodeId], {
        highlight: true
      });
  Object.values(highlightMap.value).forEach((v: Tree) => {
    if (v.id !== nodeId) {
      v.highlight = false;
    }
  });
  emit(
    "tree-select",
    highlightMap.value[nodeId]?.highlight
      ? Object.assign({ ...value, selected: true })
      : Object.assign({ ...value, selected: false })
  );
}

/** 重置部门树状态（选中状态、搜索框值、树初始化） */
function onTreeReset() {
  highlightMap.value = {};
  searchValue.value = "";
}

watch(searchValue, val => {
  treeRef.value!.filter(val);
});

defineExpose({ onTreeReset });
</script>

<style lang="scss" scoped>
:deep(.el-divider) {
  margin: 0;
}

:deep(.el-tree) {
  --el-tree-node-hover-bg-color: transparent;
}
</style>
