<h1>MERN Stack CRUD Application</h1>


Descrição simples com 55 caracteres.
Manager Project: CRUD Full Stack Application using AstraDB and VITE

---------------------------------------------------------------------------------------------------------


STATUS: 
<h4 align="center"> 
	🚧  React VITE 🚀 App under construction ...  🚧
</h4>

                      ==========================================
                      

--------------------------------------------------------------------------------------


![Link de figura1 do App](https://github.com/Almir-git-unifc/xxx1.png)

![Link de figura2 do App](https://github.com/Almir-git-unifc/xxx2.png)






--------------------------------------------------------------------------------------

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents
- [Intro](#Intro)
- [Feature](#Feature)
- [Technologies](#Technologies)
- [How To Use](#How-To-Use)
- [Author](#Author)
- [License](#License)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Intro <a name = "Intro"></a>


This project was developed:
- used React VITE 


These were the differences, in relation to the original project, previously developed with AstaDB by 'Code with Ania Kubów', found on Youtube with the title """Build a Monday CRM Clone with GET POST PUT DELETE Requests | React + NodeJS + useContext Hook"""



# Feature <a name = "Feature"></a>
- POST GET PUT & DELETE in AstraDB



&nbsp;
# Technologies <a name = "Technologies"></a>
- Cassandra in AstraDB
- The data is storaged in DBaaS (DataBase as a Service)
- JavaScript Full Stack
- React Vite - Cross-platform
- Context API, manages the global state of the app, passing data directly to the target component.
- Cassandra-Token
- Routes


### Built With 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Cassandra](https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white)


 
&nbsp;

## Requirements
#### You need a account in AstraDB 
#### You can Try Free account in this url: [datastax](https://astra.datastax.com/signu)
#### And you need Create a Database named XXXXXXXXXX and a Collection named XXXXXXXXXXXXXXXXXXXXXXX


# How-To-Use <a name = "How-To-Use"></a>

To clone and run this application, you'll need Git, Node.js v20.19.5 or higher + npm (used version 11.5.2) installed on your computer from your command line:

```
&nbsp;
## Clone this repository
### $ `git clone xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`


&nbsp;
## Install project vite
### $ `npm create vite@latest`

&nbsp;
## choose name project, framework and variant
### $ `choose  (your project named)   vite-project `
### $ `(framework)       React`
### $ `(variant)         JavaScript`
```

### $ `Copy content project, was download of this Github repository, inside folder vite-project created before`

### $ `install the dependencies of this front-end`
npm install bootstrap react-router-dom

#### And you will need to update the index.js file in the server folder with the data from your connectionString in yourConnectionString variabel and tpour password in yourPassw variable.

&nbsp;
## Run locally the app
### $ `cd folder-name-project (vite-project)`
### $ `npm install`

## Access client folder 
### $ `cd client`

## install vite in client folder
### $ `npm run dev`
#### $ `use the Local link provided by VITE to access the server`

## open server folder
### $ `cd server`

### $ `install the dependencies of this server`
////////////////////////////////npm install express   mongoose    cors    nodemon body-parser


update the main and script items of the package.json file in the server folder; this way:
  "main": "index.js",
  "scripts": {
	"start": "nodemon index.js",
	"test": "echo \"Error: no specified\" && exit 1",
  },




## AstraDB Account: 
### If you don't already have a AstraDB  account
 #### 1) Create an account on AstraDB , at:
 ##### [datastax](https://astra.datastax.com/signu)



 #### 2) In AstraDB DataStax, create a DataBase with the desired name, and within it create a Collection with the name CRUD, or whatever name you prefer



### Once you have a AstraDB DataStax account; access the index.js file from the server folder, and...
 #### 3.1) replace the term your-password in the variable yourPassw, with your MongoDB Atlas password
 #### 3.2) and replace the @cluster...majority term in yourConnectionString variable with your MongoDB Atlas connection string

### save these changes



## run the server
### $ `npm start`


#### Verify id Users.jsx file contain a correct port in useEffect, in line: axios.get( ), in CreateUser.jsx file in line axios.post


<h5>
 Enjoyed and if this is useful to you, give me a star 🌟
</h5>



&nbsp;
# Author <a name = "Author"></a>

👤 **Almir**

- Github: [@Almir-git-hub](https://github.com/Almir-git-unifc)

