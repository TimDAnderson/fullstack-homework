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

This was a fun assignment.  I'm glad I was able to highlight some of my Django backend and React front end skills.  I'm particularly proud of the seperation of concerns through out the repository.  The files are organized so that another engineer could hop in and follow the same MVC pattern.

If I had more time I would have liked have used PostgreSQL.  I could have created a schema for a sensor table and a heartbeats table.  This would have allowed me to look at the serial number of the incoming POST request (heartbeat) and validate it prior to storing in the database.  

I also would have liked to add a graph with occupation percentage that updated once a second.  The data is already available to the client but I did not have time to render a graph.  