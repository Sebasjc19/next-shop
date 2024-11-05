import { useState } from 'react';

interface BotonAgregarImagenProps {
    onAddImage: (image: string) => void;
}

export default function Boton_agregar_imagen({ onAddImage }: BotonAgregarImagenProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Función para manejar la selección de imagen
    const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const newImageUrl = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(newImageUrl); // Almacena temporalmente la imagen seleccionada
        }
    };

    // Función para confirmar la subida de la imagen seleccionada
    const handleConfirmAddImage = () => {
        if (selectedImage) {
            onAddImage(selectedImage); // Llama a onAddImage solo si hay imagen seleccionada
            setSelectedImage(null); // Limpia la imagen seleccionada después de subirla
        }
    };

    return (
        <div className="input-group mb-3">
            <button
                className="btn btn-outline-secondary"
                type="button"
                id="inputGroupFileAddon03"
                onClick={handleConfirmAddImage} // Confirma la subida al hacer clic
            >
                Añadir imagen
            </button>
            <input
                type="file"
                className="form-control"
                id="inputGroupFile03"
                aria-describedby="inputGroupFileAddon03"
                aria-label="Upload"
                onChange={handleSelectImage} // Solo selecciona la imagen, sin añadirla
            />
        </div>
    );
}
