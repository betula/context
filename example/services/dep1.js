

module.exports = ({ print, subdep }) => {
  print('dep1 init');

  return {
    print: () => {
      subdep();
      print('dep1.print');
    }
  }
};
