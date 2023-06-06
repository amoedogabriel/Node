import http from 'http';
import fs from 'fs';
import { createLink } from './util.js';
import path from 'path';
const PORT = process.env.PORT || 3333;

const server = http.createServer((req, res) => {
  const directory = './public';

  if (req.url === '/') {
    fs.readdir(directory, (err, files) => {
      if (err) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Erro ao ler o diretório');
        return;
      }

      const list = files.map(file => {
        return createLink(file);
      }).join('');

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(list);
    });
  } else {
    const filePath = path.join(directory, req.url);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Arquivo não encontrado');
        return;
      }

      const content = data.toString();

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`${content}<br><a href="/">Voltar</a>`);
    });
  }
});

server.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:3333');
});
