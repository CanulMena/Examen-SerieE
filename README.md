
# Proyecto de Configuración de Ordenadores Personales

Este proyecto es una API para la gestión y configuración de ordenadores personales, desarrollada con **Node.js**, **Express**, y **TypeScript**.

## 📋 Requisitos

- **Node.js**: v16 o superior.
- **npm**: v8 o superior.
- **Postman** o cualquier herramienta para probar APIs.

---

## 🛠️ Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Modo desarrollo

```bash
npm run dev
```

Este comando ejecuta el servidor en modo desarrollo usando `ts-node-dev`. El servidor estará disponible en `http://localhost:3000`.

---

## 🚀 Endpoints Disponibles

### Crear un ordenador
**POST** `/api/computer`

**URL**: `http://localhost:3000/api/computer`

**Body**:

```json
{
  "centralUnit": {
    "manufacturer": "Intel",
    "model": "i7-12700K",
    "price": 400
  }
}
```
---

### Agregar un componente
**POST** `/api/computer/component`

**URL**: `http://localhost:3000/api/computer/component`

**Body** (ejemplo: agregar un teclado):
```json
{
  "component": {
    "manufacturer": "Logitech",
    "model": "MX Keys",
    "price": 120,
    "connectorType": "USB",
    "validPorts": [1, 2, 3]
  }
}
```

---

### Ver todos los componentes
**GET** `/api/computer/components`

**URL**: `http://localhost:3000/api/computer/components`

**Respuesta esperada**:
```json
[
  {
    "manufacturer": "Logitech",
    "model": "MX Keys",
    "price": 120,
    "connectorType": "USB",
    "validPorts": [1, 2, 3]
  }
]
```
