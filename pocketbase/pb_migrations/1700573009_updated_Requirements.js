/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u380jan2se8zfpj")

  // remove
  collection.schema.removeField("rsstsn9s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hv8h64ee",
    "name": "LTIOV",
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
  const collection = dao.findCollectionByNameOrId("u380jan2se8zfpj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rsstsn9s",
    "name": "LTIOV",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("hv8h64ee")

  return dao.saveCollection(collection)
})
