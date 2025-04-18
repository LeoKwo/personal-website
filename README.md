# 郭睿康个人网站

访问[网站](https://ruikang.tech/).
科学上网可访问 [https://rkguo.xyz/](https://rkguo.xyz/)
英文站部署在GitHub Pages 并使用自定义的域名
中文站部署在阿里云ECS

## 中文站 构建 与 部署 (ECS环境下)
```
sudo apt update
sudo apt install nginx
cd /var/www/personal-website

npm run build

sudo mkdir -p /var/www/html/personal-website
sudo cp -r build/* /var/www/html/personal-website

sudo chown -R www-data:www-data /var/www/html/personal-website
```