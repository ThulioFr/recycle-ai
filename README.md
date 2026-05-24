# ♻️ Recycle AI

Projeto acadêmico utilizando YOLOv8 para identificar materiais recicláveis em imagens.

## Tecnologias utilizadas

### Frontend
- React
- TypeScript
- Styled Components
- Vite

### Backend
- Python
- FastAPI
- YOLOv8 (Ultralytics)

---

# 📁 Estrutura do projeto

```txt
recycle-ai/
│
├── frontend/
│
└── backend/
```

---

# 🚀 Como rodar o projeto

# 1️⃣ Rodar o Backend

## Entrar na pasta backend

```bash
cd backend
```

---

## Criar ambiente virtual (caso ainda não exista)

### Windows PowerShell

```bash
python -m venv venv
```

---

## Ativar ambiente virtual

### Windows PowerShell

```bash
.\venv\Scripts\Activate
```

---

## Instalar dependências

```bash
pip install -r requirements.txt
```

---

## Rodar servidor FastAPI

```bash
uvicorn main:app --reload
```

---

## Backend disponível em

```txt
http://localhost:8000
```

---

## Swagger da API

```txt
http://localhost:8000/docs
```

---

# 2️⃣ Rodar o Frontend

## Entrar na pasta frontend

```bash
cd frontend
```

---

## Instalar dependências

```bash
npm install
```

---

## Rodar projeto React

```bash
npm run dev
```

---

## Frontend disponível em

```txt
http://localhost:5173
```

---

# 📦 Dependências principais

## Frontend

```bash
npm install styled-components axios
npm install -D @types/styled-components
```

---

## Backend

```bash
pip install fastapi uvicorn ultralytics python-multipart
```

---

# 🤖 Objetivo do projeto

O sistema permite que o usuário envie uma imagem contendo resíduos recicláveis.

A inteligência artificial analisa a imagem e identifica materiais como:

- Papel
- Plástico
- Vidro
- Metal

---

# 🧠 IA utilizada

- YOLOv8n
- Ultralytics

---

# 👨‍💻 Desenvolvido para fins acadêmicos