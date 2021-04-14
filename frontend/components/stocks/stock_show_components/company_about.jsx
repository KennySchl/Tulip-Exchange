import React from "react";

const CompanyAbout = ({ companyProfile }) => {
  return (
    <div className="company-about-contain">
      <h1 className="company-about-header">About</h1>
      <div className="company-about-box">
        <table className="company-about-table">
          <thead>
            <tr className="about-table-headers">
              <th className="about-header">Company Name</th>
              <th className="about-header">Ticker</th>
              <th className="about-header">URL</th>
              <th className="about-header">Industry</th>
            </tr>
          </thead>
          <tbody>
            <tr className="about-table-body">
              <td className="about-body">{companyProfile.name}</td>
              <td className="about-body">{companyProfile.ticker}</td>
              <td className="about-body">
                <a href={companyProfile.weburl}>{companyProfile.weburl}</a>
              </td>
              <td className="about-body">{companyProfile.finnhubIndustry}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyAbout;
