import { eventHandler, readBody, send } from "h3";

export default eventHandler(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method === "POST") {
    const data = await readBody(req);
    console.log("Received data:", data);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyUJ4SBIsL0OJaKNij97aNdI97sbth5EC7lCONOIKi0wiqUOW23LSBUxlb51gHSOWWJ0Q/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const text = await response.text();
      console.log("Google Script response:", text);
      let result;

      try {
        result = JSON.parse(text);
      } catch (jsonError) {
        console.error("Error parsing JSON:", jsonError);
        console.error("Response text:", text);
        res.setHeader("Access-Control-Allow-Origin", "*");
        send(res, 500, { error: "Error parsing JSON", details: text });
        return;
      }

      res.setHeader("Access-Control-Allow-Origin", "*");
      send(res, 200, result);
    } catch (error) {
      console.error("Error sending data:", error);
      res.setHeader("Access-Control-Allow-Origin", "*");
      send(res, 500, { error: "Error sending data" });
    }
  } else {
    res.setHeader("Allow", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Origin", "*");
    send(res, 405, `Method ${req.method} Not Allowed`);
  }
});
