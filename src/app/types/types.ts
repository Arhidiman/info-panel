export enum flightDirection {
    "arrivals", 
    "departures",
}

export type TFlight = {
    time: string,
    flight: string,
    direction: string,
    company: string,
    airplaneType: string,
    status: string
}