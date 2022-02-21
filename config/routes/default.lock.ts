// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import { TRoute, TRoutes } from '@hoomies/noak.types.route';
import { createRoute } from '@hoomies/noak.functions.route';

const home: TRoute = createRoute('menu:page.home', '/');
const legal: TRoute = createRoute('menu:page.legal', '/p/legal', false, {
  fr: '/mentions-legales',
  en: '/legal-notice',
  es: '/informacion-legal',
});

/**
 * Configures Global Routes
 */
const DefaultRoutes: TRoutes = [home, legal];

export default DefaultRoutes;
