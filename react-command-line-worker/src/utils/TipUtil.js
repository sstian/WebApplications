export function canCopy(selectedRows) {
  if (!selectedRows.length)
  {
    window.alert("Please select the rows firstly");
    return false;
  }
  return true;
}