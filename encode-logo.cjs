const fs = require('fs');
try {
  let path = 'src/assets/logo.jpg';
  if (!fs.existsSync(path)) {
    path = 'public/logo.jpg';
  }
  if (!fs.existsSync(path)) {
    console.log('Logo not found in src/assets or public');
    process.exit(1);
  }
  const data = fs.readFileSync(path);
  const base64 = data.toString('base64');
  const ext = path.endsWith('.png') ? 'png' : 'jpeg';
  fs.writeFileSync('src/logoBase64.ts', `export const logoBase64 = "data:image/${ext};base64,${base64}";\n`);
  console.log('Logo encoded successfully, size:', data.length);
} catch (e) {
  console.error('Error encoding logo:', e.message);
}
