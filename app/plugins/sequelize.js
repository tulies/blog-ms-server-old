var Sequelize = require('sequelize')
const sequelize = new Sequelize('myapps', 'root', 'qpzm@WO849302tgb', {
  host: '47.98.202.148',
  port: '3306',
  dialect: 'mysql',
  // timezone: '+08:00'
  define: {
    // 字段以下划线（_）来分割（默认是驼峰命名风格）
    underscored: true
  },

  pool: {
    max: 20,
    min: 1,
    acquire: 30000,
    idle: 10000
  }
})

module.exports = sequelize
