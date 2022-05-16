import { faker } from "@faker-js/faker";
import { CreateUserData } from "../../src/repositories/userRepository.js";

export default function userBodyFactory() : CreateUserData {
  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}