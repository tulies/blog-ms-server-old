const Sequelize = require('sequelize')
const sequelize = require('../plugins/sequelize')
const moment = require('moment')
const Article = sequelize.define('article', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slogan: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  poster: {
    type: Sequelize.STRING
  },
  tags: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 0
  },
  categoryId: {
    field: 'category_id',
    type: Sequelize.STRING,
    allowNull: false
  },
  pv: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 0
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
  'tableName': 'blog_article',
  'timestamps': false
})

module.exports = Article
