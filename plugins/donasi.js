let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
┏──「 Donasi • Dana 」─⬣
│ • Pulsa : 085822347348
│ • Dana : 085822347348
╰────────⬣
┏──「 *NOTE* 」─⬣
│ > Ingin donasi? wa.me/6285822347348
│ Terimakasih Buat Yang Mau Berdonasi
┗────────⬣
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
