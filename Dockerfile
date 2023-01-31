# Select reference image
FROM node:18-alpine3.16 as production


# Create app directory
WORKDIR /usr/src/app

# Copy project files into the docker image
COPY . .

RUN yarn add -D @storybook/cli

# Install app dependencies
RUN yarn --frozen-lockfile

# RUN rm -rf node_modules/.cache/storybook

RUN yarn build-storybook

# RUN yarn global add http-server

FROM nginx

COPY --from=production /usr/src/app/storybook-static /usr/share/nginx/html
