<h1 align="center">Date : 09-12-2025</h1>


<h2 >MongoDB </h2>

---

### MongoDB Diagram  
👉 View the full diagram here:  
https://drive.google.com/file/d/1NiojH4OZ0pZ5YRgUSWjCcuhjyehTk6_M/view?usp=sharing

---

##  What is a Database in MongoDB?

A **database** is a container that stores multiple collections.  
It is created automatically when you begin inserting data.

#### Definition:
A database in MongoDB is a logical grouping of collections used to organize data.

#### Create or Switch to a Database

```javascript
use schoolDB;
```

If `schoolDB` does not exist, MongoDB creates it when inserting the first document.

#### Check existing databases

```javascript
show dbs;
```

---

## What is a Collection?

A **collection** is a group of documents inside a database.

### #Definition:
A collection is similar to a table in SQL but does not require a fixed schema.

#### Create a Collection

```javascript
db.createCollection("student_details");
```

View all collections:

```javascript
show collections;
```

---

##  What is a Document?

A **document** is a JSON-like object stored within a collection.

#### Example Document:

```json
{
  "name": "Ravi",
  "email": "ravi@gmail.com",
  "skills": ["Java", "Python"],
  "address": { "city": "Vijayawada", "state": "AP" }
}
```

---

## MongoDB Data Types

| Type | Example |
|------|---------|
| String | "Ramu" |
| Number | 25 |
| Null | null |
| Array | ["Java", "Node"] |
| Object | {city: "Hyd"} |
| Boolean | true |
| Function | ()=>{} |
| ISOTime | ISODate() |
| Date | new Date() |

---

## CRUD Operations in MongoDB

CRUD = Create, Read, Update, Delete

---

## CREATE – Insert Data

### insertOne()

**Definition:** Inserts a single document into the collection.

```javascript
db.student_details.insertOne({
    name: "Ravi",
    email: "ravi@gmail.com",
    phone: "974561238"
});
```

---

### insertMany()

**Definition:** Inserts multiple documents at once.

```javascript
db.student_details.insertMany([
    {name: "ramu", email: "ramu@gmail.com"},
    {name: "rani", email: "rani@gmail.com"},
    {name: "admin", email: "admin@gmail.com"}
]);
```

---

## READ – Find Data

### findOne()

**Definition:** Returns the first matching document.

```javascript
db.student_details.findOne();
```

#### Filter:
```javascript
db.student_details.findOne({ name: "Ravi" });
```

#### Projection (field selection):

**Definition:**  
Projection is used to include (1) or exclude (0) specific fields.

```javascript
db.student_details.findOne(
    { name: "Ravi" },
    { _id: 0, name: 1 }
);
```

---

### find()

**Definition:** Returns all matching documents.

```javascript
db.student_details.find();
```

Filter example:

```javascript
db.student_details.find({ name: "Ravi" });
```

Multiple conditions:

```javascript
db.student_details.find({ name: "Ravi", fee: 90000 });
```

Projection:

```javascript
db.student_details.find({}, { _id: 0, name: 1 });
```

---

## DELETE – Remove Data

### deleteOne()

**Definition:** Deletes the first document matching the filter.

```javascript
db.student_details.deleteOne({ name: "Ravi" });
```

---

### deleteMany()

**Definition:** Deletes all documents matching the filter.

```javascript
db.student_details.deleteMany({ name: "Ravi" });
```

---

## UPDATE – Modify Data

#### Update Operators:
- `$set` → Modify or add fields  
- `$unset` → Remove fields  
- `$push` → Add value to an array  
- `$pop` → Remove element from array  
- `$inc` → Increase or decrease numeric value  

---

### updateOne()

**Definition:** Updates the first document matching the filter.

#### Example using $set:

```javascript
db.student_details.updateOne(
    { name: "ramu" },
    { $set: { phone: "9874561230", collegename: "KEC", branch: "CSE" } }
);
```

#### Example using $unset:

```javascript
db.student_details.updateOne(
    { name: "Ramu Kumar" },
    { $unset: { phone: "" } }
);
```

---

### updateMany()

**Definition:** Updates all documents matching the filter.

Increase fee:

```javascript
db.student_details.updateMany(
    { fee: 90000 },
    { $inc: { fee: 30000 } }
);
```

Decrease fee:

```javascript
db.student_details.updateMany(
    { fee: 90000 },
    { $inc: { fee: -20000 } }
);
```

Push skills into array:

```javascript
db.student_details.updateMany(
    { name: "Ramu Kumar" },
    { $push: { skills: ["java", "python", "ruby"] } }
);
```

---

#### $pop Example

**Definition:** Removes first (-1) or last (1) element from an array.

Remove last skill:

```javascript
db.student_details.updateOne(
    { name: "Ramu Kumar" },
    { $pop: { skills: 1 } }
);
```

Remove first skill:

```javascript
db.student_details.updateOne(
    { name: "Ramu Kumar" },
    { $pop: { skills: -1 } }
);
```

---

<h2 align="center">End of MongoDB Notes</h2>


# JSON Web Token (JWT)

## Why Do We Need JWT?

Let's say we are building an API:

- A user logs in and gets a `userId`
- To fetch their private data, the client sends `userId` in each request.

```plaintext
        +---------+                                +-----------+
        |  Client |                                |   Server  |
        +----+----+                                +-----+-----+
             |                                            |
             | POST /login (username, password)           |
             |------------------------------------------->|
             |                                            |
             |         { "userId": 123 }                  |
             |<-------------------------------------------|
             |                                            |
             | GET /profile?userId=123                    |
             |------------------------------------------->|
             |                                            |
             |    Server uses userId=123 directly         |
             |    Returns data of user #123             |
             |<-------------------------------------------|
             |                                            |
             | GET /profile?userId=456   (tampered)       |
             |------------------------------------------->|
             |                                            |
             |   Server trusts userId blindly             |
             |   Leaks private data of user #456        |
             |<-------------------------------------------|
             |                                            |

```

**Problem:**  
If the client just sends `userId=123` in every request, anyone can **change it to `userId=456`** and access another user’s data.

This is a **security risk** because:

- There’s **no proof** that the request came from the actual user
- The server **blindly trusts** the `userId` sent by the client

---

## The Solution — JWT

Instead of sending raw `userId`, we send a **signed token** called **JWT (JSON Web Token)**.

**How it works:**

1. On login, the server creates a JWT containing:
   - `userId`
   - other claims like role, issued time, expiry time
2. The server **signs this JWT using a secret key**
3. The client stores this token
4. On every request, the client sends this token
5. The server verifies the token’s **signature** before trusting it

This ensures:

- The user **cannot change their `userId`** without breaking the signature
- The server can **trust the claims** inside the token

---

## ⚙️ JWT Request-Response Flow

```plaintext
        +---------+                                +-----------+
        |  Client |                                |   Server  |
        +----+----+                                +-----+-----+
             |                                           |
             | POST /login (username, password)          |
             |------------------------------------------>|
             |                                           |
             |            Generate JWT (signed)          |
             |<------------------------------------------|
             |         { token: <JWT> }                  |
             |                                           |
             | GET /profile                              |
             | Authorization: Bearer <JWT>               |
             |------------------------------------------>|
             |                                           |
             |   Verify JWT signature                    |
             |   Return private data                     |
             |<------------------------------------------|
             |                                           |
```

### Skeleton on JWT

```
<header>.<payload>.<signature>

header = base64url(headerInfo)
payload = base64url(claims)
signature = HMACSHA256(
    base64url(header) + "." + base64url(payload),
    secretKey
)

Example:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJyb2xlIjoiU1RVREVOVCIsImlhdCI6MTc1NzcxMDA2NSwiZXhwIjoxNzU3NzEwMTI1fQ.IzhPC5fR9e24UFuXcuaEJ6uO7zi0bTbnC8BT2ahp1DM

Decoded Header:
{
  "alg": "HS256",
  "typ": "JWT"
}

Decoded claims:
{
  "userId": 10, // custom claim
  "role": "STUDENT", // custom claim
  "iat": 1757710065, // registered claim
  "exp": 1757710125 // registered claim
}

Signature can't be decoded as it's a Hash:
HMACSHA256(
  base64url(header) + "." + base64url(payload),
  secretKey
)
```

## JWT Claims ( custom + registered )

In JWT, the **payload** part stores **claims** — pieces of information about the user or the token itself.

---

### 1. Registered (Predefined) Claims

These are **standardized claim names** defined by the [JWT RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519).  
They are **optional**, but if you use them, they must follow their official meaning.

### Important Registered Claims

| Claim | Meaning                                         | Example                |
| ----- | ----------------------------------------------- | ---------------------- |
| `iss` | **Issuer** — who created the token              | `"https://domain.com"` |
| `sub` | **Subject** — who the token is about            | `"123456"` (user ID)   |
| `exp` | **Expiration time** (Unix timestamp)            | `1736899200`           |
| `nbf` | **Not before** — token is valid after this time | `1736812800`           |
| `iat` | **Issued at** — when token was issued           | `1736809200`           |

These are used for **security and validation** purposes (checking token validity, issuer, expiry, etc.)

---

## 👤 2. Custom (User-defined) Claims

These are **your own fields** used to carry application-specific data inside the token.  
They have **no special meaning** to JWT libraries — they are just your data.

### Example

```json
{
  "userId": 123,
  "role": "STUDENT",
  "email": "abc@example.com"
}
```

## Error Handling

While verifying the JWT token we might end up getting different errors like:

| Error Name            | When It Happens                                         | Example Cause                                                    | How to Handle                                                                  |
| --------------------- | ------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **TokenExpiredError** | Token's `exp` time has passed                           | Access token is older than its validity period                   | Return **401**, tell client to use **refresh token** to get a new access token |
| **JsonWebTokenError** | Token is invalid or tampered                            | Token modified, corrupted format, wrong secret or algorithm used | Return **401**, reject request and log incident                                |
| **NotBeforeError**    | Token has `nbf` (not before) claim set to a future time | Token used before its valid start time                           | Return **401**, ask client to **retry after some time**                        |
| **Missing Token**     | No token is sent in request                             | User forgot to log in or cookie/header missing                   | Return **401**, ask                                                            |
