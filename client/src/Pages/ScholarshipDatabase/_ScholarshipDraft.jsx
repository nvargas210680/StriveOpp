import React from "react";

import { useEffect, useState } from 'react';
import { db, auth, storage } from '../../config/firebase';
import { 
        getDocs, 
        collection, 
        addDoc, 
        deleteDoc, 
        doc, 
        updateDoc} 
      from 'firebase/firestore';
import { ref, uploadBytes } from "firebase/storage";

import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

import "./_ScholarshipDraft.css";
import FilterTable from "./_ScholarshipTable";
import SelectTags from "./TagInput/TagInput";

const ScholarshipDraft = () => {

    const [rows, setRows] = useState([]);
    const [scholarships, setScholarships] = useState([]);
    const [filteredScholarships, setFilteredScholarships] = useState([]);
    const [tagFilter, setTagFilter] = useState ("");
    const [demographicFilter, setDemographicFilter] = useState("all");

    // Columns 
    const columns = [
        { field: "scholarship", headerName: "Scholarship", width: 200 },
        { field: "deadline", headerName: "Deadline", width: 150 },
        { field: "value", headerName: "Value", width: 120 },
        { field: "demographic", headerName: "Demographics", width: 200 },
        { field: "requirements", headerName: "Requirements", width: 250 },
        { field: "tag", headerName: "Tag", width: 120 },
        { field: "url", headerName: "URL", width: 200 },
      ];

    // New Scholarships State
    const [newScholarship, setNewScholarship] = useState("");
    const [newDeadline, setNewDeadline] = useState(0);
    const [newRequirements, setNewRequirements] = useState("");
    const [newTags, setNewTags] = useState(null);

    // Update Scholarship State
    const [updatedScholarship, setUpdatedScholarship] = useState("");

    //Database
    const schoolCollectionRef = collection(db, "scholarships2");

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
          const tagMatch = scholarship.tag && scholarship.tag.toLowerCase().includes(tagFilterValue);
          const demographicMatch = scholarship.demographic &&scholarship.demographic
            .toLowerCase()
            .includes(demographicFilterValue);
          return tagMatch && demographicMatch;
        });
        setFilteredScholarships(filteredData);
      };

    const deleteScholarship = async(id) => {
        const scholarshipData = doc(db, "scholarships2", id);
        await deleteDoc(scholarshipData);
    }

    const updateScholarship = async(id) => {
        const scholarshipData = doc(db, "scholarships2", id);
        await updateDoc(scholarshipData, { scholarship: updatedScholarship });
    }

    const onSubmitScholarship = async () => {
        try {
            await addDoc(schoolCollectionRef, {
                scholarship: new Scholarship
            });

            getScholarshipList();

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="testscholarshiptable">

            <div className="testcontainerscholarshiptable">
                <SelectTags />
            </div>

            <Grid>
                <div className="testcontainerscholarshiptable">
                    <FilterTable />
                </div>
            </Grid>

            <div className="testcontainerscholarshiptable">
            <Grid 
                style={{height:"100%"}} 
                direction="row" 
                align="center" 
                justify="center">
                
                
            
                <TextField
                    placeholder="Add New Scholarship"
                    onChange={(e) =>
                    setNewScholarship} />
                <TextField
                    placeholder="Add New Deadline"
                    type="date"
                    onChange={(e) =>
                    setNewDeadline} />
                <TextField
                    placeholder="Add New Requirements"
                    onChange={(e) =>
                    setNewRequirements} />
                <TextField
                    placeholder="Add New Tags"
                    onChange={(e) =>
                    setNewTags} />
                <Button
                    onClick={onSubmitScholarship}>
                    Submit Scholarship
                </Button>
            
        </Grid>
        </div>
        </div>
    )
}

// export default ScholarshipDraft