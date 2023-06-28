const fs = require("fs");
const chalk = require("chalk");
global.creAtor = "yournumber@s.whatsapp.net";
global.owner = ["6285726996330"];
global.ownerNumber = ["yournumber@s.whatsapp.net"];
global.nomerOwner = "6283833949495";
global.namabotnya = "AbotMD";
global.namaownernya = "vorstcavry";
global.packname = "© Created By";
global.author = "AbotMD";
global.sessionName = "session";
global.group = "";
global.youtube = "";
global.website = "";
global.github = "";
global.keyopenai = "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";
global.keyopenai = "2d2703d1";
global.nomorowner = "https://wa.me/6285726996330";
global.region = "I`m From Indonesia";
global.prefa = ["", "!", ".", "#", "-", "•"];
global.thumb = fs.readFileSync("./function/image/thumb.jpg");
global.krmd = {
  success: "```Success✅```",
  admin: "```Fitur Khusus Admin Group!!!```",
  botAdmin: "```Bot Harus Menjadi Admin Terlebih Dahulu!!!```",
  owner: "```Fitur Khusus Owner Bot!!!```",
  group: "```Fitur Digunakan Hanya Untuk Group!!!```",
  private: "```Fitur Digunakan Hanya Untuk Private Chat!!!```",
  bot: "```Fitur Khusus Pengguna Nomor Bot!!!```",
  error:
    "```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```",
  wait: "```Waittt...```",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
  delete require.cache[file];
  require(file);
});
