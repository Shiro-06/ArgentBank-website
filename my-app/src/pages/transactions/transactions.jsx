import React from 'react';
import '../../components/Account/Account.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronDown, faPencil } from '@fortawesome/free-solid-svg-icons';
import './transactions.scss'; 


function Transaction(props) {
  const ACCOUNT_TITLE = props.accountTitle;
  const ACCOUNT_AMOUNT_DESCRIPTION = props.accountAmountDescription;

  return (
    <>
      <section className={`account editing`}>
        <div className="account-content-wrapper">
          <h2 className="account-title">Argent Bank Checking (x8349){ACCOUNT_TITLE}</h2> {/* Titre du compte */}
          <p className="account-amount">$2082.79</p> {/* Montant du compte formaté */}
          <p className="account-amount-description">{ACCOUNT_AMOUNT_DESCRIPTION} Available</p> {/* Description du montant */}
          <FontAwesomeIcon icon={faXmark} className="cross-icon" />
        </div>
      </section>
      <div className="container">
        <div className="header-row">
            <div className="header-item">Date</div>
            <div className="header-item">Description</div>
            <div className="header-item small">Amount</div>
            <div className="header-item small">Balance</div>
            <div className="header-item smaller"></div>
        </div>
        <div className="grid-container">
            <div className="grid-row">
                <div className="grid-item">27/02/20</div>
                <div className="grid-item">Golden Sun Bakery</div>
                <div className="grid-item small">$8.00</div>
                <div className="grid-item small">$298.00</div>
                <div className="grid-item smaller"><FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
            <div className="grid-row">
                <div className="grid-item">27/02/20</div>
                <div className="grid-item">Golden Sun Bakery</div>
                <div className="grid-item small">$8.00</div>
                <div className="grid-item small">$298.00</div>
                <div className="grid-item smaller"><FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
            <div className="grid-row">
                <div className="grid-item">
                    27/02/20
                    <div className="additional-line">Transaction Type</div>
                    <div className="additional-line">Category</div>
                    <div className="additional-line">Note</div>
                </div>
                <div className="grid-item">
                  Golden Sun Bakery
                    <div className="additional-line">Electronic</div>
                    <div className="additional-line">Food <FontAwesomeIcon icon={faPencil} /></div>
                    <div className="additional-line">Lorem Ipsum <FontAwesomeIcon icon={faPencil} /></div>
                </div>
                <div className="grid-item small">$8.00</div>
                <div className="grid-item small">$298.00</div>
                <div className="grid-item smaller"><FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
            <div className="grid-row">
                <div className="grid-item">27/02/20</div>
                <div className="grid-item">Golden Sun Bakery</div>
                <div className="grid-item small">$8.00</div>
                <div className="grid-item small">$298.00</div>
                <div className="grid-item smaller"><FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
            <div className="grid-row">
                <div className="grid-item">27/02/20</div>
                <div className="grid-item">Golden Sun Bakery</div>
                <div className="grid-item small">$8.00</div>
                <div className="grid-item small">$298.00</div>
                <div className="grid-item smaller"><FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
            <div className="grid-row">
                <div className="grid-item">27/02/20</div>
                <div className="grid-item">Golden Sun Bakery</div>
                <div className="grid-item small">$8.00</div>
                <div className="grid-item small">$298.00</div>
                <div className="grid-item smaller"><FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
        </div>
    </div>
    </>
  );
}
export default Transaction;