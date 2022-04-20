FROM node:lts as dependencies
WORKDIR /iThanathat-Space
COPY package.json package-lock.json ./
RUN npm ci

FROM node:lts as builder
WORKDIR /iThanathat-Space
COPY . .
COPY --from=dependencies /iThanathat-Space/node_modules ./node_modules
RUN npm run fix
RUN npm run build

FROM node:lts as runner
WORKDIR /iThanathat-Space
ENV NODE_ENV production
# COPY --from=builder /iThanathat-Space/next.config.js ./
COPY --from=builder /iThanathat-Space/public ./public
COPY --from=builder /iThanathat-Space/.next ./.next
COPY --from=builder /iThanathat-Space/node_modules ./node_modules
COPY --from=builder /iThanathat-Space/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]