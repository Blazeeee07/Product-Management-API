const {create,
    createP,
    getUserByUserEmail,
    getUserByUserId,
    getUsers,
    getUsersP,
    getJoinedUsers,
    updateUser,
    registerUser,
    deleteUser} = require("./user.service");

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");


module.exports = {
    createUserP: (req, res) => {
        const body = req.body;
        createP(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
      },
    createUser: (req, res) => {
      const body = req.body;
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    
register: (req, res) => {
  const body = req.body;


  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt);

  registerUser(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: 0, message: 'Internal Server Error' });
    }

    return res.status(201).json({ success: 1, message: 'User registered successfully' });
  });
},

login: (req, res) => {
    const body = req.body;
    getUserByUserEmail(body.email, (err, results) => {
        if (err) {
            console.log(err);
        }
        if (!results) {
            return res.json({
                success: 0,
                data: "Invalid email or password"
            });
        }

        const result = compareSync(body.password, results.password);

        if (result) {
            results.password = undefined;

            const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
                expiresIn: "1h"
            });

            return res.json({
                success: 1,
                message: "login successfully",
                token: jsontoken
            });
        } else {
            return res.json({
                success: 0,
                data: "Invalid email or password"
            });
        }
    });
},

    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record not Found"
            });
          }
          results.password = undefined;
          return res.json({
            success: 1,
            data: results
          });
        });
      },
    getUsers: (req, res) => {
        getUsers((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getUsersP: (req, res) => {
        getUsersP((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getJoinedUsers: (req, res) => {
        getJoinedUsers((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
    updateUser: (req, res) => {
        const body = req.body;
        updateUser(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            message: "updated successfully"
          });
        });
      },    
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record Not Found"
            });
          }
          return res.json({
            success: 1,
            message: "user deleted successfully"
          });
        });
      }
}