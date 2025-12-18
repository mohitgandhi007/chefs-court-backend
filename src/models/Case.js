const mongoose = require("mongoose"); //connects node.js to the mongoDB. helps in making schema and models
// why do we use mongoose? this is because the mongodb in gerneal stores everything randomly and thus to store everything systematically we use this mongoose to provide schema
// without this the db structure is uncontrolled


// here we define the schema of the case, basically we are giving the blurprint of this case thing like it will look
const caseSchema = new mongoose.Schema(
  {

    // this stores which user submitted the case
    // this contains the actual data
    // we use the objectid here as mongodb gives unique ids to each document and type of this id is objectid
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    // this tells us about who submitted the case: plaintiff or the defendant
    role: String,

    // here the user puts his/her argument
    //here required is true and therefore empty cases will not be submitted, other db will contain the garbage value too
    argument: {
      type: String,
      required: true
    },

    // here the defendant or the plaintiff will submit the evidence in the form of link, photo, doc etc.
    //here we dont use req as this maybe or may not be imp for the defandant or the plaintiff to submit so this depends upon him/her to submit or not
    evidenceUrl: String,

    //most important part of the file
    //this tells about of the case and the status of it, whether it has been approved, pending, rejected.
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"], // list of allowed fixed values. if some other value is entered then mongodb will throw an error.
      default: "pending" // so that whenever the user submits the case, it will automatically assign it as the pending case.
      // this is for data security like without this if it becomes public then the jurors will be able to see the case and this will compromise the security of the code.
    }
  },
  { timestamps: true } // this adds 2 fields: createdAt and updatedAt which tells us that when was the case created and updated which helps in the sorting of the cases.
);

module.exports = mongoose.model("Case", caseSchema);// this converts the schema into the model and names it as the case
// this creates a collection in mongodb named case


// mongodb just stores the id and nothing else like not the entire data
// use of populate()- where the id is present, fill that entire thing with the related data
//ref: user - here what this does is that it tells to go the user part and access the entire data of that particular objectid so that we can access the name, email and other stuff of the user and thus replaces the id
// without populate() we just see the object id and not the details