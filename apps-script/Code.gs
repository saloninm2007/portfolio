/**
 * Receives contact-form submissions from mehtasaloni.in and adds them to the
 * "Portfolio enquiries" Google Sheet. Also emails you a short notification.
 */
const SHEET_ID = '1XC2wrJTzijf98GM03ROfvkyZHIz7e1w0u4LSPb6UiOM';
const NOTIFY_EMAIL = 'saloninm2007@gmail.com';

function doPost(e) {
  const p = (e && e.parameter) || {};
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  sheet.appendRow([
    p.submittedAt || new Date().toISOString(),
    p.name || '',
    p.email || '',
    p.company || '',
    p.need || '',
    p.budget || '',
    p.message || '',
    p.source || '',
    'New',
  ]);

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: 'New portfolio enquiry — ' + (p.name || 'someone'),
      replyTo: p.email || NOTIFY_EMAIL,
      body:
        'Name: ' + (p.name || '') + '\n' +
        'Email: ' + (p.email || '') + '\n' +
        'Company: ' + (p.company || '') + '\n' +
        'Need: ' + (p.need || '') + '\n' +
        'Budget: ' + (p.budget || '') + '\n\n' +
        (p.message || '') + '\n\n' +
        'Sheet: https://docs.google.com/spreadsheets/d/' + SHEET_ID,
    });
  }

  return ContentService.createTextOutput('ok');
}
