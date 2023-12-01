/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7bz3s9tqr9j7ujt")

  collection.name = "Plans"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7bz3s9tqr9j7ujt")

  collection.name = "Plan"

  return dao.saveCollection(collection)
})
