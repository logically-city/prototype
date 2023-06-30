import { NAMED_TYPE } from './constants';
import { NamedTypeFuncMapOrMap } from './types';

export * from './constants';
export * from './types';

/**
 * 驼峰命名转换为连接符命名
 */
export const humpToDashNamed = (str: string) => {
  const v = str.replace(/([A-Z])/g, '-$1').toLowerCase();
  if (v[0] === '-') return v.substring(1);
  return v;
};

/**
 * 连接符命名转换为大驼峰命名
 */
export const dashToBigHumpNamed = (str: string) => {
  return str.replace(/-(\w)/g, (_$0, $1) => $1.toUpperCase()).replace(/([\w])/, (_$0, $1) => $1.toUpperCase());
};

/**
 * 连接符命名转换为小驼峰命名
 */
export const dashToSmallHumpNamed = (str: string) => str.replace(/-(\w)/g, (_$0, $1) => $1.toUpperCase());

/**
 * 大驼峰命名转换为小驼峰命名
 */
export const bigHumpToSmallHumpNamed = (str: string) => str.replace(/([\w])/, (_$0, $1) => $1.toLowerCase());

/**
 * 小驼峰命名转换为大驼峰命名
 */
export const smallHumpToBigHumpNamed = (str: string) => str.replace(/([\w])/, (_$0, $1) => $1.toUpperCase());

/**
 * 获取命名类型根据字符串
 */
export const getNamedTypeByString = (str: string): NAMED_TYPE | undefined => {
  if (!str) return;

  if (str.includes('-')) return NAMED_TYPE['dash-named'];
  if (/^[A-Z]/.test(str[0])) return NAMED_TYPE.BigHumpNamed;
  if (/^[a-z]/.test(str[0])) return NAMED_TYPE.smallHumpNamed;

  return;
};

/**
 * 转换命名为连接符命名
 */
export const transformNamedToDashNamed = (str: string) => {
  const named = getNamedTypeByString(str);

  if (named === NAMED_TYPE['dash-named']) return str;

  return humpToDashNamed(str);
};

/**
 * 转换命名为大驼峰命名
 */
export const transformNamedToBigHumpNamed = (str: string) => {
  const named = getNamedTypeByString(str);

  if (named === NAMED_TYPE['dash-named']) return dashToBigHumpNamed(str);
  if (named === NAMED_TYPE.BigHumpNamed) return str;
  if (named === NAMED_TYPE.smallHumpNamed) return smallHumpToBigHumpNamed(str);

  return str;
};

/**
 * 转换命名为小驼峰命名
 */
export const transformNamedToSmallHumpNamed = (str: string) => {
  const named = getNamedTypeByString(str);

  if (named === NAMED_TYPE['dash-named']) return dashToSmallHumpNamed(str);
  if (named === NAMED_TYPE.BigHumpNamed) return bigHumpToSmallHumpNamed(str);
  if (named === NAMED_TYPE.smallHumpNamed) return str;

  return str;
};

/**
 * 转换命名根据命名类型
 */
export const transformNamedByNamedType = (str: string, namedType: NamedTypeFuncMapOrMap) => {
  if (typeof namedType === 'function') namedType = namedType(NAMED_TYPE);

  if (namedType === NAMED_TYPE['dash-named']) return transformNamedToDashNamed(str);
  if (namedType === NAMED_TYPE.BigHumpNamed) return transformNamedToBigHumpNamed(str);
  if (namedType === NAMED_TYPE.smallHumpNamed) return transformNamedToSmallHumpNamed(str);

  return str;
};
