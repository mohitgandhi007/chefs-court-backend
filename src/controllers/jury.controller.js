const mongoose = require("mongoose");
const Vote = require("../models/Vote");

exports.vote = async (req, res) => {
  const { verdict } = req.body;

  const vote = await Vote.create({
    caseId: req.params.caseId,
    jurorId: req.user.id,
    verdict
  });

  res.status(201).json(vote);
};

exports.results = async (req, res) => {
  const caseObjectId = new mongoose.Types.ObjectId(req.params.caseId);

  const results = await Vote.aggregate([
    { $match: { caseId: caseObjectId } },
    { $group: { _id: "$verdict", count: { $sum: 1 } } }
  ]);

  res.json(results);
};