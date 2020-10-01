import { toast } from 'react-toastify';

const toaster = (message, options = {}) =>
  toast(message, {
    hideProgressBar: true,
    containerId: 'appLayoutToaster',
    type: 'success',
    autoClose: 3500,
    ...options,
  });

export default toaster;
