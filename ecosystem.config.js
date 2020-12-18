module.exports = {
  apps: [
    {
      script: 'index.js',
      watch: '.',
    },
    {
      script: './service-worker/',
      watch: ['./service-worker'],
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
    staging: {
      user: 'root',
      host: 'staging.marketplays.app',
      ref: 'origin/staging',
      repo: 'git@github.com:bmiproject/marketplays-main-nuxt.git',
      path: '/home/marketplays/public_html/staging/main',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env development',
      'pre-setup': '',
    },
  },
}
