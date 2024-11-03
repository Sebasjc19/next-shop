"use client"

export default function Carrusel_producto_informacion() {

    // Array de imágenes
    const images = [
        'https://variety.com/wp-content/uploads/2024/09/The-Wild-Robot.jpg?w=1000&h=563&crop=1',
        'https://www.boningtontheatre.co.uk/wp-content/uploads/2024/09/the-wild-robot-668ec3182e643.jpg',
        'https://mundocine.es/wp-content/uploads/2024/09/TheWildRobot_Fotopelicula_31454.jpg',
        'https://th.bing.com/th/id/OIP.lldvlwz72D2tLQCIloZBqgHaE8?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/R.fddfc420c73abc311bfce09495213c23?rik=6PVcieEE09Ydig&pid=ImgRaw&r=0'
        // Agrega más imágenes aquí
    ];

    return (
        <div id="carouselExampleIndicators" className="carousel slide mb-3" style={{ width: '450px', height: '360px', overflow: 'hidden' }} data-bs-ride="carousel">
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img
                            src={image}
                            className="d-block w-100 img-fluid"
                            alt={`Slide ${index + 1}`}
                            style={{ height: '360px', objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}