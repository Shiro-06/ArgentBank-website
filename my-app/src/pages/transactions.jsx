import React from 'react';
import '../components/Account/Account.scss'; // Importation du fichier de style pour le composant Account
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';


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
      <table >
        <thead>
          <tr className="table-title">
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
  <tr className="table-row">
    <td className='first-column'>27/02/20</td>
    <td>Golden Sun Bakery</td>
    <td>$8.00</td>
    <td>$298.00</td>
    <td className='last-column'><FontAwesomeIcon icon={faChevronDown} /></td>
  </tr>
  <tr className="table-row">
    <td className='first-column'>27/02/20</td>
    <td>Golden Sun Bakery</td>
    <td>$8.00</td>
    <td>$298.00</td>
    <td className='last-column'><FontAwesomeIcon icon={faChevronDown} /></td>
  </tr>
  <tr className="table-row-group">
    <td className='sub-table' colSpan="5">
      <table className="sub-table no-padding-margin">
        <tbody>
          <tr className="sub-row default-text-color">
            <td className='first-column'>27/02/20</td>
            <td>Golden Sun Bakery</td>
            <td>$8.00</td>
            <td>$298.00</td>
            <td className='last-column'><FontAwesomeIcon icon={faChevronDown} /></td>
          </tr>
          <tr className="sub-row default-text-color">
            <td className='first-column'>Transaction Type</td>
            <td>Electric</td>
            <td></td>
            <td></td>
            <td className='last-column'></td>
          </tr>
          <tr className="sub-row default-text-color">
            <td className='first-column'>Category</td>
            <td>Food</td>
            <td></td>
            <td></td>
            <td className='last-column'></td>
          </tr>
          <tr className="sub-row default-text-color">
            <td className='first-column'>Note</td>
            <td>Lorem Ipsum</td>
            <td></td>
            <td></td>
            <td className='last-column'></td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
  <tr className="table-row">
    <td className='first-column'>27/02/20</td>
    <td>Golden Sun Bakery</td>
    <td>$8.00</td>
    <td>$298.00</td>
    <td className='last-column'><FontAwesomeIcon icon={faChevronDown} /></td>
  </tr>
  <tr className="table-row">
    <td className='first-column'>27/02/20</td>
    <td>Golden Sun Bakery</td>
    <td>$8.00</td>
    <td>$298.00</td>
    <td className='last-column'><FontAwesomeIcon icon={faChevronDown} /></td>
  </tr>
</tbody>
      </table>
    </>
  );
}
export default Transaction;