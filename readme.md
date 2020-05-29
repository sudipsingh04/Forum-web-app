# Forum Application

> A Laravel Vue.js realtime single page application integrated with web socket and sound notification.

## Installation

``` bash
# clone this repository

git clone https://github.com/sudipsingh04/Forum-web-app.git
cd to the project


# install dependencies

composer install
npm install
cp .env.example .env


# configure database

php artisan migrate:refresh --seed
```

## Browser testing

``` bash
# Run the following in terminal

php artisan serve
npm run watch
php artisan websockets:serve


# Visit in browser with following urls

http://127.0.0.1:8000/
Please use the same port as mentioned above


# Super admin credentials

Email = sudipsingh04@gmail.com
password = password
```
## Screenshots

![FireShot Capture 002 - SPA Forum - 127 0 0 1](https://user-images.githubusercontent.com/19596124/83287747-cf9b1100-a1ff-11ea-99d1-99ab9cd01cac.png)
![FireShot Capture 003 - SPA Forum - 127 0 0 1](https://user-images.githubusercontent.com/19596124/83287758-d4f85b80-a1ff-11ea-9559-2bb3371d74d3.png)
![FireShot Capture 007 - SPA Forum - 127 0 0 1](https://user-images.githubusercontent.com/19596124/83289151-3d483c80-a202-11ea-866c-b9c568449c0b.png)
![FireShot Capture 007 - SPA Forum - 127 0 0 1](https://user-images.githubusercontent.com/19596124/83289450-b182e000-a202-11ea-9d8c-c555a6e8d46f.png)
![FireShot Capture 006 - SPA Forum - 127 0 0 1](https://user-images.githubusercontent.com/19596124/83287777-dd509680-a1ff-11ea-83c0-e09f15e32263.png)
![Screenshot (7)](https://user-images.githubusercontent.com/19596124/83287782-dde92d00-a1ff-11ea-85f3-ea153e7c52b9.png)
