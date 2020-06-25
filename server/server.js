import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import ReactDomServer from "react-dom/server";
import App from "../src/App";
import cp from "cookie-parser";
import { StaticRouter } from "react-router-dom";
const PORT = 8000;
const app = express();
app.use(cp());
app.use(express.static(path.join(__dirname, "../build"), { index: false }));
app.use("/", (req, res, next) => {
  const { token } = req.cookies;
  if (req.url === "/login" || req.url === "/signup" || req.url === "/")
    if (token) {
      return res.redirect("/home");
    }
  if (
    req.url === "/home" ||
    req.url === "/elections" ||
    req.url === "/post" ||
    req.url === "/contact" ||
    req.url === "/about"
  )
    if (!token) {
      return res.redirect("/");
    }
  fs.readFile(
    path.join(__dirname, "../build/index.html"),
    "utf-8",
    (err, result) => {
      if (err) return res.status(500).send(err.message);
      return res.send(
        result.replace(
          `<div id="root"></div>`,
          `<div id="root">${ReactDomServer.renderToString(
            <StaticRouter location={req.url}>
              <App></App>
            </StaticRouter>
          )}</div>`
        )
      );
    }
  );
});
app.listen(PORT, () => {
  console.log("server is listening on port " + PORT);
});
