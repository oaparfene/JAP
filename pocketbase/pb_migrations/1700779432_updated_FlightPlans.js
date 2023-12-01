/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ecbci2i0z2narq")

  // remove
  collection.schema.removeField("rv2ipgum")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r9khxyr7",
    "name": "Flight_Path",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ecbci2i0z2narq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rv2ipgum",
    "name": "Flight_Path",
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

  // remove
  collection.schema.removeField("r9khxyr7")

  return dao.saveCollection(collection)
})
