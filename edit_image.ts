import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

async function main() {
  try {
    console.log('Downloading image from Google Drive...');
    const url = 'https://drive.google.com/uc?export=download&id=1ruzvtvKqT8adG9bKaGGGtqvPGVrQ3_GE';
    const res = await fetch(url);
    const buffer = Buffer.from(await res.arrayBuffer());

    // Basic mime type check
    const header = buffer.subarray(0, 4).toString('hex');
    let mimeType = 'image/jpeg';
    if (header.startsWith('89504e47')) mimeType = 'image/png';
    else if (header.startsWith('52494646')) mimeType = 'image/webp';

    console.log(`Downloaded ${buffer.length} bytes. Mime type: ${mimeType}`);

    if (buffer.length < 1000) {
      console.error('File too small, might be an HTML error page from Google Drive.');
      console.error(buffer.toString('utf-8'));
      return;
    }

    console.log('Calling Gemini API to edit image...');
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: buffer.toString('base64'),
              mimeType
            }
          },
          {
            text: 'Isolate the man, remove all text next to him (keep text on his shirt). Expand his cropped arm and shoulder. Enhance resolution and sharpness to 8k photorealistic quality. Maintain his exact facial features and expressions.'
          }
        ]
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        fs.mkdirSync('public', { recursive: true });
        fs.writeFileSync('public/breno.png', Buffer.from(part.inlineData.data, 'base64'));
        console.log('IMAGE_SAVED');
        return;
      }
    }
    console.log('NO_IMAGE_IN_RESPONSE');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
