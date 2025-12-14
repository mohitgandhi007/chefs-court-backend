const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Case"
  },
  jurorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  verdict: {
    type: String,
    enum: ["guilty", "not_guilty"],
    required: true
  }
});

// Prevent double voting
voteSchema.index({ caseId: 1, jurorId: 1 }, { unique: true });

module.exports = mongoose.model("Vote", voteSchema);