const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");
require("dotenv").config();
const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  //   res.send("Hello");

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = process.env.sheetID;

  //   const metaData = await googleSheets.spreadsheets.get({
  //     auth,
  //     spreadsheetId,
  //   });

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Form Responses 1",
  });

  res.json(getRows.data.values);
});

app.listen(3001, () => console.log("Server is up and running"));
