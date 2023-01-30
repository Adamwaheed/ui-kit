# Select reference image
FROM node:18-alpine


# Create app directory
WORKDIR /usr/src/app

# Copy project files into the docker image
COPY . .

RUN yarn add -D @storybook/cli http-server

# Install app dependencies
RUN yarn --frozen-lockfile

RUN rm -rf node_modules/.cache/storybook

RUN yarn build-storybook

# Make port 8086 available
EXPOSE 8080

# run storybook app
CMD ["npx","http-server", "storybook"]
