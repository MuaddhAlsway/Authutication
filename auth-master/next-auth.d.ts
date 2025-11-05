import { UserRole } from "@prisma/client"
import NextAuth, {type DefaultSession} from "next-auth"

export type ExtendedUser = DefaultSession['user'] & {

    role: UserRole
}
declare module '@next-auth' {
  interface session{
    user: ExtendedUser
  }
}


// import {JWT} form '@auth/core/jwt'


// declare module '@auth/core/jwt' {
//     interface JWT {
//         role?: 'ADMIN' | 'USER'
//     }
// }
