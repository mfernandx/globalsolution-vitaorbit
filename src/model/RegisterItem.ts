type RegisterItem = {
    id: string;
    type: "health" | "symptom";
    title: string;
    subtitle: string;
    date: string;
    details: string[];
};

export {RegisterItem}