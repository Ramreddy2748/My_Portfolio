function doPost(e) {
    var sheet = SpreadsheetApp.openById("1uXTB3qPnzHRrBIytk1UXEVH79Akk-a3uPVlHsyeCg9k").getSheetByName("Sheet1"); // Replace YOUR_SHEET_ID with your actual sheet ID
    var row = [new Date(), e.parameter.Name, e.parameter.EmailAddress, e.parameter.MobileNumber, e.parameter.EmailSubject, e.parameter.YourMessage];
    sheet.appendRow(row);
    return ContentService.createTextOutput("Success");
  }     