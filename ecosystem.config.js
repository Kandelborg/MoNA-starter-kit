module.exports = {
  apps: [
    {
      name: 'website',
      script: '.next/server/production-server/server/index.js',
      broadcast_logs: true,
      env: {
        dev: false,
        PORT: '3333',
        NODE_ENV: 'production',
        PRISMA_ENDPOINT: 'http://0.0.0.0:4466/mona/v1',
        PRISMA_SECRET: 'secret',
        APP_SECRET: 'secret',

        CLOUDINARY_API_KEY: 'XXXX'
      }
    }
  ]
}
