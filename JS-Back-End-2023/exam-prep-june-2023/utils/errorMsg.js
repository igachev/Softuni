
function firstMongooseError(error)  {
const firstError = Object.values(error.errors)[0].message
return firstError
}

exports.errorMsg = (error) => {
    switch(error.name) {
        case 'Error':
            return error.message;
        
        case 'ValidationError':
            return firstMongooseError(error)

        case 'default':
            return error.message
    }
}