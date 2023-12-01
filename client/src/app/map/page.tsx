'use client'
import { Box, Typography } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useContext, useState } from "react";
import { LatLngExpression } from "leaflet";
import { JAPContext } from "../context";
import { PlanSelector } from "@/components/PlanSelector";

function Home() {

    const { plans, activePlanIndex, setActivePlanIndex, newPlan } = useContext(JAPContext)

    const colors = ["yellow", "green", "blue", "orange", "red"]

    const location_data = [] as [string, [number, number]][]
    const flight_data = [] as [number, number][][]

    if (plans[activePlanIndex]) {
        plans[activePlanIndex].allocation.forEach((task, i) => {
            location_data.push(['CR' + task.Requirement_to_Collect, [Number(task.Coordinates.split("N")[0]), Number(task.Coordinates.split(" ")[1].split("E")[0])]])
        })

        plans[activePlanIndex].flightPlans.forEach((flight, i) => {
            if (flight.Flight_Path.length > 0) {
                flight_data.push(flight.Flight_Path.map((e) => {
                    return [Number(e.split("N")[0]), Number(e.split(" ")[1].split("E")[0])]
                }
                ))
            }
        })
    }

    if (typeof window == 'undefined') {
        return <></>
    } else
        return (
            <Box sx={{ p: 8 }}>
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{ textAlign: 'left', mt: 0, mb: 3 }}
                >Allocations:</Typography>

                <PlanSelector plans={plans} newPlan={newPlan} activePlanIndex={activePlanIndex} setActivePlanIndex={setActivePlanIndex} />
                <Box sx={{ width: '95%', height: 1000, p: 0, m: 3 }}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ textAlign: 'center', mt: 0, mb: 3 }}
                    >
                        Map View:
                    </Typography>
                    <MapContainer style={{ height: '900px', width: '80wh' }} center={[48.69282575, 8.14527]} zoom={5} scrollWheelZoom={true}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {location_data.map((e) => {
                            return (
                                <Marker key={e.toString()} position={e[1] as LatLngExpression}>
                                    <Popup>
                                        {e[0].toString().replace("_", " ")}
                                    </Popup>
                                </Marker>
                            )
                        })}
                        {flight_data.map((e, i) => {
                            return (
                                <Polyline key={i} pathOptions={{ color: colors[i%colors.length] }} positions={e}></Polyline>
                            )
                        })}
                    </MapContainer>
                </Box>
            </Box>
        )
}

export default Home;