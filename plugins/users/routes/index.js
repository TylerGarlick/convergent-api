'use strict';

import Utilities from '../../../lib/utilities';

import register from './register';
import users from './users';

export default Utilities.arrays.combine(users, register);
