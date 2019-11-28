import { ErrorHandler, NgModule } from '@angular/core';

class BaseErrorHandler implements ErrorHandler {
    handleError(error) {
        console.error('Global', error);
    }
}

@NgModule({
    providers: [{ provide: ErrorHandler, useClass: BaseErrorHandler }]
})
export class ErrorHandlerModule {}
