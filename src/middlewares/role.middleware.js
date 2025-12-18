// this is higher order function as this is function return karne wala function

module.exports = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) // checks if the role is allowed or not in the list
       {
      return res.status(403).json({ msg: "Access denied" }); // unauthorized 
    }
    next();
  };
};

// role based access control (rbac)

//	•	auth.middleware → who you are
//	•	role.middleware → what you can do