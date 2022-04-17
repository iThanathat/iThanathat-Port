FROM node:lts as dependencies
WORKDIR /iThanathat-Space
COPY package.json package-lock.json ./
RUN npm ci

FROM node:lts as builder
WORKDIR /iThanathat-Space
COPY . .
COPY --from=dependencies /iThanathat-Space/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /iThanathat-Space
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /iThanthat-Space/next.config.js ./
COPY --from=builder /iThanthat-Space/public ./public
COPY --from=builder /iThanthat-Space/.next ./.next
COPY --from=builder /iThanthat-Space/node_modules ./node_modules
COPY --from=builder /iThanthat-Space/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]