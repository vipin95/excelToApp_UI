import React from "react";
// import { Header } from "../../components/components.index";
import Header from "../../components/components.header";
import { Link } from "react-router-dom";
import * as XLSX from 'xlsx';

function DashboardPage({setFileObject}) {;
    return(
        <div className="container">
                <Header/>
            <div className="subContainerTwo">
                <div className="dimention seeProfile">
                   <Link to={'/user/profile'}>
                    <div>
                        <img className="imgAvatar" src={process.env.PUBLIC_URL+"/assets/images/avatar.jpeg"} alt=""/>
                        <h3>Admin</h3>
                    </div>
                   </Link>
                </div>
                <div className="dimention uploadSites">
                    <input type="file" name="" onChange={(e)=> {
                        var file = e.target.files[0];

                        const reader = new FileReader();
                        reader.onload = (evt) => {
                            // evt = on_file_select event
                            /* Parse data */
                            const bstr = evt.target.result;
                            const wb = XLSX.read(bstr, { type: "binary" });
                            /* Get first worksheet */
                            const wsname = wb.SheetNames[0];
                            const ws = wb.Sheets[wsname];
                            /* Convert array of arrays */
                            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
                            /* Update state */
                            // console.log("Data>>>" + data);// shows that excel data is read
                            convertToJson(data); // shows data in json format
                        };
                        function convertToJson(csv) {
                            var lines = csv.split("\n");
                        
                            var result = [];
                        
                            var headers = lines[2].split(",");
                        
                            for (var i = 3; i < lines?.length; i++) {
                              var obj = {};
                              var currentline = lines[i].split(",");
                              for (var j = 0; j < headers?.length; j++) {
                                obj[headers[j]] = currentline[j];
                              }
                            //   console.log(headers);
                              if(obj["Site ID"]?.length > 2 && obj["Zone"] == "Moradabad"){
                                result.push(obj);
                              }
                            }
                            setFileObject(result);
                        }
                            reader.readAsBinaryString(file);
                    }} id=""/>
                    <img className="imgAvatar" src={process.env.PUBLIC_URL+"/assets/images/upload.png"} alt=""/>
                        <h3>Upload Sites</h3>
                </div>
                <div className="dimention listSites">
                    <Link to={'/site/list'}>
                        <div>
                            <img className="imgAvatar" src={process.env.PUBLIC_URL+"/assets/images/list.webp"} alt=""/>
                            <h3>List Sites</h3>
                        </div>
                   </Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;