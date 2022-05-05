const { Videogame, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Videogame model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Videogame.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Recipe.create({ name: "Super Mario Bros" });
      });
    });

    ////////////////////////////////////////////////////////////////////////////

    describe("rating", () => {
      it("should throw an error if rating is null", (done) => {
        Videogame.create({})
          .then(() =>
            done(
              new Error("notNull Violation: videogame.rating cannot be null")
            )
          )
          .catch(() => done());
      });
      it("should work when its a valid rating value", () => {
        Videogame.create({ rating: "4.5" });
      });
    });

    describe("released", () => {
      it("should throw an error if released is null", (done) => {
        Videogame.create({})
          .then(() =>
            done(
              new Error("notNull Violation: videogame.released cannot be null")
            )
          )
          .catch(() => done());
      });
      it("should work when its a valid released value", () => {
        Videogame.create({ released: "2018/12/12" });
      });
    });
  });
});
