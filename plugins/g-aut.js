const { sleep } = require('../lib/functions');
const config = require('../config')
const { cmd, commands } = require('../command')


// JawadTechX

cmd({
    pattern: "leave",
    alias: ["left", "leftgc", "leavegc"],
    desc: "Leave the group",
    react: "🎉",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, senderNumber, reply
}) => {
    try {

        if (!isGroup) {
       await conn.sendMessage(from, { 
		image: { url: `https://files.catbox.moe/0mmreh.jpg` },
		caption: "*( This command can only be used in groups.)*",
		     contextInfo: {
              isForwarded: true,
               forwardedNewsletterMessageInfo: {
                 newsletterJid: '120363399999197102@newsletter',
                   newsletterName: '╭••➤®Njabulo Jb',
                   serverMessageId: 143
               },
                forwardingScore: 999,
                externalAdReply: {
                    title: "🖥️ setting's bot",
                    body: "📡ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ",
                    thumbnailUrl: "https://files.catbox.moe/aru9tq.jpg",
                    sourceUrl: "https://www.facebook.com/profile.php?id=100094314013209",
                    mediaType: 1,
                    renderSmallThumbnail: true
                }
            }
        }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });
        }
        

        const botOwner = conn.user.id.split(":")[0]; 
        if (senderNumber !== botOwner) {
    
       await conn.sendMessage(from, { 
		image: { url: `https://files.catbox.moe/0mmreh.jpg` },
		caption: "*(Only the bot owner can use this command.)*",
		     contextInfo: {
              isForwarded: true,
               forwardedNewsletterMessageInfo: {
                 newsletterJid: '120363399999197102@newsletter',
                   newsletterName: '╭••➤®Njabulo Jb',
                   serverMessageId: 143
               },
                forwardingScore: 999,
                externalAdReply: {
                    title: "🖥️ setting's bot",
                    body: "📡ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ",
                    thumbnailUrl: "https://files.catbox.moe/aru9tq.jpg",
                    sourceUrl: "https://www.facebook.com/profile.php?id=100094314013209",
                    mediaType: 1,
                    renderSmallThumbnail: true
                }
            }
        }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });
        }

        reply("Leaving group...");
        await sleep(1500);
        await conn.groupLeave(from);
        
      await conn.sendMessage(from, { 
		image: { url: `https://files.catbox.moe/0mmreh.jpg` },
		caption: "*(Goodbye! 👋)*\n *[oll people on this group fu**k]*",
		     contextInfo: {
              isForwarded: true,
               forwardedNewsletterMessageInfo: {
                 newsletterJid: '120363399999197102@newsletter',
                   newsletterName: '╭••➤®Njabulo Jb',
                   serverMessageId: 143
               },
                forwardingScore: 999,
                externalAdReply: {
                    title: "🖥️ setting's bot",
                    body: "📡ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ",
                    thumbnailUrl: "https://files.catbox.moe/aru9tq.jpg",
                    sourceUrl: "https://www.facebook.com/profile.php?id=100094314013209",
                    mediaType: 1,
                    renderSmallThumbnail: true
                }
            }
        }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });
    } catch (e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});

