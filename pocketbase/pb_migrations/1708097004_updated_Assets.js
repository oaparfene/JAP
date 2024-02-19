/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pktrfn0x5zmowni")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6zboqmzr",
    "name": "To_Collect",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "u380jan2se8zfpj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pktrfn0x5zmowni")

  // remove
  collection.schema.removeField("6zboqmzr")

  return dao.saveCollection(collection)
})
