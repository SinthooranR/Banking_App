// a error handling model we can make use of
class HttpError extends Error{ 
    constructor(message, errorCode) {
        super(message); //Adds a "message" property
        this.code = errorCode; //Adds a code property
    }
}

module.exports = HttpError;

