import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { StudentService } from "../../services/StudentService";
import DataTable from "react-data-table-component";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StudentIndex = () => {
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
    StudentService.getStudents().then((res)=>{
      setdatas(res.data.data);
    })
  }, []);
  return (

    <div>
      <PageHeader />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
              <div className="row">
                    <div className="col">
                      <h4>
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
                        <b>Liste des Etudiants  </b>
                      </h4> 
                    </div>
                    <div className="col text-center">
                      <a href="/student_create" className="btn btn-primary">
                        <b>ajouter un etudiant</b>
                      </a>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                <DataTable columns={columns} data={datas} pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentIndex;
