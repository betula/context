

module.exports = ({ print }) => {
  print('Dep2 subdep init');

  return () => {
    print('Dep2 subdep call');
  }
};
