FROM node:20

WORKDIR /usr/src/app
COPY package*.json ./
COPY src/ ./src /workspaces/cosi-103a/recipes/src/app/
COPY public/ ./public


RUN npm install 
EXPOSE 3000
CMD ["npm", "start"]