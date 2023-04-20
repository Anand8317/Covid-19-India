import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillArrowLeftSquareFill, BsFillMicFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const CovidDetail = () => {
  const covid = useSelector((state) => state.covid);
  const covidArr = Object.keys(covid).map((key) => ({ id: key, ...covid[key] }));
  const params = useParams();
  const covidSpe = covidArr.find((c) => c.id === params.title);
  console.log(covidSpe);

  return (
    <section className="detail-section">
      <div className="toolbar">
        <Link to="/" className="toolbar-link">
          <BsFillArrowLeftSquareFill />
        </Link>
        <h1 className="title">
          <Link to="/" className="toolbar-link">Covid</Link>
        </h1>
        <div className="d-row toolbar-link">
          <BsFillMicFill />
          <AiFillSetting />
        </div>
      </div>
      <div className="detail-title">
        <h2>{covidSpe.id}</h2>
      </div>
      <div className="detail-container">
        <div className="detail-header">
          <h3>DETAIL INFORMATION</h3>
        </div>
        <div className="detail-item">
          <h3>Confirmed</h3>
          <p>{covidSpe.delta7.confirmed}</p>
        </div>
        <div className="detail-item">
          <h3>Deceased</h3>
          <p>{covidSpe.delta7.deceased ? covidSpe.delta7.deceased : 0}</p>
        </div>
        <div className="detail-item">
          <h3>Recovered</h3>
          <p>{covidSpe.delta7.recovered}</p>
        </div>
        <div className="detail-item">
          <h3>Tested</h3>
          <p>{covidSpe.delta7.tested}</p>
        </div>
        <div className="detail-item">
          <h3>Vaccinated1</h3>
          <p>{covidSpe.delta7.vaccinated1}</p>
        </div>
        <div className="detail-item">
          <h3>Vaccinated2</h3>
          <p>{covidSpe.delta7.vaccinated2}</p>
        </div>
      </div>
    </section>
  );
};

export default CovidDetail;
