import { useNavigate } from 'react-router-dom';
import './form.css';


export function Form() {

const navigate = useNavigate();

  return (
      <>
       <div className="PageContainer">
          <div className="Title"><h5>Nouvel évènement</h5></div>
          <div className="form">
            <div className="partOne">
              <div className="group1">
                <label htmlFor="date">Date :</label>
                <input type="date"/>
              </div>
              <div className="group1">
               <label htmlFor="time">Heure de début :</label>
               <input type="time" />
              </div>
              <div className="group1">
               <label htmlFor="time">Heure de fin :</label>
               <input type="time" />
              </div>
            </div>
            <div className="parTwo">
            <div className="group">
              <label htmlFor="checkbox">Type d'évènement : </label>
              <select className="select">
                  <option value="cours">Cours</option>
                  <option value="autre">Autre</option>
              </select>
             </div>
             <div className="group">
             <label htmlFor="checkbox">Lieu: </label>
              <select className="select">
                  <option>HEI</option>
                  <option>Alliance Française </option>
              </select>
             </div>
             <div className="group">
              <label htmlFor="text">Groupe :</label>
              <select className="select">
                  <option value="G1">G1</option>
                  <option value="G2">G2</option>
                  <option value="G3">G3</option>
              </select>
             </div>
            </div>
          </div>
          <div className="bouton">
              <button className="btn4" onClick={()=>navigate("/Presence")}>Faire présence</button>
              <button className="btn3">Annuler</button>
            </div>
       </div>
      </>
  )
}