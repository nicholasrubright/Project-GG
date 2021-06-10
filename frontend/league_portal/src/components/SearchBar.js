import React, { useState } from 'react';

import { GoGlobe } from 'react-icons/go';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar (props) {

    const [searchInfo, setSearchInfo] = useState({
        searchText: "",
        searching: false,
        searchRegion: ""
    });

    


    //const searchSummoner = props.searchSummoner();

    function changeRegion(region) {

        setSearchInfo({
            ...searchInfo,
            searchRegion : region
        });
    }

    function handleSearchInput(evt) {
        setSearchInfo({
            ...searchInfo,
            searchText : evt.target.value
        });

        //console.log("testing2: " + JSON.stringify(searchInfo));
    }

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={e => handleSearchInput(e)} placeholder="Summoner Name" />
            <button type="button" className="btn btn-primary dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <b>{searchInfo.searchRegion.length > 0 ? searchInfo.searchRegion : <GoGlobe />}</b>
            </button>
            <div className="dropdown-menu">
                <button className="dropdown-item" type="button" onClick={() => changeRegion("NA")}>NA</button>
                <button className="dropdown-item" type="button" onClick={() => changeRegion("EU")}>EU</button>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => props.searchSummoner(searchInfo.searchText, searchInfo.searchRegion)}><AiOutlineSearch /></button>
        </div>
    );

};