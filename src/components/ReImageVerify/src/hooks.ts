import { ref, onMounted } from "vue";

/**
 * 绘制图形验证码
 * @param width - 图形宽度
 * @param height - 图形高度
 */
export const useImageVerify = (width = 120, height = 40) => {
  // 创建一个 ref 对象来保存 canvas 元素的引用
  const domRef = ref<HTMLCanvasElement>();
  // 创建一个 ref 对象来保存生成的图形验证码
  const imgCode = ref("");

  // 设置 imgCode 的值
  function setImgCode(code: string) {
    imgCode.value = code;
  }

  // 生成并绘制图形验证码
  function getImgCode() {
    // 先检查 domRef 是否有值
    if (!domRef.value) return;
    // 调用 draw 函数生成验证码,并更新 imgCode 的值
    imgCode.value = draw(domRef.value, width, height);
  }

  // 在组件挂载时调用 getImgCode 函数生成验证码
  onMounted(() => {
    getImgCode();
  });

  // 返回 domRef、imgCode、setImgCode 和 getImgCode
  return {
    domRef,
    imgCode,
    setImgCode,
    getImgCode
  };
};

// 生成随机数字
function randomNum(min: number, max: number) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

// 生成随机颜色
function randomColor(min: number, max: number) {
  const r = randomNum(min, max);
  const g = randomNum(min, max);
  const b = randomNum(min, max);
  return `rgb(${r},${g},${b})`;
}

// 绘制图形验证码
function draw(dom: HTMLCanvasElement, width: number, height: number) {
  let imgCode = "";

  const NUMBER_STRING = "123456789";

  const ctx = dom.getContext("2d");
  if (!ctx) return imgCode;

  // 填充背景色
  ctx.fillStyle = randomColor(180, 230);
  ctx.fillRect(0, 0, width, height);

  // 绘制4个随机数字
  for (let i = 0; i < 4; i += 1) {
    const text = NUMBER_STRING[randomNum(0, NUMBER_STRING.length)];
    imgCode += text;
    const fontSize = randomNum(18, 41);
    const deg = randomNum(-30, 30);
    ctx.font = `${fontSize}px Simhei`;
    ctx.textBaseline = "top";
    ctx.fillStyle = randomColor(80, 150);
    ctx.save();
    ctx.translate(30 * i + 15, 15);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(text, -15 + 5, -15);
    ctx.restore();
  }

  // 绘制5条干扰线
  for (let i = 0; i < 5; i += 1) {
    ctx.beginPath();
    ctx.moveTo(randomNum(0, width), randomNum(0, height));
    ctx.lineTo(randomNum(0, width), randomNum(0, height));
    ctx.strokeStyle = randomColor(180, 230);
    ctx.closePath();
    ctx.stroke();
  }

  // 绘制41个干扰点
  for (let i = 0; i < 41; i += 1) {
    ctx.beginPath();
    ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = randomColor(150, 200);
    ctx.fill();
  }
  return imgCode;
}
