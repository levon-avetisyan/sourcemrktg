import "./Trusted.scss";

const TrustedBy = () => {
    const trustedBy = [
        { name: 'Google', logo: 'https://placehold.co/170x100/002030/FFF' },
        { name: 'Google', logo: 'https://placehold.co/170x100/002030/FFF' },
        { name: 'Google', logo: 'https://placehold.co/170x100/002030/FFF' },
        { name: 'Google', logo: 'https://placehold.co/170x100/002030/FFF' },
        { name: 'Google', logo: 'https://placehold.co/170x100/002030/FFF' },
        { name: 'Google', logo: 'https://placehold.co/170x100/002030/FFF' },
    ];

    return (
        <section className="trusted py-5 bg-light">
            <div className="container text-center">
                <h3 className="mb-4">Trusted By</h3>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    {trustedBy.map((partner, index) => (
                        <div
                            key={index}
                            className="d-flex m-1 border-radius-4"
                            style={{ cursor: 'default' }}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="img-fluid border-radius-4"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
