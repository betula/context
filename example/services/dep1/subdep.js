

module.exports = ({ print }) => {
  print('dep1 subdep init');

  return () => {
    print('dep1 subdep call');
  }
};
