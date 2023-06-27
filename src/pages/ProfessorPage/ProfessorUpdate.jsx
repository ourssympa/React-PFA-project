import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PageHeader from '../../components/PageHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { ProfessorService } from '../../services/ProfessorService';
import 'react-toastify/dist/ReactToastify.css';
const ProfessorUpdate = () => {
    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const [titre, settitre] = useState("");
   
    const params = useParams();

    const navigate = useNavigate();

    function updateprofessor(event) {

        event.preventDefault();

        const data = {
            "first_name":nom,
            "last_name":prenom,
            "email":email,
            "contact":contact,
            "title":titre
        }

        ProfessorService.updateprofessor(params.id,data).then((res)=>{
            toast.info("Modification effectuer");
            setTimeout(()=>{
               navigate('/professor');
            },1000);
        }).catch((err)=>{
            toast.error('Erreur lors de la modification');
        })
    }

    useEffect(() => {
        
       ProfessorService.getProfessor(params.id).then((res)=>{

        const data = res.data.data;
        setnom(data.first_name);
        setprenom(data.last_name);
        setemail(data.email);
        setcontact(data.contact);
        settitre(data.title);

       }).catch((err)=>{
        toast.error('erreur lors du chargement');
       })
    }, []);
    return (
        <div>
        <PageHeader/>
        <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="card-body">
              <h4 className="card-title mb-4">Modifier un Professeur</h4>
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

                <form onSubmit={updateprofessor}>
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
                        value={nom}
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
                        value={prenom}
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
                        value={titre}
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
                        value={contact}
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
                        disabled="disabled"
                        type="text"
                        className="form-control"
                        id="horizontal-firstname-input"
                        placeholder="prof@gmail.com"
                        value={email}
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

export default ProfessorUpdate;
