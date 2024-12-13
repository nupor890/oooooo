module.exports.config = {
	name: "time",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/YXFfZfD.jpg",
            "https://i.imgur.com/CwAiFqt.jpg",
            "https://i.imgur.com/zHAmF70.jpg",
            "https://i.imgur.com/Tu0omOL.jpg",
            
"https://i.imgur.com/YXFfZfD.jpg"];var callback = () => api.sendMessage({body:`🌺আসালামু-আলাইকুম🌺

🌺বট-PREFIX🌺: ${global.config.PREFIX}👈🌺

🌺আজকের-টাইম🌺 : ${juswa} 

🌺 বট-রানিং-টাইম🌿: ${hours}:${minutes}:${seconds}.

🌺🌿𝐁𝐀𝐃𝐎𝐋^𝐁𝐎𝐓^007🌺বট-এডমিন🌿🌺
¶────██████────¶
 
¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶─◥██████████◤─¶

¶──◥████████◤──¶

¶────◥████◤────¶

¶─────◥██◤─────¶
🌺✰𝐁𝐀𝐃𝐎𝐋^𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘★🌺`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };