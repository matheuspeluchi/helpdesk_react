import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

import axios from "plugins/axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "dataAbertura", headerName: "Data Abertura", width: 150 },
  { field: "dataFechamento", headerName: "Data Fechamento", width: 150 },
  { field: "prioridade", headerName: "Prioridade", type: "string", width: 110 },
  { field: "titulo", headerName: "status", type: "string", sortable: false },
  { field: "observacoes", headerName: "status", type: "string", sortable: false },
  { field: "tecnico", headerName: "status", type: "string", sortable: false },
  { field: "cliente", headerName: "status", type: "string", sortable: false },
  { field: "nomeCliente", headerName: "status", type: "string", sortable: false },
  { field: "nomeTecnico", headerName: "status", type: "string", sortable: false },
];

export default function ChamadosList() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get("/chamados").then((res) => setRows(res.data));
  }, []);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
