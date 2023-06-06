const express = require('express');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3333;

// Define o diretório dos arquivos estáticos
const publicDir = path.join(__dirname, 'public');

// Rota para a página principal
app.get('/', async (req, res) => {
  try {
    const html = await fs.readFile(path.join(publicDir, 'index.html'), 'utf-8');
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para o arquivo CSS
app.get('/styles.css', async (req, res) => {
  try {
    const css = await fs.readFile(path.join(publicDir, 'styles.css'), 'utf-8');
    res.type('text/css').send(css);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para o arquivo JavaScript
app.get('/index.js', async (req, res) => {
  try {
    const js = await fs.readFile(path.join(publicDir, 'index.js'), 'utf-8');
    res.type('application/javascript').send(js);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para gerar parágrafos Lorem Ipsum
app.get('/generate/:num', (req, res) => {
  const num = parseInt(req.params.num);
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  let paragraphs = '';

  for (let i = 0; i < num; i++) {
    paragraphs += `<p>${loremIpsum}</p>`;
  }

  res.send(paragraphs);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
