

module.exports = ({ print, subdep }) => {
  print('Dep2 init');

  return () => {
    print('Dep2 call');

    return {
      print: () => {
        subdep();
        print('Dep2 print')
      }
    }
  }
};
