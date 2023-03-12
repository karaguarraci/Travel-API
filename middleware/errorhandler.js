const errorHandler = (error, req, res, next) => {
  if (error.name === "JsonWebTokenError") {
    return res
      .status(403)
      .json({ message: "The token you provided could not be verified." });
  }
  if (error.name === "Cast Error") {
    return res.status(400).json({
      message:
        "The ID you provided was not valid. Please make sure that you used a correct ObjectID. To see all the valid object ids, make a GET request to the /countries route. ",
    });
  }
  console.log(error);

  return res.status(500).json({ message: "Internal server error" });
};

export default errorHandler;
