import { User, UserRepository, UsersCreate } from "../interfaces/usersInterface";
import { UserRepositoryPrisma } from "../repositories/usersRepository";

export class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepositoryPrisma();
  }
    async create({ name, email, password}: UsersCreate): Promise<User> {

        const result = await this.userRepository.create({ name, email, password });

        return result;
    }

    async findById(id: string): Promise<User | null> {
        const result = await this.userRepository.findById(id);
        return result;
    }

    async delete(id: string): Promise<User | null> {
        const result = await this.userRepository.delete(id);
        return result;
    }

    async update({ id, name, email, password }: User): Promise<User | null> {
        const result = await this.userRepository.update({ id, name, email, password });
        return result;
    }
}
