# Ruikang Guo's Personal Website

- Visit [ruikang.tech](https://ruikang.tech/) or [rkguo.xyz](https://ruikang.tech/)
- Deployed to Alibaba Cloud SWAS

## Steps for code updates
1. ```cd ~/personal-website```
2. ```git pull```
3. ```npm run build```
4. ```rm -rf /var/www/rkguo.xyz/```
5. ```sudo cp -r /opt/rkguo/build/* /var/www/rkguo.xyz/```
6. ```sudo chown -R www-data:www-data /var/www/rkguo.xyz```
7. ```sudo systemctl reload nginx```