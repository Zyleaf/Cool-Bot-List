const express = require("express");
const router = express.Router();
const Bots = require("../database/models/Bot.js");

//Need a good error codes for all of these. Please help

router.post("/", async (req, res) => {
// eslint-disable-next-line no-unused-vars
    const { id, name, prefix, description, owners, website, helpCommand, supportServer, library } = req.body;
    if (id || name || prefix || description || owners || website || helpCommand ||
        supportServer || library) return res.status(404).json({ msg: "Your missing some information to create the bot!" });
    const bot = await Bots.findOne({ id });
    //need a good error code
    if (bot) return res.status(404).send({ message: "This bot already exists!" }); 
    const newBot = new Bots({ id, name, prefix, description, owners, website, helpCommand, supportServer, library });
    try { 
        await newBot.save();
    } catch (err) {
        return res.status(404).json({ message: "Something went wrong and the bot did not save to the database!" });
    }

    return res.json({ message: "Succesfully created a new bot in the database!" });
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) { 
        //gets all bots if no id
        const allBots = await Bots.find();
        return res.json(allBots); 
    }
    //gets 1 bot if id
    const foundBot = await Bots.findOne({ id });
    if (!foundBot) return res.status(404).json({ message: "A bot was not found!" });
    return res.json(foundBot);
});

router.delete("/:id", (req, res) => {
    
});

router.put("/", (req, res ) => {

});

module.exports = router;
