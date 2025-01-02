# Ruikang Guo's Personal Website

Visit my website [here](https://rkguo.xyz/).

Or type rkguo.xyz to your browser.

## Build and deploy (on server)
sudo apt update
sudo apt install nginx
cd /var/www/personal-website

npm run build

sudo mkdir -p /var/www/html/personal-website
sudo cp -r build/* /var/www/html/personal-website

sudo chown -R www-data:www-data /var/www/html/personal-website