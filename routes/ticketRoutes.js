const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Ticket = mongoose.model("Ticket");

module.exports = (app) => {
  app.get("/api/ping", async (req, res) => {
    res.send({ res: "pong" });
  });

  app.get("/api/tickets/:id", async (req, res) => {
    const ticket = await Ticket.findOne({
      // _user: req.user.id,
      _id: req.params.id,
    });

    res.send(ticket);
  });

  app.get("/api/tickets", async (req, res) => {
    // { _user: req.user.id }
    const tickets = await Ticket.find({});

    res.send(tickets);
  });

  app.post("/api/tickets", requireLogin, async (req, res) => {
    const { title, content } = req.body;

    const ticket = new Ticket({
      title,
      content,
      // _user: req.user.id,
    });

    try {
      await ticket.save();
      res.send(ticket);
    } catch (err) {
      res.send(400, err);
    }
  });
};
