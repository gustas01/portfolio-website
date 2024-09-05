const fs = require('fs')

async function load () {
  const envs = {
    TOKEN_GITHUB: process.env.TOKEN_GITHUB
  }

  fs.writeFileSync('src/assets/envs.json', JSON.stringify(envs))
}

load()