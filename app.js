const http = require("http");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const server = http.createServer(async (req, res) => {
  const randomDelay = Math.floor(Math.random() * 2000) + 1000;
  await delay(randomDelay);

  if (Math.random() < 0.1) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
    return;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
