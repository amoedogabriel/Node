const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 3333;

const server = http.createServer((req, res) => {
  const directory = './public';

  fs.readdir(directory, (err, files) => {
    if (err) {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Erro ao ler o diretório');
      return;
    }

    const list = files.map(file => {
      return `${file}<br>`;
    }).join('');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html><body><ul>${list}</ul></body></html>`);
  });
});

server.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:3333');
});
