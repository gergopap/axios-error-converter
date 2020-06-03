class ConvertedAxiosError extends Error {

  constructor(axiosError) {
    const response = axiosError.response && {
      data: axiosError.response.data,
      status: axiosError.response.status,
      headers: axiosError.response.headers,
    };
    const errorMessage = getErrorMessageFromResponseData(response) || axiosError.message;
    const statusCode = response && response.status;
    
    super(errorMessage);
    this.name = this.constructor.name;
    
    this.config = axiosError.config;
    this.statusCode = statusCode;
    this.response = response;
  }

}

function getErrorMessageFromResponseData(response) {
  if (response && response.data) {
    if (response.data.message) {
      return response.data.message;
    } else {
      return JSON.stringify(response.data);
    }
  } else {
    return;
  }
}

module.exports = ConvertedAxiosError;
