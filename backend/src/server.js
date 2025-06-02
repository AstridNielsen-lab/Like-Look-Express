const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware de segurança
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
  credentials: true
}));

// Middleware de logging
app.use(morgan('combined'));

// Middleware para parsing de JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Like Look Express API está funcionando!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Rota principal da API
app.get('/api', (req, res) => {
  res.json({
    message: '🚚 Bem-vindo ao Like Look Express API!',
    description: 'Plataforma de Logística Inteligente',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      docs: '/api/docs'
    }
  });
});

// Rotas de demonstração
app.get('/api/collections', (req, res) => {
  res.json({
    message: 'Endpoint de coletas em desenvolvimento',
    status: 'Em construção 🚧'
  });
});

app.get('/api/shipping/calculate', (req, res) => {
  res.json({
    message: 'Cálculo de frete em desenvolvimento',
    status: 'Em construção 🚧'
  });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Algo deu errado!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Erro interno do servidor'
  });
});

// Middleware para rotas não encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    message: `A rota ${req.originalUrl} não existe nesta API`
  });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Like Look Express API rodando na porta ${PORT}`);
  console.log(`📡 Health check disponível em: http://localhost:${PORT}/api/health`);
  console.log(`🌐 CORS configurado para: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
});

module.exports = app;

