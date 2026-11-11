export function callWindowConfirm(...args: Parameters<typeof window.confirm>) {
  return window.confirm(...args);
}
