/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pktrfn0x5zmowni")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w0xlzkul",
    "name": "Plans_containing_self",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7bz3s9tqr9j7ujt",
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
  collection.schema.removeField("w0xlzkul")

  return dao.saveCollection(collection)
})
