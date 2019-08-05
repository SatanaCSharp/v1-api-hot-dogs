export class Util {

    private _isHandlerAsyncExceptionsHooked: boolean;
    constructor() {
        this._isHandlerAsyncExceptionsHooked = false;
    }
    public handleAsyncExceptions() {
        if(this._isHandlerAsyncExceptionsHooked === false){
            process.on('unhandledRejection', (err) => {
                throw err;
            });
        }
        this._isHandlerAsyncExceptionsHooked = true;
    }
}
export const util = new Util();