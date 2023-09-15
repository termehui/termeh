var liveServer = require("live-server");
liveServer.start({
    port: 8181, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: ".", // Set root directory that's being served. Defaults to cwd.
    file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [["/dist"]], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
});
