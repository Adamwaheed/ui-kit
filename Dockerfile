FROM node:18-alpine3.16


WORKDIR /usr/src/app

# COPY . .

# RUN chmod 400 ~/.ssh/id_rsa && ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts


# COPY yarn.lock /usr/src/app/
# RUN yarn global add nuxt && rm -rf node_modules && \
#   NODE_ENV=production yarn install \
#   --prefer-offline \
RUN yarn
#   yarn install --prefer-offline \
#   --pure-lockfile \
#   --non-interactive \
#   --production=true

COPY . /usr/src/app

ENV HOST 0.0.0.0
EXPOSE 6006

CMD yarn storybook
#CMD [ "yarn", "$build" ]
