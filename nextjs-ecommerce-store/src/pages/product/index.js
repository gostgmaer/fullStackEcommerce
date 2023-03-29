import { useAuthContext } from "@/context/AuthContext";
import Layout from "@/layout";
import { useEffect } from "react";

const Index = () => {
  const { protectedRouteCheck, pageLoading } = useAuthContext();
  useEffect(() => {
    protectedRouteCheck();
  }, []);
  return (
    <Layout>
      <div>index</div>
    </Layout>
  );
};

export default Index;
