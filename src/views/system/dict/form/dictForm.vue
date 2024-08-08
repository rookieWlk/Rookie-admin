<script setup lang="ts">
import { ref } from "vue";
import { DictFormProps } from "../utils/types";
import { usePublicHooks } from "../../hooks";

const props = withDefaults(defineProps<DictFormProps>(), {
  formInline: () => ({ title: "新增", dictName: "", code: "", remark: "" })
});

const dictListRef = ref();
const newFormInline = ref(props.formInline);
const { switchStyle } = usePublicHooks();

function getRef() {
  return dictListRef.value;
}
</script>

<template>
  <el-form ref="dictListRef" :model="newFormInline">
    <el-form-item label="名称">
      <el-input
        v-model="newFormInline.dictName"
        class="!w-[220px]"
        placeholder="请输入名称"
      />
    </el-form-item>
    <el-form-item label="编码">
      <el-input
        v-model="newFormInline.code"
        class="!w-[220px]"
        placeholder="请输入编码"
      />
    </el-form-item>
    <el-form-item label="描述">
      <el-input
        v-model="newFormInline.remark"
        placeholder="请输入描述信息"
        type="textarea"
      />
    </el-form-item>
  </el-form>
</template>
