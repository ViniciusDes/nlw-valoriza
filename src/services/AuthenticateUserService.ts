import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRespositories = getCustomRepository(UserRepositories);

    const user = await usersRespositories.findOne({ email });

    if (!user) {
      throw new Error("Email/password incorrect");
    }

    const authenticated = await compare(password, user.password);

    if (!authenticated) {
      throw new Error("Email/password incorrect");
    }

    const token = sign(
      {
        email: user.email,
      },
      "7c8596a812231cce02a46f8c65ccbe22",
      { subject: user.id, expiresIn: 3000 }
    );

    return token;
  }
}

export { AuthenticateUserService };
