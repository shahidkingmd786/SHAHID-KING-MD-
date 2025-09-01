const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHAHID-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0N3OFc2NkVRbVg4V0FNYWRQQ0ZHZnJSNGhwd3g4M0lEVXZQeGpweStYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHVtLytQamp1amxhOHhTaUdsbGc0aEpNdUt1TzBud1pyZ244ZHNqRFN5TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SHI3clNpdW5ETllaR2dUUFlveWtESjlVdDJmTXBaTVFJRVlaejRrekZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmZjBHS0czUEJmQVByazVwR1hZL2haRk03YmR2YWVXemgvaXYxTGZpSDJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGRDR6OGlzaUUxSm9Mb0pObGlMQVk2YkpiUmJaWGtyM3grZzFuTkpYRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1MdEVYRC9hM2VUUWtjL3pMcnBFZXlLRzNVenFoK3RPS0IxbXE4TElBVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0NCMlRORmlxMFMvMDNXamlWcWh5OUhNWEU3c0drQWdMREhBMTJEelpWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTlYNm9xYk9iMnlXclNjdmZ1emVGUGNXUXJEdkgza2RxQndKZ3lnRDF6cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE4TUUvNFFUd1NhOEJsODA2aXlSQUJucTRuTzVVeUJiamg3OXQxeVRuVnZrTWRYTE5Nb2FhcjQ5ZFEvZVZLNE9yMlRIV045Ukt1S05PNjBKdUtpamlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiMkJWK1hMbko4UUhKOStJdXpYMVF3a1NJMmZROEpJWnNQQWJGaVR3Vmk0WT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiU1dLUE1EMjciLCJtZSI6eyJpZCI6IjkyMzQyMzcwNjI5MTo0MEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIwNTYxNzg4NTExODY3ODo0MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01yVGtMQUdFTk85MWNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRURDhSU1AyVHRlMTd3T2FNbnJvamdyaW41SkNpRmovZnljMFhVcEk0Vm89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVNb0MwWEhNN2hnR3Qvb1dWVk5HVlNzV1FnVEp0Z3ZrNTBEQmE3cVRkbWVZbHdVbUtSdndDeTdIRWwvT205MEY3REsrZ0VnZHBMV2lvMFFhT1I0RUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhOWpMdXFHN3F0SzE2VU43aUV0Q1hEVStrTUZIem1zRE5rMVRhYVBKcXIwTlF4Ry8wWE4zUEVMRmU4cHJpeGRMelowT3FrVDZDaDR2RkZMWHdNaXppUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQyMzcwNjI5MTo0MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiVXcvRVVqOWs3WHRlOERtako2Nkk0SzRwK1NRb2hZLzM4bk5GMUtTT0ZhIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY3MTY3NjAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzhnIn0=",
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
