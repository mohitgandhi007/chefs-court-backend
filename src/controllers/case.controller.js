const Case = require("../models/Case");

exports.submitCase = async (req, res) => {
  const newCase = await Case.create({
    submittedBy: req.user.id,
    role: req.user.role,
    argument: req.body.argument,
    evidenceUrl: req.body.evidenceUrl
  });

  res.status(201).json(newCase);
};

exports.getAllCases = async (req, res) => {
  const filter =
    req.user.role === "juror" ? { status: "approved" } : {};

  const cases = await Case.find(filter).populate(
    "submittedBy",
    "name role"
  );

  res.json(cases);
};

exports.approveCase = async (req, res) => {
  const updated = await Case.findByIdAndUpdate(
    req.params.id,
    { status: "approved" },
    { new: true }
  );

  res.json(updated);
};

exports.rejectCase = async (req, res) => {
  const updated = await Case.findByIdAndUpdate(
    req.params.id,
    { status: "rejected" },
    { new: true }
  );

  res.json(updated);
};

exports.deleteCase = async (req, res) => {
  await Case.findByIdAndDelete(req.params.id);
  res.json({ msg: "Case deleted successfully" });
};