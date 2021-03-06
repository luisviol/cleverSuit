import React from "react";
import "../../style/Agile/bodyAgile.css";
import "../../style/Agile/navAgile.css";

import {
  Button,
  Modal,
  ButtonGroup,
  ToggleButton,
  ButtonToolbar
} from "react-bootstrap";

import Image from "react-bootstrap/Image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import succes from "../../img/succes.svg";

class ModalFormAgile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* MODAL FORM */}
        <Modal
          show={this.props.show}
          onHide={this.props.handleClose}
          showSucces={this.props.showSuccesfull}
          className="modal-form"
        >
          <Modal.Header
            closeButton
            className={
              this.props.showSuccesfull === true
                ? "formik-display-off"
                : "formik-display-on"
            }
          ></Modal.Header>
          <Modal.Body
            className={
              this.props.showSuccesfull === true
                ? "formik-display-off"
                : "formik-display-on"
            }
          >
            <Formik
              className={
                this.props.showSuccesfull === true
                  ? "formik-display-off"
                  : "formik-display-on"
              }
              initialValues={{ email: "", password: "" }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form onSubmit={""}>
                <div className="row container-modal">
                  <div className="row-title">
                    <h3> Ingresa tus datos, para ofrecerte un buen servicio</h3>
                    <br></br>
                    <p>Ingresa tu nombre</p>
                  </div>
                  <div className="row row-name">
                    <Field name="name" type="text" className="input" />
                    <ErrorMessage name="name">
                      {message => <div className="error">{message}</div>}
                    </ErrorMessage>
                    <p>Nunca compartiremos esta información con nadie.</p>
                  </div>
                  <div className="row row-company">
                    <p>¿Cómo se llama tu empresa?</p>
                    <Field name="company" type="text" className="input" />
                    <ErrorMessage name="company">
                      {message => <div className="error">{message}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="row row-industry align-items-center">
                    <p>Industria</p>

                    <select>
                      <option>01</option>
                      <option>01</option>
                    </select>
                  </div>
                  <div className="row row-options">
                    <p>¿Qué tan grande es la compañía para la que trabajas?</p>
                  </div>
                  <div className="row row-check  justify-content-center">
                    <ButtonToolbar
                      aria-label="Toolbar with button groups"
                      className="mt-2 justify-content-center toggle-btn"
                    >
                      <ButtonGroup toggle className="button-check-group ">
                        <ToggleButton
                          type="radio"
                          name="radio"
                          value="1"
                          className="button-check-agile "
                        >
                          only me
                        </ToggleButton>
                      </ButtonGroup>
                      <ButtonGroup toggle className="button-check-group">
                        <ToggleButton
                          type="radio"
                          name="radio"
                          value="2"
                          className="button-check-agile"
                        >
                          0-50
                        </ToggleButton>
                      </ButtonGroup>

                      <ButtonGroup toggle className="button-check-group">
                        <ToggleButton
                          type="radio"
                          name="radio"
                          value="3"
                          className="button-check-agile"
                        >
                          50 - 250
                        </ToggleButton>
                      </ButtonGroup>
                      <ButtonGroup toggle className="button-check-group">
                        <ToggleButton
                          type="radio"
                          name="radio"
                          value="4"
                          className="button-check-agile"
                        >
                          +250
                        </ToggleButton>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </div>
                  <div className="row row-btn-submit">
                    <Button
                      className="btn-nav-mobile-agile"
                      data-toggle="modal"
                      data-target="#myModal2"
                      onClick={this.props.handleShowSuccesfull}
                    >
                      Haz tu cotización
                    </Button>
                  </div>
                  <div className="row btn-close">
                    <Button
                      variant="secondary"
                      onClick={this.props.handleClose}
                    >
                      Cerrar
                    </Button>
                  </div>
                </div>
              </Form>
            </Formik>
          </Modal.Body>
          {/* MODAL SUCCESFULLY  */}

          <Modal.Body
            className={
              this.props.showSuccesfull === true
                ? "succesfull-display-on"
                : "succesfull-display-off"
            }
          >
            <div className="row row-img-sucess">
              <Image src={succes}></Image>
            </div>
            <div className="row row-sucess-text">
              <h3>¡Tu solicitud ha sido enviada con éxito!</h3>
            </div>
            <div className="row row-succes-btn-agile">
              <Button
                onClick={
                  this.props.handleClose && this.props.handleCloseSuccesful
                }
              >
                Continue
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default ModalFormAgile;
