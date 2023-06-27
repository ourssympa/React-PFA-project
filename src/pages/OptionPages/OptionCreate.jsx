import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { OptionService } from "../../services/OptionService";
const OptionCreate = () => {
  const [designation, setdesignation] = useState([]);

  const [iswork, setiswork] = useState(false);
  const [error, seterror] = useState(false);

 function dismonte (){
    setiswork(false);
  };
  function designationHandle(e) {
    setdesignation(e.target.value);
  }

  function submit(event) {
    event.preventDefault();

    const data = {
      designation: designation,
    };

    OptionService.addOption(data)
      .then((res) => {
        console.log(res.data.message);
        setiswork(true);
      })
      .catch((err) => {
        if (err.response.status == 400) {
          seterror(true);
          console.log(err.response.data.message);
        } else {
          console.log(err);
        }
      });
  }

  return (
    <div>
      <PageHeader />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="card-body">
              <h4 className="card-title mb-4">Ajouter une Option</h4>
              <div className="col-sm-6">
                {error ? (
                  <label className="text text-danger">
                    veuillez renseignez le champ
                  </label>
                ) : (
                  <label></label>
                )}

                {iswork ? (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    Option ajouter
                    <button
                      type="button"
                      className="btn-close"
                     onClick={dismonte}
                      aria-label="Close"
                    ></button>
                  </div>
                ) : (
                  <label></label>
                )}
                <form onSubmit={submit}>
                  <div className="row mb-4">
                    <label
                      for="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                      Designation
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="horizontal-firstname-input"
                        placeholder="Option designation "
                        onChange={designationHandle}
                      />
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

export default OptionCreate;
