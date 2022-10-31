/* eslint-disable no-undef */
const express = require("express");
const { PORT } = require("./config");
const { dbconnect } = require("./db/dbconnect");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");
const path = require("path");

const app = express();

// middleware
app.use(express.static(path.join(__dirname, "/client/dist/client")));

app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/v1", require("./routes/api.route"));

// Error Responder
app.use(errorHandler);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/dist/client", "index.html"));
// });

// DB Connection
dbconnect();

app.listen(PORT, () => console.log("Server running at port", PORT));
