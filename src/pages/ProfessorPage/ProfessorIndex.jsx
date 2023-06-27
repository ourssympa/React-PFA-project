import React, { useEffect, useState } from 'react';
import { ProfessorService } from '../../services/ProfessorService';
import DataTable from 'react-data-table-component';
import PageHeader from '../../components/PageHeader';
import { ToastContainer , toast } from 'react-toastify';
import {Link,useNavigate } from 'react-router-dom';

const ProfessorIndex = () => {

    const [datas, setdatas] = useState([]);
    
    const navigate = useNavigate();

    function deleteProfessor(id) {
        ProfessorService.deleteprofessor(id).then((res)=>{
            toast.info('Professeur supprimer');
            setdatas(datas.filter(data =>(data.id!=id)));
        }).catch((err)=>{
            toast.error('erreur lors de la suppression du professeur');
        })
    }

    function profCourses(id) {
      ProfessorService.professorAllCourses(id).then((res)=>{
          navigate(`/professor_course/${id}`);
      }).catch((err)=>{
          toast.error('erreur lors du chargement');
      });
    }
 function updateProfessor(id) {

      navigate(`/professor_update/${id}`);
      
    }

const columns = [
  { name: "ID", selector: (row) => row.id, sortable: true },
  {
    name: "TITRE",
    selector: (row) => {
      if (row.title != null) {
        return row.title;
      }else{
        return "- -";
      }
        
      
    },
  },
  { name: "NOM", selector: (row) => row.first_name, sortable: true },
  { name: "PRENOMS", selector: (row) => row.last_name, sortable: true },
  { name: "EMAIL", selector: (row) => row.email },
  { name: "CONTACT", selector: (row) => row.contact },
  {
    name: "PROFESSOR COURS",
    cell: (row) => {
      const profCourseHandel = () => {
      profCourses(row.id);
      };
      return (
        <a className="btn btn-success" onClick={profCourseHandel}>
          Cours
        </a>
      ); // Utilisez le lien dans la cellule de la colonne
    },
  },
  
  {
    name: "MODIFIER",
    cell: (row) => {
      const updateprofhandel = () => {
       updateProfessor(row.id);
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
        deleteProfessor(row.id);
      };
      return (
        <a className="btn btn-danger" onClick={deleteprofhandel}>
          Suppression
        </a>
      ); // Utilisez le lien dans la cellule de la colonne
    },
  },
];

    useEffect(() => {
       ProfessorService.getProfessors().then((res)=>{
            setdatas(res.data.data);
       }).catch((err)=>{
        toast.error('erreur lors du chargement des professeurs');     
       });
    }, [ ]);

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
                        <b>Liste des Professeurs </b>
                      </h4>
                    </div>
                    <div className="col text-center">
                      <a href="/professor_create" className="btn btn-primary">
                        <b>ajouter un professeur</b>
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
}

export default ProfessorIndex;
