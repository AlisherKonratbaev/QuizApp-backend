import jwt from "jsonwebtoken";

const checkAuth = (req, res, next) => {
  if(req.method === "OPTION") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "Пользователь не авторизован" });
    }

    const decodeData = jwt.verify(token, process.env.SECRET);
    req.user = decodeData;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Пользователь не авторизован" });
  }
}

export default checkAuth;