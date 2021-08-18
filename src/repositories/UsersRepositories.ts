import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UserRepositories extends Repository<User> {} //extends serve para estender os metodos ja existentes da classe Repository do typeorm

export { UserRepositories };
