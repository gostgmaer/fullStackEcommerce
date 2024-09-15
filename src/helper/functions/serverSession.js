const { authOptions } = require("@/app/api/auth/[...nextauth]/route");
const { getServerSession } = require("next-auth");


export const getToken = async (second) => { 
    const session = await getServerSession(authOptions);

    return session
 }