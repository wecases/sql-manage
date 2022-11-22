/**
 * 随机数
 * @param min 最小值
 * @param max 最大值
 */
export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 随机字符串
 * @param len 长度
 * @param mixinStr 混淆内容
 */
export function randomString(len = 15, mixinStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789'): string {
  let str = ''
  const max = mixinStr.length - 1

  for (let i = 0; i < len; i++)
    str += mixinStr[randomNumber(0, max)]

  return str
}
