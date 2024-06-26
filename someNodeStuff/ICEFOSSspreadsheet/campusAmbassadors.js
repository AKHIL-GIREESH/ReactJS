function onFormSubmit(e) {
  // Get the sheet where the form responses are stored
  var sheet = e.source.getActiveSheet();
  
  // Define the column number for the random string (e.g., column 5 for column "E")
  var randomStringColumn = 3;
  var emailColumn = 2;
  
  // Generate a random string
  var randomString = generateRandomString(5); // Adjust the length as needed
  
  // Get the range of the cell where the random string will be inserted
  var lastRow = sheet.getLastRow();
  var cell = sheet.getRange(lastRow, randomStringColumn);

  var emailAddress = sheet.getRange(lastRow, emailColumn).getValue();
  
  // Set the value of the cell to the random string
  cell.setValue(randomString);
  sendEmail(emailAddress, randomString);
}

function sendEmail(email, randomString) {
  var subject = "Your Submission Confirmation";
  var body = "Thank you for your submission. Your unique code is: " + randomString;
  MailApp.sendEmail(email, subject, body);
}

function generateRandomString(length) {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  result = "ICE-"+result;
  return result;
}

// Install the trigger
function createTrigger() {
  ScriptApp.newTrigger('onFormSubmit')
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onFormSubmit()
    .create();
}
