const
  Fs = require('fs'),
  Path = require('path')
;

module.exports = function Context(path, parent) {

  const context = parent
    ? Object.create(parent)
    : {};

  function defService(serviceName) {
    const
      serviceRelativePath = Path.relative(__dirname, path),
      Service = require(`./${serviceRelativePath}/${serviceName}`);

    Object.defineProperty(context, serviceName, {
      get: function() {
        let
          childContextPath = Path.join(path, serviceName),
          childContext = context
        ;
        if (Fs.existsSync(childContextPath)) {
          childContext = Context(childContextPath, context);
        }

        const serviceInstance = Service(childContext);
        Object.defineProperty(context, serviceName, {
          value: serviceInstance,
          configurable: false
        });

        return serviceInstance;
      },
      configurable: true
    });
  }

  function getAvailableServiceNames() {
    const fileNames = Fs.readdirSync(path);
    return fileNames
      .filter(fileName => Path.extname(fileName) == '.js')
      .map(
        fileName => Path.basename(fileName, Path.extname(fileName))
      );
  }

  function defAvailableServices() {
    getAvailableServiceNames().forEach(defService);
  }

  defAvailableServices();

  return context;
};