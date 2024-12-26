import "./ContactSection.scss";
import EmbedMap from "../EmbedMap.tsx";

const ContactSection = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="mb-3 section-title text-center">Contact Us</h2>
            <EmbedMap/>
        </section>
    );
};

export default ContactSection;