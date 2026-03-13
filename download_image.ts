import fs from 'fs';

async function main() {
  try {
    console.log('Downloading image from Google Drive...');
    const url = 'https://drive.google.com/uc?export=download&id=1ruzvtvKqT8adG9bKaGGGtqvPGVrQ3_GE';
    const res = await fetch(url);
    const buffer = Buffer.from(await res.arrayBuffer());

    fs.mkdirSync('public', { recursive: true });
    fs.writeFileSync('public/original_breno.jpg', buffer);
    console.log('Saved to public/original_breno.jpg');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
