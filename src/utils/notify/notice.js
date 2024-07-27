import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notifySuccess = (_message, _duration=3000) => {
  toast.success(_message, {
    position: "top-right",
    autoClose: _duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const notifywarning = (_message, _duration=3000) => {
  toast.warn(_message, {
    position: "top-right",
    autoClose: _duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const notifyinfo = (_message, _duration=3000) => {
  toast.info(_message, {
    position: "top-right",
    autoClose: _duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const notifydefault = (_message, _duration=3000) => {
  toast(_message, {
    position: "top-right",
    autoClose: _duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const notifyerror = (_message, _duration=3000) => {
  toast.error(_message, {
    position: "top-right",
    autoClose: _duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};


const  useApiWithToaster = () => {
  const callApiWithToaster = async (apiCall, messages) => {
    try {
      toast(messages.start);
      const response = await apiCall();
      toast(messages.inProgress);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      toast(messages.success);
      return data;
    } catch (error) {
      toast(`${messages.failure}: ${error.message}`);
      throw error;
    }
  };

  return { callApiWithToaster };
};


export { notifySuccess, notifydefault, notifyerror, notifyinfo, notifywarning,useApiWithToaster };
