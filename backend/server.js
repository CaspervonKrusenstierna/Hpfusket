const express = require("express");
const mongoose = require("mongoose")
const path = require("path")
const user = require("./models/User") // Just to create the mongoose schemas
const Auth = require("./controllers/Auth/Auth")
const cookieParser = require("cookie-parser")
const publicRouter = require("./routes/public")
const memberRouter = require("./routes/member")
const adminRouter = require("./routes/admin")

require("dotenv").config({ path:__dirname + "/.env" })
const db = mongoose.connect(process.env.DATABASE)
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "builds", "build")));
app.use("/dashboard", Auth.Auth0, express.static(path.join(__dirname, "builds",  "build")));
app.use("/dashboard/purchase", Auth.Auth0, express.static(path.join(__dirname, "builds",  "build")));
app.use("/dashboard/info", Auth.Auth1, express.static(path.join(__dirname, "builds",  "build")));
app.use("/dashboard/simulation", Auth.Auth1, express.static(path.join(__dirname, "builds",  "build")));
app.use("/dashboard/cheat", Auth.Auth1, express.static(path.join(__dirname, "builds",  "build")));
app.use("/dashboard/admin", Auth.Auth2, express.static(path.join(__dirname, "builds",  "build")));

app.use(publicRouter);
app.use(memberRouter);
app.use(adminRouter);
app.listen(3000, "127.0.0.1", () => {console.log("connected")});