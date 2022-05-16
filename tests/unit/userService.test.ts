import { faker } from "@faker-js/faker";
import { jest } from "@jest/globals";
import { UserRepository } from "../../src/repositories/userRepository.js";
import { userServices } from "../../src/services/userServices.js";
import { conflictError, unauthorizedError } from "../../src/utils/errorUtils.js";
import userBodyFactory from "../factories/bodyFactory.js";

describe("UserService tests", ()=>{
  describe("POST /register", ()=>{
    beforeEach(() => {
      jest.clearAllMocks();
      jest.resetAllMocks();
    });

    it("Should trow an Conflict Error given a duplicated email", async ()=>{
      const body = userBodyFactory();
      jest.spyOn(UserRepository, "findByEmail")
      .mockResolvedValue({id: 1, ...body});

      expect(userServices.signUp(body)).rejects.toEqual(
        conflictError("User email must be unique")
      );
    })
  });

  describe("POST /login", ()=>{
    beforeEach(() => {
      jest.clearAllMocks();
      jest.resetAllMocks();
    });

    it("Should trow an Conflict Error given a invalid email", async ()=>{
      const body = userBodyFactory();
      jest.spyOn(UserRepository, "findByEmail")
      .mockResolvedValue(null);
      
      expect(userServices.signIn({
        email: body.email,
        password: body.password
      })).rejects.toEqual(
        unauthorizedError("User should be registered")
      );
    })
    
    it("Should trow an Conflict Error given a invalid password", async ()=>{
      const body = userBodyFactory();
      jest.spyOn(UserRepository, "findByEmail")
      .mockResolvedValue({id: 1, ...body});
      
      expect(userServices.signIn({
        email: body.email,
        password: "wrongPassword"
      })).rejects.toEqual(
        unauthorizedError("User should be registered")
      );
    })
  });
})