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
voteSchema.index({ caseId: 1, jurorId: 1 }, { unique: true }); // 1 here means that it is in ascending order
/* unique here is the key thing which prevents the duplicate voting like it checks for the pair of caseid and
jurorid to be unique together, if it is not then it will not allow the juror to vote and if its unique the 
juror will be able to vote for that particular case*/

module.exports = mongoose.model("Vote", voteSchema);