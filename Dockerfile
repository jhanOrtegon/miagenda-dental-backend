# 1. Usa una imagen oficial de Node.js
FROM node:22

# 2. Instala pnpm globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

# 3. Crea el directorio de trabajo
WORKDIR /usr/src/app

# 4. Copia los archivos de dependencias
COPY pnpm-lock.yaml* package.json ./

# 5. Instala las dependencias con pnpm
RUN pnpm install

# 6. Copia el resto del código
COPY . .

# 7. Expone el puerto
EXPOSE 3000

# 8. Comando por defecto: modo desarrollo
CMD ["pnpm", "start:dev"]
