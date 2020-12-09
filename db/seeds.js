const mongoose = require('mongoose')
const { dbURI } = require('../config/environments')
const Item = require('../models/item')
const User = require('../models/user')
const usersData = require('./data/usersData')
const itemsData = require('./data/itemsData')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  
  async (err, db) => {
    
    if (err) {
      console.log(err)
      return
    }
    
    try {
      await db.dropDatabase()
      console.log('Database dropped')

      const users = await User.create(usersData)
      console.log(`${'🧐'.repeat(users.length)} users created`)

      const item = await Item.create(itemsData)
      console.log(`${'⚙️'.repeat(item.length)} items created`)

      await mongoose.connection.close()
      console.log('Goodbye 👍')
    } catch (err) {
      
      await mongoose.connection.close()
      console.log(err)
    }

  }
)