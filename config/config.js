const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://tejaswini:tejaswini@cluster0-37viv.mongodb.net/mernproject?retryWrites=true&w=majority'
}

export default config
