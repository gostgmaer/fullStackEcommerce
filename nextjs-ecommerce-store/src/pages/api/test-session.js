import { getSession } from "next-auth/react";

const handler= async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Unauthenticated User" });
  } else {
    res.status(200).json({ error: "Success Authenticated User",session });
  }
};

export default handler