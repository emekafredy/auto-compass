# AutoCompass

AutoCompass is an automotive learning platform built with a Rails API, a
Next.js web application, and PostgreSQL.

## Requirements

- Ruby 3.3.7 and Bundler
- Node.js 20.9 or newer
- pnpm 10
- PostgreSQL

## Start the application

Development ports are configured in the root `.env` file:

```sh
WEB_PORT=3000
API_PORT=3001
```

Ensure PostgreSQL is running and change into the repository root before running
the scripts:

```sh
cd /path/to/auto-compass
./bin/setup
./bin/dev
```

With the default `.env` values, the web application runs at
`http://localhost:3000` and the Rails API runs at `http://localhost:3001`.
