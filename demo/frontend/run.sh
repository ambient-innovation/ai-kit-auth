#!/bin/bash
cd /react-lib
echo "build ai-kit-auth package"
npm run build
echo "link ai-kit-auth package"
npm link
cd /app
npm link ai-kit-auth

#cp serve.json ./build/serve.json
serve -s build
