export const getRandomElement = (arr: string[]) => {
  return arr?.[Math?.floor(Math?.random() * arr?.length)];
}

export const capitalize = (str: string) => {
  if (!str) return '';
  if (str?.length === 1) return str.toUpperCase();
  return `${str[0]?.toUpperCase()}${str.substring(1)}`
}