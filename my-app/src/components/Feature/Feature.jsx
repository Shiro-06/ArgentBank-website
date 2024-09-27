import { PropTypes } from 'prop-types'; // Importation de PropTypes pour la validation des types de props
import './Feature.scss'; // Importation du fichier de styles SCSS pour le composant

// Définition du composant fonctionnel Feature
function Feature(props) {
    // Déstructuration des props pour une utilisation plus simple
    const ICON = props.icon;
    const ALT_IMG = props.altImg;
    const TEXT_H3 = props.textH3;
    const TEXT_P = props.textP;

    return (
        // Structure du composant avec des classes CSS pour le style
        <div className="feature-item">
            <img src={ICON} alt={ALT_IMG} className="feature-icon" /> {/* Icône de la fonctionnalité */}
            <h3 className="feature-item-title">{TEXT_H3}</h3> {/* Titre de la fonctionnalité */}
            <p>{TEXT_P}</p> {/* Description de la fonctionnalité */}
        </div>
    );
}

// Définition des types de props attendus pour le composant Feature
Feature.propTypes = {
    icon: PropTypes.string, // URL de l'icône (string)
    altImg: PropTypes.string, // Texte alternatif pour l'image (string)
    textH3: PropTypes.string, // Texte du titre (string)
    textP: PropTypes.string // Texte de la description (string)
}

export default Feature; // Exportation du composant Feature par défaut