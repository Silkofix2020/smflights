import { eventHandler, readBody } from "h3";

export default eventHandler(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
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
        res.writeHead(500, {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify({ error: "Error parsing JSON", details: text }));
        return;
      }

      res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(result));
    } catch (error) {
      console.error("Error sending data:", error);
      res.writeHead(500, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ error: "Error sending data" }));
    }
  } else {
    res.writeHead(405, {
      Allow: "POST, OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ error: `Method ${req.method} Not Allowed` }));
  }
});
