const { secret } = require("@/config/setting");
const { getToken } = require("next-auth/jwt");

const getSession = async (req) => { 

  return await getToken({ req, secret:secret });

 }