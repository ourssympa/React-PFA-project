import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { useParams } from 'react-router-dom';
import { OptionService } from "../../services/OptionService";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import {Link , useNavigate} from 'react-router-dom';

const OptionUpdate = (props) => {

    const [designation, setdesignation] = useState([]);
    const params =  useParams();
    const navigate = useNavigate();


    function updateOption(event) {
        event.preventDefault(); 
      
        OptionService.updateOption(params.id, { "designation": designation })
          .then((res) => {
            toast.info('Modification effectuée');
            setTimeout(() => {
                navigate('/');
              }, 2000); 
          })
          .catch((err) => {
            if (err.response.status === 400) {
              toast.error('Modification non effectuée : erreur');
              console.log(err.response.data.message);
            } else {
              toast.error('Modification non effectuée : erreur');
              console.log(err);
            }
          });
      }
    useEffect(() => {
        OptionService.getOption(params.id).then((res) => {
            setdesignation(res.data.data.designation);
          });

    }, [ ]);
    return (
        <div>
            <PageHeader/>
            <div className="main-content">

<div className="page-content">
  <div className="container-fluid">

    <div className="row">
      <div className="col-12">
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
      <form  onSubmit={updateOption}>
                  <div className="row mb-4">
                    <label
                      className="col-sm-3 col-form-label"
                    >
                      Designation
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={designation}
                        className="form-control"
                        id="horizontal-firstname-input"
                        onChange={(e)=>setdesignation(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row justify-content-end">
                    <div className="col-sm-9">
                      <div>
                        <button type='submit' className="btn btn-primary w-md">
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

</div>
       
    );
}

export default OptionUpdate;
