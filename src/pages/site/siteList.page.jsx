import React from "react";
import { Table } from "../../components";

function SiteListPage({sites, setSearch, Header, setFillterOn}) {
    return(
        <div className="container backgroundGrayColor">
            <div className="sitesListPageHeader positionTablePages" >
                <div className="sitesListPageHeader-left">
                    <h1 className="marginZero">Sites</h1>
                    <h4 className="marginZero">Click to view the details</h4>
                </div>
                <div className="sitesListPageHeader-right">
                    <button>Add new</button>
                </div>
            </div>
                <div className="siteListBody positionTablePages">
                    <Table setFillterOn={setFillterOn} Header={Header} sites={sites} setSearch={setSearch}/>
                </div>
        </div>
    )
}

export default SiteListPage;