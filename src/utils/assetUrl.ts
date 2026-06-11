/**
 * Constrói URLs de assets considerando a base configurada (local ou GitHub Pages)
 * Isso garante que as imagens funcionem tanto em localhost quanto em GitHub Pages
 */
export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
