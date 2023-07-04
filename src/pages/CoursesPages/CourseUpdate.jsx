import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoursService } from '../../services/CourseService';
import { ToastContainer, toast } from 'react-toastify';
import PageHeader from '../../components/PageHeader';

const CourseUpdate = () => {

    const [libelle, setlibelle] = useState("");
    const [niveau, setniveau] = useState("");
    const [semestre, setsemestre] = useState("");
    const [semaine, setsemaine] = useState("");
    const [nbr_seance, setnbr_seance] = useState("");
    const [professeur, setprofesseur] = useState(" ");
    const params = useParams();
    
    useEffect(() => {
        CoursService.getCourse(params.id).then((res)=>{
            const data = res.data.data;
            setlibelle(data.libelle)
            setsemaine(data.semaine)
            setnbr_seance(data.nbr_seance)
            setprofesseur(data.professor.first_name+" "+data.professor.last_name)

        }).catch((err)=>{
            toast.error("erreur lors du chargement de la data")
        })
    }, [ ]);

    function updatecours(event) {
        event.preventDefault();

        const datas = {
            "libelle":libelle,
            "niveau":niveau,
            "semestre":semestre,
            "semaine":semaine,
            "nbr_seance":nbr_seance
        };
        CoursService.updateCourse(params.id,datas).then((res)=>{
            toast("modification effectuer")
        }).catch((err)=>{
            toast.error("erreur lors de la modif")
        })
    }
 
    return (
        <div>
        <PageHeader/>
        <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="card-body">
              <h4 className="card-title mb-4"> <b>Modifier un Cours</b> </h4>
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

                <form onSubmit={updatecours} >
                  <div className="row mb-4">
                    <label
                     htmlFor="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                    Libelle
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="horizontal-firstname-input"
                        placeholder="Merise"
                        onChange={(e)=>(setlibelle(e.target.value))}
                        value={libelle}
                        required
                      />
                    </div>
                  </div> 
                  
                  <div className="row mb-4">
                    <label
                     htmlFor="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                     Professeur
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="horizontal-firstname-input"
                        placeholder="Prenoms "
                        value={professeur}
                        disabled="disable"
                      />
                    </div>
                  </div> 
                  
                  <div className="row mb-4">
                    <label
                     htmlFor="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                     Niveau
                    </label>
                    <div className="col-sm-9">
                      
                      <select onChange={(e)=>(setniveau(e.target.value))}
                        id="formrow-inputState" class="form-select" required>
                            <option  > </option>
                      <option  value="1 année">1 année</option>
                      <option  value="2 année">2 année</option>
                      <option  value="3 année">3 année</option>
                      <option  value="4 année">4 année</option>
                      <option  value="5 année">5 année</option>                                
                         </select>
                    </div>
                  </div> 
                  
                  <div className="row mb-4">
                    <label
                     htmlFor="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                     Semestre
                    </label>
                    <div className="col-sm-9">
                      
                       <select   onChange={(e)=>(setsemestre(e.target.value))}
                        id="formrow-inputState" class="form-select" required>
                      <option  > </option>
                      <option  value="semestre 1">semestre 1</option>
                      <option  value="semestre 2">semestre 2</option>
                       </select>
                    </div>
                  </div>  
                  
                   <div className="row mb-4">
                    <label
                     htmlFor="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                     Semaine
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="horizontal-firstname-input"
                        placeholder="S1 - S8"
                        onChange={(e)=>(setsemaine(e.target.value))}
                       value={semaine}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="row mb-4">
                    <label
                     htmlFor="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                     Nombre de Seance
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="horizontal-firstname-input"
                        placeholder=" 8"
                        onChange={(e)=>(setnbr_seance(e.target.value))}
                       value={nbr_seance}
                        required
                      />
                    </div>
                  </div> 

                  <div className="row justify-content-end">
                    <div className="col-sm-9">
                      <div>
                        <button type="submit" className="btn btn-primary w-md">
                         Modifier
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

export default CourseUpdate;
