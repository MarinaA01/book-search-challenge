const db = require('../config/connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');

db.once('open', async () => {
    try {
        await cleanDB('User', 'users');
    
        await User.create(userData);
    
        console.log('Users seeded successfully!');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    });


