const Category = require('../models/Category')

// 根据id，查询单个详情
const findById = async ({ id }) => {
  console.log(id)
  var result = await Category.findByPk(id)
  console.log(result.get({ 'plain': true }))
  return result
}
// 查询全部
const findAll = async () => {
  var result = await Category.findAll()
  console.log(result)
  // console.log(result[0].get({ 'plain': true }))
  return result
}
// 新增分类
const create = async ({ name, alias, sort, parentId }) => {
  var result = await Category.create({
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
module.exports = { findById, findAll, create, update, deleteById }
