# 🚀 Guia de Deploy na Vercel

## Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Git instalado (opcional, mas recomendado)

---

## Método 1: Deploy via Vercel CLI (Recomendado)

### 1. Instalar Vercel CLI

```bash
npm install -g vercel
```

### 2. Fazer Login

```bash
vercel login
```

### 3. Deploy

No diretório do projeto, execute:

```bash
vercel
```

Siga as instruções:
- **Set up and deploy?** → Yes
- **Which scope?** → Selecione sua conta
- **Link to existing project?** → No
- **Project name?** → `infotech-landing` (ou outro nome)
- **In which directory is your code located?** → `./`

### 4. Deploy para Produção

```bash
vercel --prod
```

---

## Método 2: Deploy via GitHub + Vercel Dashboard

### 1. Criar Repositório Git

```bash
git init
git add .
git commit -m "Initial commit - InfoTech Landing Page"
```

### 2. Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com/new)
2. Crie um novo repositório (ex: `infotech-landing`)
3. **NÃO** inicialize com README

### 3. Push para GitHub

```bash
git remote add origin https://github.com/SEU_USUARIO/infotech-landing.git
git branch -M main
git push -u origin main
```

### 4. Conectar na Vercel

1. Acesse [Vercel Dashboard](https://vercel.com/dashboard)
2. Clique em **"Add New Project"**
3. Importe seu repositório do GitHub
4. Configure:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `./`
5. Clique em **"Deploy"**

---

## Método 3: Deploy Manual (Drag & Drop)

### 1. Preparar Arquivos

Certifique-se de que o CSS foi compilado:

```bash
npm run build
```

### 2. Upload na Vercel

1. Acesse [Vercel Dashboard](https://vercel.com/dashboard)
2. Clique em **"Add New Project"**
3. Selecione **"Deploy without Git"**
4. Arraste a pasta do projeto ou selecione os arquivos
5. Clique em **"Deploy"**

---

## ⚙️ Configurações Importantes

### Variáveis de Ambiente (Opcional)

Se precisar adicionar variáveis de ambiente:

1. Vá em **Settings** → **Environment Variables**
2. Adicione as variáveis necessárias

### Domínio Customizado

1. Vá em **Settings** → **Domains**
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções

---

## 📝 Checklist Pré-Deploy

- [x] CSS compilado (`npm run build`)
- [x] Todas as imagens carregando
- [x] Links do WhatsApp configurados
- [x] Meta tags SEO preenchidas
- [x] Ícones Lucide funcionando
- [x] Responsividade testada

---

## 🔧 Personalizações Pós-Deploy

### Alterar Número do WhatsApp

Edite no `index.html` todas as ocorrências de:

```html
href="https://wa.me/5500000000000?text=..."
```

Substitua `5500000000000` pelo número real (com código do país).

### Alterar Imagens

Substitua as URLs do Unsplash por suas próprias imagens:

```html
<!-- Hero -->
<img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&q=80" ...>

<!-- Sobre -->
<img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" ...>
```

### Alterar Textos

Edite os textos placeholder no `index.html`:
- Logo: "INFOTECH"
- H1: "Soluções em Informática..."
- Descrições dos serviços
- Informações de contato

---

## 🎯 URLs Após Deploy

Após o deploy, você receberá:

- **URL de Preview:** `https://seu-projeto-hash.vercel.app`
- **URL de Produção:** `https://seu-projeto.vercel.app`

---

## 🔄 Atualizações Futuras

### Com Vercel CLI

```bash
# Fazer alterações no código
npm run build

# Deploy
vercel --prod
```

### Com GitHub

```bash
# Fazer alterações no código
git add .
git commit -m "Descrição das alterações"
git push

# Deploy automático na Vercel
```

---

## 📊 Monitoramento

Acesse o dashboard da Vercel para:
- Ver analytics de visitantes
- Monitorar performance
- Ver logs de deploy
- Configurar notificações

---

## ⚡ Performance

A Vercel otimiza automaticamente:
- ✅ Compressão Gzip/Brotli
- ✅ CDN Global
- ✅ Cache inteligente
- ✅ SSL/HTTPS automático

---

## 🆘 Troubleshooting

### CSS não carrega

Verifique se o `output.css` foi gerado:

```bash
npm run build
ls css/output.css
```

### Ícones não aparecem

Verifique se o script Lucide está no HTML:

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

### Erro 404

Verifique se o `vercel.json` está configurado corretamente.

---

## 📞 Suporte

- [Documentação Vercel](https://vercel.com/docs)
- [Comunidade Vercel](https://github.com/vercel/vercel/discussions)
