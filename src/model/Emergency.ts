type Status = "Recebida" | "Não recebida" | "Anulada";

interface Emergency {
    emergencyId: number;
    userId: number;
    location: string;
    message: string; 
    status: Status;
    requestDate: string; 

}

interface CreateEmergencyRequest {
    userId: number;
    location: string;
    message: string;
}

export {Status, Emergency, CreateEmergencyRequest}