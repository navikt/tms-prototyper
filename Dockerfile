FROM node:14-alpine

WORKDIR /app

COPY package*.json /app/
RUN npm ci

COPY .next /app/.next/
COPY public /app/public/

COPY next.config.js /app/

EXPOSE 3000
CMD ["npm", "run", "start"]