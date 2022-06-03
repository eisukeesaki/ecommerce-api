function logMiddlewareStack(req, res, next) {
  const express = require(`${__rootDir}/express`);

  console.log(express._router.stack);

  next();
}

module.exports = logMiddlewareStack;

