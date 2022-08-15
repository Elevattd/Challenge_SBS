const sockets = (io) => {
  try {
    io.on("connection", (socket) => {
      console.log("SOCKET.IO    --> ON:", socket.client.id);

      socket.on("createProduct", () => {
        io.emit("updateList");
      });

      socket.on("updateProduct", () => {
        io.emit("updateList");
      });

      socket.on("deleteProduct", () => {
        io.emit("updateList");
      });

      io.on("disconnect", () => {
        console.log("SOCKET.IO    --> DISCONNECT", socket.client.id);
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = sockets;
