class ApiResponse extends Response {
      constructor(
            statusCode,
            data,
            message = "Request successful",
            errors = []
      ) {
            this.statusCode = statusCode;
            this.data = data;
            this.message = message;
            this.errors = errors;
            this.success = statusCode >= 200 && statusCode < 300;
      }
}