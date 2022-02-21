import { TRoute, TRoutes } from '@hoomies/noak.types.route';
import DefaultRoutes from './default.lock';
import CustomRoutes from './custom';

/**
 * Get all routes (default and custom)
 *
 */
export function getAllRoutes() {
  return [...DefaultRoutes, ...CustomRoutes];
}

/**
 * Get routes by path
 * @param paths - Array of paths
 * @returns TRoutes
 */
export function getRoutes(paths: Array<string>) {
  let selectedRoutes: TRoutes = [];
  paths.forEach((path) => {
    const route: TRoute | boolean = getRoute(path);
    if (typeof route === 'object' && Object.keys(route).length > 0) {
      selectedRoutes.push(route);
    }
  });

  return selectedRoutes;
}
/**
 * Get route by path
 * @throws Error if route not found
 * @param {string} path
 * @param {boolean} critical - If true, throw error if route not found
 * @returns TRoute
 */
export function getRoute(path: TRoute['path'], critical: boolean = false) {
  let match = Routes.find((route) => route.path === path) ?? getDeepRoute(path);

  if (!match && critical) {
    throw new Error(`[getRoute] - Route not found: ${path}`);
  }

  return match;
}

/**
 * Get deep route by path (searching route.lang)
 * @param {string} path
 * @returns TRoute | false - If route not found, return false
 */
function getDeepRoute(path: TRoute['path']) {
  let result: TRoute | false = false;

  Routes.every((route) => {
    if (route.lang) {
      const seo = Object.values(route.lang);
      if (seo.includes(path)) {
        result = route;
        return false;
      }
    }
    return true;
  });

  return result;
}

const Routes: TRoutes = getAllRoutes();
export default Routes;
