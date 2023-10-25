export enum flightDirection {
    "arrivals", 
    "departures",
}

export type TFlight = {
    time: string,
    direction: string,
    flightNumber: string,
    status: string
    airline: string,
    aircraftType: string,
}


export type TStop =  { 
    index: 0,
    iconsBefore: [],
    nameRus: string,
    nameEng: string,
    iconsAfter: [],
    transfers: [
        {
            icons: string[]
        }
    ],
    poi: string[]
}

export type TTransfer =  { 
    icons: string[]
}

export type TStopTime = {
    index: number, 
    time: number
}

