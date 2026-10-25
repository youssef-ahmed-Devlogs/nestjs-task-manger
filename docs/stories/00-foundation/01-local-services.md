# Run the services on my machine

As the developer of this API, I want MongoDB, file storage and email to run on my machine with one command, so that I can run and try every feature without cloud accounts.

## Acceptance criteria

- One command starts MongoDB, an S3-compatible file storage, and an email catcher.
- The API connects to all three with settings from the environment.
- Data in MongoDB and in the file storage stays after the services restart.
- Every email the API sends shows up in the email catcher's inbox, and none reaches a real address.
- **(proposed)** MongoDB runs as a replica set, even with one node, because transactions work only on replica sets and sharded clusters, and the work sessions rule may need them. Source: [MongoDB, Transactions](https://www.mongodb.com/docs/manual/core/transactions/).

## Questions

- Does the API itself run in Docker too, or on your machine with `npm run start:dev`?
