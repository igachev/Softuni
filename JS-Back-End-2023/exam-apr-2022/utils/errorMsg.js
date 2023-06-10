
function firstMongooseError(error) {
    const firstError = Object.values(error.errors)[0].message;
    return firstError
}

function errorMsg(error) {
switch(error.name) {
    case 'Error':
    return error.message

    case 'ValidationError':
    return firstMongooseError(error)

    default:
    return error.message;
}
}

module.exports = errorMsg