const { getToken } = require("next-auth/jwt");

const getSession = async (req) => { 

  const {authorised} = await getToken({ req, secret:secret });

 }