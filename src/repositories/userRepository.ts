import { User } from "@prisma/client";
import { prisma } from "../database.js";

export type CreateUserData = Omit<User, "id">;
export type LoginUserData = Omit<User, "id" | "name">;

function findByEmail(userEmail: string){
    return prisma.user.findUnique({
        where:  {
            email: userEmail
        }
    })
}

export async function findById(id: number) {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
}

function insert(userData: CreateUserData){
    return prisma.user.create({
        data: userData
    })
}

export const UserRepository = {
    insert,
    findByEmail,
    findById
}