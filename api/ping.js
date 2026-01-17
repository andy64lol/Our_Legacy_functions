// api/ping.js
export default function handler(req, res) {
  res.json({
    ok: true,
    msg: "Our Legacy backend online"
  })
}
