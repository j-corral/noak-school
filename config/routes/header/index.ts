import DefaultRoutes from './default.lock';
import CustomRoutes from './custom';

const Routes = [...new Set(DefaultRoutes), ...new Set(CustomRoutes)];
export default Routes;
