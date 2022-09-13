const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");
const mcapi = require('mcapi');

module.exports = {
  name: "cuerpo",
  aliases : ["cuerpo3d"],
  usage: "h/cuerpo [Nick de Minecraft Java]",
  desc: "Comando para enviar cuerpos de usuarios de minecraft.",
  timeout: 3000,
  premium: true,
  run: async (client, message, args) => {
    if(!args[0]) return message.reply({ content: '> <a:_:1017955050611556462> | Por favor ingresa algún nickname.'})

    const text = args.join(" ");

    let uuid = await mcapi.usernameToUUID(`${text}`);

    let headURL = `https://cravatar.eu/helmhead/${text}/600.png`

    const embed = new Discord.MessageEmbed()
    .setTitle(`<a:_:1017954997989802044> │ CABEZAS DE MINECRAFT`)
    .setDescription('Cabeza del usuario '+ text+'')
    .setFooter({text:`Solicitado por: ${message.author.tag}`, iconURL:message.author.displayAvatarURL({ dynamic: true })})
    .setColor("RANDOM")
    .setImage(headURL)
    .setTimestamp()

    try {message.reply({embeds:[embed]});} catch (err){message.reply({ content: '> <a:Minecraft:979484141198405663> | Usuario no encontrado.'})}
  }
}