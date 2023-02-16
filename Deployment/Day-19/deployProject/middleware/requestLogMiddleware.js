
export const requestLogMiddleware = (request, response, next) => {
  console.log("Request query", request.query)
  console.log("Request method", request.method)
  console.log("Request url", request.url)
  console.log("Request headers", request.headers)
  console.log("Request httpVersion", request.httpVersion)
  console.log("Request body", request.body);
  next();
};
