module.exports = class Message {
  constructor(message, result, statusCode, version) {
    this.message = message;
    this.statusCode = statusCode;
    this.result = result !== undefined ? result : true;
    this.version = version ? version : "v1";
  }
  getMessage = () => this.message;
  getStatusCode = () => this.statusCode;
  getResult = () => this.result;
  getVersion = () => this.version;
  setMessage(message) {
    this.message = message;
  }
  setResult(result) {
    this.result = result;
  }
  setStatusCode(statusCode) {
    this.statusCode = statusCode;
  }
  setVersion(version) {
    this.version = version;
  }
};
