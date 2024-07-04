const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_21_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQyLFxuICAgICAgICA3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICA4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkwLFxuICAgICAgICA1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDg5LFxuICAgICAgICAzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM2LFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxLFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdzT0dhSWJaMEFJeFVITldQeWQ3ZUhqY0pYenpKQkJ0K1FnTWtSd3lSZzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZhMVY1Zkt6UlBXaUtpcDZuSVBSQUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWEzMmI2MDItZTA1My00Njc3LTgxNmEtMzJlNWY3MDM4ODczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDI4LFxuICAgICAgNixcbiAgICAgIDE1LFxuICAgICAgMjUzLFxuICAgICAgMTYyLFxuICAgICAgMTUwLFxuICAgICAgMTAzLFxuICAgICAgNzMsXG4gICAgICA4MCxcbiAgICAgIDIzMSxcbiAgICAgIDk1LFxuICAgICAgNDcsXG4gICAgICAyNDYsXG4gICAgICA5LFxuICAgICAgNzEsXG4gICAgICAyMDYsXG4gICAgICAxNzAsXG4gICAgICA0MixcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDg2LFxuICAgICAgNTgsXG4gICAgICA4NixcbiAgICAgIDIwMyxcbiAgICAgIDcxLFxuICAgICAgMTc2LFxuICAgICAgMTAsXG4gICAgICAyMTMsXG4gICAgICAxNzgsXG4gICAgICAxNjksXG4gICAgICAyMzUsXG4gICAgICAxMjIsXG4gICAgICAxNTAsXG4gICAgICAxODQsXG4gICAgICAxODUsXG4gICAgICA2NCxcbiAgICAgIDIxNixcbiAgICAgIDE4MyxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzUVpBODNMQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDAyMDIwMzIzOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzU3ODEzMzk3ODczOTU6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3lDbUNFUTB2Nll0QVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4K3pCc3ZqT1pEUUxYa3UwSjVCK1RxSU5JR3NOVmxTUXBlcDFyUVpIWjE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9uVi83VUFtWjFMUm9iZUFISEs0bWh5RU91VTd1ckVPT1RpQWN5MG1TOWVMeDh6eGhxV2ZWYjRIMWtuQUJIRXlYKzM2SGo3THhBYTFnaWFKSzBHOERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9SaEtZNzNOYW14akNMWUlPVklEY0RYcDlPUDlNeEFKUEJjdXZXR2xEbmdIQlNPTndEam9NMXVINFZGYkp3Uisxc3BDd09GU3dTbjdrcStsQklJZmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQwMjAyMDMyMzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA3NDA2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJLU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQktTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTzRiOUxxUmtQQ2JQYlNqN1FlZS9JZFc4dzA5MURpSXB1ZUdnK0R6Q3h6QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTU5OTU5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
