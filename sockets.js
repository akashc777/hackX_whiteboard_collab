function listen(io) {
    const whiteboardNamespace = io.of("/whiteboard");
    const chatNamespace = io.of("/chat");
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
    chatNamespace.on("connection", (socket) => {
        
        socket.on('chat', message => {
            console.log('From client: ', message);
            socket.broadcast.emit('chat', message);
          });
    });
}

module.exports = { listen };
