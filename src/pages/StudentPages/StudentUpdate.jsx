import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { StudentService } from "../../services/StudentService";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const StudentUpdate = () => {
    
    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const [mode, setmode] = useState("");
   
    const param = useParams();
    const navigate = useNavigate()
    useEffect(() => {
       StudentService.getStudent(param.id).then((res)=>{
      const datas = res.data.data

      setnom(datas.first_name)
      setprenom(datas.last_name)
      setcontact(datas.contact)
      setemail(datas.email)
       }).catch((err)=>{
        toast.error("Etudiant non chargé")
       })
    }, []);
    
   
    function updateEtudiant( event) {
        event.preventDefault();
        const data = {
            first_name: nom,
            last_name: prenom,
            email: email,
            contact: contact,
            mode: mode,
        }

        StudentService.updateStudent(param.id,data).then((res)=>{
           toast("Modification effectuer");
            setTimeout(()=>{
                navigate('/student');
            },1000);
         
           
        }).catch((err)=>{
            toast.error('Erreur lors de la modification');
        })
        }
  return (
    <div>
      <PageHeader />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
              <h4 className="card-title mb-4">Modifier un Etudiant</h4>
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

             
              <form onSubmit={updateEtudiant}>
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
                        onChange={(e) => {
                          setnom(e.target.value);
                        }}
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
                        onChange={(e) => {
                          setprenom(e.target.value);
                        }}
                        required
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
                        value={contact}
                        onChange={(e) => {
                          setcontact(e.target.value);
                        }}
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
                        placeholder="etudiant@gmail.com"
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <label
                      htmlFor="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                      Mode
                    </label>
                    <div className="col-sm-9">
                      <select
                        onChange={(e) => setmode(e.target.value)}
                        id="formrow-inputState"
                        class="form-select"
                      >
                        <option> </option>
                        <option value="Distanciel">Distanciel</option>
                        <option value="Présentiel">Présentiel</option>
                      </select>
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
    </div>
  );
};

export default StudentUpdate;
