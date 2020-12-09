const defaultSQLCmd = 'SELECT count(*) FROM subjects;';

function runSqlOnLoadedDB() {
  var cmd = document.getElementById("sqlCmdToRun").value || defaultSQLCmd;
  document.getElementById("sqlCmdReport").innerHTML = cmd;
  var contents = window.db.exec(cmd);
  document.getElementById("sqlResults").innerHTML = contents[0].values;
  // E.g. contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
}

function resetSqlCmd() {
  document.getElementById("sqlCmdToRun").value = defaultSQLCmd;
}