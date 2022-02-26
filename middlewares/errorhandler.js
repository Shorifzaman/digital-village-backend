const errorControler = (error, request, response, next) => {
  // handling error (needs more update)
  if (error.name === 'CastError')
    return response.status(400).json({ error: 'malformated id' });
  if (err instanceof multer.MulterError)
    return response
      .status(400)
      .json({ error: 'A Multer error occurred when uploading.' });
  response.status(400).json({ error: 'something went wrong' });

  next(error);
};

module.exports = errorControler;
