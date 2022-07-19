const billSch = require("../models");

module.exports.index = (req, res) => {
  billSch.find({}, (err, bills) => {
    if (err) {
      res.send({ error: err.message });
    } else {
      res.json(bills);
    }
  });
};

module.exports.showid = (req, res) => {
  billSch.findById(req.params.id, (err, bill) => {
    if (err) {
      res.send({ error: err.message });
    } else {
      res.json(bill);
    }
  });
};

module.exports.create = (req, res) => {
  const bill = new billSch(req.body);
  bill.save((err, bill) => {
    if (err) {
      res.send({ error: err.message });
    } else {
      res.json(bill);
    }
  });
};

module.exports.update = (req, res) => {
  billSch.findByIdAndUpdate(req.params.id, req.body, (err, bill) => {
    if (err) {
      res.send({ error: err.message });
    } else {
      res.json(bill);
    }
  });
};

module.exports.delete = (req, res) => {
  billSch.findByIdAndRemove(req.params.id, (err, bill) => {
    if (err) {
      res.send({ error: err.message });
    } else {
      res.json(bill);
    }
  });
};
