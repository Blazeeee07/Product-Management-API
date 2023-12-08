# Product-Management-API
The Product Management API is a robust backend system designed in Node.js Express.js and MySql to handle the management of products and product types in an organized and efficient manner. 

# Steps to run
// Clone the repository
git clone https://github.com/Blazeeee07/Product-Management-API.git

// Navigate to the project directory
cd Product-Management-API

// Install dependencies command
npm install

// List of dependencies
bcrypt
dotenv
express
jsonwebtoken
mysql
nodemon

# List of APIs
// User Authentication and Management Endpoints:
User Registration:

Endpoint: POST /register
Description: Registers new users.

User Login:

Endpoint: POST /login
Description: Performs user authentication.

//Product Type Endpoints:

Create Product Type:

Endpoint: POST /
Description: Creates a new product type in the product_types table.
Authentication: Requires a valid token (checkToken middleware).

Get All Product Types:

Endpoint: GET /
Description: Returns all product types from the product_types table.
Authentication: Requires a valid token (checkToken middleware).

//Product Endpoints:

Create Product:

Endpoint: POST /products
Description: Creates a new product in the products table.
Authentication: Requires a valid token (checkToken middleware).

Get All Products:

Endpoint: GET /products
Description: Returns all products from the products table.
Authentication: Requires a valid token (checkToken middleware).

Get Combined Data from Both Tables:

Endpoint: GET /all
Description: Returns data from both product_types and products tables combined.
Authentication: Requires a valid token (checkToken middleware).

Get Product by ID:

Endpoint: GET /:id
Description: Returns a product from the products table by ID.
Authentication: Requires a valid token (checkToken middleware).

Update Product:

Endpoint: PATCH /
Description: Updates a product in the products table.
Authentication: Requires a valid token (checkToken middleware).

Delete Product:

Endpoint: DELETE /
Description: Deletes a product from the products table.
Authentication: Requires a valid token (checkToken middleware).

# Database Tables
// Users Table
The users table stores information related to user accounts.

Fields:

user_id: Unique identifier for each user.
email: Email address associated with the user account.
password: Encrypted password for user authentication.

// Product Types Table
The product_types table manages different categories or types of products.

Fields:

product_type_id: Unique identifier for each product type.
product_type_name: Descriptive name for the product type.

// Products Table
The products table contains details about individual products.

Fields:

product_id: Unique identifier for each product.
product_type_id: Foreign key linking to the product_types table, specifying the product's type.
item_code: Unique code assigned to each product.
product_name: Name of the product.

Relationships
The product_types table is linked to the products table through the product_type_id field as a foreign key.

# Environment Variables
The application uses a set of environment variables to configure various aspects. These variables are stored in a .env file. Add appropriate fields in the file.








