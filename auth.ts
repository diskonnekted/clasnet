import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            name: "Kredensial",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Kata Sandi", type: "password" },
            },
            authorize: async (credentials) => {
                const email = credentials?.email ? String(credentials.email) : "";
                const password = credentials?.password ? String(credentials.password) : "";
                if (!email || !password) return null;
                const user = await prisma.pengguna.findUnique({
                    where: { email },
                    select: { id: true, email: true, namaLengkap: true, kataSandi: true, peran: true, aktif: true },
                });
                if (!user || !user.aktif) return null;
                const valid = await bcrypt.compare(password, user.kataSandi);
                if (!valid) return null;
                return {
                    id: String(user.id),
                    email: user.email,
                    name: user.namaLengkap,
                    role: user.peran,
                };
            },
        }),
    ],
    session: { strategy: "jwt" },
    trustHost: true,
    secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.role = (user as unknown as { role?: string }).role;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (session.user) {
                (session.user as unknown as { role?: string }).role = token.role as string | undefined;
            }
            return session;
        },
    },
});
