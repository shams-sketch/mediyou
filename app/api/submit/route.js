import { google } from 'googleapis'

export async function POST(request) {
  try {
    const { name, phone, city, condition, insurance } = await request.json()

    // Authenticate with Google using service account credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Append a new row to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          name || '',
          phone || '',
          city || '',
          condition || '',
          insurance || 'Not specified',
        ]],
      },
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Google Sheets error:', error)
    return Response.json({ success: false }, { status: 500 })
  }
}
