import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Chamado } from "pages/Chamados/Chamado";

type Props = {
  columns: GridColDef[];
  rows: Array<Chamado>;
  parent?: string;
  pageSize?: number;
  rowsPerPageOptions?: Array<number>;
  checkboxSelection?: boolean;
  disableSelectionOnClick?: boolean;
};

const DataList = ({
  columns = [],
  rows = [],
  parent = "",
  pageSize = 5,
  rowsPerPageOptions = [5, 10, 20, 50, 100],
  checkboxSelection = false,
  disableSelectionOnClick = false,
}: Props) => {
  const [tableHeight, setTableHeight] = useState(400);
  useEffect(() => {
    const handleResize = () => {
      const elementParent = document.getElementById(parent);

      if (elementParent) {
        setTableHeight(elementParent.offsetHeight - 10);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div style={{ height: tableHeight, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        checkboxSelection={checkboxSelection}
        disableSelectionOnClick={disableSelectionOnClick}
      />
    </div>
  );
};

export default DataList;
