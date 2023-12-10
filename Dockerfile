FROM node:latest

WORKDIR /frontend

COPY package*.json /frontend
COPY . /frontend
RUN ["npm", "install"]

EXPOSE 3000
RUN ["npm", "run", "build"]
CMD ["npm", "run", "dev"]
