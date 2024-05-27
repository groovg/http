const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.get("/", async (req, res) => {
  const randomDelay = Math.floor(Math.random() * 2000) + 1000;
  await delay(randomDelay);

  if (Math.random() < 0.1) {
    res.status(500).render("error", { delay: (randomDelay / 1000).toFixed(1) });
    return;
  }

  res
    .status(200)
    .send(
      `Hello, World! Response time: ${(randomDelay / 1000).toFixed(1)} seconds`
    );
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
