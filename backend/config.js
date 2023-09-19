module.exports = {
  port: 3000,
  jwtSecret: '!!CryptoCat@!!',
  jwtExpirationInSeconds: 60 * 60, // 1 hour
  roles: {
    USER: 'user',
    ADMIN: 'admin'
  },
  beedPriceUnits: {
    DOLLAR: 'dollar',
    NAIRA: 'naira',
    EURO: 'euro',
    INR: 'inr'
  }
}
