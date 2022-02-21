import { TRoutes } from '@hoomies/noak.types.route';
import { getRoutes } from '~config/routes';

/**
 * Configures Routes to display in menu
 */
const selectedPaths: Array<string> = ['/p/about'];
const CustomRoutes: TRoutes = getRoutes(selectedPaths);

export default CustomRoutes;
