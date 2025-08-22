const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "fana",
    alias: ["boti", "dji", "gpti", "gpt4i", "bingi"],
    desc: "Chat with an AI model",
    category: "ai",
    react: "🤖",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a message for the AI.\nExample: `.ai Hello`");

        const apiUrl = `https://lance-frank-asta.onrender.com/api/gpt?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.message) {
            await react("❌");
            return reply("AI failed to respond. Please try again later.");
        }

        await conn.sendMessage(from, { audio: { url: data.message }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek })
        await react("✅");
    } catch (e) {
        console.error("Error in AI command:", e);
        await react("❌");
        reply("An error occurred while communicating with the AI.");
    }
});
