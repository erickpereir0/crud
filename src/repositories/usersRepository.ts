import { User, UserRepository } from "../interfaces/usersInterface";
import { UsersCreate } from "../interfaces/usersInterface";
import { prisma } from "../database/prismaCliente";

export class UserRepositoryPrisma implements UserRepository {
    async create(data: UsersCreate): Promise<User> {
        const result = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            },
        }); 
        return result;
    }

    async findByEmail(email: string): Promise<User | null> {
        const result = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        return result;
    }

    async findById(id: string): Promise<User | null> {
        const result = await prisma.user.findUnique({
            where: {
                id,
            },
        });
        return result;
    }

    async delete(id: string): Promise<User | null> {
        const result = await prisma.user.delete({
            where: {
                id,
            },
        });
        return result;
    }

    async update({ id, name, email, password }: User): Promise<User | null> {
        const result = await prisma.user.update({
            where: {
                id,
            },
            data: {
                name,
                email,
                password,
            },
        });
        return result;
    }
}
