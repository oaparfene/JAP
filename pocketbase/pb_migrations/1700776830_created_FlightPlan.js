/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0ecbci2i0z2narq",
    "created": "2023-11-23 22:00:30.957Z",
    "updated": "2023-11-23 22:00:30.957Z",
    "name": "FlightPlan",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rrtwhizb",
        "name": "Asset_Used",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0ecbci2i0z2narq");

  return dao.deleteCollection(collection);
})
