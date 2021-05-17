export interface ITrips {
    id: number,
    title: string,
}

export interface ISuggestedTrips{
    id: number,
    destination: string,
    deptHour: string,
    mileage:number,
    firstRdv: string,
    tripType: string
}

export interface ITripDetails{
    departureDay: string,
    dangerousGood: boolean,
    drops: IDrop[]
}

export interface IDrop{
    number: number,
    appointmentTime: string,
    clientAddress: string
}

export interface TripDialogData {
    tripId: number;
}