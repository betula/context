#!/usr/bin/env node --harmony

const
  App = require('../App')
  ;

main();

function main() {
  const app = App();

  app.dep1.print();
  app.Dep2().print();

}


