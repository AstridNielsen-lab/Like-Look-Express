# Like Look Express - Documentação Técnica

## Visão Geral da Arquitetura

O Like Look Express é uma plataforma web moderna construída com uma arquitetura de microsserviços, seguindo as melhores práticas de desenvolvimento e segurança.

### Stack Tecnológico

#### Frontend
- **Framework**: Next.js 14 (React 18)
- **Styling**: TailwindCSS + Headless UI
- **State Management**: Redux Toolkit
- **Form Handling**: React Hook Form + Zod
- **PWA**: Next-PWA + Workbox
- **Deployment**: Vercel/Netlify

#### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **ORM**: Prisma
- **Authentication**: JWT + Passport.js
- **Validation**: Joi + Express-validator
- **Documentation**: Swagger/OpenAPI

#### Database
- **Primary**: PostgreSQL 15
- **Cache**: Redis 7
- **Migration**: Prisma Migrate
- **Backup**: Automated daily backups

#### DevOps & Infrastructure
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Cloud**: AWS/Azure
- **Monitoring**: Sentry + Winston
- **Load Balancer**: Nginx

## Arquitetura do Sistema

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   Database      │
│   (Next.js)     │◄──►│   (Express.js)  │◄──►│   (PostgreSQL)  │
│   Port: 3000    │    │   Port: 3001    │    │   Port: 5432    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │              ┌─────────────────┐              │
         │              │     Redis       │              │
         │              │   (Cache)       │              │
         │              │   Port: 6379    │              │
         │              └─────────────────┘              │
         │                       │                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Nginx         │    │   External APIs │    │   File Storage  │
│ (Load Balancer) │    │   - Correios    │    │   (AWS S3)      │
│   Port: 80/443  │    │   - Google Maps │    │                 │
└─────────────────┘    │   - Stripe/MP   │    └─────────────────┘
                       └─────────────────┘
```

## Estrutura do Banco de Dados

### Principais Entidades

#### Users (Usuários)
- Cadastro e autenticação
- Perfis (Cliente, Admin, Operador, Suporte)
- 2FA e sessões ativas
- Auditoria de ações

#### Addresses (Endereços)
- Endereços de origem e destino
- Validação via CEP/Google Maps
- Suporte a múltiplos endereços por usuário

#### Collections (Coletas)
- Agendamento de coletas
- Tracking de status
- Integração com Correios
- Cálculo de frete em tempo real

#### Payments (Pagamentos)
- Múltiplos gateways (PIX, cartão, boleto)
- Controle de transações
- Webhooks de confirmação

#### Notifications (Notificações)
- Email, SMS, Push, In-app
- Templates personalizáveis
- Histórico de envios

### Relacionamentos Principais

```sql
Users 1:N Addresses
Users 1:N Collections
Users 1:N Payments
Users 1:N Notifications
Addresses 1:N Collections (origem)
Addresses 1:N Collections (destino)
Collections 1:N Payments
Collections 1:N StatusHistory
```

## APIs e Integrações

### API dos Correios (SIGEPWeb)
- Cálculo de frete e prazo
- Rastreamento de objetos
- Solicitação de coleta
- Etiquetas e postagem

### Google Services
- **Maps API**: Validação de endereços
- **Geocoding**: Coordenadas geográficas
- **Places**: Autocompletar endereços

### Gateways de Pagamento
- **Stripe**: Cartões internacionais
- **MercadoPago**: PIX e cartões nacionais
- **Webhooks**: Confirmação automática

### Notificações
- **Email**: NodeMailer + SMTP
- **SMS**: Twilio
- **Push**: Firebase Cloud Messaging

## Segurança

### Autenticação e Autorização
- JWT tokens com refresh
- Role-based access control (RBAC)
- 2FA via SMS/Email
- Rate limiting por IP

### Proteção de Dados
- HTTPS obrigatório (TLS 1.3)
- Criptografia de dados sensíveis
- Hash de senhas (bcrypt)
- Sanitização de inputs

### Auditoria
- Log de todas as ações
- Rastreamento de mudanças
- Monitoramento de acessos
- Alertas de atividades suspeitas

### Conformidade
- LGPD compliance
- Backup automático
- Política de retenção de dados
- Direito ao esquecimento

## Performance e Escalabilidade

### Cache Strategy
- Redis para sessões
- Cache de consultas frequentes
- CDN para assets estáticos
- Service Worker para PWA

### Otimizações
- Database indexing
- Query optimization
- Image compression
- Code splitting
- Lazy loading

### Monitoramento
- APM (Application Performance Monitoring)
- Error tracking (Sentry)
- Custom metrics
- Health checks

## Deploy e CI/CD

### Pipeline de Desenvolvimento

```yaml
# GitHub Actions Workflow
1. Code Push → GitHub
2. Linting & Tests → Jest/Cypress
3. Build → Docker Images
4. Security Scan → Snyk/OWASP
5. Deploy Staging → AWS/Azure
6. E2E Tests → Automated
7. Deploy Production → Blue/Green
8. Health Check → Monitoring
```

### Environments

#### Development
- Local Docker Compose
- Hot reload ativado
- Debug logs
- Mock APIs

#### Staging
- Ambiente de testes
- Dados simulados
- Testes automatizados
- Performance testing

#### Production
- Load balancing
- Auto-scaling
- Backup automático
- Monitoring 24/7

## APIs Endpoints

### Authentication
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
POST /api/auth/forgot-password
POST /api/auth/reset-password
POST /api/auth/verify-email
POST /api/auth/enable-2fa
```

### Users
```
GET  /api/users/profile
PUT  /api/users/profile
GET  /api/users/addresses
POST /api/users/addresses
PUT  /api/users/addresses/:id
DEL  /api/users/addresses/:id
```

### Collections
```
GET  /api/collections
POST /api/collections
GET  /api/collections/:id
PUT  /api/collections/:id
DEL  /api/collections/:id
POST /api/collections/:id/schedule
POST /api/collections/:id/cancel
```

### Shipping
```
POST /api/shipping/calculate
POST /api/shipping/track
GET  /api/shipping/services
GET  /api/shipping/zipcodes/:cep
```

### Payments
```
GET  /api/payments
POST /api/payments/create
POST /api/payments/confirm
POST /api/payments/webhook/stripe
POST /api/payments/webhook/mercadopago
```

### Admin
```
GET  /api/admin/dashboard
GET  /api/admin/users
GET  /api/admin/collections
GET  /api/admin/reports
GET  /api/admin/analytics
```

## Testes

### Estratégia de Testes

#### Unit Tests (Jest)
- Funções puras
- Validações
- Transformações de dados
- Coverage > 80%

#### Integration Tests (Supertest)
- APIs endpoints
- Database operations
- External services
- Authentication flows

#### E2E Tests (Cypress)
- User journeys
- Critical flows
- Cross-browser testing
- Mobile responsiveness

#### Performance Tests (Artillery)
- Load testing
- Stress testing
- Spike testing
- Volume testing

### Test Data
- Fixtures para testes
- Factory pattern
- Database seeding
- Mock external APIs

## Backup e Disaster Recovery

### Backup Strategy
- Daily automated backups
- Point-in-time recovery
- Cross-region replication
- 30-day retention policy

### Disaster Recovery Plan
- RTO: 4 hours
- RPO: 1 hour
- Failover procedures
- Data integrity checks

## Maintenance e Updates

### Dependency Updates
- Weekly security updates
- Monthly dependency review
- Automated vulnerability scanning
- Breaking changes assessment

### Database Maintenance
- Index optimization
- Statistics updates
- Vacuum operations
- Performance tuning

### Log Management
- Log rotation
- Archival policies
- Search and analytics
- Alerting rules

## Troubleshooting

### Common Issues

#### Database Connection
```bash
# Check PostgreSQL status
docker-compose ps postgres
docker-compose logs postgres

# Reset database
npm run db:reset
npm run db:migrate
npm run db:seed
```

#### Redis Connection
```bash
# Check Redis status
docker-compose ps redis
redis-cli ping

# Clear cache
redis-cli flushall
```

#### API Errors
```bash
# Check backend logs
docker-compose logs backend

# Check environment variables
cat .env | grep DATABASE_URL

# Restart services
docker-compose restart backend
```

### Health Checks
```
GET /api/health
GET /api/health/database
GET /api/health/redis
GET /api/health/external-apis
```

## Resources

### Documentation Links
- [API Documentation](./API.md)
- [Frontend Components](./COMPONENTS.md)
- [Database Schema](./DATABASE.md)
- [Deployment Guide](./DEPLOYMENT.md)

### External References
- [Correios API](https://www.correios.com.br/atendimento/developers)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)

