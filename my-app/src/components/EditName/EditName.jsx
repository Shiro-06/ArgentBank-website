import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../Redux/services/ApiService";
import "./EditName.scss";

// Composant EditName pour éditer le nom d'utilisateur
const EditName = ({ onEdit }) => {
  // Récupération des informations utilisateur depuis le store Redux
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const userName = useSelector((state) => state.user.userName);
  const token = useSelector((state) => state.login.token);

  // État local pour gérer l'édition et le nouveau nom d'utilisateur
  const [edit, showEdit] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  // Hook pour dispatcher les actions Redux
  const dispatch = useDispatch();

  // Fonction de soumission du formulaire
  const submit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(newUserName, token)); // Mise à jour du profil utilisateur
    setNewUserName(""); // Réinitialisation du champ de saisie
    showEdit(false); // Fermeture du mode édition
    onEdit(false); // Notification du parent pour fermer le mode édition
  };

  // Effet pour synchroniser le champ de saisie avec le nom d'utilisateur actuel
  useEffect(() => {
    if (!edit) {
      setNewUserName(userName);
    }
  }, [edit, userName]);

  return (
    <div className="header">
      {/* Titre conditionnel basé sur l'état d'édition */}
      <h2 className={`header ${edit ? "editing" : ""}`}>
        {edit ? (
          "Edit user info"
        ) : (
          <>
            Welcome back <br /> {firstName} {lastName}
          </>
        )}
      </h2>

      {/* Formulaire d'édition conditionnel */}
      {edit ? (
        <form className="edit-inputs-buttons" onSubmit={submit}>
          <div className="edit-inputs">
            <div className="edit-input-group">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="edit-input"
                onChange={(e) => {
                  setNewUserName(e.target.value);
                }}
                value={newUserName}
                required
              />
            </div>
            <div className="edit-input-group">
              <label htmlFor="First name">First name :</label>
              <input
                type="text"
                id="First name"
                className="edit-input"
                value={firstName}
                disabled
              />
            </div>
            <div className="edit-input-group">
              <label htmlFor="Last name">Last name :</label>
              <input
                type="text"
                id="Last name"
                className="edit-input"
                value={lastName}
                disabled
              />
            </div>
          </div>
          <div className="edit-buttons">
            <button className="edit-button-option" type="submit">
              Save
            </button>
            <button
              className="edit-button-option"
              onClick={() => {
                setNewUserName(userName);
                showEdit(false);
                onEdit(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          className="edit-button"
          onClick={() => {
            showEdit(true);
            onEdit(true);
          }}
        >
          Edit Name
        </button>
      )}
    </div>
  );
};

export default EditName;