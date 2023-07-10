const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())

app.get('/', (request, response) => {
   response.send('welcome to the my APIs')
 })

 app.post('/',(request,response)=>{
    response.send('Added successfully')
 })

 app.delete('/',(request,response)=>{
    response.send('Delete successfully')

 app.put('/',(request,response)=>{
    response.send('Updated successfully')
 })

 })

 app.listen(4000, '0.0.0.0', () => {
   console.log('server started on port 4000')
 })
















































































































































// FINAL
// ---------------------------------------------------------------------------------
// GIT

// 1.git init
// 2.git status -s
// 3.create the file in vs code
// git add .
// git commit -m ""

// //create branch 
// git checkout -b branch1
// git branch
// git checkout branch1/master

// # delete a branch
// > git branch -d <branch name>

// git merge branch1

// //Renames the master branch
// git branch -m master Main

// git push -u origin master
// OR git push origin master

// git pull
// //To create compare pull request


// git log --graph --color
// -------------------------------------------------------------------------------------
// DOCKER

// sudo docker pull httpd

// sudo docker image ls
// sudo docker container ls
// sudo docker container rm ID
// sudo docker service ls

// 1.Create the image first
// sudo docker image pull httpd
// sudo docker image pull node

// 2.Create the container with port forwarding 
//       (container name=myhttpd)-->(image name=httpd)
// sudo docker container run -itd --name myhttpd -p 9001:80 httpd
// sudo docker container run -itd --name myhttpd -p 9001:80 node

// localhost:9001



// 1.Create index.html page


// 2.Create the Dockerfile => FROM httpd 
// COPY ./index.html /usr/local/apache2/htdocs/

// OR
// -----------------------------
// //server.js

// const express = require('express')
// const cors = require('cors')

// const app = express()
// app.use(cors('*'))
// app.use(express.json())

// app.get('/', (request, response) => {
//   response.send('welcome to the my APIs')
// })

// // add the required routes
// const productRouter = require('./routes/product')
// app.use('/product', productRouter)

// app.listen(4000, '0.0.0.0', () => {
//   console.log('server started on port 4000')
// })


// //db.js
// const mysql = require('mysql2')

// // Create the connection pool. The pool-specific settings are the defaults
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'dac2023',
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10,
//   idleTimeout: 60000,
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0,
// })

// module.exports = pool


// //product.js
// const express = require('express')
// const router = express.Router()
// const db = require('../db')

// router.get('/', (request, response) => {
//   const statement = `select id, title, description, price from products`
//   db.query(statement, (error, data) => {
//     if (error) {
//       response.send('error')
//     } else {
//       response.send(data)
//     }
//   })
// })

// module.exports = router

// npm install
// npm i express
// npm i mysql
// npm i cors

// Dockerfile
// FROM node
// WORKDIR /src
// COPY . .
// EXPOSE 4000
// CMD node service.js

// -------------------------------
// 3.Build custom image
// sudo docker image build -t myimage .

// 4.Create and run custom container
// sudo docker container run -itd --name mycont -p 9000:80 myimage 

// localhost:9000

// sudo docker service create --name myservice --replicas 4 httpd

// ----------------------------------------------------------------------------------------------

// TO CREATE THE REPOSITORY ON LOCAL MACHINE

// git init                                                   ---->To start the repository
// git config --global user.name "ashbond"                    ---->To set user.name
// git config --global user.email "ashbond@gmail.com"         ---->To set user.email
// ls                                                         ---->To check the files 
// git status                                                 ---->To check status
// git status -s                                              ---->To check status inshort  
// In Vs code create file1 and write console.log()






// =================================================================================
// TO CREATE THE REPOSITORY ON GITHUB'S REMOTE SERVER  (ashwini-bee)

// create the directory=>create the files => git add . => git commit -m ""

// create the repository with some name on git hub
// copy paste the link of https://github.com/AshwiniBondarde/test-dac-repo.git
// On github create the link between local and remote repository using=>
// 		git remote add origin https://github.com/AshwiniBondarde/test-dac-repo.git
 
//  Created the classic token first 
//  Username:AshwiniBondarde   
//  Password:(paste the token URL) => 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
 
//  git remote -v =>To get the info of remote repository
 
//  git push -u origin master
// OR git push origin master

// //create diff branch and try for git push it creates pull request
//  git clone <url>
//  git pull
 
 
 