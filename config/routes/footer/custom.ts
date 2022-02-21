import { TRoutes } from '@hoomies/noak.types.route';
import { getRoutes } from '~config/routes';

/**
 * Configures Routes to display in footer
 */
const selectedPaths: Array<string> = [];
const CustomRoutes: TRoutes = getRoutes(selectedPaths);

export default CustomRoutes;
