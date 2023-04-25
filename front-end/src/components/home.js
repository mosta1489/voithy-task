import React, { useState, useEffect } from "react";
import { getPatients } from "../services/getPatients";
import { editPatientService } from "../services/editPatient";
import { addPatientService } from "../services/addPatient";
import { deletePatientService } from "../services/deletePatient";
import { deleteAccountService } from "../services/deleteAccount";
const PatientRow = ({ id, name, age, gender, potion, doctor_id }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{potion}</td>
      <td>
        <a href={`#editPatientModal${id}`} className="edit" data-toggle="modal">
          <i
            className="material-icons"
            data-toggle="tooltip"
            title="Edit"
            onClick={() => {
              const patientData = { id, name, age, gender, potion };
            }}
          >
            &#xE254;
          </i>
        </a>
        <a
          href={`#deletePatientModal${id}`}
          className="delete"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </a>
      </td>
    </tr>
  );
};

const getData = async () => {
  const m = await getPatients(localStorage.getItem("jwt"));
  return m.patients;
};

const Home = () => {
  const [patients, setPatients] = useState([]);
  const [newName, setnewName] = useState("");
  const [newAge, setnewAge] = useState("");
  const [newGender, setnewGender] = useState("");
  const [newPotion, setnewPotion] = useState("");
  const [id, setId] = useState("");
  const [editPotion, setEditPotion] = useState("");

  useEffect(() => {
    getData().then((data) => {
      setPatients(data);
    });
  }, []);

  const addNewPatientSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: newName,
      age: newAge,
      gender: newGender,
      potion: newPotion,
    };

    addPatientService(data, localStorage.getItem("jwt")).then((data) => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

  const editPatientSubmit = (event) => {
    event.preventDefault();

    editPatientService(id, editPotion, localStorage.getItem("jwt")).then(
      (data) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    );
  };

  const deletePatientSubmit = (event) => {
    event.preventDefault();
    deletePatientService(id, localStorage.getItem("jwt")).then((data) => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

  return (
    <div className="out">
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>Patients</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#addPatientModal"
                  className="btn btn-success"
                  data-toggle="modal"
                >
                  <i className="material-icons">&#xE147;</i>{" "}
                  <span>Add New Patients</span>
                </a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th> id</th>
                <th>name</th>
                <th>age</th>
                <th>gender</th>
                <th>potion</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <PatientRow key={patient.id} {...patient} />
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Log Out
        </button>
        <br />
        <br />
        <br />
        <br />
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteAccountService(localStorage.getItem("jwt"));
            localStorage.clear();

            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }}
        >
          Delete Account
        </button>
      </div>
      {/* ====================== Start Add Modal HTML ======================*/}
      <div id="addPatientModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={addNewPatientSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Add Patient</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                    onChange={(event) => setnewName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>age</label>
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    required
                    onChange={(event) => setnewAge(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>gender</label>
                  <input
                    type="text"
                    name="gender"
                    className="form-control"
                    required
                    onChange={(event) => setnewGender(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>potion</label>
                  <textarea
                    className="form-control"
                    required
                    name="potion"
                    onChange={(event) => setnewPotion(event.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" className="btn btn-info" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ====================== End Add Modal HTML ====================== */}
      {/* ====================== Start Edit Modal HTML ======================*/}
      <>
        {patients.map((patient) => (
          <div
            key={patient.id}
            id={`editPatientModal${patient.id}`}
            className="modal fade"
          >
            <div className="modal-dialog">
              s
              <div className="modal-content">
                <form onSubmit={editPatientSubmit}>
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Patient</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>Enter New Potion</label>
                      <input
                        name="potion"
                        className="form-control"
                        required
                        // value={patient.potion}
                        onChange={(event) => {
                          setEditPotion(event.target.value);
                          setId(patient.id);
                        }}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                      value="Cancel"
                    />
                    <input
                      type="submit"
                      className="btn btn-info"
                      value="Save"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}
      </>
      {/* ====================== End Edit Modal HTML ======================*/}
      {/* ====================== Start Delete Modal HTML ======================*/}
      <>
        {patients.map((patient) => (
          <div id={`deletePatientModal${patient.id}`} className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form onSubmit={deletePatientSubmit}>
                  <div className="modal-header">
                    <h4 className="modal-title">Delete Patient</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to delete these Records?</p>
                    <p className="text-warning">
                      <small>This action cannot be undone.</small>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                      value="Cancel"
                    />
                    <input
                      type="submit"
                      className="btn btn-danger"
                      value="Delete"
                      onClick={() => {
                        setId(patient.id);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}
      </>
      {/* ====================== End Delete Modal HTML ======================*/}
    </div>
  );
};

export default Home;
