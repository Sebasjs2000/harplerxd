const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping del bot'),

    async run(client, interaction) {

      interaction.reply(`Pong, **${client.ws.ping}ms**!`)

    }
}