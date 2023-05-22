# Dokumentasi API sentiGo

## Endpoint
```
https://blablabal/
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

## Change photo profile
* URL
    - ```/changePhoto/:id```
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
    "message": "Password is updated"
}
```

## List Rekomendasi destinasi
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
        },
        {
            "id": 2,
            "name": "Padang pasir",
            "rating": 4.1,
            "lat": 11.45054,
            "lon": 10.23423,
            "img": "https://testestes",
        },
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
        },
        {
            "id": 2,
            "name": "Padang pasir",
            "rating": 4.1,
            "lat": 11.45054,
            "lon": 10.23423,
            "img": "https://testestes",
        },
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
        "img": "https://halohalo",
    }
}
```