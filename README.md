# Express_Notes
This is probably a temporary repo just for the time that I am learning Express.
This repo will contain several mini apps, training apps and reference apps.

### List of contents:
- [Basic_Express_Config](https://github.com/OGsoundFX/Express_Notes/blob/master/README.md#basic_express_config)
- [Express_With_AngularJS](https://github.com/OGsoundFX/Express_Notes/blob/master/README.md#express_with_angularjs)
- [ExpressRouter](https://github.com/OGsoundFX/Express_Notes/blob/master/README.md#expressrouter)
- [todolist](https://github.com/OGsoundFX/Express_Notes/blob/master/README.md#todolist)

#### Basic_Express_Config
[link to repo](https://github.com/OGsoundFX/Express_Notes/tree/master/Basic_Express_Config)

This is my boilerplate express app template/config.

#### Express_With_AngularJS
[link to repo](https://github.com/OGsoundFX/Express_Notes/tree/master/Express_With_AngularJS)

Simple AngularJS app with Express, just for training.

#### expressRouter
[link to repo](https://github.com/OGsoundFX/Express_Notes/tree/master/expressRouter)

Setting up a few basic routes.

#### todolist
[link to repo](https://github.com/OGsoundFX/Express_Notes/tree/master/todolist)

Small operational app, basic todo list. WIP!

## Setting up MongoDB with mongoose

1/ npm mongoose
2/ Go to MongoDB and create a new cluster (AWS Frankfurt because I am in Germany)
3/ Connect:
- Connect your application
- Chose your driver (Node.js)
- Copy link. Warning, if the first link doesn't work, select an older version like 2.2.12
mongodb://OG-testing:<password>@cluster0-shard-00-00.imkiu.mongodb.net:27017,cluster0-shard-00-01.imkiu.mongodb.net:27017,cluster0-shard-00-02.imkiu.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-c89azv-shard-0&authSource=admin&retryWrites=true&w=majority
  
Replace <password> with the password for the OG-testing user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.

4/ npm i dotenv (to hide your mongoDB credentials)

To be continued...
