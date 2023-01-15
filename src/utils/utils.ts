export const getRandomElement = (arr: string[]) => {
  return arr?.[Math?.floor(Math?.random() * arr?.length)];
}