# Density Fullstack Homework Assignment - Tim Anderson

This repository meets the assignment requirements
- Django backend server
- Database for persisted heartbeats
- React frontend


## Table of Contents

1. [FileTree](#FileTree)
1. [Install](#Install)
1. [Usage](#Usage)
1. [CRUD_API](#CRUD_API)
1. [React_Dashboard](#React_Dashboard)
1. [Conclusion](#Conclusion)

## FileTree

<img width="274" alt="Screen Shot 2021-07-16 at 12 00 28 AM" src="https://user-images.githubusercontent.com/71040019/125905967-ffb43445-b0a8-49d0-baea-20ebc2004777.png">

## Install

```ssh
$ pipenv install
$ npm install
```

## Usage

Running in local development
```ssh
$ npm run dev
$ python manage.py runserver
```

Starting the heartbeat generator
```ssh
$ node heartbeatmanager/heartbeatGenerator/heartbeatGenerator.js
```

## CRUD_API

### GET
Request
```sh
GET /api/heartbeats/
```
Response
```sh
Status: 200
Body:
[
    {
        "id": 1,
        "name": "lobby",
        "serialNumber": "5001",
        "created_at": "2021-07-16T02:28:54.206198Z",
        "maxCapacity": 30,
        "currentCapacity": 10
    },
    {
        "id": 2,
        "name": "conferenceRoom",
        "serialNumber": "5004",
        "created_at": "2021-07-16T03:08:52.454877Z",
        "maxCapacity": 15,
        "currentCapacity": 1
    },
]
```

### POST
Request
```sh
POST /api/heartbeats/

Body:
{
  "name": "lobby",
  "serialNumber": "5001",
  "maxCapacity": 30,
  "currentCapacity": 10
}
```

## React_Dashboard

Available at http://localhost:8000

![Screen Shot 2021-07-15 at 11 50 14 PM](https://user-images.githubusercontent.com/71040019/125904935-4b43b10c-4a97-4161-a80b-f2bee18a65d2.png)

## Conclusion

