require("./doc/module.js")

/*

# Base By 饾暥饾枎饾枔饾枌 饾暰饾枂饾枓
# Owner ? : 饾暥饾枎饾枔饾枌 饾暰饾枂饾枓
!- do not delete this credit

*/

global.prefix = ['','!','.',',','馃悿','馃椏']
global.owner = ['254113660118']
global.ownMain = '254113660118'
global.NamaOwner = '𝕯𝖊𝖛𝖎𝖑 𝖘𝖉𝖎𝖔𝖘' //
global.connect = true // 
global.namabot = '𝗔𝘇𝗿𝗮𝗲𝗹' //
global.author = '饾暥饾枎饾枔饾枌 饾暰饾枂饾枓' //
global.packname = '𝗔𝘇𝗿𝗮𝗲𝗹' //
global.url1 = 'https://whatsapp.com/channel/0029Vajz4XmCnA7pBowZQ53h' //
global.url2 = 'https://whatsapp.com/channel/0029Vajz4XmCnA7pBowZQ53h' //
global.linkgc = 'https://whatsapp.com/channel/0029Vajz4XmCnA7pBowZQ53h'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})