var PORT = 3001;
var io = require("socket.io").listen(PORT);
var pg = require("pg");
require('events').EventEmitter.defaultMaxListeners = 0;
// emitter.setMaxListeners()
// app.use('/public', express.static('/path/to/public/juntos.mp3'));

const pg_client = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "livechat",
  password: "123456",
  port: 5432,
});
pg_client.connect();

var query = pg_client.query("LISTEN new_message");

io.on("connection", function (socket) {
  // console.log("Connected to port " + PORT);
  socket.emit("connected", { connected: true });

  // console.log("1")
  socket.on("Message", function (SendMessage) {
    // console.log("2")
    pg_client.on("notification", function () {
      // console.log('3')
      pg_client
        .query("SELECT COUNT(*) FROM messages")
        .then((result) => {
          // console.log("4")
        
          socket.emit("New_Message", {
            MessageCount: result.rows[0].count,         
          });
          // socket.emit('audioAdmin');
        });

        // pg_client
        // .query("SELECT COUNT(*) FROM messages")
        // .then((result) => {
        //   // console.log("4")
          
        //   socket.emit("New_Message_Guest", {
        //     MessageCountGuest: result.rows[0].count,         
        //   });
        //   socket.emit('audioAdmin');
        // });

    });
  });

});
