/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u380jan2se8zfpj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gqri7q2h",
    "name": "To_Be_Collected_By",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "pktrfn0x5zmowni",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u380jan2se8zfpj")

  // remove
  collection.schema.removeField("gqri7q2h")

  return dao.saveCollection(collection)
})
