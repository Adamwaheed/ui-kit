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


#WORKDIR /build

#COPY --from=production /usr/src/app/storybook-static .
COPY --from=production /usr/src/app/storybook-static /usr/share/nginx/html

#EXPOSE 8000
# We now should have a directory called public
# With only static files (HTML, JS, CSS, Media assets)

# Default Command - This is never used
#CMD [""]

# Make port 8086 available
# EXPOSE 8080

# # run storybook app
# CMD ["npx", "http-server storybook-static/"]
