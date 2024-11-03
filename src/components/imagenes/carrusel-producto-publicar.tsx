"use client"

interface CarruselProductoPublicacionProps {
    images: string[];
}

export default function Carrusel_producto_publicacion({ images }: CarruselProductoPublicacionProps) {
    return (
        <div id="carouselExampleIndicators" className="carousel slide mb-3" style={{ width: '650px', height: '360px', overflow: 'hidden' }} data-bs-ride="carousel">
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