FROM node:22 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

FROM node:22 AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app

# Install runtime dependencies (if any)
# RUN npm install --only=production

RUN groupadd -r app && useradd -r -g app app
USER app
EXPOSE 8000
CMD ["npm", "start"]
