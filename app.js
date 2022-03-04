const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const houseRoute = require("./routes/house");
const app = express();

// connect to mongo
mongoose.connect(
	process.env.MONGO_url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("database is connected");
	}
);

// middleware
app.use(express.json());

app.get("/", function (req, res) {
	res.send("Hello World");
});

// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/house", houseRoute);

app.listen(process.env.PORT || 5000, () =>
	console.log("listening on the port sha or port ")
);
