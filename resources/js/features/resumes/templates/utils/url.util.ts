export function formatUrl(url: string) {
  return url
    .trim()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '');
}
