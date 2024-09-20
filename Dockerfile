FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -g typescript tsx

RUN chmod +x /usr/local/bin/tsx

COPY . .

RUN tsc

EXPOSE 3001

CMD ["npx", "tsx", "index.ts"]
