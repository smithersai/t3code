export function readWindowLocationHref() {
  return window.location.href;
}

export function callWindowLocationReplace(url: string | URL) {
  return window.location.replace(url);
}
