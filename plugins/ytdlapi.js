const config = require('../config')
const { cmd } = require('../command');
const { ytsearch } = require('@dark-yasiya/yt-dl.js');

// MP3 song download
cmd({ 
    pattern: "play", 
    alias: ["ytdl3x", "playx"], 
    react: "🎧", 
    desc: "Download YouTube song", 
    category: "download", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
            return reply("Failed to fetch the audio. Please try again later.");
        }
        
let ytmsg = `╭━━━━━━━━━━━━━━━━⊷
┊ ┏────────────⊷
┊ ┊▢ᴛɪᴛʟᴇ : *${yts.title}*
┊ ┊▢ᴛɪᴍᴇ: *${yts.timestamp}*
┊ ┊▢ ᴀᴜᴛʜᴏʀ:* ${yts.author.name}
┊ ┊▢ ᴠɪᴇᴡs : *${yts.views}*
┊ ┗────────────⊷
┊ ┏─────────⊷
┊ 【①】• *ᴀᴜᴅɪᴏ*
┊ 【②】• *ᴅᴏᴄᴜᴍᴇɴᴛ*
┊ 【③】• *ᴀᴜᴅɪᴏ ᴀɴᴅ ᴅᴏᴄᴜᴍᴇɴᴛ*
┊ 【④】• *ʟʏʀɪᴄs* 
┊ ┗─────────⊷
╰┬━━━━━━━━━━━━⊷⳹
┌┤ *Jυѕт ωαιт αяє ѕє¢ση∂ αυ∂ισ*
┊╰─────────────⊷
*╰━━━━━━━━━━━━━━━━⊷
`;
        await conn.sendMessage(from, { 
            image: { url: yts.thumbnail },
            caption: ytmsg,
                  contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363399999197102@newsletter',
                        newsletterName: '╭••➤®Njabulo Jb',
                        serverMessageId: 143
                    },
                forwardingScore: 999,
                externalAdReply: {
                    title: yts.title,
                    body: "Tys YouTube",
                    thumbnailUrl: yts.thumbnail.replace('default.jpg', 'hqdefault.jpg'),
                    sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
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
    
      await conn.sendMessage(from, {
    audio: { url: data.result.downloadUrl },
    mimetype: "audio/mpeg",
    fileName: `${yts.title}.mp3`,
    contextInfo: {
        externalAdReply: {
            title: yts.title,
            body: "Follow our WhatsApp Channel",
            mediaType: 1,
            thumbnailUrl: yts.thumbnail.replace('default.jpg', 'hqdefault.jpg'),
            sourceUrl: 'https://whatsapp.com/channel/0029VbAhCy8EquiTSb5pMS3t',
            mediaUrl: 'https://whatsapp.com/channel/0029VbAhCy8EquiTSb5pMS3t',
            showAdAttribution: true,
            renderLargerThumbnail: true
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
        console.error(error);
        reply("An error occurred. Please try again.");
    }
});
