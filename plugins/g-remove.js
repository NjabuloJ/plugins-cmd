const { cmd } = require('../command');

cmd({
    pattern: "remove",
    alias: ["kick", "bye"],
    desc: "Removes a member from the group",
    category: "admin",
    react: "❌",
    filename: __filename
},
async (conn, mek, m, {
    from, q, isGroup, isBotAdmins, reply, quoted, senderNumber
}) => {
    // Check if the command is used in a group
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
    // Get the bot owner's number dynamically from conn.user.id
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

    // Check if the bot is an admin
    if (!isBotAdmins)
await conn.sendMessage(from, { 
		image: { url: `https://files.catbox.moe/0mmreh.jpg` },
		caption: "*(I need to be an admin to use this command.)*",
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
    let number;
    if (m.quoted) {
        number = m.quoted.sender.split("@")[0]; // If replying to a message, get the sender's number
    } else if (q && q.includes("@")) {
        number = q.replace(/[@\s]/g, ''); // If mentioning a user
    } else {

    await conn.sendMessage(from, { 
		image: { url: `https://files.catbox.moe/0mmreh.jpg` },
		caption: "*( Please reply to a message or mention a user to remove)*",
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

    const jid = number + "@s.whatsapp.net";

    try {
        await conn.groupParticipantsUpdate(from, [jid], "remove");
        
   await conn.sendMessage(from, { 
		image: { url: `https://files.catbox.moe/0mmreh.jpg` },
		caption: `✅ Successfully removed @${number}`,
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
    } catch (error) {
        console.error("Remove command error:", error);
        reply("❌ Failed to remove the member.");
    }
});
  
