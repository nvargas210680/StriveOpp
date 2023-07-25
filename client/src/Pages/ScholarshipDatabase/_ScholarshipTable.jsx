import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['scholarship', 'value', 'deadline', 'requirements', 'tags'];

export default function FilterTable() {
  const [scholarships, setScholarships] = useState([]);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [tagFilter, setTagFilter] = useState("");
  const [demographicFilter, setDemographicFilter] = useState("all");
  const [rows, setRows] = useState([])
  const columns = [
    { field: "scholarship", headerName: "Scholarship", width: 200 },
    { field: "deadline", headerName: "Deadline", width: 150 },
    { field: "value", headerName: "Value", width: 120 },
    { field: "demographic", headerName: "Demographic", width: 200 },
    { field: "requirements", headerName: "Requirements", width: 250 },
    { field: "tag", headerName: "Tag", width: 120 },
    { field: "url", headerName: "URL", width: 200 },
  ];

    const { data } = useDemoData({
      dataSet: 'Scholarships',
      visibleFields: VISIBLE_FIELDS,
      rowLength: 100,
    });
  
    return (
      <div 
        justify="center"
        style={{ height: 800, width:"100%"}}>

        <DataGrid
          rows={filteredScholarships} columns={columns} 
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            ...data.initialState,
            filter: {
              ...data.initialState?.filter,
              filterModel: {
                items: [
                  {
                    field: 'rating',
                    operator: '>',
                    value: '2.5',
                  },
                ],
              },
            },
          }}
        />


      </div>
    );
  }