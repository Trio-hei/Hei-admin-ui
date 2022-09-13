import './form.css';


export function Form() {
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
                  <option value="Sortie">Sortie</option>
              </select>
             </div>
             <div className="group">
              <label htmlFor="text">Lieu :</label>
              <input type="lieu"/>
             </div>
             <div className="group">
              <label htmlFor="text">Groupe :</label>
              <input type="text" />
              <div className="check">
                  <label htmlFor="grp">G1</label>
                  <input type="checkbox" />
                  <label htmlFor="grp">G2</label>
                  <input type="checkbox" />
                  <label htmlFor="grp">G3</label>
                  <input type="checkbox" />
              </div>
             </div>
            </div>
          </div>
          <div className="bouton">
              <button className="btn btn-primary">Faire présence</button>
              <button className="btn1">Annuler</button>
            </div>
       </div>
      </>
  )
}