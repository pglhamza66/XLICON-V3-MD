
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                 ᖘѧ𝙂ѧL✧Ĺѧ𝓡𝗞𝘼-𝐕𝟑-𝐌𝐃    𝐁𝐎𝐓                                                //
//                                                                                                      // 
//                                         Ｖ：3.0                                                      // 
//                                                                                                      // 
//              ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██████╗                    //
//              ╚██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║╚════██╗                   //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║ █████╔╝                  //
//               ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝ ╚═══██╗                   //
//              ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝ ██████╔╝                   //
//              ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝  ╚═════╝                    //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
 //  * @project_name : —͟͞͞★ ᵖ𝖆𝖌𝖆ใβ𝘰ʇ ★
 //  * @author : —͟͞͞★ ᵖ𝖆𝖌𝖆ใβ𝘰ʇ ★
 //  * @youtube : https://youtube.com/@by_mods037?si=JazfTJp1k34CZoem
//   * @description : —͟͞͞★ ᵖ𝖆𝖌𝖆ใβ𝘰ʇ ★.
//*
//* 
//base by 🦋✨ᴵᴬᴹ  ➳ᴩª𝗴𝑎𝚕ᗷοț➳✨🦋
//re-upload? recode? copy code? give credit ya :)
//Instagram: https://youtube.com/@by_mods037?si=JazfTJp1k34CZoem
//Telegram: https://youtube.com/@by_mods037?si=JazfTJp1k34CZoem
//GitHub: 923093303835
//WhatsApp: +923093303835
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//   * Created By Github: ᖘѧ𝙂ѧL✧Ĺѧ𝓡𝗞𝘼.
//   * Credit To Xeon
//   * © 2024 —͟͞͞★ ᵖ𝖆𝖌𝖆ใβ𝘰ʇ ★-V3-MD.
// ⛥┌┤
// */

const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//owmner v card
//________________________________________________________________________________________________________
global.ytname = process.env.YT_NAME || "YT: —͟͞͞★ ᵖ𝖆𝖌𝖆ใβ𝘰ʇ ★ " //ur yt chanel name
//________________________________________________________________________________________________________
global.socialm = process.env.MEDIA || "GitHub: 🔥🥀✧ᖘѧ𝙂ѧL✧Ĺѧ𝓡𝗞𝘼❀🥀🔥" //ur github or insta name
//________________________________________________________________________________________________________
global.location = process.env.GL_INFO || "Pakistan, Lahore, Sabzazar" //ur location
//________________________________________________________________________________________________________

//new
//________________________________________________________________________________________________________
global.botname = process.env.BOT_NAME || '—͟͞͞★ ᵖ𝖆𝖌𝖆ใβ𝘰ʇ ★' //ur bot name
//________________________________________________________________________________________________________
global.ownernumber = process.env.SUDO || '923093303835' //ur owner number
//________________________________________________________________________________________________________
global.ownername = process.env.SUDO_NAME || '🔥🥀✧ᖘѧ𝙂ѧL✧Ĺѧ𝓡𝗞𝘼❀🥀🔥' //ur owner name
//________________________________________________________________________________________________________
global.websitex = process.env.YT_LINK || "https://youtube.com/@by_mods037?si=JazfTJp1k34CZoem"
//________________________________________________________________________________________________________
global.wagc = process.env.GL_PUSH || "https://youtube.com/@by_mods037?si=JazfTJp1k34CZoem"
//________________________________________________________________________________________________________
global.themeemoji = process.env.GL_EMOJI || '😈'
//________________________________________________________________________________________________________
global.wm = process.env.GL_WM || "© 🦋✨ᴵᴬᴹ  ➳ᴩª𝗴𝑎𝚕ᗷοț➳✨🦋"
//________________________________________________________________________________________________________
global.botscript = process.env.GL_SC || 'https://youtube.com/@by_mods037?si=JazfTJp1k34CZoem' //script link
//________________________________________________________________________________________________________
global.packname = process.env.PACK_NAME || "🔥🥀✧ᖘѧ𝙂ѧL✧Ĺѧ𝓡𝗞𝘼❀🥀🔥"
//________________________________________________________________________________________________________
global.author = process.env.AUTHER_NAME || "🦋✨ᴵᴬᴹ  ➳ᴩª𝗴𝑎𝚕ᗷοț➳✨🦋"
//________________________________________________________________________________________________________
global.creator = process.env.GL_DEVS || "923093303835@s.whatsapp.net"
//________________________________________________________________________________________________________
global.xprefix = process.env.PREFIX || '.'
//________________________________________________________________________________________________________
global.premium = process.env.GL_VIP || ["923093303835"] // Premium User
//________________________________________________________________________________________________________
global.hituet = 0
//________________________________________________________________________________________________________

//bot sett
//________________________________________________________________________________________________________
global.typemenu = process.env.MENU_DESIGN || 'v4' // menu type 'v1' => 'v8'
//________________________________________________________________________________________________________
global.typereply = process.env.REPLY_TYPE || 'v2' // reply type 'v1' => 'v3'
//________________________________________________________________________________________________________
global.autoblocknumber = process.env.AUTO_BAN || '92' //set autoblock country code
//________________________________________________________________________________________________________
global.antiforeignnumber = process.env.AUTO_BLOCK || '92' //set anti foreign number country code
//________________________________________________________________________________________________________
global.welcome = process.env.WELCOME_MSG || true //welcome/left in groups
//________________________________________________________________________________________________________
global.anticall = process.env.GL_NOCALL || false //bot blocks user when called
//________________________________________________________________________________________________________
global.autoswview = process.env.AUTO_STATUS_SEEN || true //auto status/story view
//________________________________________________________________________________________________________
global.adminevent = process.env.ANNOUNCE_MSG  || true //show promote/demote message
//________________________________________________________________________________________________________
global.groupevent = process.env.GROUP_ANNOUNCE_MSG || true //show update messages in group chat
//________________________________________________________________________________________________________


//msg
global.mess = {
	limit: '_*Your limit is up!*_',
	nsfw: '_*Nsfw is disabled in this group, Please tell the admin to enable*_',
    done: '_*Done ✓*_',
    error: '_*I am having error to execute this*_',
    success: '_*Here you go!*_'
}
//thumbnail
global.thumb = fs.readFileSync('./XliconMedia/theme/xliconpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
