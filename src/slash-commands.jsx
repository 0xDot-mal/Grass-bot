const { REST, Routes , ApplicationCommandOptionType } = require('discord.js');
const {token , guild_id, app_id } = require('../config.json');

const commands = [
  {
    name: 'give_role',
    description: 'Assign a role to a user.',
    options: [
      {
        name: 'user',
        description: 'The user you wanna assign this role for.',
        type: ApplicationCommandOptionType.User,
        required: true,
      },
      {
        name: 'role',
        description: 'The role you wanna assign',
        type: ApplicationCommandOptionType.Role,
        required: true,
      },
    ]
  },
  {
    name: 'ping',
    description: 'Pong!',
  },
  {
    name: 'help',
    description: 'Display some help for new users or as a refresher for originals.', 
  },
  { name:'bio' , description:'Check out my cool relaxing bio on guns.lol!'},
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(
        app_id,
        guild_id
      ),
      { body: commands }
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();