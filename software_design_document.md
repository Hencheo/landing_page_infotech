# SPECIFICATION: COMP-STORE LANDING PAGE

## Software Design Document (SDD)
### Landing Page para Loja de Informática

---

## 📋 Thought Process

Analisando a demanda para uma landing page de loja de informática focada em conversão, identifiquei os seguintes pontos críticos:

1. **Objetivo Principal**: Captura de leads (contato via WhatsApp/Formulário) e apresentação clara de serviços
2. **Público-Alvo**: Clientes buscando assistência técnica, compra de equipamentos ou serviços de TI
3. **Estrutura de Conversão**: Hero impactante → Confiança (Serviços) → Prova Social → CTA Final
4. **Mobile First**: Maioria do público acessa via mobile, especialmente para contato rápido

A estrutura seguirá o modelo **AIDA** (Atenção → Interesse → Desejo → Ação) otimizado para conversão local.

---

## 1. Arquitetura de Informação

### 1.1 Estrutura DOM Completa

```
<body>
├── <header> (Navegação Fixa)
│   ├── Logo Placeholder
│   ├── Menu Desktop (links âncora)
│   └── Menu Hambúrguer (Mobile)
│
├── <main>
│   ├── <section id="hero"> (Hero Section)
│   │   ├── Headline Principal (H1)
│   │   ├── Subheadline
│   │   ├── CTA Primary Button
│   │   └── CTA Secondary Button
│   │
│   ├── <section id="servicos"> (Services Grid)
│   │   ├── Section Title (H2)
│   │   └── Grid 3x2 de Cards de Serviço
│   │       └── Card: Ícone + Título (H3) + Descrição
│   │
│   ├── <section id="sobre"> (About/Trust Section)
│   │   ├── Imagem ilustrativa
│   │   ├── Bloco de texto
│   │   └── Lista de diferenciais
│   │
│   ├── <section id="diferenciais"> (Benefits Strip)
│   │   └── Grid 4 colunas: Ícone + Número + Label
│   │
│   ├── <section id="contato"> (CTA Final + Form)
│   │   ├── Headline de conversão (H2)
│   │   ├── Formulário de Contato OU
│   │   └── Botão WhatsApp destacado
│   │
├── <footer>
│   ├── Logo
│   ├── Links rápidos
│   ├── Redes Sociais
│   └── Copyright
</body>
```

### 1.2 Hierarquia de Textos Placeholder

| Elemento | Tag | Texto Placeholder |
|----------|-----|-------------------|
| Logo | `<img>` / `<span>` | "INFOTECH" ou "[SUA LOGO]" |
| Hero H1 | `<h1>` | "Soluções em Informática para Você e sua Empresa" |
| Hero Sub | `<p>` | "Assistência técnica especializada, venda de equipamentos e suporte técnico com atendimento rápido e personalizado" |
| CTA Primary | `<a>` | "Fale Conosco pelo WhatsApp" |
| CTA Secondary | `<a>` | "Conheça Nossos Serviços" |
| Serviços H2 | `<h2>` | "Nossos Serviços" |
| Serviço Card H3 | `<h3>` | "Manutenção de Computadores" / "Formatação e Backup" / "Redes e Cabeamento" / "Venda de Peças" / "Suporte Remoto" / "Consultoria TI" |
| Sobre H2 | `<h2>` | "Sobre Nós" |
| Contato H2 | `<h2>` | "Entre em Contato" |
| Footer | `<p>` | "© 2025 InfoTech. Todos os direitos reservados." |

---

## 2. Especificação de UI/UX (Tailwind CSS v3+)

### 2.1 Paleta de Cores

```javascript
// tailwind.config.js - Extensão sugerida
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',   // bg-primary-50
          100: '#dbeafe',
          500: '#3b82f6',  // Azul principal - bg-primary-500
          600: '#2563eb',  // Hover state
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        dark: {
          800: '#1e293b',  // bg-dark-800 (seções alternadas)
          900: '#0f172a',  // bg-dark-900 (background principal)
          950: '#020617',
        },
        accent: {
          400: '#22d3ee',  // Cyan para destaques
          500: '#06b6d4',
        }
      }
    }
  }
}
```

**Aplicação das Cores:**

| Contexto | Classe Tailwind |
|----------|-----------------|
| Background Principal | `bg-dark-900` ou `bg-slate-900` |
| Background Alternado | `bg-dark-800` ou `bg-slate-800` |
| Texto Principal | `text-white` |
| Texto Secundário | `text-slate-300` |
| Botão Primary | `bg-primary-500 hover:bg-primary-600` |
| Botão Secondary | `bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white` |
| Destaque/Accent | `text-accent-400` |
| Cards | `bg-slate-800/50 backdrop-blur` |

### 2.2 Tipografia

**Font Stack:**
```html
<!-- Google Fonts no <head> -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

```javascript
// tailwind.config.js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

**Escala Tipográfica:**

| Elemento | Mobile | Desktop | Classes |
|----------|--------|---------|---------|
| H1 (Hero) | 32px | 56px | `text-3xl md:text-5xl lg:text-6xl font-bold` |
| H2 (Sections) | 28px | 40px | `text-2xl md:text-4xl font-bold` |
| H3 (Cards) | 20px | 24px | `text-xl md:text-2xl font-semibold` |
| Body | 16px | 18px | `text-base md:text-lg` |
| Small | 14px | 14px | `text-sm` |

### 2.3 Espaçamentos (Spacing Scale)

| Contexto | Classes Tailwind |
|----------|------------------|
| Padding Container | `px-4 md:px-6 lg:px-8` |
| Section Padding Y | `py-16 md:py-24 lg:py-32` |
| Gap entre Cards | `gap-6 md:gap-8` |
| Margin entre elementos | `mb-4 md:mb-6` |
| Container Max Width | `max-w-7xl mx-auto` |

### 2.4 Container Principal

```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Conteúdo -->
</div>
```

---

## 3. Comportamento de Animações

### 3.1 Animações CSS/Tailwind Padrão

| Elemento | Trigger | Classes |
|----------|---------|---------|
| Cards de Serviço | Hover | `transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20` |
| Botões | Hover | `transition-all duration-200 hover:scale-105 active:scale-95` |
| Links Nav | Hover | `transition-colors duration-200 hover:text-primary-400` |
| Imagens | Hover | `transition-transform duration-500 hover:scale-110` |

### 3.2 Animações de Entrada (Scroll Reveal)

Adicionar ao `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
}
```

**Aplicação via JavaScript (Intersection Observer):**

```javascript
// Classe utilitária para elementos que animam on-scroll
// Elementos iniciam com: class="opacity-0 translate-y-8"
// Ao entrar na viewport, adicionar: class="animate-fade-up"
```

### 3.3 Micro-interações

| Interação | Implementação |
|-----------|---------------|
| Ripple Effect nos Botões | Pseudo-elemento `::after` + CSS ou plugin |
| Glow nos Cards | `hover:shadow-lg hover:shadow-primary-500/20` |
| Underline Animado Links | `relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-500 after:transition-all` |

---

## 4. Breakpoints e Responsividade (Mobile First)

### 4.1 Breakpoints Tailwind

| Prefixo | Min-Width | Uso |
|---------|-----------|-----|
| (default) | 0px | Mobile |
| `sm:` | 640px | Mobile Large |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Desktop Large |

### 4.2 Comportamentos por Seção

#### Header
```
Mobile:  Logo | Hamburger Button
         Menu dropdown full-width (hidden por padrão)

Desktop: Logo | Nav Links inline | CTA Button
```

**Classes:**
```html
<!-- Nav Links Container -->
<nav class="hidden md:flex items-center gap-8">

<!-- Mobile Menu -->
<div class="md:hidden fixed inset-0 bg-dark-900/95 z-50 transform transition-transform -translate-x-full" id="mobile-menu">
```

#### Hero Section
```
Mobile:  Stack vertical (flex-col)
         Texto centralizado
         Botões empilhados

Desktop: Flex row (texto | imagem)
         Texto à esquerda
         Botões lado a lado
```

**Classes:**
```html
<section class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
  <div class="text-center lg:text-left">
    <!-- Conteúdo -->
  </div>
  <div class="w-full lg:w-1/2">
    <!-- Imagem/Ilustração -->
  </div>
</section>
```

#### Services Grid
```
Mobile:  1 coluna (grid-cols-1)
Tablet:  2 colunas (md:grid-cols-2)
Desktop: 3 colunas (lg:grid-cols-3)
```

**Classes:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
```

#### Benefits Strip
```
Mobile:  2 colunas (grid-cols-2)
Desktop: 4 colunas (lg:grid-cols-4)
```

---

## 5. Requisitos Funcionais

### 5.1 Menu Hambúrguer (Mobile)

**Estado Inicial:**
- Ícone hambúrguer visível apenas em `< md` breakpoint
- Menu oculto com `transform -translate-x-full`

**Comportamento ao Clicar:**
1. Toggle classe no menu: `translate-x-0` (visível) / `-translate-x-full` (oculto)
2. Ícone muda para "X" (close)
3. Body recebe `overflow-hidden` para prevenir scroll
4. Backdrop escuro aparece

**Código JavaScript Mínimo:**
```javascript
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('-translate-x-full');
  document.body.classList.toggle('overflow-hidden');
  // Toggle ícone
  menuIcon.classList.toggle('rotate-90');
});

// Fechar ao clicar em link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
    document.body.classList.remove('overflow-hidden');
  });
});
```

### 5.2 Smooth Scroll para Âncoras

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

**CSS Fallback:**
```css
html {
  scroll-behavior: smooth;
}
```

### 5.3 Botão WhatsApp

**Comportamento:**
- Link abre WhatsApp com mensagem pré-definida
- Botão flutuante fixo no canto inferior direito (mobile)

**Implementação:**
```html
<a 
  href="https://wa.me/5500000000000?text=Olá! Gostaria de mais informações sobre os serviços."
  target="_blank"
  rel="noopener noreferrer"
  class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
  aria-label="Contato via WhatsApp"
>
  <!-- WhatsApp Icon SVG -->
</a>
```

### 5.4 Formulário de Contato (Opcional)

**Campos:**
| Campo | Tipo | Validação | Placeholder |
|-------|------|-----------|-------------|
| Nome | text | required, minlength="3" | "Seu nome" |
| Telefone | tel | required, pattern | "(00) 00000-0000" |
| Email | email | optional | "seu@email.com" |
| Mensagem | textarea | required, minlength="10" | "Como podemos ajudar?" |

**Estados de Validação:**
```html
<!-- Input válido -->
<input class="... focus:ring-2 focus:ring-primary-500 focus:border-primary-500">

<!-- Input inválido -->
<input class="... border-red-500 focus:ring-red-500">

<!-- Mensagem de erro -->
<span class="text-red-400 text-sm mt-1">Campo obrigatório</span>
```

---

## 6. Estratégia de Assets

### 6.1 Imagens Placeholder

**Usando Unsplash (URLs diretas para produção-ready):**

| Contexto | URL Sugerida | Dimensões |
|----------|--------------|-----------|
| Hero Background | `https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&q=80` | 1920x1080 |
| Sobre Nós | `https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80` | 800x600 |
| Card 1 - Manutenção | `https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80` | 400x300 |
| Card 2 - Formatação | `https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80` | 400x300 |

### 6.2 Ícones

**Opção 1 - Heroicons (Recomendado para Tailwind):**
```html
<script src="https://unpkg.com/heroicons@2.0.0/24/outline/index.js"></script>
```

**Opção 2 - Lucide Icons:**
```html
<script src="https://unpkg.com/lucide@latest"></script>
```

**Ícones Necessários:**
| Serviço | Ícone Sugerido |
|---------|----------------|
| Manutenção | `wrench-screwdriver` / `cog-6-tooth` |
| Formatação | `arrow-path` / `folder-arrow-down` |
| Redes | `wifi` / `globe-alt` |
| Venda de Peças | `cpu-chip` / `rectangle-stack` |
| Suporte Remoto | `video-camera` / `computer-desktop` |
| Consultoria | `light-bulb` / `chart-bar` |
| WhatsApp | SVG custom (brand icon) |
| Menu | `bars-3` |
| Close | `x-mark` |

### 6.3 Logo Placeholder

```html
<!-- Opção texto estilizado -->
<span class="text-2xl font-bold">
  <span class="text-primary-500">INFO</span><span class="text-white">TECH</span>
</span>

<!-- Opção com ícone -->
<div class="flex items-center gap-2">
  <svg class="w-8 h-8 text-primary-500"><!-- cpu icon --></svg>
  <span class="text-xl font-bold text-white">[SUA LOGO]</span>
</div>
```

---

## 7. SEO & Performance

### 7.1 Meta Tags Obrigatórias

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Loja de informática com assistência técnica especializada, venda de peças e equipamentos. Atendimento rápido e personalizado. Contate-nos!">
  <meta name="keywords" content="informática, assistência técnica, manutenção computador, formatação, redes">
  <title>InfoTech | Soluções em Informática</title>
  
  <!-- Open Graph -->
  <meta property="og:title" content="InfoTech | Soluções em Informática">
  <meta property="og:description" content="Assistência técnica especializada e venda de equipamentos">
  <meta property="og:type" content="website">
  <meta property="og:image" content="URL_DA_IMAGEM_OG">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>
```

### 7.2 Performance

- **Lazy Loading** em imagens: `loading="lazy"`
- **Preconnect** para fontes: `<link rel="preconnect" href="https://fonts.googleapis.com">`
- **Minificar** CSS/JS em produção
- **WebP** para imagens quando possível

---

## 8. Estrutura de Arquivos

```
/landing-page-informatica/
├── index.html
├── /css/
│   └── output.css (Tailwind compilado)
├── /js/
│   └── main.js (Interatividade)
├── /assets/
│   ├── /images/
│   └── /icons/
├── tailwind.config.js
├── package.json
└── README.md
```

---

## ✅ Verificação

A verificação será feita pelo próprio desenvolvedor frontend seguindo este checklist:

### Checklist de Implementação

- [ ] Header fixo e responsivo funcionando
- [ ] Menu hambúrguer abrindo/fechando corretamente
- [ ] Smooth scroll funcionando em todos os links
- [ ] Grid de serviços adaptando nos 3 breakpoints
- [ ] Todas as animações de hover funcionando
- [ ] Botão WhatsApp fixo e funcional
- [ ] Mobile First confirmado (testar em DevTools)
- [ ] Cores seguindo a paleta definida
- [ ] Tipografia Inter carregando corretamente
- [ ] Imagens com lazy loading

### Teste Manual

1. Abrir em navegador desktop e redimensionar para mobile
2. Testar todos os links de navegação
3. Testar botão WhatsApp (abre chat com mensagem)
4. Verificar animações de scroll reveal
5. Lighthouse score > 90 em Performance

---

> [!IMPORTANT]
> Este documento serve como **Bíblia** para implementação. O desenvolvedor Frontend deve seguir estas especificações sem desvios significativos. Qualquer alteração deve ser documentada e justificada.
