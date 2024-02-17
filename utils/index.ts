export const daysAgo = (date: Date): number => {
  return Math.floor(
    (new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );
}

export const prettyCount = (count: number): string | number => {
  if (count > 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count;
};