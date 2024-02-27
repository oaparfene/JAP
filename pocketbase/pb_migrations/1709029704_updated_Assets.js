/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pktrfn0x5zmowni")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xrsioufj",
    "name": "AvailableUntil",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pktrfn0x5zmowni")

  // remove
  collection.schema.removeField("xrsioufj")

  return dao.saveCollection(collection)
})
