let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Arull
│ ✎ _Sekolah_ : Lulus SMA
│ ✎ _Umur_ : 18
│ ✎ _Asal_ : Kalimantan Selatan
│ ✎ _Status_ : Kontoll SiBocil
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/F6CAAOhrORm1sPdq6cRKAS
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/GdXv5LxKfDPHJ4WOH2rNu5
│ ✎ _Youtube _:
│    https://youtube.com/channel/UC1ikkqsPvtWuE_QonsET1yg
│ ✎ _Instagram_ : 
│    https://instagram.com/sahrulwara_____
│ ✎ _WhatsApp_ :
│    wa.me/6285822347348
╰───────────────────
`.trim(), m)
}

handler.help = ['infoowner']
handler.tags = ['main', 'utama']
handler.command = /^(infoowner)$/i

handler.exp = 150

module.exports = handler
