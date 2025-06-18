# School_api

A simple REST API built with **Node.js**, **Express**, **Sequelize**, and **MySQL**, designed to manage school data. It supports adding new schools and retrieving a list of schools sorted by proximity to a given location.

---

## 🚀 Live API Base URL

```
https://schoolapi-production-5e32.up.railway.app/api
```

---

## 📌 Endpoints

### 1. ➕ Add School

- **URL**: `/addSchool`  
- **Method**: `POST`  
- **Full URL**: [https://schoolapi-production-5e32.up.railway.app/api/addSchool](https://schoolapi-production-5e32.up.railway.app/api/addSchool)  
- **Headers**: `Content-Type: application/json`  
- **Body**:
```json
{
  "name": "Green Valley International",
  "address": "Kharghar, Navi Mumbai",
  "latitude": 19.0478,
  "longitude": 73.0699
}
```
- **Response**:
```json
{
  "id": 1,
  "name": "Green Valley International",
  "address": "Kharghar, Navi Mumbai",
  "latitude": 19.0478,
  "longitude": 73.0699,
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

### 2. 📍 List Schools by Proximity

- **URL**: `/listSchools?latitude=YOUR_LAT&longitude=YOUR_LNG`  
- **Method**: `GET`  
- **Example**:  
[https://schoolapi-production-5e32.up.railway.app/api/listSchools?latitude=19.03&longitude=73.02](https://schoolapi-production-5e32.up.railway.app/api/listSchools?latitude=19.03&longitude=73.02)
- **Response**:
```json
[
  {
    "id": 1,
    "name": "Sunshine High School",
    "address": "Sector 10, Navi Mumbai",
    "latitude": 19.033,
    "longitude": 73.0297,
    "createdAt": "...",
    "updatedAt": "...",
    "distance": 0.0037
  },
  ...
]
```


## 👨‍💻 Developed By

**Amey Kadwe**  
Backend API Intern Project · 2025
