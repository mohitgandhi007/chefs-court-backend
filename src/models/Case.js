const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema(
  {
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    role: String,
    argument: {
      type: String,
      required: true
    },
    evidenceUrl: String,
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Case", caseSchema);