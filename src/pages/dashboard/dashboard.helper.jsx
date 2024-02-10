import React, { useEffect, useState } from "react";
import { Dashboard } from "./dashboard.index";
import { CallAPI } from "../../service";
import { Header } from "../../constant/config";

function DashboardHelper() {
    const [fileObject, setFileObject] = useState();
    const callAPI = new CallAPI();

    useEffect(()=>{
        if(fileObject?.length > 0) uploadSite(fileObject);
    },[fileObject]);

    function uploadSite(data) {
        let HeaderKey = Object.keys(Header);
        let array = [];
        // console.log(Header[HeaderKey[0]]);
        data.forEach((element) => {
            array.push({
                [Header[HeaderKey[0]]] : element[HeaderKey[0]],
                [Header[HeaderKey[1]]] : element[HeaderKey[1]],
                [Header[HeaderKey[2]]] : element[HeaderKey[2]],
                [Header[HeaderKey[3]]] : element[HeaderKey[3]],
                [Header[HeaderKey[4]]] : element[HeaderKey[4]],
                [Header[HeaderKey[5]]] : element[HeaderKey[5]],
                [Header[HeaderKey[6]]] : element[HeaderKey[6]],
                [Header[HeaderKey[7]]] : element[HeaderKey[7]],
                [Header[HeaderKey[8]]] : element[HeaderKey[8]],
                [Header[HeaderKey[9]]] : element[HeaderKey[9]],
                [Header[HeaderKey[10]]] : element[HeaderKey[10]],
                [Header[HeaderKey[11]]] : parseInt(element[HeaderKey[11]]),
                [Header[HeaderKey[12]]] : element[HeaderKey[12]],
                [Header[HeaderKey[13]]] : element[HeaderKey[13]],
                [Header[HeaderKey[14]]] : element[HeaderKey[14]]
            });
        });    
        const path = "/site/upload";
        try {
            callAPI.post(path, array).then((res)=>{
                alert("Sites uploaded successfully");
            }).catch((error)=>{
                console.log("else", error);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Dashboard setFileObject={setFileObject}/>
    )
}
export default DashboardHelper;