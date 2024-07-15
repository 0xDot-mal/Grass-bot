const {token} = require('../config.json')
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});


function roleslog(interaction) {
  console.log('Role logs requested by:', interaction.user.tag);

  client.on('roleUpdate', (oldRole, newRole) => {
    if (oldRole.name !== newRole.name) {
      console.log(`Role name was edited from "${oldRole.name}" to "${newRole.name}"`);
      interaction.reply(`Role name was edited from "${oldRole.name}" to "${newRole.name}"`);
    }
   
  });
}



client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  console.log("creating slash-command (/)");
  if (interaction.commandName === 'help') {
    const embed = new EmbedBuilder()
    .setColor('348c31')
    .setTitle('Help commands')
    .setDescription('there only some few commands since the bot is still in development!')
    .addFields(
    {
        name:'ping:',
        value:'the bot is going to reply to you with pong.',
        inline: false,
    },
    {
        name:'bio:',
        value:'Shows my bio link to check it out🔥',
        inline: false,
    },
    {
        name:'give_role:',
        value:'Assign a role to a member',
        inline: true,
    },
    {
        name: 'IMPORTANT for "give_role":',
        value:'Your role should be above the role you wanna assign to the user!',
        inline: true,
    },
            )
    .setAuthor({name: 'Crxmson/Grxss', url:'https://crxmson.netlify.app/home/home'});
console.log('Initializing command..');
console.log('Command initliaized..');
    return interaction.reply({embeds: [embed]});
  }
 
  if (interaction.commandName === 'ping') {
console.log('Initializing command..');
console.log('Command initliaized..');
    return interaction.reply(`You've pinged the bot!   **Pong**`);
  } 
  if (interaction.commandName === 'give_role') {
console.log('Initializing command..');
console.log('Command initliaized..');
return interaction.reply('# Fuck you want? this command is still in developement bro.');
    
  
  }
if (interaction.commandName === 'bio'){
   const embed =  new EmbedBuilder()
   .setColor('348c31')
   .setTitle('My cool bio')
   .setURL('https://guns.lol/grxss')
   .setDescription('Check out my bio!')
   .setAuthor({name: 'Crxmson/Grxss', url:'https://crxmson.netlify.app/home/home'});
console.log('Initializing command..');
console.log('Command initliaized..');  
   return interaction.channel.send({embeds: [embed]});
}
  
  console.log(`Commands are ready..`);

  console.log(`The reccent command used is: ${interaction.commandName}`);  

});




client.login(token);
