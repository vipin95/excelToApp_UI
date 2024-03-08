/* eslint-disable */
import React, { useEffect, useState } from "react";
import { SiteListPage } from "./index";
import { CallAPI } from "../../service";
import { addSites } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../constant/config";

function SiteListHelper() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const [fillterOn, setFillterOn] = useState("siteId");
    const sites = useSelector((state) => state?.Sites?.data);
    const callAPI = new CallAPI();
    const path = "/site/list";
    function getList(Path) {
        console.log(sites);
        callAPI.post(Path, {[fillterOn]:search}).then((res)=>{
            dispatch(addSites(res.data));
        }).catch((error)=>{
            console.log("else", error);
        })
    }
    useEffect(()=>{
        getList(path);
    },[search])
    useEffect(()=>{
        getList(path);
    },[]);
    return(
        <>
            <SiteListPage setFillterOn={setFillterOn} sites={sites} setSearch={setSearch} Header={Header}/>
        </>
    )
}

export default SiteListHelper;