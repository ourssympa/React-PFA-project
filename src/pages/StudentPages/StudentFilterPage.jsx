import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { ToastContainer,toast} from 'react-toastify';
import { OptionService } from '../../services/OptionService';
import { StudentService } from '../../services/StudentService';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const StudentFilterPage = () => {

    const [niveau, setniveau] = useState("");
    const [option, setoption] = useState("");
    const [options, setoptions] = useState([]);
    const [datas, setdatas] = useState([]);
    const columns = [
        { name: "ID", selector: (row) => row.id, sortable: true },
        { name: "NOM", selector: (row) => row.first_name, sortable: true },
        { name: "PRENOMS", selector: (row) => row.last_name, sortable: true },
        { name: "EMAIL", selector: (row) => row.email },
        { name: "CONTACT", selector: (row) => row.contact },
        { name: "MODE", selector: (row) => row.mode },
        { name: "NIVEAU", selector: (row) => row.niveau },
        { name: "OPTION", selector: (row) => row.option.designation },
    
        {
          name: "MODIFIER",
          cell: (row) => {
            const updateprofhandel = () => {
                 updateetudiant(row.id)
            };
  
            return (
              <a className="btn btn-primary" onClick={updateprofhandel}>
                Modifier
              </a>
            ); // Utilisez le lien dans la cellule de la colonne
          },
        },
      
        {
          name: "SUPPRESSION",
          cell: (row) => {
            const deleteprofhandel = () => {
              deleteetudiant(row.id)
            };
            return (
              <a className="btn btn-danger" onClick={deleteprofhandel}>
                Suppression
              </a>
            ); // Utilisez le lien dans la cellule de la colonne
          },
        },
      ];
      const navigate = useNavigate();
  
      function updateetudiant(id) {
        navigate(`/student_update/${id}`)
      } 
      
      function deleteetudiant(id) {
    
        StudentService.deleteStudent(id).then((res)=>{
          setdatas(datas.filter(data =>(data.id!=id)))
          toast("Etudiant Supprimer");
        }).catch((err)=>{
          toast.error("Erreur lors de la Suppression de l'Etudiant");
       
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
    
    function filtrer(event) {
        event.preventDefault();
        const data = {
            "niveau":niveau,
            "option_id":option
        }
        StudentService.filterByNiveauAndOption(data).then((res)=>{
            setdatas(res.data.data)
            toast("Datas charger")
        }).catch((err)=>{
            toast.error('Data load failed')
        })
    }
    return (
        <div>
        <PageHeader/>
        <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="card-body">
              <h4 className="card-title mb-4">Filtrer les Etudiants</h4>
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
             
                <form onSubmit={filtrer}>
               

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

                  <div className="row justify-content-end">
                    <div className="col-sm-9">
                      <div>
                        <button type="submit" className="btn btn-primary w-md">
                          Filtrer
                        </button>
                      </div>
                    </div>
                  </div>
                </form>


              </div>

              <br />
              <br />
              <br />
              <br />
              <br />
              <DataTable columns={columns} data={datas} pagination />
            
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default StudentFilterPage;
