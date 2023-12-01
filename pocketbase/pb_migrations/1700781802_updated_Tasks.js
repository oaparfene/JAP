/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uxz2o8jy6jkdztd")

  // remove
  collection.schema.removeField("zgb3ru97")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hhlhbz7w",
    "name": "Requirement_To_Collect",
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
  const collection = dao.findCollectionByNameOrId("uxz2o8jy6jkdztd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zgb3ru97",
    "name": "Requirement_To_Collect",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "u380jan2se8zfpj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("hhlhbz7w")

  return dao.saveCollection(collection)
})
