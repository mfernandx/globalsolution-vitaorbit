import { HealthRecord } from "../model/HealthRecord";
import { SystemAlert } from "../model/SystemAlert";

export function enviaSystemAlerts(latestRecord: HealthRecord | null): SystemAlert[] {

    if (!latestRecord) {
        return [
            {
                id: 1,
                title: "Nenhum registro encontrado",
                message: "Registre seus sinais vitais para receber alertas personalizados.",
                level: "info",
                icon: "information-circle-outline",
            },
        ];
    }

    const alerts: SystemAlert[] = [];

    if (latestRecord.hydrationLevel < 1.5) {
        alerts.push({
            id: 2,
            title: "Hidratação baixa",
            message: "Você registrou pouca ingestão de água. Tente se hidratar melhor ao longo do dia.",
            level: "atencao",
            icon: "water-outline",
        });
    }

    if (latestRecord.sleepHours < 6) {
        alerts.push({
            id: 3,
            title: "Poucas horas de sono",
            message: "Seu registro indica sono insuficiente. Procure descansar melhor nas próximas horas.",
            level: "atencao",
            icon: "moon-outline",
        });
    }

    if (latestRecord.oxygenSaturation < 95) {
        alerts.push({
            id: 4,
            title: "Oxigenação abaixo do ideal",
            message: "Sua oxigenação registrada está abaixo do esperado. Acompanhe os sintomas e procure ajuda se necessário.",
            level: "perigo",
            icon: "fitness-outline",
        });
    }

    if (latestRecord.bodyTemperature >= 37.8) {
        alerts.push({
            id: 5,
            title: "Temperatura elevada",
            message: "Sua temperatura está acima do normal. Fique atento a sinais de febre.",
            level: "perigo",
            icon: "thermometer-outline",
        });
    }

    if (latestRecord.heartRate > 100) {
        alerts.push({
            id: 6,
            title: "Batimentos elevados",
            message: "Sua frequência cardíaca está elevada. Evite esforço intenso e monitore novamente.",
            level: "atencao",
            icon: "heart-outline",
        });
    }

    if (alerts.length === 0) {
        alerts.push({
            id: 7,
            title: "Tudo parece estável",
            message: "Nenhum alerta crítico foi identificado no seu último registro.",
            level: "info",
            icon: "checkmark-circle-outline",
        });
    }

    return alerts;
}