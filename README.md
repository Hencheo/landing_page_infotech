# Landing Page - InfoTech

Landing page para loja de informática desenvolvida seguindo rigorosamente as especificações do Software Design Document (SDD).

## 🚀 Tecnologias

- **HTML5 Semântico**
- **Tailwind CSS v3+**
- **JavaScript Vanilla**
- **Lucide Icons**

## 📁 Estrutura do Projeto

```
site_restaurante/
├── index.html
├── css/
│   ├── input.css
│   └── output.css (gerado)
├── js/
│   └── main.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🛠️ Instalação e Uso

### 1. Instalar Dependências

```bash
npm install
```

### 2. Compilar Tailwind CSS

**Modo Desenvolvimento (com watch):**
```bash
npm run dev
```

**Modo Produção (minificado):**
```bash
npm run build
```

### 3. Abrir no Navegador

Abra o arquivo `index.html` em seu navegador ou use uma extensão como Live Server no VS Code.

## ✨ Funcionalidades

- ✅ **Responsivo Mobile-First** - Adaptado para todos os dispositivos
- ✅ **Menu Hambúrguer** - Menu mobile com animação suave
- ✅ **Smooth Scroll** - Navegação suave entre seções
- ✅ **Animações de Scroll** - Elementos aparecem ao rolar a página
- ✅ **Botão WhatsApp Flutuante** - Contato rápido fixo na tela
- ✅ **Hover Effects** - Animações em cards e botões
- ✅ **Glassmorphism** - Efeitos modernos nos cards

## 🎨 Paleta de Cores

- **Primary Blue**: `#3b82f6`
- **Dark Background**: `#0f172a`
- **Dark Alternate**: `#1e293b`
- **Accent Cyan**: `#22d3ee`

## 📱 Seções

1. **Header** - Navegação fixa com logo e menu
2. **Hero** - Seção principal com CTAs
3. **Serviços** - Grid com 6 cards de serviços
4. **Sobre** - Informações sobre a empresa
5. **Diferenciais** - Estatísticas e benefícios
6. **Contato** - CTA para WhatsApp
7. **Footer** - Links e redes sociais

## 🔧 Personalização

Para personalizar o número do WhatsApp, edite as URLs no `index.html`:

```html
href="https://wa.me/5500000000000?text=..."
```

Substitua `5500000000000` pelo número desejado (com código do país).

## 🚀 Deploy na Vercel

### Opção 1: Vercel CLI (Rápido)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Opção 2: GitHub + Vercel

1. Crie um repositório no GitHub
2. Push do código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/SEU_USUARIO/REPO.git
   git push -u origin main
   ```
3. Conecte o repositório na [Vercel Dashboard](https://vercel.com)

### Opção 3: Drag & Drop

1. Acesse [Vercel Dashboard](https://vercel.com/dashboard)
2. Arraste a pasta do projeto
3. Deploy automático

**📖 Guia completo:** Veja [DEPLOY.md](DEPLOY.md) para instruções detalhadas.

## 📁 Arquivos Importantes

- `index.html` - Página principal
- `css/output.css` - CSS compilado (gerado automaticamente)
- `js/main.js` - JavaScript com interatividade
- `tailwind.config.js` - Configuração Tailwind
- `vercel.json` - Configuração de deploy

## 📄 Licença

© 2025 InfoTech. Todos os direitos reservados.
