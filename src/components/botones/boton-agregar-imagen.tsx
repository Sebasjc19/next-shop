export default function Boton_agregar_imagen() {
    return (
        <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Añadir imagen</button>
            <input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
    )
}