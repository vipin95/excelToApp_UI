import React from "react";

function Table({sites, setSearch, Header, setFillterOn}) {

    return(
        <div className="table-cont">
            <div className="tableHeader">
                <h3>Total Result: {sites?.length}</h3>
                <select name="cars" id="cars" onChange={e=> setFillterOn(e.target.value)}>
                {Object.keys(Header).map(element => {
                    return <option value={Header[element]}>{element}</option>
                })}
                </select>
                <input type="search" name="" onChange={(e)=>setSearch(e.target.value)} id="" placeholder="Search.." />
            </div>
            <table cellSpacing="0" className="table_styling">
                <thead>
                <tr className="tableHeading">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Toco</th>
                        <th>Toco Id</th>
                        <th>Lat / Long</th>
                        <th>Distance</th>
                        <th>FM</th>
                        <th>Type</th>
                        <th>Tech. Name</th>
                        <th>Tech. Phone</th>
                </tr>
                </thead>
                <tbody>
                {sites?.map(element => {
                    return <tr className="tableBody">
                    <td>{element.siteId}</td>
                    <td>{element.siteName}</td>
                    <td>{element.toco}</td>
                    <td>{element.tocoId}</td>
                    <td>{element.Latitude+" "+element.Longitude}</td>
                    <td>{element.distance+ "Km"}</td>
                    <td>{element.FM}</td>
                    <td>{element.towerType}</td>
                    <td>{element.technicianName}</td>
                    <td>{element.technicianPhone}</td>
                </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;