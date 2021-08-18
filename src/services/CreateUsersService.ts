import { UserRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepositories);

    if (!email) {
      throw new Error("Email invalid");
    }

    const userAlreadyExistis = await userRepository.findOne({
      email,
    });

    if (userAlreadyExistis) {
      throw new Error("User already exists");
    }

    const user = userRepository.create({
      name,
      email,
      admin,
    });

    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService };
