import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { ToastContainer,toast } from 'react-toastify';
import { ProfessorService } from '../../services/ProfessorService';
import { useParams } from 'react-router-dom';
import { OptionService } from '../../services/OptionService';
import { CoursService } from '../../services/CourseService';

const CourseCreate = () => {

   
    const [libelle, setlibelle] = useState("");
    const [professeur_id, setprofesseur_id] = useState(" ");
    const [option_id, setoption_id] = useState([ ]);
     const [niveau, setniveau] = useState("");
    const [semestre, setsemestre] = useState("");
    const [semaine, setsemaine] = useState("");
    const [nbr_seance, setnbr_seance] = useState("");


    const [options, setoptions] = useState([]);
    const [professeur, setprofesseur] = useState(" ");
   const params = useParams();

   function handleCheckboxChange(event) {
    const ischeck = event.target.checked;
    const value = event.target.value;

    if(ischeck){
       

        setoption_id([...option_id,value]);
        console.log(option_id);
    }else{
       
        const res = option_id.filter(data =>(data!=value))
        setoption_id(res);
   }
    
   }

   function submit(event) {
    event.preventDefault();    

    const data = {
        "libelle":libelle,
        "professor_id":params.id,
        "option_id":option_id,
        "niveau":niveau,
        "semestre":semestre,
        "semaine":semaine,
        "nbr_seance":nbr_seance
    };
    console.log(data)
   CoursService.addCourse(data).then((res)=>{
    toast("Cours ajouter");
   }).catch(
   (err)=>{
    toast.error("erreur lors de la creation du cours")
   console.log(err);
   });
   }

    useEffect(() => {
        ProfessorService.getProfessor(params.id).then((res)=>{
            setprofesseur(res.data.data.first_name + " "+res.data.data.last_name)
        }).catch((err)=>{
            toast.error('erreur de chargement')
        })

        OptionService.getOptions().then((res)=>{
            setoptions(res.data.data)
        }).catch((err)=>{
            toast.error('erreur de chargement')
        })
       
    }, [ ]);

   
    return (
        <div>
        <PageHeader/>
        <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="card-body">
              <h4 className="card-title mb-4"> <b>Ajouter cours a un prof</b> </h4>
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

                <form onSubmit={submit}>
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
                        id="formrow-inputState" class="form-select">
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
                        id="formrow-inputState" class="form-select">
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
                       
                        required
                      />
                    </div>
                  </div> 
                  
                   <div className="row mb-4">
                    <label
                     htmlFor="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                     Les Options :
                    </label>
                    <div className="col-sm-9">
                        {
                            options.map((data)=>{
                                return <div>
                                    <input class="form-check-input" value={data.id} onChange={handleCheckboxChange} type="checkbox"/>

                                <label class="form-check-label" for="formCheck1">
                                    {data.designation}
                                </label>
                                </div>
                            })
                        }
                         
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

export default CourseCreate;
