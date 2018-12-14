const Sequelize = require('sequelize')
const sequelize = require('../plugins/sequelize')

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  alias: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sort: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  parentId: {
    field: 'parent_id',
    type: Sequelize.INTEGER
  }
}, {
  // 自定义表名
  'freezeTableName': true,
  'tableName': 'blog_category',

  // 是否需要增加createdAt、updatedAt、deletedAt字段
  'timestamps': false

  // 不需要createdAt字段
  // 'createdAt': false

  // 将updatedAt字段改个名
  // 'updatedAt': 'utime'

  // 将deletedAt字段改名
  // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
  // 'deletedAt': 'dtime',
  // 'paranoid': true
})

module.exports = Category
