#!/usr/bin/env sh
set -e
set -x

export NODE_ENV="${NODE_ENV:-development}"

if [ $NODE_ENV == "development" ]; then
  # this runs webpack-dev-server with hot reloading
  echo "Development build"
  npm install --legacy-peer-deps
  npm start
  # npm run build
else
  # build the app and serve it via nginx
  echo "Production build"
  npm install --legacy-peer-deps
  npm run build
  # Testing sometimes
  # npm run start
  nginx -g 'daemon off;' -c /usr/src/app/nginx.conf
  nginx -c /usr/src/app/nginx.conf
fi

