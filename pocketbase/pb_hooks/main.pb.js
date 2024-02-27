// pb_hooks/main.pb.js

routerAdd("GET", "/hello/:name", (c) => {
    let name = c.pathParam("name")

    return c.json(200, { "message": "Hello " + name })
})

// fires only for "Assets" collections
onRecordAfterUpdateRequest((e) => {
    console.log("Record updated")

    const updatedAssetID = JSON.parse(JSON.stringify(e.record)).id
    const updatedAssetName = JSON.parse(JSON.stringify(e.record)).UniquePlatformID
    console.log("Updated asset ID: ", updatedAssetID)

    const plans = JSON.parse(JSON.stringify(e.record)).Plans_containing_self


    // For each plan containing the updated asset, add the updated asset to the plan's assets
    plans.forEach(planID => {

        const record = $app.dao().findRecordById("Plans", planID)
        const plan = JSON.parse(JSON.stringify(record))
        var planAssets = plan.assets


        const planName = plan.name


        // If planAssets does not contain updatedAssetID, add it
        if (!planAssets.includes(updatedAssetID)) {
            planAssets.push(updatedAssetID)

            console.log(`Adding asset ${updatedAssetName} to plan ${planName}`)

            const form = new RecordUpsertForm($app, record)

            form.loadData({
                "assets": planAssets,
            })

            form.submit()
        }
    })

    const result = arrayOf(new DynamicModel({
        "id": "",
        "name": "",
        "assets": [] || undefined,
    }))

    $app.dao().db()
        .select("id", "name", "assets")
        .from("Plans")
        .all(result)

    result.forEach(plan => {
        const planID = plan.id
        const planName = plan.name
        const planAssets = plan.assets

        if (planAssets.includes(updatedAssetID) && !plans.includes(planID)) {
            const newPlanAssets = planAssets.filter(asset => asset !== updatedAssetID)
            console.log(`Removing asset ${updatedAssetName} from plan ${planName}`)
            const record = $app.dao().findRecordById("Plans", planID)

            const form = new RecordUpsertForm($app, record)

            form.loadData({
                "assets": newPlanAssets,
            })

            form.submit()
        }
    })
}, "Assets")