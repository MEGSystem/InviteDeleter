const {greentick, redtick} = require('../includes/emotes')
const {logHook} = require('../includes/logging')

const {execSync} = require('child_process')

exports.run = async (client, message) => {
  execSync('git fetch origin && git reset --hard origin/event')

  message.channel.send(`${greentick} Bot updated successfully`)
}


exports.help = {
  name: 'update',
  info: 'Updates the bot',
  usage: '<branch>',
  unlisted: true,
}

exports.config = {
  guildOnly: false,
  ownerOnly: true,
  aliases: [],
  minLevel: 10,
  cooldown: 0,
}
