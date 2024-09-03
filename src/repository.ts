import { User } from './User';

export class UserRepository {
  async create(user: User) {
    console.log(user);
  }
}