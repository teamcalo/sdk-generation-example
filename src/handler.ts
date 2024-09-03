import { UserDTO } from "./dto";
import { UserRepository } from "./repository";
import { RequestSchema, CreateUserResponseSchema } from "./schemas/v1/schemas";
import { User } from "./User";

const userRepository = new UserRepository();

export default async (event) => {
  const requestBody = event.body;

  try {
    RequestSchema.parse(requestBody);
  } catch (error) {
    return {
      statusCode: 422,
      body: JSON.stringify(error),
    };
  }

  const user = new User(
    requestBody.name,
    requestBody.email,
    requestBody.phoneNumber,
    requestBody.address
  );

  await userRepository.create(user);
  const response: CreateUserResponseSchema = UserDTO.createResponse(user);

  return {
    statusCode: 201,
    body: JSON.stringify(response),
  };
};
