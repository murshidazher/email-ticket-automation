const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  // _user: { type: Schema.Types.ObjectId, ref: "User" },
});

mongoose.model("Ticket", ticketSchema);
