/**
 *
 * Asynchronously loads the component for Stapes
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
