/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Videogame, conn } = require("../../src/db.js");

const agent = session(app);
const videogame = {
  name: "Super Mario Bros",
  description: "muy bueno",
  released: "2013-09-17",
  rating: 4.48,
  genres: ["Action", "Shooter"],
  platforms: ["PC", "PlayStation", "Xbox"],
  img: "https://techonlivesv.com/wp-content/uploads/2019/09/mario_TechnoliveSV-1.png",
};

describe("Videogame routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Videogame.sync({ force: true }).then(() => Videogame.create(videogame))
  );
  describe("GET /videogames", () => {
    it("should get 200", () => agent.get("/videogames").expect(200));
  });
});

////////////////////////////////////////////////////////////////////////////////////////
describe("Obtain a Videogame by id or name", () => {
  describe("GET /api/videogames/:id", () => {
    it("response 200 if id", () => agent.get("/videogames/3498").expect(200));
  });

  describe("GET /api/videogames?name=xxx", () => {
    it("response 200 if a name", () =>
      agent.get("/videogames?name=Grand").expect(200));
  });

  describe("/api/genres", function () {
    it("GET respond with a status 200 if you find genres", () =>
      agent.get("/genres").expect(200));
  });
});
