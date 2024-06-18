export default function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    const data = req.body;

    // Отправка данных в Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbyUJ4SBIsL0OJaKNij97aNdI97sbth5EC7lCONOIKi0wiqUOW23LSBUxlb51gHSOWWJ0Q/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        res.status(500).json({ error: "Error sending data" });
      });
  } else {
    res.setHeader("Allow", ["POST", "OPTIONS"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
