import { request } from "http";

const express = "express";
const app = express();

app.get("/gadgets", (request, Response) => {
  Response.sendFile("/gadgets.html", { root: __dirname });
});
module.exports = app;
