const { Op } = require('sequelize')

const Category = require('../models/Category')
const Article = require('../models/Article')

// 根据id，查询单个文章详情
const findById = async ({ id }) => {
  console.log(id)
  const result = await Article.findByPk(id)
  console.log(result.get({ 'plain': true }))
  return result
}
// 查询全部
const findAndCountAll = async ({ id, title, tag, status, curpage, pagesize }) => {
  let where = {}
  if (id) { where.id = { [Op.eq]: parseInt(id) } }
  if (title) { where.title = { [Op.like]: `%${title}%` } }
  // console.log('tag', '')
  if (tag) { where.tags = { [Op.like]: `%${tag}%` } }
  // console.log('status', status)
  if (status || parseInt(status) === 0) { where.status = parseInt(status) }

  curpage = curpage || 0
  pagesize = pagesize || 10
  const offset = curpage * pagesize
  const limit = pagesize
  const result = await Article.findAndCountAll({
    where: where,
    offset,
    limit
  })
  // console.log(result)
  // console.log(result[0].get({ 'plain': true }))
  return result
}
// 新增分类
const create = async ({ name, alias, sort, parentId }) => {
  const result = await Category.create({
    name,
    alias,
    sort,
    parentId
  })
  console.log(result.get({ 'plain': true }))
  return result
}
// 更新分类
const update = async ({ id, name, alias, sort, parentId }) => {
  var result = await Category.update({
    name,
    alias,
    sort,
    parentId
  }, {
    where: {
      id
    }
  })
  console.log(result)
  return result
}
// 删除分类
const deleteById = async ({ id }) => {
  console.log(id)
  var result = await Category.destroy({ where: { id } })
  console.log(result)
  // console.log(result.get({ 'plain': true }))
  return result
}
module.exports = { findById, findAndCountAll, create, update, deleteById }
