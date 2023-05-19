const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const tokenWithBearer = req.headers.authorization;
    //validasi apakah token ada atau tidak
    if(tokenWithBearer == undefined){
      return res.json({
        error: true,
        message: 'token is null or undefined'
      });
    }

    const token = tokenWithBearer.split(' ')[1];
  
    
    //validasi token user
    jwt.verify(token, 'rahasia-kunci-rahasia', (err, user) => {
      if (err) {
        return res.json({
            error: true,
            message: 'verify token is failed'
        });
      }
  
      req.user = user;
      console.log('verify token is success');
      next();
    });
}

module.exports = authenticateToken;