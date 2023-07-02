import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { StudentService } from "../../services/StudentService";
import { OptionService } from "../../services/OptionService";
import PageHeader from "../../components/PageHeader";

const StudentCreate = () => {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [mode, setmode] = useState("");
  const [niveau, setniveau] = useState("");
  const [option, setoption] = useState("");

  const [options, setoptions] = useState([]);

  function addEtudiant(event) {
    event.preventDefault();

    const data = {
      first_name: nom,
      last_name: prenom,
      email: email,
      contact: contact,
      niveau: niveau,
      option_id: option,
      mode: mode,
    };
StudentService.addStudent(data).then((res)=>{
    toast("ajout effectuer")
}).catch((err)=>{
    toast.error("erreur lors de l'ajout de l'etudiant")
})
    
  }

  useEffect(() => {
    OptionService.getOptions()
      .then((res) => {
        setoptions(res.data.data);
      })
      .catch((err) => {
        toast("erreur lors des chargment des options");
      });
  }, []);

  return (
    <div>
      <PageHeader />
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
                  theme="light"
                />

                <form onSubmit={addEtudiant}>
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
                      Option
                    </label>
                    <div className="col-sm-9">
                      <select
                        onChange={(e) => setoption(e.target.value)}
                        id="formrow-inputState"
                        class="form-select"
                      >
                        <option> </option>
                        {options.map((data, index) => {
                          return (
                            <option value={data.id} key={index}>
                              {data.designation}
                            </option>
                          );
                        })}
                      </select>
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
                      <select
                        onChange={(e) => setniveau(e.target.value)}
                        id="formrow-inputState"
                        class="form-select"
                      >
                        <option> </option>
                        <option value="1 année">1 année</option>
                        <option value="2 année">2 année</option>
                        <option value="3 année">3 année</option>
                        <option value="4 année">4 année</option>
                        <option value="5 année">5 année</option>
                      </select>
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
};

export default StudentCreate;
