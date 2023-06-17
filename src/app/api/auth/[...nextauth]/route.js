import User from "@/models/User";
import connect from "@/utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credendials) {
        await connect();

        try {
          const user = await User.findOne({ email: credendials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credendials.pass,
              user.pass
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong credentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: "/dashboard/login",
});

export { handler as GET, handler as POST };
