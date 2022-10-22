import React from "react";
import { connect } from "react-redux";
import { Space, Button, Tooltip } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { newCommandLine } from "../../redux/actions/commandLine";
import { newRowData } from "../../redux/actions/rowData";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import * as TipUtil from "../../utils/TipUtil";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./index.css";

class MyGrid extends React.Component {
  // state = {
  //   rowData: [
  //     { id: 1, argument: "dbUser", value: "eqjobs" },
  //     { id: 2, argument: "dbServer", value: "eqtgdbdev01_ds_157" },
  //     { id: 3, argument: "outputPath", value: "D:\\eqtg\\log" }
  //   ]
  // };

  gridRef = React.createRef();

  defaultColDef = { editable: true, resizable: true, enableCellChangeFlash: true };

  //#region callback functions
  onGridReady = event => {
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;
  }

  onAdd = () => {
    console.log("MyGrid - onAdd()");

    const rowData = this.props.rowData;
    console.log("const rowData = this.props.rowData", rowData);

    const nextId = rowData[rowData.length - 1].id + 1;
    const newGridRowData = [{ id: nextId }];

    this.gridApi.applyTransaction({ add: newGridRowData });
    this.flashNewRow();

    const selectedRows = this.gridApi.getSelectedRows();
    if (selectedRows.length) {
      // add new row to upside the current row when selecting
      const newRowData = [...rowData];

      const startId = selectedRows[0].id;
      newRowData.splice(startId - 1, 0, ...newGridRowData);
      console.log("newRowData.splice", newRowData);

      let rowId = 1;
      newRowData.forEach(rowObj => rowObj.id = rowId++);
      console.log("rowData.forEach", rowData);

      this.props.newRowData(newRowData);
    } else {
      // add new row to the last
      const newRowData = [...rowData, ...newGridRowData];
      this.props.newRowData(newRowData);
    }
  }

  // Flash the new row that is added into grid
  // TODO: it don't flash the last row
  flashNewRow = () => {
    const lastRowIndex = this.gridApi.getLastDisplayedRow();
    console.log("lastRowIndex", lastRowIndex);
    const lastRowNode = this.gridApi.getDisplayedRowAtIndex(lastRowIndex);
    this.gridApi.flashCells({ rowNodes: [lastRowNode] });
  }

  onCopyToLast = () => {
    console.log("MyGrid - onCopyToLast()");

    const rowData = this.props.rowData;
    const selectedRows = this.gridApi.getSelectedRows();
    console.log("selectedRows", selectedRows);
    if (!TipUtil.canCopy(selectedRows)) return;

    let copiedRows = JSON.parse(JSON.stringify(selectedRows));
    let nextId = rowData[rowData.length - 1].id + 1;
    copiedRows.forEach(row => row.id = nextId++);
    const newRowData = [...rowData, ...copiedRows];
    this.props.newRowData(newRowData);
  }

  onCopyToUp = () => {
    console.log("MyGrid - onCopyToUp()");

    const rowData = this.props.rowData;
    const selectedRows = this.gridApi.getSelectedRows();
    console.log("selectedRows", selectedRows);
    if (!TipUtil.canCopy(selectedRows)) return;


    let copiedRows = JSON.parse(JSON.stringify(selectedRows));
    const startId = copiedRows[0].id;
    const newRowData = [...rowData];
    newRowData.splice(startId - 1, 0, ...copiedRows);
    console.log("newRowData.splice", newRowData);

    let rowId = 1;
    newRowData.forEach(rowObj => rowObj.id = rowId++);
    console.log("rowData.forEach", rowData);

    this.props.newRowData(newRowData);
  }

  onRemove = () => {
    const nodes = this.gridApi.getSelectedNodes();
    console.log("nodes", nodes);

    const selectedRows = this.gridApi.getSelectedRows();
    this.gridApi.applyTransaction({ remove: selectedRows });

    const ids = selectedRows.map(row => row.id);
    const rowData = this.props.rowData;
    const newRowData = rowData.filter(rowObj => !ids.includes(rowObj.id));
    this.props.newRowData(newRowData);
  }

  sizeColumnsToFit = () => {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAllColumns = () => {
    this.gridColumnApi.autoSizeAllColumns();
  }

  onSave = () => {
    console.log("MyGrid - onSave()");
    console.log(`this.gridRef\n`, this.gridRef);

    const gridRowData = this.gridRef.current.props.rowData;
    console.log(`gridRowData = this.gridRef.current.props.rowData\n`, gridRowData);

    const newCommandLine = gridRowData.map(arg => `-${arg.argument} ${arg.value}`).join(" ");
    console.log(`newCommandLine\n`, newCommandLine);

    this.props.newCommandLine(newCommandLine);
  }
  //#endregion

  componentDidMount() {
    console.log("MyGrid - componentDidMount()");
  }

  componentDidUpdate() {
    console.log("MyGrid - componentDidUpdate()");
  }

  render() {
    console.log("MyGrid - render()");
    return (
      <div className="ag-theme-alpine full-screen column2" >
        <Space size="small">
          <Tooltip title="add">
            <Button type="primary" shape="circle" size="large" icon={<PlusOutlined />}
              onClick={() => this.onAdd()} />
          </Tooltip>

          <Button shape="round" size="large" onClick={() => this.onCopyToLast()}>copyToLast</Button>
          <Button shape="round" size="large" onClick={() => this.onCopyToUp()}>copyToUp</Button>

          <Tooltip title="remove">
            <Button type="primary" shape="circle" size="large" icon={<DeleteOutlined />} danger
              onClick={() => this.onRemove()} />
          </Tooltip>

          <Button shape="round" size="large" onClick={() => this.sizeColumnsToFit()}>sizeColumnsToFit</Button>
          <Button shape="round" size="large" onClick={() => this.autoSizeAllColumns()}>autoSizeAllColumns</Button>

          <Tooltip title="remove">
            <Button type="primary" shape="round" size="large"
              onClick={() => this.onSave()} >3. Save</Button>
          </Tooltip>
        </Space>

        <AgGridReact
          ref={this.gridRef}

          defaultColDef={this.defaultColDef}
          rowData={this.props.rowData}
          onGridReady={event => this.onGridReady(event)}

          // grid options - editing
          singleClickEdit
          stopEditingWhenCellsLoseFocus
          undoRedoCellEditing

          // grid options - selection
          rowSelection="multiple"

          // grid options - row drag
          rowDragManaged
          rowDragMultiRow
          animateRows
        >
          <AgGridColumn field="id" headerCheckboxSelection checkboxSelection rowDrag editable={false} />
          <AgGridColumn field="argument" />
          <AgGridColumn field="value" />
        </AgGridReact>
      </div>
    );
  }
}

export default connect(
  state => ({
    rowData: state.rowData
  }),
  { newCommandLine, newRowData }
)(MyGrid);