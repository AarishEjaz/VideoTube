class ApiError extends Error {
    constructor(
        statusCode,
        message,
        errors=[],
        stack=''
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.error = error
        this.success = false
        this.errors = this.errors //errors bhi ho sakta hai baad me

        if(stack) {
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}