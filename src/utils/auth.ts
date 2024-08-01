import Cookies from "js-cookie";
import { storageLocal } from "@pureadmin/utils";
import { useUserStoreHook } from "@/store/modules/user";

export interface DataInfo<T> {
  /** token */
  accessToken: string;
  /** `accessToken`的过期时间（时间戳） */
  expires: T;
  /** 用于调用刷新accessToken的接口时所需的token */
  refreshToken: string;
  /** 头像 */
  avatar?: string;
  /** 用户名 */
  username?: string;
  /** 昵称 */
  nickname?: string;
  /** 当前登录用户的角色 */
  roles?: Array<string>;
}

export const userKey = "user-info";
export const TokenKey = "authorized-token";
/**
 * 通过`multiple-tabs`是否在`cookie`中，判断用户是否已经登录系统，
 * 从而支持多标签页打开已经登录的系统后无需再登录。
 * 浏览器完全关闭后`multiple-tabs`将自动从`cookie`中销毁，
 * 再次打开浏览器需要重新登录系统
 * */
export const multipleTabsKey = "multiple-tabs";

/** 获取`token` */
export function getToken(): DataInfo<number> {
  // 此处与`TokenKey`相同，此写法解决初始化时`Cookies`中不存在`TokenKey`报错.
  // 从 Cookie 中获取 token 信息,
  // 如果 Cookie 中存在 token 信息，则解析并返回,
  // 如果 Cookie 中不存在 token 信息，则从 localStorage 中获取
  return Cookies.get(TokenKey)
    ? JSON.parse(Cookies.get(TokenKey))
    : storageLocal().getItem(userKey);
}

/**
 * @description 设置`token`以及一些必要信息并采用无感刷新`token`方案
 * 无感刷新：后端返回`accessToken`（访问接口使用的`token`）、`refreshToken`
 * （用于调用刷新`accessToken`的接口时所需的`token`，`refreshToken`的过期时间（比如30天）应大于`accessToken`的过期时间（比如2小时））、`expires`（`accessToken`的过期时间）
 * 将`accessToken`、`expires`、`refreshToken`这三条信息放在key值为authorized-token的cookie里（过期自动销毁）
 * 将`avatar`、`username`、`nickname`、`roles`、`refreshToken`、`expires`这六条信息放在key值为`user-info`的localStorage里（利用`multipleTabsKey`当浏览器完全关闭后自动销毁）
 */
export function setToken(data: DataInfo<Date>) {
  let expires = 0;
  const { accessToken, refreshToken } = data;
  const { isRemembered, loginDay } = useUserStoreHook();
  // 获取过期时间，如果后端直接设置时间戳，将此处代码改为expires = data.expires，然后把上面的DataInfo<Date>改成DataInfo<number>即可
  expires = new Date(data.expires).getTime();
  // 将 accessToken、expires、refreshToken 存放在 cookie 中
  const cookieString = JSON.stringify({ accessToken, expires, refreshToken });
  expires > 0
    ? Cookies.set(TokenKey, cookieString, {
        expires: (expires - Date.now()) / 86400000
      })
    : Cookies.set(TokenKey, cookieString);
  // 设置多标签共享 token 的标志
  Cookies.set(
    multipleTabsKey,
    "true",
    isRemembered
      ? {
          expires: loginDay
        }
      : {}
  );
  // 设置用户信息
  function setUserKey({ avatar, username, nickname, roles }) {
    // 更新用户头像
    useUserStoreHook().SET_AVATAR(avatar);
    // 更新用户名
    useUserStoreHook().SET_USERNAME(username);
    // 更新用户昵称
    useUserStoreHook().SET_NICKNAME(nickname);
    // 更新用户角色
    useUserStoreHook().SET_ROLES(roles);
    // 将用户信息存储到本地存储中
    storageLocal().setItem(userKey, {
      // 存储刷新令牌
      refreshToken,
      // 存储过期时间
      expires,
      // 存储用户头像
      avatar,
      // 存储用户名
      username,
      // 存储用户昵称
      nickname,
      // 存储用户角色
      roles
    });
  }
  // 如果接口返回了用户信息，则设置用户信息
  if (data.username && data.roles) {
    const { username, roles } = data;
    setUserKey({
      avatar: data?.avatar ?? "",
      username,
      nickname: data?.nickname ?? "",
      roles
    });
    // 否则从 localStorage 中获取用户信息
  } else {
    const avatar =
      storageLocal().getItem<DataInfo<number>>(userKey)?.avatar ?? "";
    const username =
      storageLocal().getItem<DataInfo<number>>(userKey)?.username ?? "";
    const nickname =
      storageLocal().getItem<DataInfo<number>>(userKey)?.nickname ?? "";
    const roles =
      storageLocal().getItem<DataInfo<number>>(userKey)?.roles ?? [];
    setUserKey({
      avatar,
      username,
      nickname,
      roles
    });
  }
}

/**
 * 删除`token`以及key值为`user-info`的localStorage信息
 */
export function removeToken() {
  // 删除 Cookies 中的 TokenKey
  Cookies.remove(TokenKey);
  // 删除 Cookies 中的 multipleTabsKey
  Cookies.remove(multipleTabsKey);
  // 删除 localStorage 中的 userKey
  storageLocal().removeItem(userKey);
}

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
  return "Bearer " + token;
};
