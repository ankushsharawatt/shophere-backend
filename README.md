# 🛒 ShopHere Backend

A RESTful backend API for **ShopHere**, an e-commerce application built with **Node.js, Express.js, and MongoDB**.

The backend provides APIs for user authentication, product management, product search and filtering, reviews and ratings, user administration, and order management.

---

## 🚀 Features

* 🔐 User registration and login
* 🔑 JWT authentication
* 🍪 Cookie-based authentication
* 🔒 Password hashing with bcrypt
* 📧 Password reset functionality
* 👤 User profile management
* 🛡️ Role-based authorization
* 👨‍💼 Admin user management
* 🛍️ Product CRUD operations
* 🔎 Product search
* 🏷️ Category filtering
* 💰 Price filtering
* ⭐ Rating filtering
* ⭐ Product reviews and ratings
* 📦 Order creation and management
* 🗄️ MongoDB integration
* ⚠️ Centralized error handling

---

## 🛠️ Tech Stack

| Technology    | Purpose               |
| ------------- | --------------------- |
| Node.js       | Runtime               |
| Express.js    | Backend framework     |
| MongoDB       | Database              |
| Mongoose      | MongoDB ODM           |
| JWT           | Authentication        |
| bcryptjs      | Password hashing      |
| Nodemailer    | Email/password reset  |
| Cookie Parser | Cookie handling       |
| dotenv        | Environment variables |
| Validator     | Input validation      |

---

# ⚙️ Getting Started

## Clone the repository

```bash
git clone https://github.com/ankushsharawatt/shophere-backend.git
cd shophere-backend/backend
```

## Install dependencies

```bash
npm install
```

## Environment Variables

Create:

```text
backend/config/uat.env
```

Example:

```env
PORT=3000
mongoURI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add the required email configuration for password-reset functionality.

> ⚠️ Never commit database credentials, JWT secrets, email credentials, or other sensitive information.

## Run the server

Development:

```bash
npm run dev
```

Start:

```bash
npm start
```

Server:

```text
http://localhost:3000
```

---

# 📡 API Documentation

Base URL:

```text
http://localhost:3000/api/shophere
```

---

# 🛍️ Products

## Get All Products

Supports pagination.

### Request

```http
GET /api/shophere/product/products?page=2
```

### Query Parameters

| Parameter     | Example   | Description        |
| ------------- | --------- | ------------------ |
| `page`        | `2`       | Page number        |
| `keyword`     | `samsung` | Search products    |
| `category`    | `Mobile`  | Filter by category |
| `price[gte]`  | `10000`   | Minimum price      |
| `price[lte]`  | `200000`  | Maximum price      |
| `rating[gte]` | `0`       | Minimum rating     |
| `rating[lte]` | `4`       | Maximum rating     |

---

## Search Products

### Request

```http
GET /api/shophere/product/products?keyword=samsung&page=1
```

### Example

```text
keyword = samsung
page = 1
```

---

## Filter Products by Category

### Request

```http
GET /api/shophere/product/products?keyword=oneplus&page=1&category=Mobile
```

### Query Parameters

```text
keyword = oneplus
page = 1
category = Mobile
```

---

## Filter Products by Price

### Request

```http
GET /api/shophere/product/products?keyword=iphone&price[gte]=10000&price[lte]=200000
```

### Query Parameters

```text
keyword = iphone
price[gte] = 10000
price[lte] = 200000
```

---

## Filter Products by Rating

### Request

```http
GET /api/shophere/product/products?rating[gte]=0&rating[lte]=4
```

---

## Get Product Details

### Request

```http
GET /api/shophere/product/details/:productId
```

### Example

```http
GET /api/shophere/product/details/653438f8ce06ad82befd40e8
```

---

## Add New Product

**Admin only**

### Request

```http
POST /api/shophere/product/add
Content-Type: application/json
```

### Body

```json
{
  "name": "iphone12",
  "description": "iphone12 256GB green",
  "price": 125000,
  "category": "Mobile"
}
```

---

## Update Product

**Admin only**

### Request

```http
PUT /api/shophere/product/update/:productId
Content-Type: application/json
```

### Example

```http
PUT /api/shophere/product/update/653438f8ce06ad82befd40e8
```

### Body

```json
{
  "name": "iphone15",
  "description": "iphone15 256GB green",
  "price": 150000,
  "category": "Mobile"
}
```

---

## Delete Product

**Admin only**

### Request

```http
DELETE /api/shophere/product/delete/:productId
```

### Example

```http
DELETE /api/shophere/product/delete/6536b46668340a68d42d65e8
```

---

# ⭐ Product Reviews

## Rate a Product

### Request

```http
PUT /api/shophere/product/rate/:productId
Content-Type: application/json
```

### Body

```json
{
  "rating": 5,
  "comment": "woowww!!"
}
```

---

## Get All Reviews

### Request

```http
GET /api/shophere/product/reviews/:productId
```

### Example

```http
GET /api/shophere/product/reviews/6536cb0d187b2bebbd6284be
```

---

## Delete Review

### Request

```http
DELETE /api/shophere/product/review/delete?productId=:productId&reviewId=:reviewId
```

### Example

```http
DELETE /api/shophere/product/review/delete?productId=6536cb0d187b2bebbd6284be&reviewId=653d6fd94e3ed43f18e17c20
```

---

# 👤 Users

## Sign Up

### Request

```http
POST /api/shophere/user/signup
Content-Type: application/json
```

### Body

```json
{
  "name": "gaurav",
  "email": "gaurav@example.com",
  "password": "your_password"
}
```

---

## Login

### Request

```http
POST /api/shophere/user/login
Content-Type: application/json
```

### Body

```json
{
  "email": "gaurav@example.com",
  "password": "your_password"
}
```

---

## Logout

### Request

```http
GET /api/shophere/user/logout
```

---

## Forgot Password

### Request

```http
POST /api/shophere/user/password/forget
Content-Type: application/json
```

### Body

```json
{
  "email": "user@example.com"
}
```

---

## Reset Password

### Request

```http
PUT /api/shophere/user/password/reset/:token
Content-Type: application/json
```

### Example

```http
PUT /api/shophere/user/password/reset/your_reset_token
```

### Body

```json
{
  "password": "new_password",
  "confirmPassword": "new_password"
}
```

---

## Get User Details

### Request

```http
GET /api/shophere/user/details
```

Requires authentication.

---

## Update Password

### Request

```http
PUT /api/shophere/user/password/update
Content-Type: application/json
```

### Body

```json
{
  "currentPassword": "current_password",
  "newPassword": "new_password",
  "confirmPassword": "new_password"
}
```

---

## Update Profile

### Request

```http
PUT /api/shophere/user/profile/update
Content-Type: application/json
```

### Body

```json
{
  "name": "admin",
  "email": "admin@shophere.com"
}
```

---

# 👨‍💼 Admin APIs

Admin authentication is required for the following endpoints.

## Get All Users

### Request

```http
GET /api/shophere/user/admin/allusers
```

---

## Get User Details

### Request

```http
GET /api/shophere/user/admin/details/:userId
```

### Example

```http
GET /api/shophere/user/admin/details/653bec965ebeac4d833a2544
```

---

## Delete User

### Request

```http
DELETE /api/shophere/user/admin/delete/:userId
```

### Example

```http
DELETE /api/shophere/user/admin/delete/653bc13ba136a2f2847cbb9e
```

---

## Update User Role & Profile

### Request

```http
PUT /api/shophere/user/admin/update/:userId
Content-Type: application/json
```

### Example

```http
PUT /api/shophere/user/admin/update/653d0c8cb4bfd658cd6d35a0
```

### Body

```json
{
  "name": "test2",
  "email": "test2@gmail.com",
  "role": "admin"
}
```

---

# 📦 Orders

## Place New Order

### Request

```http
POST /api/shophere/order/new
Content-Type: application/json
```

### Body

```json
{
  "shippingInfo": {
    "address": "282 janvadi",
    "city": "GokhaleNagar",
    "state": "Maharastra",
    "country": "IN",
    "pincode": 411002,
    "phoneNumber": 7839358367
  },
  "orderedItems": [
    {
      "product": "6536cb0d187b2bebbd6284be",
      "name": "iphone13",
      "price": 100000,
      "image": "sampleImg.jpg",
      "quantity": 1
    }
  ],
  "paymentInfo": {
    "id": "sample id",
    "status": true
  },
  "itemsPrice": 100000,
  "taxPrice": 18000,
  "shippingPrice": 1000,
  "totalPrice": 119000
}
```

---

## Get Single Order

### Request

```http
GET /api/shophere/order/:orderId
```

### Example

```http
GET /api/shophere/order/653eaaed889863be26c0b46c
```

---

## Get My Orders

### Request

```http
GET /api/shophere/order/my/orders
```

Returns orders associated with the authenticated user.

---

## Get All Placed Orders

**Admin only**

### Request

```http
GET /api/shophere/order/orders/placed
```

---

## Update Order Status

**Admin only**

### Request

```http
PUT /api/shophere/order/update/:orderId
Content-Type: application/json
```

### Example

```http
PUT /api/shophere/order/update/653eaaed889863be26c0b46c
```

### Body

```json
{
  "orderStatus": "Shipped"
}
```

---

# 🔐 Authentication

Protected APIs require authentication.

```http
Authorization: Bearer <JWT_TOKEN>
```

Depending on the implementation, authentication may also be maintained through cookies.

### Access Levels

| Access      | Description                |
| ----------- | -------------------------- |
| 🌐 Public   | No authentication required |
| 👤 User     | Authenticated user         |
| 👨‍💼 Admin | Authenticated admin        |

---

# 📋 Complete API Summary

### Products

| Method | Endpoint                                                              | Access |
| ------ | --------------------------------------------------------------------- | ------ |
| GET    | `/product/products`                                                   | Public |
| GET    | `/product/products?page=2`                                            | Public |
| GET    | `/product/products?keyword=samsung&page=1`                            | Public |
| GET    | `/product/products?keyword=oneplus&page=1&category=Mobile`            | Public |
| GET    | `/product/products?keyword=iphone&price[gte]=10000&price[lte]=200000` | Public |
| GET    | `/product/products?rating[gte]=0&rating[lte]=4`                       | Public |
| GET    | `/product/details/:id`                                                | Public |
| POST   | `/product/add`                                                        | Admin  |
| PUT    | `/product/update/:id`                                                 | Admin  |
| DELETE | `/product/delete/:id`                                                 | Admin  |
| PUT    | `/product/rate/:id`                                                   | User   |
| GET    | `/product/reviews/:id`                                                | Public |
| DELETE | `/product/review/delete`                                              | User   |

### Users

| Method | Endpoint                      | Access |
| ------ | ----------------------------- | ------ |
| POST   | `/user/signup`                | Public |
| POST   | `/user/login`                 | Public |
| GET    | `/user/logout`                | User   |
| POST   | `/user/password/forget`       | Public |
| PUT    | `/user/password/reset/:token` | Public |
| GET    | `/user/details`               | User   |
| PUT    | `/user/password/update`       | User   |
| PUT    | `/user/profile/update`        | User   |

### Admin

| Method | Endpoint                  | Access |
| ------ | ------------------------- | ------ |
| GET    | `/user/admin/allusers`    | Admin  |
| GET    | `/user/admin/details/:id` | Admin  |
| DELETE | `/user/admin/delete/:id`  | Admin  |
| PUT    | `/user/admin/update/:id`  | Admin  |

### Orders

| Method | Endpoint               | Access |
| ------ | ---------------------- | ------ |
| POST   | `/order/new`           | User   |
| GET    | `/order/:id`           | User   |
| GET    | `/order/my/orders`     | User   |
| GET    | `/order/orders/placed` | Admin  |
| PUT    | `/order/update/:id`    | Admin  |

---

# 🧪 Testing

The project can be tested using **Postman**, **Insomnia**, **Thunder Client**, or **cURL**.

A Postman collection is available for testing the API.

Recommended workflow:

```text
User
 │
 ├── Signup
 │
 ├── Login
 │
 ├── Get Profile
 │
 ├── Browse Products
 │
 ├── Search / Filter Products
 │
 ├── View Product
 │
 ├── Rate Product
 │
 ├── Place Order
 │
 └── View My Orders


Admin
 │
 ├── Login
 │
 ├── Manage Users
 │
 ├── Manage User Roles
 │
 ├── Add Products
 │
 ├── Update Products
 │
 ├── Delete Products
 │
 ├── View All Orders
 │
 └── Update Order Status
```

---

# 🔄 Architecture

```text
Client
  │
  ▼
Express Server
  │
  ├── Authentication
  │
  ├── Authorization
  │
  ▼
Routes
  │
  ▼
Controllers
  │
  ▼
Mongoose Models
  │
  ▼
MongoDB
```

---

# 🔒 Security

The backend uses:

* JWT authentication
* Password hashing with `bcryptjs`
* Role-based authorization
* Protected routes
* Environment variables
* Input validation
* Centralized error handling

> Never expose secrets or database credentials in the repository.

---

# 🚧 Future Improvements

* 💳 Payment gateway integration
* 🛒 Shopping cart
* 🔎 Advanced product search
* 📊 Admin dashboard
* 🖼️ Product image upload
* 📄 Swagger/OpenAPI documentation
* 🧪 Automated tests
* ⚡ Pagination optimization
* 🚀 Production deployment

---

# 👨‍💻 Author

**Ankush Sharawat**

GitHub:
https://github.com/ankushsharawatt

---

# 📄 License

This project is licensed under the **ISC License**.
