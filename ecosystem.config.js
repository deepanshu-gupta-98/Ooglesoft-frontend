// module.exports = {
//   apps : [{
//     script: 'npm start',
//     watch: '.'
//   }],

//   deploy : {
//     production : {
//       key:'my-og-key.pem',
//       user : 'ubuntu',
//       host : '65.2.4.195',
//       ref  : 'origin/mail',
//       repo : 'https://github.com/Ooglesoft/ooglesoft1.git',
//       path : 'home/ubuntu',
//       'pre-deploy-local': '',
//       'post-deploy' : 'source ~/.nvm/nvm.sh &&  npm install && npm run build && pm2 reload ecosystem.config.js --env production',
//       'pre-setup': '',
//       'ssh_options': 'ForwardAgent=yes'
//     }
//   }
// };

module.exports = {
  apps: [
    {
      name: "ooglesoft", // Replace with your application name
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};