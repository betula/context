

module.exports = () => {

  print('print init');

  function print(...value) {
    console.log(...value)
  }

  return print;

};
