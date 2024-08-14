import { reactive } from "vue";
import { message } from "@/utils/message";
import { ElMessageBox } from "element-plus";
export function useGoodsList() {
  const form = reactive({
    name: "",
    status: null
  });
  const goodsList = [
    {
      id: 1,
      label: "洗发水",
      specification: "500ml",
      price: "50"
    },
    {
      id: 2,
      label: "牙膏",
      specification: "120g",
      price: "20"
    },
    {
      id: 3,
      label: "沐浴露",
      specification: "600ml",
      price: "35"
    },
    {
      id: 4,
      label: "洗衣液",
      specification: "1L",
      price: "25"
    },
    {
      id: 5,
      label: "剃须刀",
      specification: "3 支装",
      price: "80"
    },
    {
      id: 6,
      label: "卫生巾",
      specification: "20 片装",
      price: "30"
    },
    {
      id: 7,
      label: "棉签",
      specification: "100 支装",
      price: "10"
    },
    {
      id: 8,
      label: "纸巾",
      specification: "200 抽",
      price: "15"
    },
    {
      id: 9,
      label: "香皂",
      specification: "100g",
      price: "8"
    },
    {
      id: 10,
      label: "洗手液",
      specification: "300ml",
      price: "18"
    },
    {
      id: 11,
      label: "牙线",
      specification: "50 米",
      price: "12"
    },
    {
      id: 12,
      label: "化妆棉",
      specification: "100 片",
      price: "20"
    }
  ];
  function onShelves(row: any) {
    ElMessageBox.confirm(
      `确认要<strong style='color:var(--el-color-success)'> 上架 </strong><strong style='color:var(--el-color-primary)'>${
        row.label
      }</strong>吗?`,
      "系统提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true,
        draggable: true
      }
    )
      .then(() => {
        setTimeout(() => {
          message(`已上架${row.label}`, {
            type: "success"
          });
        }, 300);
      })
      .catch(() => {});
  }
  function offShelves(row: any) {
    ElMessageBox.confirm(
      `确认要<strong style='color:var(--el-color-danger)'> 下架 </strong><strong style='color:var(--el-color-primary)'>${
        row.label
      }</strong>吗?`,
      "系统提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true,
        draggable: true
      }
    )
      .then(() => {
        setTimeout(() => {
          message(`已下架${row.label}`, {
            type: "success"
          });
        }, 300);
      })
      .catch(() => {});
  }
  return {
    form,
    goodsList,
    onShelves,
    offShelves
  };
}
