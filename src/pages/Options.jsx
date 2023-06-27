import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { OptionService } from "../services/OptionService";
import { ToastContainer, toast } from "react-toastify";
import DataTable from "react-data-table-component";
import 'react-toastify/dist/ReactToastify.css';

import { Link, useNavigate } from 'react-router-dom';

const Option = () => {
  const [datas, setdatas] = useState([]);
  const navigate = useNavigate();

  function deleteData(id) {
    OptionService.deleteOption(id)
      .then((res) => {
        console.log(res.data.message);
         setdatas(datas.filter(data=>(data.id!=id)));
        toast.error('suppression effectuer');
      })
      .catch((err) => {
        console.log(err.response.status + "   --   " + err);
      });
  }
  function getDatas() {
    OptionService.getOptions().then((res) => {
      setdatas(res.data.data);
    });
  }

  function goToUpdate(data){
    console.log(data);
         
   navigate(`/option_update/${data.id}`);
  } 
  
  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "DESIGNATION", selector: (row) => row.designation, sortable: true },
    {
      name: "MODIFIER",
      cell: (row) => {
        const updatedate = ()=>{
            goToUpdate(row);
        }; 
        return (
          <a className="btn btn-primary" onClick={updatedate}>
            Modifier
          </a>
        ); // Utilisez le lien dans la cellule de la colonne
      },
    },

    {
      name: "SUPPRIMER",
      cell: (row) => {
        const handleDelete = () => {
          deleteData(row.id);
        };

        return (
          <a className="btn btn-danger" onClick={handleDelete}>
            Suppression
          </a>
        );
      },
    },
  ];

  useEffect(() => {
    getDatas();
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
                      <b>Liste des Options </b>
                    </h4>
                  </div>
                  <div className="col text-center">
                    <a href="/option" className="btn btn-primary">
                      <b>ajouter Option</b>
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

export default Option;
