export enum toastType {
    DEFAULT_ERROR = 'Internal Error',
    DEFAULT_SUCCESS = 'success',
    ERROR_MESSAGE = 'error-message',
    SUCCESS_MESSAGE = 'success-message'
}

export const NOTIFICATION_MESSAGES = {
    [toastType.DEFAULT_ERROR]: 'An error occured',
    [toastType.DEFAULT_SUCCESS]: 'Successful'
};
