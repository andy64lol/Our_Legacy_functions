// main.js
export default function handler(req, res) {
  const messages = [
    "Hello World",
    "Guten Tag Welt",
    "Hola Mundo",
    "Bonjour Monde",
    "你好世界",
    "こんにちは世界",
    "안녕하세요 세계",
    "Привет мир",
    "Ciao Mondo",
    "Olá Mundo",
    "Hallo Welt",
    "Hej Världen",
    "Salut Monde",
    "Zdravo Svijete",
    "Merhaba Dünya",
    "Salam Dunya",
    "Shalom Olam",
    "Halo Dunia",
    "Ahoj světe",
    "Konnichiwa Sekai",
    "Namaste Duniya",
    "Hei Maailma",
    "Tere Huvalepa"
  ]

  res.status(200).json({ messages })
}
