# 💈 Roger Barber - Barbearia

Um site moderno e responsivo para barbearia, desenvolvido com **React + JavaScript + CSS**.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápido e moderno
- **React Router** - Navegação entre páginas
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos
- **CSS Modules** - Estilização componentizada

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📂 Estrutura do Projeto

```
roger_barber/
├── src/
│   ├── components/       # Componentes React com CSS
│   │   ├── Home.jsx + Home.css
│   │   ├── Navbar.jsx + Navbar.css
│   │   ├── AboutUs.jsx + AboutUs.css
│   │   ├── Footer.jsx + Footer.css
│   │   ├── LocationCard.jsx + LocationCard.css
│   │   └── ui/          # Componentes UI (Radix UI)
│   ├── pages/           # Páginas da aplicação
│   │   ├── Index.jsx + Index.css
│   │   ├── Services.jsx + Services.css
│   │   ├── Map.jsx + Map.css
│   │   ├── UserReview.jsx + UserReview.css
│   │   └── NotFound.jsx + NotFound.css
│   ├── hooks/           # Custom React Hooks
│   ├── lib/             # Utilitários
│   ├── assets/          # Imagens e recursos
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Entry point
│   ├── index.css        # Estilos globais
│   └── variables.css    # Variáveis CSS
├── public/              # Arquivos públicos
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Personalização

### Cores e Temas

Edite `src/variables.css` para personalizar as cores:

```css
:root {
  --accent: 45 85% 55%;     /* Cor dourada */
  --cta: 25 95% 55%;        /* Cor dos botões */
  --background: 20 8% 8%;   /* Fundo escuro */
  /* ... outras variáveis */
}
```

### Componentes

Cada componente tem seu próprio arquivo CSS para fácil personalização:
- `Home.css` - Página inicial com hero
- `Navbar.css` - Menu de navegação
- `Services.css` - Página de serviços
- etc.

## ✨ Funcionalidades

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Menu de navegação fixo com efeito de scroll
- ✅ Hero section com imagem de fundo paralax
- ✅ Seção "Sobre Nós" com imagens e animações
- ✅ Grade de serviços com cards interativos
- ✅ Mapa de localização integrado
- ✅ Sistema de avaliações de clientes
- ✅ Botões de CTA com integração WhatsApp
- ✅ Footer completo com informações e links
- ✅ Animações suaves em CSS
- ✅ Sistema de variáveis CSS para fácil manutenção

## 🌐 Páginas

- **Home** (`/`) - Página inicial com hero e apresentação
- **Sobre Nós** - História e diferenciais da barbearia
- **Serviços** - Catálogo de serviços e preços
- **Localização** - Mapa e informações de contato
- **Avaliações** - Reviews e feedbacks dos clientes
- **404** - Página de erro personalizada

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO

- Meta tags otimizadas
- Open Graph para redes sociais
- Schema.org para negócios locais
- Sitemap e robots.txt

## 📝 Licença

Este projeto foi desenvolvido para a Barbearia Roger Barber.

## 👨‍💻 Conversão

Este projeto foi convertido de **TypeScript + Tailwind CSS** para **JavaScript + CSS convencional** mantendo 100% da funcionalidade original.

Veja `CONVERSION_COMPLETE.md` para detalhes completos da conversão.

---

**Desenvolvido com ❤️ para Roger Barber**
