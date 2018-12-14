const Sequelize = require('sequelize')
const sequelize = require('../plugins/sequelize')
const moment = require('moment')

const Article = sequelize.define('article', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  articleId: {
    type: Sequelize.INTEGER,
    field: 'article_id',
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  createTime: {
    field: 'create_time',
    type: Sequelize.DATE,
    get () {
      return moment(this.getDataValue('createTime')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updateTime: {
    field: 'update_time',
    type: Sequelize.DATE,
    get () {
      return moment(this.getDataValue('createTime')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}, {
  // 自定义表名
  'freezeTableName': true,
  'tableName': 'blog_article_ext',
  'timestamps': false
})

module.exports = Article
