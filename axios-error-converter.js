class ConvertedAxiosError extends Error {

  constructor(axiosError) {
    const response = axiosError.response && {
      data: axiosError.response.data,
      status: axiosError.response.status,
      headers: axiosError.response.headers,
    };
    const errorMessage = response && response.data && response.data.message || axiosError.message;
    const statusCode = response && response.status;
    
    super(errorMessage);
    this.name = this.constructor.name;
    
    this.config = axiosError.config;
    this.statusCode = statusCode;
    this.response = response;
  }
}

module.exports = ConvertedAxiosError;
