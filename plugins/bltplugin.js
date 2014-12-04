var BLTPlugin = {
  init: function (client, imports) {
    // plain strings are fast, makes sure messages start with the command
    // TODO: we need to be able to figure out who set each regex
    client.on('!givemeblt', function (message) {
      console.log('blt hook called!')
      client.say('/me gives a juicy BLT to ' + message.nick);
    });
    // regex is cool too, you can get fancier with it
    client.on(/^!givebltto/i, function (message) {
      var parts = message.data.split(' ')
      var target = parts[1]
      if (parts.length >= 2) {
        client.say('/me '+message.nick +' gives a spicey BLT to '+target);        
      };
    })
    client.help('!givemeblt', 'Gives the requestor a BLT, or gives a BLT to a target')      
  }
};

module.exports = BLTPlugin;