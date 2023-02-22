class myPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined
        this._onSuccess = null;
        this._onError = null;
        executor(this._resolve.bind(this),this._reject.bind(this))
    }

    _resolve(result) {
        this.state = 'fulfilled'
        this.value = result
        if(typeof this._onSuccess === 'function') {
            this._onSuccess(this.value)
        }
    }

    _reject(error) {
        this.state = 'failed'
        this.value = error
        if(typeof this._onError === 'function') {
            this._onError(this.value)
        } 
    }

    then(callback) {
        this._onSuccess = callback
        if(this.state === 'fulfilled') {
            this._onSuccess(this.value)
        }
        return this;
    }

    catch(callback) {
        this._onError = callback
        if(this.state === 'failed') {
            this._onError(this.value)
        }
        return this;
    }

}

console.log('before promise');

    new myPromise((resolve,reject) => {
        let i = 1;
        if(i > 2) {
            reject('error')
        }
        else {
            resolve('continue')
        }
    })
    .then((res) => {
        console.log('Then returned: ' + res);
    })
    .catch((err) => {
        console.log(err);
    })

    console.log('after promise')