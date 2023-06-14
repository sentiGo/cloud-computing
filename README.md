# API Description
This is an API created by our cloud computing team. We built it using Node.js and Express and deployed it using the Google Cloud Platform service. The main feature of this API is to provide recommendations for tourist destinations based on rating, distance, and user input. Of course, this API still has some shortcomings and can be further developed in the future.

# Technology Used
 * Node JS
 * Express
 * Cloud Run
 * App Engine
 * Cloud Sql
 * Cloud Storage

# Google Cloud Architecture
![google cloud architecture v2](https://github.com/sentiGo/cloud-computing/assets/114636264/0f84d5be-81e7-4db8-a63b-45e6889fe278)

# Step to Build this backend API
1. login to GCP account
2. make cloud storage
3. make database in cloud sql
4. git clone our ML API repo
5. make docker image with dockerfile
6. use image for running in cloud run
7. git clone our CC API repo
8. put link endpoint cloud run into CC API
9. deploy CC code in app  engine
10. give end point to MD team

# Dokumentasi API sentiGo

## Endpoint
```
https://capstoneproject-387305.uc.r.appspot.com
```

## Register
* URL
  - ```/register```
* Method
  - POST
* Request Body
  - ``username`` as ``string``
  - ``email`` as ``string``
  - ``password`` as ``string`` minimal 8 karakter
* Response
```json
{
  "error": false,
  "message": "User Created"
}
```

## Login
* URL
  - ```/login```
* Method
  - POST
* Request Body
  - ``email`` as ``string``
  - ``password`` as ``string``
* Response
```json
{
  "error": false,
  "message": "success",
  "loginResult": {
    "userId": 1,
    "username": "Arif Faizin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLXlqNXBjX0xBUkNfQWdLNjEiLCJpYXQiOjE2NDE3OTk5NDl9.flEMaQ7zsdYkxuyGbiXjEDXO8kuDTcI__3UjCwt6R_I"
  }
}
```

## Change password
* URL
  - ```/changePassword/:id```
* Method
  - PUT
* Headers
  - ``Authorization`` : ``Bearer <token>``
* Request Body
  - ``oldPassword`` as ``string``
  - ``newPassword`` as ``string``
* Response
```json
{
  "error": false,
  "message": "Password is updated"
}
```

## Get User
* URL
  - ``/user/:id``
* Method
 - GET
* Headers
  - ``Authorization`` : ``Bearer <token>``
* Response
```json
{
  "error": false,
  "message": "User found",
  "userData": {
    "userId": 1,
    "username": "Tono Ganteng",
    "email": "ferrari@mail.com",
    "img": "http://blablabal"
  }
}
```

## Change photo profile

* URL
  - ```/changePhoto/:id_user```
* Method
  - PUT
* Headers
  - ``Content-Type`` : ``multipart/form-data``
  - ``Authorization`` : ``Bearer <token>``
* Request Body
  - ``photo`` as ``file``
* Response
```json
{
    "error": false,
    "message": "Photo profile is updated",
    "img": "https://halohalo"
}
```

## List Rekomendasi destinasi by Rating
* URL
  - ```/destinasi```
* Method
  - GET
* Headers
  - ``Authorization`` : ``Bearer <token>``
* Response
```json
{
    "error": false,
    "message": "List Destinasi",
    "ListDestinasi": [
        {
            "id": 1,
            "name": "Gunung Salak",
            "rating": 3.7,
            "lat": 12.45654,
            "lon": 10.23423,
            "img": "https://halohalo",
            "city": "Surabaya"
        },
        {
            "id": 2,
            "name": "Padang pasir",
            "rating": 4.1,
            "lat": 11.45054,
            "lon": 10.23423,
            "img": "https://testestes",
            "city": "Magelang"
        }
    ]
}
```

## List Find Rekomendasi
* URL
  - ```/findDestinasi```
* Method
  - POST
* Headers
  - ``Authorization`` : ``Bearer <token>``
* Request Body
  - ``description`` as ``string``
* Response
```json
{
    "error": false,
    "message": "List Destinasi",
    "ListDestinasi": [
        {
            "id": 1,
            "name": "Gunung Salak",
            "rating": 3.7,
            "lat": 12.45654,
            "lon": 10.23423,
            "img": "https://halohalo",
            "city": "Surabaya"
        },
        {
            "id": 2,
            "name": "Padang pasir",
            "rating": 4.1,
            "lat": 11.45054,
            "lon": 10.23423,
            "img": "https://testestes",
            "city": "Magelang"
        }
    ]
}
```

## Detail Destinasi
* URL
  - ```/detail/:id_destinasi```
* Method
  - GET
* Headers
  - ``Authorization`` : ``Bearer <token>``
* Response
```json
{
    "error": false,
    "message": "Detail Destinasi",
    "detailDestinasi": {
        "id": 1,
        "name": "Gunung Salak",
        "description": "lorem ipsum sit amet satu dua tiga",
        "city": "Magelang",
        "address": "Jl. Rumah kamu no 1",
        "category": "Nature",
        "rating": 3.7,
        "lat": 12.45654,
        "lon": 10.23423,
        "img": "https://halohalo"
    }
}
```

## List Find Rekomendasi by Distance
* URL
  - ```/recomByDistance```
* Method
  - POST
* Headers
  - ``Authorization`` : ``Bearer <token>``
* Request Body
  - ``latitude`` as ``double``
  - ``longitude`` as ``double``
* Response
```json
{
    "error": false,
    "message": "List Destinasi",
    "ListDestinasi": [
        {
            "id": 1,
            "name": "Gunung Salak",
            "rating": 3.7,
            "lat": 12.45654,
            "lon": 10.23423,
            "img": "https://halohalo",
            "city": "Surabaya"
        },
        {
            "id": 2,
            "name": "Padang pasir",
            "rating": 4.1,
            "lat": 11.45054,
            "lon": 10.23423,
            "img": "https://testestes",
            "city": "Magelang"
        }
    ]
}
```

## List Destinasi base on City
* URL
  - ```/listCity```
* Method
  - POST
* Headers
  - ``Authorization`` : ``Bearer <token>``
* Request Body
  - ``city`` as ``string``
* Response
```json
{
    "error": false,
    "message": "List Destinasi",
    "ListDestinasi": [
        {
            "id": 1,
            "name": "Gunung Salak",
            "rating": 3.7,
            "lat": 12.45654,
            "lon": 10.23423,
            "img": "https://halohalo",
            "city": "Surabaya"
        },
        {
            "id": 2,
            "name": "Padang pasir",
            "rating": 4.1,
            "lat": 11.45054,
            "lon": 10.23423,
            "img": "https://testestes",
            "city": "Surabaya"
        }
    ]
}
```
