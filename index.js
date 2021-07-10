const http = require("http");

const PORT = process.env.PORT || 5000;

const SERVER = http.createServer();

SERVER.listen(PORT);

SERVER.on("listening", () => {
    console.log("[Server]::LISTEN:%s", PORT);
});

// callback function for  checking connecting or error
SERVER.on("error", error => {
    throw new Error(`[Server]::ERROR:${error.message}`);
})