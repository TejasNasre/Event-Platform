const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const connect = async(req,res) => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log('Database connected successfully'))
    }
    catch(err){
        req.status(500).send(`Cannot connect to database: ${err.message}`)
    }
}

module.exports = connect;