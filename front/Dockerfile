FROM node:10.13-alpine
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY . .
RUN npm install && \
    npm install -g @angular/cli@latest
EXPOSE 4200
CMD ng serve --port 4200 --host 0.0.0.0