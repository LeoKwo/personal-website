module.exports = {
  apps: [
    {
      name: "personal-website",       // 应用名称
      script: "npm",                  // 启动脚本
      args: "start",                  // 传递给 script 的参数
      cwd: "/home/ubuntu/personal-website", // 项目绝对路径
      env: {
        NODE_ENV: "production",       // 设置为生产环境
        NODE_OPTIONS: "--openssl-legacy-provider" // 解决你的 OpenSSL 报错
      },
      max_memory_restart: "500M",     // 内存占用超过 500M 自动重启，防止内存泄漏
      log_date_format: "YYYY-MM-DD HH:mm:ss", // 日志加上时间戳，方便排查问题
      error_file: "./logs/pm2-error.log",     // 错误日志路径
      out_file: "./logs/pm2-out.log",         // 标准输出日志路径
      merge_logs: true,               // 多进程时合并日志
      watch: false                    // 生产环境务必关闭 watch 模式
    }
  ]
};
