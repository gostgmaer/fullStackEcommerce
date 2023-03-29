import Layout from "@/layout";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const Profile = () => {
  const [loading, setloading] = useState(true);
  const [open, setopen] = useState(true);

  useEffect(() => {
    const sequrePage = async () => {
      const session = await getSession();
      console.log(session);
      if (!session) {
        signIn();
      } else {
        setloading(false);
      }
    };
    sequrePage();
  }, []);

  // if (loading) {
  //   return (
  //     <div>
  //       <Backdrop
  //         sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //         open={loading}
  //       >
  //         <CircularProgress color="inherit" />
  //       </Backdrop>
  //     </div>
  //   );
  // }
  return (
    <Layout>
      <div>This is My Account Ellements</div>
    </Layout>
  );
};

export default Profile;
