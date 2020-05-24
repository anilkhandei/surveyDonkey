import React, { Fragment } from "react";
// import  from 'react-dom'

export default function Review(props) {
  const { name, address, city, state, zip } = props.nameAddressData();
  const { DOB, DL, SSN, rental,gender } = props.personalData();
  const { jobChange,experience, skill, location, salary } = props.questionnaireData();

  console.log("job change is"+jobChange)
  return (
    <Fragment>
      <section  className="card">
        <h3  className="card-header">Your entered Name & Address details</h3>
        <span className="label">Full Name :</span>
        <span className="label-response">{name}</span> <br />
        <span className="label">Address Line 1:</span>
        <span className="label-response">{address}</span> <br />
        <span className="label">City:</span>
        <span className="label-response">{city}</span> <br />
        <span className="label">State:</span>
        <span className="label-response">{state}</span> <br />
        <span className="label">Zipcode:</span>
        <span className="label-response">{zip}</span>
      </section>
      <section  className="card">
        <h3 className="card-header">Your entered Personal details</h3>
        <span className="label">Gender: </span>
        <span className="label-response">{gender}</span><br/>
        <span className="label">Driving Lic. No:</span>
        <span className="label-response">{DL}</span> <br />
        <span className="label">Date Of Birth:</span>
        <span className="label-response">{DOB}</span> <br />
        <span className="label">Social Security No:</span>
        <span className="label-response">{SSN}</span> <br />
        <span className="label">Rental or Own Car:</span>
        <span className="label-response">{rental}</span> <br />
      </section>
      <section className="card">
        <h3 className="card-header">Your entered Questionnaire</h3>
        <span className="label">Wanna change job now?</span>
        <span className="label-response">{jobChange==true?"Yes":"No"}</span><br/>
        <span className="label">Your overall experience:</span>
        <span className="label-response">{experience}</span> <br />
        <span className="label">Your work location is:</span>
        <span className="label-response">{location}</span> <br />
        <span className="label">your Primary skill is:</span>
        <span className="label-response">{skill}</span> <br />
        <span className="label">Your expected salary in USD:</span>
        <span className="label-response">{salary}</span> <br />
      </section>
    </Fragment>
  );
}
