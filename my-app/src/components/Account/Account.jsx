import './Account.scss'; // Importation du fichier de styles SCSS pour le composant
import { PropTypes } from 'prop-types'; // Importation de PropTypes pour la validation des types de props
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importation du composant FontAwesomeIcon pour les icônes
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importation de l'icône ChevronRight

// Définition du composant fonctionnel Account
function Account(props) {
    // Déstructuration des props pour une utilisation plus simple
    const ACCOUNT_TITLE = props.accountTitle;
    const ACCOUNT_AMOUNT = props.accountAmount;
    const ACCOUNT_AMOUNT_DESCRIPTION = props.accountAmountDescription;
    const ACCOUNT_AMOUNT_FORMAT = amountFormat(ACCOUNT_AMOUNT); // Formatage du montant du compte

    return (
        // Section principale du composant avec une classe conditionnelle basée sur la prop editing
        <section className={`account ${props.editing ? 'editing' : ''}`}>
            <div className="account-content-wrapper">
                <h2 className="account-title">Argent Bank {ACCOUNT_TITLE}</h2> {/* Titre du compte */}
                <p className="account-amount">${ACCOUNT_AMOUNT_FORMAT}</p> {/* Montant du compte formaté */}
                <p className="account-amount-description">{ACCOUNT_AMOUNT_DESCRIPTION} Balance</p> {/* Description du montant */}
            </div>

            {/* Affichage conditionnel basé sur la prop editing */}
            {props.editing ? (
                <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" /> // Icône ChevronRight si editing est true
            ) : (
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button> {/* Bouton pour voir les transactions si editing est false */}
                </div>
            )}
        </section>
    );
}

// Fonction utilitaire pour formater les montants
function amountFormat(number) {
    return new Intl.NumberFormat('en-US').format(number); // Utilisation de l'API Intl pour le formatage
}

// Définition des types de props attendus pour le composant Account
Account.propTypes = {
    accountTitle: PropTypes.string, // Titre du compte (string)
    accountAmount: PropTypes.number, // Montant du compte (number)
    accountAmountDescription: PropTypes.string, // Description du montant (string)
    editing: PropTypes.bool.isRequired // Indicateur d'édition (booléen, requis)
}

export default Account; // Exportation du composant Account par défaut