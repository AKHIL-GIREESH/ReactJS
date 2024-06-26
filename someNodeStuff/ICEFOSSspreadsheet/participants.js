function onForm2Submit(e) {
  var responseSheet = e.source.getActiveSheet();
  var idColumn = 3; // Column where the ID (random string) is entered
  var lastRow = responseSheet.getLastRow();
  var enteredId = responseSheet.getRange(lastRow, idColumn).getValue();

  var sheet1 = SpreadsheetApp.openById('18gG_DU10DIQ58sz7-n6y2E8iT1LISZpg_2Nh4Td29sY').getSheetByName('FR1'); // Replace with the actual Sheet1 ID and name
  var data = sheet1.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) {
    if (data[i][2] === enteredId) { // Adjust column index for random string
      var emailAddressAmbassador = data[i][1]; // Adjust column index for email address
      let subject = "New Referral";
      let body = "Your ID: " + enteredId + " has a referral!";
      sendEmailToAmbassador(subject,body,emailAddressAmbassador);
      break;
    }
  }

  let subject = "Registration Successful";
  let emailUser = responseSheet.getRange(lastRow, 2).getValue();
  let event = responseSheet.getRange(lastRow, 4).getValue();
  let body = "You have successfully N😉T registered for ICEFOSS 2K24, event name = "+event+". See you there!, Debug0 = "+data.length+"Debug1 = "+emailAddressAmbassador;
  sendEmailToAmbassador(subject,body,emailUser);
}

function sendEmailToAmbassador(subject, body, email) {
  MailApp.sendEmail(email, subject, body);
}

// Install the trigger
function createTrigger() {
  ScriptApp.newTrigger('onForm2Submit')
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onFormSubmit()
    .create();
}
