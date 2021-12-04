const App = require('./app');
const logger = require('./config/logger');

App.listen(3000);
logger.info('Server running on port: 3000');
