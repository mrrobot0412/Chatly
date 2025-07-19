const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors({ origin: '*'}));
 const dotenv = require("dotenv");
dotenv.config();
const { chats } = require("./data/data");





app.get("/", (req, res) => {
  res.send("API is running ");
});
app.get('/api/chat', (req, res) => {
    res.send(chats)

});
// app.get('/api/chat/:id', (req, res) => {   
//     const singleChat = chats.find((chat) => chat._id === req.params.id);
//     res.send(singleChat);
// });
const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`Server is running on port ${PORT}`);
});