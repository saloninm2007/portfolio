# Contact form → Google Sheet

1. Open the **Portfolio enquiries** sheet in Google Drive.
2. Go to **Extensions → Apps Script**. Delete what's there and paste in `Code.gs` from this folder. Save.
3. Click **Deploy → New deployment**, choose type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, approve the permissions, and copy the **Web app URL**.
5. Paste that URL into `ENQUIRY_ENDPOINT` in `src/app/config.ts` and publish the site.

Until step 5 is done, the form opens a pre-filled email instead.
