class ApiError extends Error {
  constructor(statusCode, messgae) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = ApiError;
