const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "mute",
    alias: ["lock"],
    react: "🔐",
    desc: "Mute the group (Only admins can send messages).",
    category: "group",
    filename: __filename
},           
async (conn, mek, m, { from, isGroup, senderNumber, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup) 
          await conn.sendMessage(from, { 
		image: { url: `https://files.catbox.moe/0mmreh.jpg` },
		caption: "*(This command can only be used in groups.)*",
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
      if (!isAdmins) 
       await conn.sendMessage(from, { 
		image: { url: `https://files.catbox.moe/0mmreh.jpg` },
		caption: "*(Only group admins can use this command.)*",
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
      if (!isBotAdmins)
await conn.sendMessage(from, { 
		image: { url: `https://files.catbox.moe/0mmreh.jpg` },
		caption: "*(I need to be an admin to unmute the group.)*",
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
        await conn.groupSettingUpdate(from, "announcement");
  
   await conn.sendMessage(from, { 
		image: { url: `https://files.catbox.moe/0mmreh.jpg` },
		caption: "*(Group has been muted. Only admins can send messages.".)*",
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
        console.error("Error muting group:", e);
        reply("❌ Failed to mute the group. Please try again.");
    }
});
      
