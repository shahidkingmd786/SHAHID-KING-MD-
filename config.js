const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHAHID-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09GN0p3UDNONFdPNDFIK1l4K2hqTktqbzU5bWF6T1VaK1NlRFZ0OUQwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienFHY3BpMWZEa3UrZVUwNVQ4UjZaMDl2TDFPbW5HZGREaVE5eTRQdm1YVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQUJBeXVjZUtTUWE1RnlheFNNZlIzZlVPVVRuSjEvMU1OcE5Nd0NaMzJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q1FLSENlZ2ROem5uSDRqdDhLUzI4VUEyWHVMaERaeElTcjRhb21SaGo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNVTVtblRTRmpFc0hCNENRc1FhSDAwRENpZXNGakZEMzN1aDdZcVBzWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI5NHRGTE5OMFRpSUlUWENkMk4wcDYxTDJlaXB6Q3pJc05UMlRnVkhCeWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU1ndFJPOWtlWU84eWhoMDJpT1JmTzhGZjd3Wmx0amZBejFGL3o4K2RFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOW5JK1Y4cEdTc2NTcVkyOEIvUnIrSGpLUHdhK05Rdlh0OStodHJ0ZXdCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpCQlNoaEs4OTc4c3hHeUpWYmVJclNvSjJZQldjUGR4cVJKOC9lVm1qN3VyOVlQM2IvMTNUWFpnSXdPM09YS0N0THlvVzRHazJ2cXJEZGNIMjBzRGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiJMSWh1SlF0NVRyVmU3ZFpCQlVDV2ZxSk5NZ29KUGhBRWRScC9rU0tHNGVVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJCRVFSWlc1RiIsIm1lIjp7ImlkIjoiOTIzNDIzNzA2MjkxOjM3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjA1NjE3ODg1MTE4Njc4OjM3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWZUa0xBR0VQYlcwY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidFREOFJTUDJUdGUxN3dPYU1ucm9qZ3JpbjVKQ2lGai9meWMwWFVwSTRWbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRUY4YUpNUUtwYy9vVTBTbG4xN2NQYzhHVnlleGJWOXkzM3NTcDNodnEwWER4SHdLTjVJN2ZZMm84Q25YVFI4WTQvbForb2FJemZNcjAzKzJLS1RZQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IitFYzQ2aGx0RnA5L0hCWDVsRGwxejZsblJWWmVBMGh1dFhFU1NpRFBwdGphbDdqU3FOeVp3UWlYc08wK2VwUWtXUnZ3VkJaVndwYWw3MTFJWk9RbGhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDIzNzA2MjkxOjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJVdy9FVWo5azdYdGU4RG1qSjY2STRLNHArU1FvaFkvMzhuTkYxS1NPRmEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjY1NDQ2MCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
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
