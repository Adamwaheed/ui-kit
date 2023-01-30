# Select reference image
FROM node:18-alpine3.16


# Create app directory
WORKDIR /usr/src/app

# Copy project files into the docker image
COPY . .

RUN yarn add -D @storybook/cli

# Install app dependencies
RUN yarn --frozen-lockfile

RUN rm -rf node_modules/.cache/storybook

RUN yarn storybook

# Make port 8086 available
EXPOSE 6006

# run storybook app
CMD ["yarn", "build-storybook"]
