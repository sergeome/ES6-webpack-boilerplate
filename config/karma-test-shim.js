Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');

var appContext = require.context('../src', true, /\.spec\.js/);

appContext.keys().forEach(appContext);