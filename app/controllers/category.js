
const categoryService = require('../services/category')

// 根据id查询单个详情
const findById = async (ctx) => {
  const { id } = ctx.params
  const category = await categoryService.findById({ id })
  ctx.body = { code: 0, msg: '成功', data: category }
}

// 查询全部
const findAll = async (ctx) => {
  // const { id } = ctx.params
  const categorys = await categoryService.findAll()
  ctx.body = { code: 0, msg: '成功', data: categorys }
}

// 创建分类
const create = async (ctx) => {
  const { name, alias, sort, parentId } = ctx.request.body
  const category = await categoryService.create({
    name,
    alias,
    sort: sort || 0,
    parentId: parentId || 0
  })
  ctx.body = { code: 0, msg: '成功', data: category }
}
// 更新分类
const update = async (ctx) => {
  const { id, name, alias, sort, parentId } = ctx.request.body
  const category = await categoryService.update({
    id,
    name,
    alias,
    sort: sort || 0,
    parentId: parentId || 0
  })
  ctx.body = { code: 0, msg: '成功', data: category }
}

// 删除分类
const deleteById = async (ctx) => {
  const { id } = ctx.request.body
  const category = await categoryService.deleteById({ id })
  ctx.body = { code: 0, msg: '成功', data: category }
}

module.exports = {
  create,
  update,
  findById,
  findAll,
  deleteById
}
