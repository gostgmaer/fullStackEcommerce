export const containerId = process.env.NEXT_PUBLIC_CONTAINER || process.env.CONTAINER
export const tableId = process.env.NEXT_PUBLIC_TABLE || process.env.TABLE
export const contactTable = "contacts"
export const mongourl = process.env.MONGODB_URI
export const baseurl = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL
export const secret = process.env.NEXTAUTH_SECRET || process.env.NEXT_PUBLIC_SECRET
export const googleClient = process.env.GOOGLE_CLIENT_ID || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
export const googleSecret = process.env.GOOGLE_CLIENT_SECRET || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
export const githubClient = process.env.GITHUB_ID || process.env.NEXT_PUBLIC_GITHUB_ID
export const githubSecret = process.env.GITHUB_SECRET || process.env.NEXT_PUBLIC_GITHUB_SECRET
export const facebookClient = process.env.FACEBOOK_CLIENT_ID || process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID
export const facebookSecret = process.env.FACEBOOK_CLIENT_SECRET || process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
export const razorPayPublic = process.env.NEXT_PUBLIC_ROZORPAY_PUBLIC_KEY || process.env.RAZORPAY_PUBLIC_KEY || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

