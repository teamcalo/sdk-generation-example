import { CreateUserResponseSchema } from "./schemas/v1/schemas";
import { User } from "./User";

export class UserDTO {
  static createResponse(user: User): CreateUserResponseSchema {
    return {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber
    }
  }
}