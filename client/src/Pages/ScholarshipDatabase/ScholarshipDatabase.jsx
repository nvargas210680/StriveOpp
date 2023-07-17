import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase"
import { collection, getDocs} from "firebase/firestore";
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import "./ScholarshipDatabase.css";
import MultiSelectDropDown from "./MultiSelectDropDown/MultiSelectDropDown";

export default function Scholarship(){

    const [rows, setRows] = useState([])
    const [scholarships, setScholarships] = useState([]);
    const [filteredScholarships, setFilteredScholarships] = useState([]);
    const [tagFilter, setTagFilter] = useState("");
    const [demographicFilter, setDemographicFilter] = useState("all");

    const columns = [
        { field: "scholarship", headerName: "Scholarship", width: 200 },
        { field: "deadline", headerName: "Deadline", width: 150 },
        { field: "value", headerName: "Value", width: 120 },
        { field: "demographic", headerName: "Demographic", width: 200 },
        { field: "requirements", headerName: "Requirements", width: 250 },
        { field: "tag", headerName: "Tag", width: 120 },
        { field: "url", headerName: "URL", width: 200 },
      ];

    useEffect(() => {
        const getScholarships = async () => {
          const schoolCollectionRef = collection(db, "scholarships2");
          const querySnapshot = await getDocs(schoolCollectionRef);
          const scholarshipData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setScholarships(scholarshipData);
          setFilteredScholarships(scholarshipData);
        };
    
        getScholarships();
      }, []);

      const handleTagFilterChange = (e) => {
        const filterValue = e.target.value.toLowerCase();
        setTagFilter(filterValue);
        applyFilters(filterValue, demographicFilter);
      };
    
      const handleDemographicFilterChange = (e) => {
        const filterValue = e.target.value.toLowerCase();
        setDemographicFilter(filterValue);
        applyFilters(tagFilter, filterValue);
      };
    
      const applyFilters = (tagFilterValue, demographicFilterValue) => {
        console.log(tagFilterValue, demographicFilterValue)
        console.log(scholarships)
        const filteredData = scholarships.filter((scholarship) => {
          const tagMatch =scholarship.tag && scholarship.tag.toLowerCase().includes(tagFilterValue);
          const demographicMatch = scholarship.demographic &&scholarship.demographic
            .toLowerCase()
            .includes(demographicFilterValue);
          return tagMatch && demographicMatch;
        });
        setFilteredScholarships(filteredData);
      };

    return(
        <div className="scholarshipdatabase">
            <h1>Scholarship Database</h1>

            <MultiSelectDropDown />

                <div className="filter">
                    <label className="tagFilter" htmlFor="tagFilter">Tag Filter:</label>
                    <select
                    id="tagFilter"
                    value={tagFilter}
                    onChange={handleTagFilterChange}>
                      <option value="">All</option>
                      <option value="high school">High School</option>
                      <option value="bachelor">Bachelor</option>
                      <option value="pos-graduate">Post-Graduated</option>
                      <option value="master">Master</option>
                      <option value="undergraduate">Undergraduate</option>
                    </select>
                </div>

                <div className="filter">
                    <label className="tagFilter" htmlFor="demographicFilter">Demographic Filter:</label>
                    <select
                        id="demographicFilter"
                        value={demographicFilter}
                        onChange={handleDemographicFilterChange}>
                        <option value="">All</option>
                        <option value="any">Any</option>
                        <option value="youth">Youth</option>
                        <option value="canadian">Canadian</option>
                        <option value="women">Women</option>
                        <option value="international">International</option>
                    </select>

                    <DataGrid sx = {{backgroundColor:'#eee', height:"fit-content", width: "fit-content", m:5}}
                            rows={filteredScholarships} columns={columns} 
                            slots={{toolbar: GridToolbar}} 
                            slotProps={{
                                toolbar: {
                                showQuickFilter: true,
                                quickFilterProps: { debounceMs: 500 },
                                }, }} />
              </div>
          </div>
    );
}
