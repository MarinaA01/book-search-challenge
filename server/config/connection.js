const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://marinajalonzo1:<password>@cluster0.ovzyxdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

module.exports = mongoose.connection;
