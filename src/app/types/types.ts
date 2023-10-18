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


export type TStop =  { 
    index: 0,
    iconsBefore: [],
    nameRus: "Останкино",
    nameEng: "Ostankino",
    iconsAfter: [],
    transfers: [
        {
            icons: string[]
        }
    ],
    poi: string[]
}