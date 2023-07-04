import React, { useEffect, useState } from 'react';
import { CoursService } from '../../services/CourseService';
import PageHeader from '../../components/PageHeader';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const CourseListe = () => {
    const [datas, setdatas] = useState([]);
    const navigate = useNavigate();
    function  updateCourse(id) {
        navigate(`/course_update/${id}`)
    }
    const columns = [
        { name: "ID", selector: (row) => row.id, sortable: true },
        { name: "lIBELLE", selector: (row) => row.libelle, sortable: true },
        { name: "PROFESSOR", selector: (row) => row.professor.first_name + " "+ row.professor.last_name, sortable: true },
        {
          name: "NOMBRE SEANCE",
          selector: (row) => row.nbr_seance
        },
        { name: "SEMAINE", selector: (row) => row.semaine},
        { name: "SEMESTRE", selector: (row) => row.semestre},
        { name: "NIVEAU", selector: (row) => row.datas[0].niveau},
        {
          name: "OPTIONS",
          cell: (row) => {
            return (
              <ul>
                {row.datas.map((data, index) => (
                  <li key={index}>{data.option.designation}</li>
                ))}
              </ul>
            );
          },
        },
        {
            name: "MODIFIER",
            cell: (row) => {
              const updateprofhandel = () => {
               updateCourse(row.id);
              };
              return (
                <a className="btn btn-primary" onClick={updateprofhandel}>
                  Modifier
                </a>
              ); // Utilisez le lien dans la cellule de la colonne
            },
          },
      ];

    useEffect(() => {
     CoursService.getCourses().then((res)=>{
        setdatas(res.data.data);
     })
    }, [ ]);
    return (
        <div>
             <PageHeader/>

<div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col">
              <h4>
                <b>Liste des Cours  </b>
              </h4>
            </div>
            <div className="col text-center">
          {/* here the link */}

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

export default CourseListe;
