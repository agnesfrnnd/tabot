require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const Telegraf = require('telegraf')


const TeleBot = require('telebot');
const bot = new TeleBot({
    token: process.env.BOT_TOKEN,
    webhook: {
        url: 'https://foodyus.herokuapp.com',
        host: '0.0.0.0'
    }
});
bot.on('text', (msg) => msg.reply.text(msg.text));

bot.start();

var makan = ['soto', '<b>vw</b>', '<a href="http://www.google.com">bmw</a>', '🚗audy'];
var path = require("path");

app.get('/login', (req, res) => res.sendFile(path.join(__dirname+'/')))
app.get('/home', (req, res) => res.sendFile(path.join(__dirname+'/')))
app.get('/create', (req, res) => res.sendFile(path.join(__dirname+'/')))
app.get('/update', (req, res) => res.sendFile(path.join(__dirname+'/')))

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
})