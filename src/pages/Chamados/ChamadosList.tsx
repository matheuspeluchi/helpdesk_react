import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

import axios from "plugins/axios";
import DataList from "components/dataGrid/DataList";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "dataAbertura", headerName: "Data Abertura", width: 150 },
  { field: "dataFechamento", headerName: "Data Fechamento", width: 150 },
  { field: "prioridade", headerName: "Prioridade", type: "string", width: 110 },
  { field: "titulo", headerName: "Título", type: "string", sortable: false },
  { field: "observacoes", headerName: "Observações", type: "string", width: 250 },
  { field: "nomeCliente", headerName: "Cliente", type: "string", sortable: false, width: 250 },
  { field: "nomeTecnico", headerName: "Técnico", type: "string", sortable: false, width: 250 },
];

export default function ChamadosList() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get("/chamados").then((res) => setRows(res.data));
  }, []);
  return (
    <DataList
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      parent="layout-content"
    />
  );
}
