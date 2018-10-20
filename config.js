var config = {};

 config.adminUsername = 'fernando';
 config.adminUsername = '123456Aa';

 config.tokenSecretKey = 'super_secret';
 /** Expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, '2 days', '10h', '7d' */
 config.tokenExireTime = '1h';

 module.exports = config;