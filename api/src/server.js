const App = require('./app');
const logger = require('./config/logger');

App.listen(8080);
logger.info('Server running on port: 3000');
