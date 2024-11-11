type Ubicacion = {
    id: number;
    ciudad: string;
    direccion: string;
};

const ubicaciones: Ubicacion[] = [
    {
        id: 1,
        ciudad: "Bogotá",
        direccion: "Calle 26, 25-45"
    },
    {
        id: 2,
        ciudad: "Medellín",
        direccion: "Carrera 70, 23-50"
    },
    {
        id: 3,
        ciudad: "Cali",
        direccion: "Avenida Colombia, 6-22"
    },
    {
        id: 4,
        ciudad: "Cartagena",
        direccion: "Calle del Arsenal, 12-34"
    },
    {
        id: 5,
        ciudad: "Barranquilla",
        direccion: "Calle 84, 54-78"
    }
];

export default ubicaciones;