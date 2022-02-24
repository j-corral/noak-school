import { TRoutes } from '@hoomies/noak.types.route';
import { createRoute } from '@hoomies/noak.functions.route';

/**
 * Configures Routes to display in menu
 */
const CustomRoutes: TRoutes = [
  createRoute('menu:page.about', '/p/about', false, {
    fr: '/a-propos',
    en: '/about',
    es: '/a-proposito',
  }),
  createRoute('menu:page.teacher', '/teacher', false, {
    fr: '/enseignant',
    en: '/teacher',
    es: '/maestro',
  }),
  createRoute('menu:page.rating', '/teacher/rating', false, {
    fr: '/enseignant/notation',
    en: '/teacher/rating',
    es: '/maestro/clasificacion',
  }),
];

export default CustomRoutes;
