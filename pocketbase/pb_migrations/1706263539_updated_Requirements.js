/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u380jan2se8zfpj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kykbyceu",
    "name": "Justification",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kykbyceu",
    "name": "Justificaton",
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
})
