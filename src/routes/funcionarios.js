const express = require('express');
const router = express.Router();

// Rota para obter todos os funcionários
router.get('/', async (req, res) => {
  try {
    const collection = db.collection('funcionarios');
    const funcionarios = await collection.find({}).toArray();
    res.json(funcionarios);
  } catch (error) {
    console.error('Erro ao obter funcionários:', error);
    res.status(500).json({ error: 'Erro ao obter funcionários' });
  }
});

module.exports = router;
