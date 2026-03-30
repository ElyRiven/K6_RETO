# API Documentation — Fake Store API

## Base URL

```
https://fakestoreapi.com
```

## Content Type

```
application/json
```

---

## Endpoints

### Authentication

| Method | URL           | Description                                   |
| ------ | ------------- | --------------------------------------------- |
| POST   | `/auth/login` | Authenticates a user and returns a JWT token. |

#### Request Body

```json
{
  "username": "string",
  "password": "string"
}
```

#### Possible Responses

| Status Code | Description      | Response Body                                    |
| ----------- | ---------------- | ------------------------------------------------ |
| 201         | Login successful | `{ "token": "<JWT_TOKEN_STRING>" }`              |
| 401         | Unauthorized     | `{ "msg": "username or password is incorrect" }` |
| 400         | Bad Request      | Error message string                             |

##### Success Response Example

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```
