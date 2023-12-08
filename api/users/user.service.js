const pool =require("../../config/database");

module.exports = {
    createP: (data, callBack) => {
        pool.query(
            `insert into products(product_name, item_code, product_type_id) 
                values(?,?,?)`,
      [
        data.product_name,
        data.item_code,
        data.product_type_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
        );
    },
    create: (data, callBack) => {
        pool.query(
            `insert into product_types(product_type_id, product_type_name) 
                values(?,?)`,
      [
        data.product_type_id,
        data.product_type_name
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
        );
    },

registerUser: (user, callBack) => {
    pool.query(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [user.email, user.password],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
      getUserByUserEmail: (email, callBack) => {
        pool.query(
          `SELECT * FROM users WHERE email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
    },
    
    getUserByUserId: (id, callBack) => {
        pool.query(
          `select product_id, product_name, item_code, product_type_id from products where product_id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
    getUsers: callBack => {
        pool.query(
          `select product_type_id, product_type_name from product_types`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },getUsersP: callBack => {
        pool.query(
          `select product_id, product_name, item_code, product_type_id from products`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      getJoinedUsers: callBack => {
        pool.query(
          `SELECT p.product_id, p.product_name, p.item_code, pt.product_type_name
      FROM products p
      JOIN product_types pt ON p.product_type_id = pt.product_type_id`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
    updateUser: (data, callBack) => {
        pool.query(
            `UPDATE products SET product_name=?, item_code=?, product_type_id=? WHERE product_id = ?`,
          [
            data.product_name,
            data.item_code,
            data.product_type_id,
            data.product_id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
    deleteUser: (data, callBack) => {
        pool.query(
          `delete from products where product_id = ?`,
          [data.product_id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }
}