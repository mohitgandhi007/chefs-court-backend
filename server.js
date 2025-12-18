// importing of files
const app = require("./src/app");
const connectDB = require("./src/config/db");

//using the function from db.js in the config folder
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});