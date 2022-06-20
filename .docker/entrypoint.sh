#!/bin/bash

npm install
npm run typeorm  -d src/shared/typeorm/connection.ts migration:run
npm run dev
