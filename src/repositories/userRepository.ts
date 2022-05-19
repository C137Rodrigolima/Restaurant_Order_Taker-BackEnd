import { User } from "@prisma/client";
import { prisma } from "../database.js";

export type CreateUserData = Omit<User, "id">;
export type LoginData = Omit<User, "id" | "name">;

function findByEmail(userEmail: string){
    return prisma.user.findUnique({
        where:  {
            email: userEmail
        }
    })
}

function findAdmByEmail(admEmail: string){
    return prisma.adm.findUnique({
        where: {
            email: admEmail
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

export async function findAdmById(id: number) {
    return prisma.adm.findUnique({
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
    findAdmByEmail,
    findById,
    findAdmById
}