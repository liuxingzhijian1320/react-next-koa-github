const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize'
const request_token_url = 'https://github.com/login/oauth/access_token'
const SCOPE = 'user'
const client_id = 'c4cde05e70e67d9a88ea'
const client_secret = '74fe46cc347f524dd33f8cc7ad51c6acb38d3580'

module.exports = {
  github: {
    client_id,
    client_secret
  },
  GITHUB_OAUTH_URL,
  OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${client_id}&scope=${SCOPE}`
}

// 流程
// 1. 注册 OAuth APP的应用
// 2. 保存client_id client_secret
// 3. 访问GET: https://github.com/login/oauth/authorize?client_id=c4cde05e70e67a88ea&scope=user
// 4. 跳转 http://localhost:3000/auth?code=8b309cc23b4c403f95 保存 code 字段
// 5. https://github.com/login/oauth/access_token POST请求 body:{client_id,client_secret,code} 获取token
// 6. https://api/github.com/user POST请求：  body:{client_id,client_secret} header: {Authorization: token token}

