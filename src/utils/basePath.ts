/**
 * Helper function to prepend the correct base path to assets
 * Works correctly in both development and production (GitHub Pages)
 */
export function getBasePath(path: string): string {
  // In production, prepend the repo name; in development, use the path as is
  const basePath = process.env.NODE_ENV === 'production' ? '/abaudio' : '';
  
  // Make sure the path starts with a slash but the result doesn't have double slashes
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
} 