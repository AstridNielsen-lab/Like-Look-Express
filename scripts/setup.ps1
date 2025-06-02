# =====================================
# LIKE LOOK EXPRESS - SCRIPT DE SETUP
# =====================================

Write-Host "🚀 Iniciando setup do Like Look Express..." -ForegroundColor Green
Write-Host "" 

# Verificar se o Node.js está instalado
Write-Host "📋 Verificando pré-requisitos..." -ForegroundColor Yellow

try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js encontrado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js não encontrado. Por favor, instale o Node.js 18+ antes de continuar." -ForegroundColor Red
    exit 1
}

# Verificar se o Docker está instalado
try {
    $dockerVersion = docker --version
    Write-Host "✅ Docker encontrado: $dockerVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Docker não encontrado. Você precisará dele para executar o banco de dados." -ForegroundColor Yellow
}

# Verificar se o Git está instalado
try {
    $gitVersion = git --version
    Write-Host "✅ Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Git não encontrado. Recomendado para controle de versão." -ForegroundColor Yellow
}

Write-Host "" 

# Criar arquivo .env se não existir
if (-not (Test-Path ".env")) {
    Write-Host "📝 Criando arquivo .env..." -ForegroundColor Blue
    Copy-Item ".env.example" ".env"
    Write-Host "✅ Arquivo .env criado! Lembre-se de configurar as variáveis antes de executar." -ForegroundColor Green
} else {
    Write-Host "✅ Arquivo .env já existe." -ForegroundColor Green
}

Write-Host "" 

# Instalar dependências do backend
Write-Host "📦 Instalando dependências do backend..." -ForegroundColor Blue
Set-Location "backend"
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependências do backend instaladas com sucesso!" -ForegroundColor Green
} else {
    Write-Host "❌ Erro ao instalar dependências do backend." -ForegroundColor Red
}
Set-Location ".."

Write-Host "" 

# Instalar dependências do frontend
Write-Host "📦 Instalando dependências do frontend..." -ForegroundColor Blue
Set-Location "frontend"
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependências do frontend instaladas com sucesso!" -ForegroundColor Green
} else {
    Write-Host "❌ Erro ao instalar dependências do frontend." -ForegroundColor Red
}
Set-Location ".."

Write-Host "" 

# Inicializar repositório Git se não existir
if (-not (Test-Path ".git")) {
    Write-Host "🔧 Inicializando repositório Git..." -ForegroundColor Blue
    git init
    git add .
    git commit -m "Initial commit: Like Look Express project structure"
    Write-Host "✅ Repositório Git inicializado!" -ForegroundColor Green
} else {
    Write-Host "✅ Repositório Git já existe." -ForegroundColor Green
}

Write-Host "" 

# Instruções finais
Write-Host "🎉 Setup concluído com sucesso!" -ForegroundColor Green
Write-Host "" 
Write-Host "📋 Próximos passos:" -ForegroundColor Cyan
Write-Host "" 
Write-Host "1. Configure as variáveis de ambiente no arquivo .env" -ForegroundColor White
Write-Host "2. Inicie o banco de dados com: docker-compose up -d postgres redis" -ForegroundColor White
Write-Host "3. Execute as migrações: cd backend && npm run db:migrate" -ForegroundColor White
Write-Host "4. Inicie o backend: cd backend && npm run dev" -ForegroundColor White
Write-Host "5. Inicie o frontend: cd frontend && npm run dev" -ForegroundColor White
Write-Host "" 
Write-Host "🌐 URLs de acesso:" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor White
Write-Host "Backend API: http://localhost:3001" -ForegroundColor White
Write-Host "Banco de dados: localhost:5432" -ForegroundColor White
Write-Host "Redis: localhost:6379" -ForegroundColor White
Write-Host "" 
Write-Host "📚 Documentação completa disponível em: docs/README.md" -ForegroundColor White
Write-Host "" 
Write-Host "✨ Boa sorte com o desenvolvimento!" -ForegroundColor Green

