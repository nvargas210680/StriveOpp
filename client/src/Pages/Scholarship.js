import {useState, useEffect} from "react";
import React from "react";
import { DataGrid, GridToolbar} from '@mui/x-data-grid';

export default function Scholarship(){

    const [rows, setRows] = useState([])

    const columns = [
        {field:'scholarship', headerName: 'Scholarship'},
        {field:'demographic', headerName:'Demographic'},
        {field:'value', headerName: 'Value'},
        {field: 'requirements', headerName:'Requirements'},
        {field:'tags', headerName:'Tags'}
        ];

    const [fetchedData, setFetchedData] = React.useState(null);

useEffect(() => {
    populateRows()
}, [])
        function populateRows(){
            fetch('http://localhost:5005/api/scholarships')
            .then(response => response.json()) 
      .then(data => { console.log(data
        );
        setRows(data)
        setFetchedData({
        dataSet: data, 
        rowLength: 100,
        })});
        }

    return(
        <>
        <div>
            <DataGrid 
            sx = {{backgroundColor:'#ffffff', height:600, width: "100%"}}
            rows={rows}
            getRowId={(row) => row._id}
            slots={{toolbar: GridToolbar}} 
            slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
            
            columns={[
                    {field:'scholarship', width:250, headerName: 'Scholarship'},
                    {field:'demographic', width:200, headerName: 'Demographic'},
                    {field:'value', width:200, headerName: 'Value'},
                    {field:'requirements', width:300, headerName: 'Requirements'},
                    {field:'tags', width:200, headerName: 'Tags'}
                    ]} />   
        </div>
        </>
    );
}