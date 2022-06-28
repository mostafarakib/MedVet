import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SelectedService.css";

const SelectedService = (props) => {
  const [detailedService, setDetailedService] = useState({});
  const { serviceId } = useParams();

  useEffect(() => {
    fetch(`/services/service-${serviceId}.json`)
      .then((res) => res.json())
      .then((data) => setDetailedService(data));
  }, []);

  return (
    <div>
      <div className="p-5 selected_service-container">
        <img
          className="selected_service-img"
          src={detailedService[0]?.img}
          alt={`img-${serviceId}`}
        />
        <h4 className="mt-4"> {detailedService[0]?.tagline}</h4>
        <p className="w-75">{detailedService[0]?.description}</p>
      </div>
    </div>
    // <Modal
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //
    //   <Modal.Footer>
    //     <button onClick={props.onHide} className="btn-first">
    //       Close
    //     </button>
    //   </Modal.Footer>
    // </Modal>
  );
};

export default SelectedService;
