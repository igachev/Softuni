function requestValidator(obj) {
    let uriPattern = /^(?<uri>[a-z0-9\.]+)$/gm
    let messagePattern = /^[^<>\\&\'\"]+$/gm

    let validMethods = ['GET','POST','DELETE','CONNECT']
    let validVersions = ['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0']

    if(!validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }

    if(!obj.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if(!obj.uri.match(uriPattern) && obj.uri !== '*') {
        throw new Error('Invalid request header: Invalid URI')
    }

    if(!validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }

    if(!obj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message')
    }

    if(!obj.message.match(messagePattern) && obj.message !== '') {
        throw new Error('Invalid request header: Invalid Message')
    }

    return obj;
}

console.log(requestValidator({
    method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}))