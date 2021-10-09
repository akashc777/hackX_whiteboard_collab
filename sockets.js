function listen(io) {
    const whiteboardNamespace = io.of("/whiteboard");
    whiteboardNamespace.on("connection", (socket) => {
        // A User starts a path
        socket.on("startPath", function (data, sessionId) {
            socket.broadcast.emit("startPath", data, sessionId);
        });

        // A User continues a path
        socket.on("continuePath", function (data, sessionId) {
            socket.broadcast.emit("continuePath", data, sessionId);
        });

        // A user ends a path
        socket.on("endPath", function (data, sessionId) {
            socket.broadcast.emit("endPath", data, sessionId);
        });
    });
}

module.exports = { listen };
