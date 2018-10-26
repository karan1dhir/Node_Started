const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes;
const db = new Sequelize({
    dialect: 'sqlite',
    /*
      username : ' ',
      database : ' ',
      password : ' ',
      host : 'abcd.server.com',
      port : 3000
    */
   storage: __dirname + '/test.db',
})

const Task = db.define('task',{
    name:{
        type:DT.STRING(50),
        allowNull:false
    },
    priority:{
        type:DT.INTEGER,
        defaultValue:0
    },
})
async function task() {
    await db.sync()
    await db.authenticate()
}


async function writeTasks(){
   const task = await Task.create({
       name:'this is a task',
       priority:3
   })
   console.log(task)
   
   console.log('==============')
   console.log('==============')
   console.log('==============')
 
   task.priority = 5
   console.log(task)
   console.log('==============')
   console.log('==============')
   console.log('==============')
 
   await task.save()
   console.log(task)
}

async function doAll(){
   await task()
   await writeTasks()
}

doAll()

