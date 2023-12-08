const { createUser,
    createUserP,
    getUserByUserId,
    getUsers,
    getUsersP,
    updateUser,
    deleteUser,
    login,
    register, 
    getJoinedUsers} = require("./user.controller");
const router =require("express").Router();
const {checkToken} =require("../../auth/token_validation")

router.post("/",checkToken, createUser);// Creates a product type in the product_types table
router.post("/products",checkToken, createUserP); //Creates a product in the products table
router.get("/",checkToken, getUsers);//returns all product types from the product types table
router.get("/products",checkToken, getUsersP);//returns all products from the products table
router.get("/all",checkToken, getJoinedUsers);// returns from both tables combined

//router.post("/", createUser);
router.get("/:id",checkToken, getUserByUserId);//returns product from products table by id
router.post("/login", login);// login authentication
router.post("/register", register)// for registering new users
router.patch("/",checkToken, updateUser);//Updating a product from products table
router.delete("/",checkToken, deleteUser);//Deleting a product from products table
module.exports = router;