/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uxz2o8jy6jkdztd")

  collection.name = "Tasks"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uxz2o8jy6jkdztd")

  collection.name = "Task"

  return dao.saveCollection(collection)
})
