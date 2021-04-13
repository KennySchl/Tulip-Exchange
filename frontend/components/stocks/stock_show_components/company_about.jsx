import React from "react";

const CompanyAbout = ({ companyProfile }) => {
  return (
    <div>
      <h1>About</h1>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Ticker</th>
            <th>URL</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{companyProfile.name}</td>
            <td>{companyProfile.ticker}</td>
            <td>
              <a href={companyProfile.weburl}>{companyProfile.weburl}</a>
            </td>
            <td>{companyProfile.finnhubIndustry}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyAbout;
