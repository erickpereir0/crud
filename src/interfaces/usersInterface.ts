export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface UsersCreate {
  name: string;
  email: string;
  password: string;
}

export interface UserRepository {
  create(data: UsersCreate): Promise<User>;
    findById(id: string): Promise<User | null>;
    delete(id: string): Promise<User | null>;
    update({id,name,email,password}: User): Promise<User | null>;
}
