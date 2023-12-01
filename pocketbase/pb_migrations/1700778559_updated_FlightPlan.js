/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ecbci2i0z2narq")

  collection.name = "FlightPlans"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ecbci2i0z2narq")

  collection.name = "FlightPlan"

  return dao.saveCollection(collection)
})
