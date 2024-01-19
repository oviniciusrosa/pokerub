export function debounce(func: () => void, delay: number) {
  let timeoutId: NodeJS.Timeout | null = null;

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(func, delay);
}
