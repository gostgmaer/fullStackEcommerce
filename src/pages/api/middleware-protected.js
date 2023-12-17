// pages/api/middleware-protected.js
import authenticateMiddleware from '../../middleware/auth';

const handler = (req, res) => {
  res.status(200).json({ message: 'Protected route', user: req.user });
};

export default authenticateMiddleware(handler);
