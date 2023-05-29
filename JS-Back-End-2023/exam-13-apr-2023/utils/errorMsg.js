function getFirstMongooseError(error) {
const firstError = Object.values(error.errors)[0].message
return firstError
}

exports.getErrorMsg = (error) => {
switch(error.name) {
    case 'ValidationError':
       return getFirstMongooseError(error)

    case 'Error':
        return error.message

    default:
        return error.message
}

}