const auth = async (req, res, next) => {
  if (req.query.username === 'Harman') {
    next();
  } else {
    res.send('You are not authorized');
  }

  console.log('Auth middleware');
  next();
};
export default auth;
