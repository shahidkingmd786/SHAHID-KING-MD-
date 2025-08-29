const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtvRDVCQlNvL3dHdlZ3cDdzZ0ZYMXJaTTU2WEYwclducGUvdU9yRXBGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFJ0ZlZnYUV4V2pkRm42R05OTm8xbnJhN21JMlhlc3E2SWlBeEtLeHZXcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhT0lkdmNsdmEremtRUk4xQ21hb1MwQkFjdE1TTmZLV0pzREc1UHoxRUVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkbHB3V1V0ZEVYQnVWYjlVWGZXejNnbzI0RTdYczkrSnZXNXlWY1NIUkRjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFMR1pvVFYvVnhaenl2Vm9uMWVyUXhwUGN3RmpPaFcwWDBvV2RNeE1GRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd5YWVldUVmTUVkQ2lCVUhpSFM1RS9oVHRJakJQM1ZwR1dLSm1ubTZvWDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0xZWGRlK1JvQlJWVjNlUHVON1pobWxwSWNMZytkMUo0SjBtNHltemtYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFYaitBZXBvM1ZCMFI4c3RHL1M4TEsyeVBrejNhQ0wrb2hSbHBCU28xaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InltNTBtK3BodzRuL1FrN3JPWGM3M0pTUUsvcDRyWVZtWklnb2R3b2xOTTFnWWt2MEJhbklnZ1RwT1Y5MzJ6WXpzS2d5SjhYclV5RHk3QnozVXJvRWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM3LCJhZHZTZWNyZXRLZXkiOiJxMTZMT0xyUy94RFkzVG94R3VLSVh2blhsK1BYVDdva1pJa1ZTWGlkNHl3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQyMzcwNjI5MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyREVFOTBBMkQyNDBGRTg4NjFBMjg1MzlBNjIzRkY5OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NDY1NTk0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJLTU40NEVUUiIsIm1lIjp7ImlkIjoiOTIzNDIzNzA2MjkxOjMxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjA1NjE3ODg1MTE4Njc4OjMxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUhUa0xBR0VMQ1R4c1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidFREOFJTUDJUdGUxN3dPYU1ucm9qZ3JpbjVKQ2lGai9meWMwWFVwSTRWbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVEV1Wm5JRWpzYnZoQVBvaTNncVdXU0VVdUxIeURPMkp1TERpUi92NTdqbzFrcVc2eDk2RzlJMVRyV3hNeGVMSHI4aTQxM0xSeVhmUkhlbDVCd1VkQWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImIxS2Iya1J3elhtMUFiWitNTDVWTDM2SHFDMVRGaFRTdDQvVjNreU1ncno1ODRVdkRkM3pCYm9USTgxa1VwOTJFL3UyRmV3L041eGtzMEtXd3JzVWlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDIzNzA2MjkxOjMxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJVdy9FVWo5azdYdGU4RG1qSjY2STRLNHArU1FvaFkvMzhuTkYxS1NPRmEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjQ2NTU4OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFRDEifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SHAHID KING-MD ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/sxa61f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SHAHID KING-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHAHID KING-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923423706291",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*SHAHID KING*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sʜᴀʜɪᴅ ᴋɪɴɢ-ᴍᴅ 👑 ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/sxa61f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> name to suna hoga Shahid king  🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923423706291",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
