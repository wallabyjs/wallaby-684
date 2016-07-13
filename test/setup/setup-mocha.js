'use strict';

global.chai = require('chai');
global.expect = chai.expect;
global.sinon = require('sinon');
global.__DEV__ = false;
global.BASE_URL = 'http://localhost';

chai.use(require('sinon-chai'));
chai.use(require('chai-as-promised'));

require('ignore-styles');