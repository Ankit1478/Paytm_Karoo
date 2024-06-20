import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import db from "@repo/db/client";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "please use 12345678", required: true },
                password: { label: "Password", placeholder: "please use password ankit", type: "password", required: true }
            },
            async authorize(credentials: Record<"phone" | "password", string> | undefined) {
                if (!credentials) {
                    return null;
                }

                const existingUser = await db.user.findFirst({
                    where: { number: credentials.phone }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return { id: existingUser.id.toString(), name: existingUser.name, email: existingUser.number };
                    }
                    return null;
                }

                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                try {
                    const user = await db.user.create({
                        data: { number: credentials.phone, password: hashedPassword }
                    });
                    return { id: user.id.toString(), name: user.name, email: user.number };
                } catch (e) {
                    console.error(e);
                    return null;
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "secret",
    callbacks: {
        async session({ token, session }: { token: any, session: any }) {
            session.user.id = token.sub;
            return session;
        },
        async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        }
    }
};

export default NextAuth(authOptions);