import express from 'express';

const router = express.Router();

// Rota para a página "about"
router.get('/about', (req, res) => {
  res.render('about', { title: 'Sobre o Jogo' });
});

export default router;
