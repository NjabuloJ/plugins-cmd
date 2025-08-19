const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "📂",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/NjabuloJ/Njabulo-Jb';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `
*╭━━━━━━━━━━━━━━━━⊷*
┊ ┏────────────⊷
┊ ┊▢ʙᴏᴛ ɴᴀᴍᴇ :  *ɴᴊᴀʙᴜʟᴏ ᴊʙ*
┊ ┊▢ᴘʀᴇғɪx : *[ . ]*
┊ ┊▢ᴍᴏᴅᴇ :  *[public]*
┊ ┗────────────⊷
┊      ┏─────────⊷
┊      ┊ *(star)*  *(${repoData.stargazers_count})*
┊      ┊ *(forks)* *(${repoData.forks_count})*
┊      ┗─────────⊷
╰┬━━━━━━━━━━━━⊷⳹
┌┤git *(njabulo-repo.vercel.app)*
┊╰─────────────⊷
*╰━━━━━━━━━━━━━━━━━⊷*

> *✆︎Pσɯҽɾҽԃ Ⴆყ NנɐႦυℓσ נႦ* `;
        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/0mmreh.jpg` },
            caption: formattedInfo,
                       contextInfo: {
              isForwarded: true,
               forwardedNewsletterMessageInfo: {
                 newsletterJid: '120363399999197102@newsletter',
                   newsletterName: '╭••➤®Njabulo Jb',
                   serverMessageId: 143
               },
                forwardingScore: 999,
                externalAdReply: {
                    title: "🖥️ᴛᴇꜱᴛ ʙᴏᴛ ꜱᴘᴇᴇᴅ",
                    body: "🏓ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ",
                    thumbnailUrl: "https://files.catbox.moe/173jef.jpeg",
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

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/mflouf.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "✆︎NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });
    

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
      
