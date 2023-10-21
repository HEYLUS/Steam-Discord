const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const config = require('./config.json')
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

//   ██████╗ ██╗   ██╗       ██╗██╗     ██╗   ██╗███████╗
//   ██╔══██╗╚██╗ ██╔╝       ██║██║     ██║   ██║██╔════╝
//   ██████╔╝ ╚████╔╝        ██║██║     ██║   ██║███████╗
//   ██╔══██╗  ╚██╔╝         ██║██║     ██║   ██║╚════██║
//   ██████╔╝   ██║       ██╗██║███████╗╚██████╔╝███████║
//   ╚═════╝    ╚═╝       ╚═╝╚═╝╚══════╝ ╚═════╝ ╚══════╝
                                                    

client.on('ready', () => {
  var startedAt = Date.now();
  console.log(`Login to ${client.user.username} Succesfully`);

  setInterval(() => {

    const d = (new Discord.RichPresence)
    const r = new Discord.RichPresence()
      .setApplicationId('1112701450150232085')
      .setType('STREAMING')
      .setURL('https://www.twitch.tv/ilusupek')
      .setState(config.State)
      .setName('.ilus') 
      .setDetails(`╭﹒゛${getCurrentTime()}・〹﹕STEAM DISCORD.`)
      .setStartTimestamp()
      .setAssetsLargeText(`✸﹒${getDate()}﹒🔮﹐ꔠ`)
      .setAssetsLargeImage(config.Image)
      .setAssetsSmallText(` ${Math.round(client.ws.ping)} ms`)
      .setAssetsSmallImage(config.imagesmall)
      .addButton(config.Button_name, config.Button_ink)
      .addButton(config.Button_name2, config.Button_ink2)
      
    client.user.setActivity(r);
  }, 5000);
});
function getCurrentTime() {
  const a = new Date(Date.now());
  const c = { timeZone: "Asia/Bangkok", hour: "2-digit", minute: "2-digit", hour24: false };
  return a.toLocaleTimeString("th-TH", c);
  var hour = getMonthName(a.getMonth()+1);

  return b[0] + " " + hour + " " + b[2];
}
function getDate() {
  var a = new Date(Date.now());
  const c = { timeZone: "Asia/Bangkok", day: "2-digit", month: "2-digit", year: "numeric" };
  const b = a.toLocaleDateString("en-EN", c).split("/");
  function getMonthName(month) {
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    if (month >= 1 && month <= 12) {
      return monthNames[month - 1];
    } else {
      return "January";
    }
  }
  var month = getMonthName(a.getMonth()+1);

  return b[0] + " " + month + " " + b[2];
}
client.login(config.token);
