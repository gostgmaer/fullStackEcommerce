/**
 * useLoginSubmit — Legacy hook from the Pages Router era.
 * NOT used in the current App Router auth flow.
 * Preserved for reference; the active login flow is in:
 *   src/components/global/common/forms/login.js (next-auth signIn)
 *
 * @deprecated Use signIn() from next-auth/react directly.
 */
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { notifyerror } from "@/utils/notify/notice";

// Stub contexts — replace with real imports when reactivating this hook
const UserContext = null;

const useLoginSubmit = (setModalOpen) => {
  // useRouter from next/navigation does not have .query — use useSearchParams instead
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ name, email, registerEmail, verifyEmail, password }) => {
    setLoading(true);
    const cookieTimeOut = 0.5;

    if (registerEmail && password) {
      // CustomerServices.customerLogin({ registerEmail, password })
      //   .then((res) => { ... })
      //   .catch((err) => { notifyerror(err.message); setLoading(false); });
      setLoading(false);
    }

    if (name && email && password) {
      // CustomerServices.verifyEmailAddress({ name, email, password })
      setLoading(false);
    }

    if (verifyEmail) {
      // CustomerServices.forgetPassword({ verifyEmail })
      setLoading(false);
    }
  };

  const handleGoogleSignIn = (user) => {
    if (user) {
      // CustomerServices.signUpWithProvider(user?.credential)
    }
  };

  return {
    handleSubmit,
    submitHandler,
    handleGoogleSignIn,
    register,
    errors,
    loading,
  };
};

export default useLoginSubmit;
