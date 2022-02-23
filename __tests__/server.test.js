"use strict";

const server = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(server.app);

describe("testing server", () => {
  it("testing 404 bad route", async () => {
    const response = await request.get("/xd");
    expect(response.status).toEqual(404);
  });

  it("testing 404 bad method", async () => {
    const response = await request.post("/");
    expect(response.status).toEqual(404);
  });


  it("testing 500 no name in query", async () => {
    const response = await request.get("/person");
    expect(response.status).toEqual(500);
  });

  it("testing 200 name is in query", async () => {
    const response = await request.get("/person?name=Moath");
    expect(response.status).toEqual(200);
  });
  
  it("testing output object is correct", async () => {
    const response = await request.get("/person?name=Moath");
    expect(typeof response.body).toEqual("object");
  });
});
