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
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]