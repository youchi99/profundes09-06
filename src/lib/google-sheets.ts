import { google } from 'googleapis';
import { promises as fs } from 'fs';
import path from 'path';

// Initialize the Google Sheets API
async function getAuth() {
  try {
    // Read the secrets file
    const secretsPath = path.join(process.cwd(), process.env.GOOGLE_SHEET_SECRET_PATH || '');
    const secretsContent = await fs.readFile(secretsPath, 'utf-8');
    const credentials = JSON.parse(secretsContent);

    return new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  } catch (error) {
    console.error('Error reading secrets file:', error);
    throw new Error('Failed to initialize Google Sheets authentication');
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function appendToSheet(values: any[], sheetName: string) {
  try {
    const auth = await getAuth();
    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${sheetName}!A:Z`, // Adjust the range based on your needs
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error appending to sheet:', error);
    return { success: false, error };
  }
} 