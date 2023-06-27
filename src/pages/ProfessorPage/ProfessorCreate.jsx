import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { ProfessorService } from '../../services/ProfessorService';
import { ToastContainer,toast } from 'react-toastify';

const ProfessorCreate = () => {
    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const [titre, settitre] = useState("");

    function addprofessor(event){
        event.preventDefault();

        const data = {
            "first_name":nom,
            "last_name":prenom,
            "email":email,
            "contact":contact,
            "title":titre
        }
       
        ProfessorService.addprofessor(data).then((res)=>{
            toast.info("Professeur ajouter avec succes");
        }).catch((err)=>{
            toast.error("erreur lors de l'ajout du professeur");
        });
    }

    
    return (
        <div>
        <PageHeader/>
        <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="card-body">
              <h4 className="card-title mb-4">Ajouter un Professeur</h4>
              <div className="col-sm-6">
             
              <ToastContainer
                          position="top-right"
                          autoClose={3000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light"/>

                <form onSubmit={addprofessor}>
                  <div className="row mb-4">
                    <label
                      for="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                     Nom 
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="horizontal-firstname-input"
                        placeholder="Nom "
                        onChange={(e)=>{setnom(e.target.value)}} 
                        required
                      />
                    </div>
                  </div> 
                  
                  <div className="row mb-4">
                    <label
                      for="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                     Prenoms
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="horizontal-firstname-input"
                        placeholder="Prenoms "
                        onChange={(e)=>{setprenom(e.target.value)}}
                        required
                      />
                    </div>
                  </div> 
                  
                  <div className="row mb-4">
                    <label
                      for="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                     Titre
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="horizontal-firstname-input"
                        placeholder="Docteur "
                        onChange={(e)=>{settitre(e.target.value)}}
                       
                      />
                    </div>
                  </div> 
                  
                  <div className="row mb-4">
                    <label
                      for="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                     Contact
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="horizontal-firstname-input"
                        placeholder="058962-54454 "
                        onChange={(e)=>{setcontact(e.target.value)}}
                        required
                      />
                    </div>
                  </div>  
                  
                   <div className="row mb-4">
                    <label
                      for="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                     Email
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="horizontal-firstname-input"
                        placeholder="prof@gmail.com"
                        onChange={(e)=>{setemail(e.target.value)}}
                        required
                      />
                    </div>
                  </div>

                  <div className="row justify-content-end">
                    <div className="col-sm-9">
                      <div>
                        <button type="submit" className="btn btn-primary w-md">
                          Enregister
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default ProfessorCreate;
