
const categoryService = require('../services/category')
const articleService = require('../services/article')

// 根据id查询单个详情
const findById = async (ctx) => {
  const { id } = ctx.params
  const article = await articleService.findById({ id })
  ctx.body = { code: 0, msg: '成功', data: article }
}

// 查询全部
const findAndCountAll = async (ctx) => {
  const { id, title, tag, status, curpage, pagesize } = ctx.request.query
  const result = await articleService.findAndCountAll({ id, title, tag, status, curpage, pagesize })
  ctx.body = { code: 0, msg: '成功', data: result }
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
  findAndCountAll,
  deleteById
}
