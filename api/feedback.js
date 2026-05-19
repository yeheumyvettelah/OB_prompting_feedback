// ============================================================
//  SERVERLESS FUNCTION — DO NOT EDIT
//  Vercel가 이 파일을 자동으로 /api/feedback 엔드포인트로 배포합니다.
// ============================================================

const { SYSTEM_PROMPT } = require('./prompt');

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { chatLog } = req.body;

  if (!chatLog || chatLog.trim().length < 50) {
    return res.status(400).json({ error: 'Chat log is too short or missing.' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured.' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: 'user',
            content: `Please evaluate the following student chat log:\n\n${chatLog}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('Anthropic API error:', err);
      return res.status(502).json({ error: 'Failed to get response from AI.' });
    }

    const data = await response.json();
    const feedback = data.content?.[0]?.text ?? '';

    return res.status(200).json({ feedback });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
