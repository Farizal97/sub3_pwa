var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BIuaWjBGYNqYKY3THxMj2tIHjYxxtvnlXTZLmCKHK-f0f1W2WyKYGLQisGAd61oUc6sLAIyBx7wSNDnVgApZKeA",
   "privateKey": "USV-m76NBPrIE3co1iLwpP5dRapc_IIMqQ5rBLsqMEw"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": " https://fcm.googleapis.com/fcm/send/coQ4N19eJYk:APA91bEHhvTDDDxGD3U7QNE-TPoERNpNxTpii0EKCuMJHsU9WUUgYPJP4hmQ69eJeIxbEfo_iEQaUs7A9NnaHaJj8DFL_ZRKz_k6T0fY0O4kUvM3FTGiJFm0lKMoE2G1RYeuQstZV1tS",
   "keys": {
       "p256dh": "BH14AENd2HadjaZCxFdy/FEWUaZHlAzLEhiVch/hm8pNqr5d70EsbfzlBg9DI3M8++f8KsE+ptYrjSo6d9O0jHI=",
       "auth": "GyGPF9h0DtMMJng7oTU86A=="
   }
};
var payload = 'Selamat datang di aplikasi sepak bola LaLiga!';
 
var options = {
   gcmAPIKey: '120923807186',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);