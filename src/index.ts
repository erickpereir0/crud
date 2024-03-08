import "dotenv/config";
import fastify from "fastify";
import { userRoutes } from "./routes/usersRoutes";

const app = fastify();

app.register(userRoutes, { prefix: '/users' });

app.listen({port: 3000}).then(() => {
    console.log(`Server is running on http://localhost:3000`);
    console.log('sla');
     });
