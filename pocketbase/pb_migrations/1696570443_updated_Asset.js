/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pktrfn0x5zmowni")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pcdomgw2",
    "name": "UniquePlatformID",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pktrfn0x5zmowni")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pcdomgw2",
    "name": "UniquePlatformID",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
