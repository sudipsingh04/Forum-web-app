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
