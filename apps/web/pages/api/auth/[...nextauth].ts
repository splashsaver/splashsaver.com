import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [CredentialsProvider({})],
});
