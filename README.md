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
- OpenCV

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

# 1️⃣ Rodar o projeto completo

## Instalar dependências da raiz

Na raiz do projeto:

```bash
npm install
```

---

## Rodar frontend + backend simultaneamente

```bash
npm run dev
```

---

# 🌐 URLs do projeto

## Frontend

```txt
http://localhost:5173
```

## Backend

```txt
http://localhost:8000
```

## Swagger da API

```txt
http://localhost:8000/docs
```

---

# 2️⃣ Rodar apenas o Backend

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

# 3️⃣ Rodar apenas o Frontend

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

# 📦 Dependências principais

## Frontend

```bash
npm install styled-components axios react-icons
npm install -D @types/styled-components
```

---

## Backend

```bash
pip install fastapi uvicorn ultralytics python-multipart opencv-python
```

---

# 🤖 Objetivo do projeto

O sistema permite que o usuário envie uma imagem contendo resíduos recicláveis.

A inteligência artificial analisa a imagem e identifica materiais como:

- Papel
- Plástico
- Vidro
- Metal
- Papelão
- Orgânico

---

# 🧠 IA utilizada

- YOLOv8n
- Ultralytics
- OpenCV

---

# 📚 Dataset utilizado

Este projeto foi desenvolvido utilizando:

- React + TypeScript no frontend
- Styled-Components para estilização
- Python no backend
- FastAPI para API REST
- YOLOv8 para detecção de objetos
- OpenCV para processamento de imagens
- Ultralytics YOLO
- Axios para requisições HTTP
- Dataset treinado através do Roboflow Universe

## 🔗 Dataset utilizado (Roboflow)

https://universe.roboflow.com/group-project-vv9xk/waste-classificator-3

---

# 👨‍💻 Desenvolvido para fins acadêmicos