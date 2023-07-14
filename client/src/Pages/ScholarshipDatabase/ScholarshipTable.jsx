import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'scholarshipName', headerName: 'Scholarship', width: 130 },

  {
    field: 'value',
    headerName: 'Value',
    type: 'number',
    width: 80,
  },

  {
    field: 'descripton',
    headerName: 'Description',
    description: 'This must be auto-filled.',
    sortable: false,
    width: 180,
    // valueGetter: (params) =>
    //   `${params.row.value || ''} ${params.row.scholarshipName || ''}`,
  },

  {
    field: 'deadline',
    headerName: 'Deadline',
    type: 'number',
    width: 100,
  },
];

const rows = [
  { id: 1, scholarshipName: 'Snow', description: 'lorem ipsum', value: 35, deadline: 12 },
  { id: 2, scholarshipName: 'Lannister', description: 'lorem ipsum', value: 42, deadline: 12 },
  { id: 3, scholarshipName: 'Lannister', description: 'lorem ipsum', value: 45, deadline: 12 },
  { id: 4, scholarshipName: 'Stark', description: 'lorem ipsum', value: 16, deadline: 12 },
  { id: 5, scholarshipName: 'Targaryen', description: 'lorem ipsum', value: null, deadline: 12 },
  { id: 6, scholarshipName: 'Melisandre', description: 'lorem ipsum', value: 150, deadline: 12 },
  { id: 7, scholarshipName: 'Clifford', description: 'lorem ipsum', value: 44, deadline: 12 },
  { id: 8, scholarshipName: 'Frances', description: 'lorem ipsum', value: 36, deadline: 12 },
  { id: 9, scholarshipName: 'Roxie', description: 'lorem ipsum', value: 65, deadline: 12 },
];

export default function DataTable() {
  return (
    <div style={{ height: 'fit-content' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}