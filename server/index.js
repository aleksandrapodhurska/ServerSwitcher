const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

app.use("/api", require("./routers/servers-router"));

app.listen(1000, () => console.log(`Server is running on 1000 port`));
