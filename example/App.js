const
  Context = require('../lib/Context'),
  Path = require('path')
  ;

module.exports = () =>  {
  const
    SERVICES_FOLDER = 'services';

  return Context(
    Path.join(__dirname, SERVICES_FOLDER)
  );
};
