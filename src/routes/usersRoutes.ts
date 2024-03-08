import { UserService } from "./../services/usersServices";
import { FastifyInstance } from "fastify";
import { UsersCreate } from "../interfaces/usersInterface";
import { User } from "@prisma/client";

export async function userRoutes(fastify: FastifyInstance) {
  const userService = new UserService();

  fastify.get("/", (req, reply) => {
    reply.send({ hello: "world" });
  });

  fastify.post<{ Body: UsersCreate }>("/", async (request, reply) => {
    const { name, email, password } = request.body;

    try {
      const data = await userService.create({ name, email, password });
      return reply.status(201).send(data);
    } catch (error) {
      return reply.status(400).send({ error });
    }
  });

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    async (request, reply) => {
      const { id } = request.params;

      try {
        const data = await userService.findById(id);
        return reply.status(200).send(data);
      } catch (error) {
        return reply.status(400).send({ error });
      }
    }
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    async (request, reply) => {
      const { id } = request.params;

      try {
        const data = await userService.delete(id);
        return reply.status(200).send(data);
      } catch (error) {
        return reply.status(400).send({ error });
      }
    }
  );

  fastify.put<{ Body: User }>("/", async (request, reply) => {
    const { id, name, email, password } = request.body;

    try {
      const data = await userService.update({ id, name, email, password });
      return reply.status(200).send(data);
    } catch (error) {
      return reply.status(400).send({ error });
    }
  });
}
