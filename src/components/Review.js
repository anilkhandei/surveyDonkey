import React, { Fragment } from "react";
// import  from 'react-dom'

export default function Review(props) {
  const { name, address, city, state, zip } = props.nameAddressData();
  const { DOB, DL, SSN, rental } = props.personalData();
  const { experience, skill, location, salary } = props.questionnaireData();

  console.log(name)
  return (
    <Fragment>
      <section>
        <h3>Your entered Name & Address details</h3>
        <span>Full Name :</span>
        <span>{name}</span> <br />
        <span>Address Line 1:</span>
        <span>{address}</span> <br />
        <span>City:</span>
        <span>{city}</span> <br />
        <span>State:</span>
        <span>{state}</span> <br />
        <span>Zipcode:</span>
        <span>{zip}</span>
      </section>
      <section>
        <h3>Your entered Personal details</h3>
        <span>Driving Lic. No:</span>
        <span>{DL}</span> <br />
        <span>Date Of Birth:</span>
        <span>{DOB}</span> <br />
        <span>Social Security No:</span>
        <span>{SSN}</span> <br />
        <span>Rental or Own Car:</span>
        <span>{rental}</span> <br />
      </section>
      <section>
        <h3>Your entered Questionnaire</h3>
        <span>Your overall experience:</span>
        <span>{experience}</span> <br />
        <span>Your work location is:</span>
        <span>{location}</span> <br />
        <span>your Primary skill is:</span>
        <span>{skill}</span> <br />
        <span>Your expected salary in USD:</span>
        <span>{salary}</span> <br />
      </section>
    </Fragment>
  );
}
