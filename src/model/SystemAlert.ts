type AlertLevel = "info" | "atencao" | "perigo";

interface SystemAlert {
    id: number;
    title: string;
    message: string;
    level: AlertLevel;
    icon: string;
}

export {AlertLevel, SystemAlert}