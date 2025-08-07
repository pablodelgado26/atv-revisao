# 🛒 Loja de Eletrônicos - Next.js

Uma aplicação moderna de e-commerce desenvolvida com Next.js, implementando todas as melhores práticas de desenvolvimento e otimizações de performance.

## 🏗 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.jsx          # Layout principal com Provider e fontes
│   ├── page.jsx            # Página principal com lista de produtos
│   ├── page.module.css     # Estilos da página principal
│   ├── not-found.jsx       # Página 404 customizada
│   ├── not-found.module.css # Estilos da página 404
│   └── globals.css         # Estilos globais e fontes
├── components/
│   ├── Header/
│   │   ├── Header.jsx      # Componente Header com props
│   │   ├── HeaderWrapper.jsx # Wrapper para usar contexto
│   │   └── Header.module.css # Estilos do Header
│   └── ProductCard/
│       ├── Product.jsx     # Componente ProductCard
│       └── ProductCard.module.css # Estilos do ProductCard
├── contexts/
│   └── ProductContext.jsx  # Context API para estado global
├── data/
│   └── products.js         # Dados dos produtos
└── public/
    ├── fonts/
    │   ├── Roboto-Regular.ttf
    │   └── Roboto-Bold.ttf
    └── logo.svg             # Logo da empresa
```

## ✅ Requisitos Implementados

### 📦 Componentes

#### 1. Header Component
- ✅ Recebe props: `title`, `subtitle`, `totalProducts`
- ✅ Implementado no layout.jsx (não na page)
- ✅ Logo com `priority={true}` para carregamento prioritário
- ✅ CSS isolado com modules

#### 2. ProductCard Component
- ✅ Recebe prop: `product` (objeto completo)
- ✅ Usa `next/image` para otimização
- ✅ Lazy loading automático do Next.js
- ✅ CSS modular e reutilizável

#### 3. Página Principal
- ✅ Usa Context API para gerenciar estado
- ✅ Contagem automática de produtos
- ✅ Renderização com `.map()`
- ✅ Carregamento de dados do arquivo separado

#### 4. Página 404
- ✅ Página customizada para rotas não encontradas
- ✅ Design consistente com CSS modules
- ✅ Botão para voltar ao início

### 🎨 Otimizações Técnicas

#### CSS Modules
- ✅ Todos os componentes usam CSS modules
- ✅ Convenção: `ComponentName.module.css`
- ✅ Estilos globais apenas em `globals.css`

#### Next.js Optimizations
- ✅ **Fonts**: Fonte local Roboto com `localFont`
- ✅ **Images**: `next/image` com lazy loading automático
- ✅ **Logo**: `priority={true}` para carregamento prioritário
- ✅ **Performance**: Configurado para Core Web Vitals
- ✅ **External Images**: Domínios configurados no `next.config.mjs`

#### Estado e Context
- ✅ Context API para compartilhar estado dos produtos
- ✅ useState para gerenciar lista e contagem
- ✅ useEffect para carregamento e sincronização
- ✅ Dados centralizados em arquivo separado

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 🌐 URLs

- **Desenvolvimento**: http://localhost:3000
- **Página 404**: http://localhost:3000/qualquer-rota-inexistente

## 📱 Funcionalidades

- ✅ **Responsivo**: Grid adaptativo com `auto-fit`
- ✅ **Performance**: Imagens otimizadas e lazy loading
- ✅ **SEO**: Estrutura semântica e meta tags
- ✅ **Acessibilidade**: Alt texts e navegação por teclado
- ✅ **UX**: Contagem automática de produtos
- ✅ **Modern**: Context API e hooks do React

## 🔧 Tecnologias

- **Next.js 15** - Framework React
- **React 18** - Biblioteca de UI
- **CSS Modules** - Estilização isolada
- **Context API** - Gerenciamento de estado
- **next/image** - Otimização de imagens
- **next/font** - Otimização de fontes

## 📊 Produtos

A aplicação exibe **10 produtos** em 4 categorias:
- 📱 **Smartphones** (3 produtos)
- 💻 **Laptops** (2 produtos)
- 📱 **Tablets** (2 produtos)
- 🎧 **Acessórios** (3 produtos)

---

**Desenvolvido com ❤️ usando Next.js e as melhores práticas de desenvolvimento web.**