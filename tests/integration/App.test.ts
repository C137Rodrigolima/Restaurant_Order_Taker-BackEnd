import { faker } from "@faker-js/faker";
import { prisma } from "../../src/database.js";
import supertest from "supertest";
import app from "../../src/app.js";
import userBodyFactory from "../factories/bodyFactory.js";
import createUserFactory from "../factories/createUserFactory.js";

describe("App integrations tests", () => {
  describe("POST /register", ()=>{
    beforeEach(async () => {
      await prisma.$executeRaw`TRUNCATE TABLE users CASCADE`;
    });
    
    it("should return 201 given a valid body", async ()=>{
      const body = {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      }
      
      const response = await supertest(app).post("/register").send(body);
      const existentUser = await prisma.user.findMany({});
      
      expect(response.status).toEqual(201);
      expect(existentUser).not.toBeNull();
      expect(existentUser.length).toEqual(1);
    })
    
  })

  describe("POST /login", ()=>{
    beforeEach(async () => {
      await prisma.$executeRaw`TRUNCATE TABLE users CASCADE`;
    });
    
    it("should return 200 and a string-token given a valid body", async ()=>{
      const body = userBodyFactory();
      await createUserFactory(body);
      
      const response = await supertest(app).post("/login")
      .send({
        email: body.email,
        password: body.password
      });
      
      expect(response.status).toEqual(200);
      expect(response.body).not.toBeNull();
      expect(typeof response.body.token).toEqual("string");
    })
    
  })
  afterAll(async () => {
    await prisma.$disconnect();
  });
})
