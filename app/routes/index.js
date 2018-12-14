/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
  prefix: '/api'
})

// xxx.com/weapp/demo
const controllers = require('../controllers')

// --- article文章相关接口 --- //
router.get('/article/findById/:id', controllers.article.findById)
router.get('/article/list', controllers.article.findAndCountAll)

// --- category分类相关接口 --- //
router.get('/category/findById/:id', controllers.category.findById)
router.get('/category/findAll', controllers.category.findAll)
router.post('/category/create', controllers.category.create)
router.post('/category/update', controllers.category.update)
router.delete('/category', controllers.category.deleteById)

module.exports = router
