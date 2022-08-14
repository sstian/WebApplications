import React from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./index.css";

export default class MyGrid extends React.Component {
  state = {
    rowData: [
      { id: 1, parameter: "dbUser", value: "eqjobs" },
      { id: 2, parameter: "dbServer", value: "eqtgdbdev01_ds_157" },
      { id: 3, parameter: "outputPath", value: "D:\\eqtg\\log" }
    ]
  };

  defaultColDef = { editable: true, resizable: true };
  // gridRef = React.createRef();

  onGridReady = event => {
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;

    this.sizeColumnsToFit();
  }

  sizeColumnsToFit = () => {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAllColumns = () => {
    this.gridColumnApi.autoSizeAllColumns();
  }

  componentDidMount() {

  }

  render() {
    const { rowData } = this.state;
    return (
      <div className="ag-theme-alpine full-screen" >
        <button>+</button>
        <button>copy</button>
        <button>-</button>
        <button onClick={() => this.sizeColumnsToFit()}>sizeColumnsToFit</button>
        <button onClick={() => this.autoSizeAllColumns()}>autoSizeAllColumns</button>
        <AgGridReact
          // ref={this.gridRef}
          defaultColDef={this.defaultColDef}
          rowData={rowData}
          onGridReady ={event => this.onGridReady(event)}
          // grid options - editing
          singleClickEdit
          stopEditingWhenCellsLoseFocus
          undoRedoCellEditing

          // grid options - rendering
          enableCellChangeFlash

          // grid options - selection
          rowSelection="multiple"

          // grid options - row drag
          rowDragManaged
          rowDragMultiRow
          animateRows
        >
          <AgGridColumn field="id" headerCheckboxSelection checkboxSelection rowDrag editable={false} />
          <AgGridColumn field="parameter" />
          <AgGridColumn field="value" />
        </AgGridReact>
      </div>
    );
  }
}
