import React, { useEffect, useState } from "react";
import { ProfessorService } from "../../services/ProfessorService";
import { Link, NavLink, useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import DataTable from "react-data-table-component";
import { ToastContainer } from "react-toastify";

const ProfessorCourse = () => {
  const params = useParams();
  const [datas, setdatas] = useState([]);

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "lIBELLE", selector: (row) => row.libelle, sortable: true },
    {
      name: "NOMBRE SEANCE",
      selector: (row) => row.nbr_seance,
      sortable: true,
    },
    { name: "SEMAINE", selector: (row) => row.semaine, sortable: true },
    { name: "SEMESTRE", selector: (row) => row.semestre, sortable: true },
    { name: "NIVEAU", selector: (row) => row.datas[0].niveau, sortable: true },
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
  ];

  useEffect(() => {
    ProfessorService.professorAllCourses(params.id).then((res) => {
      setdatas(res.data.datas);
    });
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
                      <b>Liste des Cours du Professeur </b>
                    </h4>
                  </div>
                  <div className="col text-center">
                    {
                      <Link
                        to={`/course/${params.id}`}
                        className="btn btn-primary"
                      >
                        ajouter cours au professeur
                      </Link>
                    }

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

export default ProfessorCourse;
