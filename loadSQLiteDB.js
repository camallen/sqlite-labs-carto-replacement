var initSqlJs = window.initSqlJs;
window.db = null;
const config = {
  // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
  // You can omit locateFile completely when running in node
  locateFile: file => 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.4.0/dist/sql-wasm.wasm'
};
initSqlJs(config).then(function (SQL) {
  // alert('loaded the wasm code');

  // Load my sql lite db from a remote URL using XHR
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://raw.githubusercontent.com/camallen/sqlite-labs-carto-replacement/main/data/darien-map-database.db', true);
  xhr.responseType = 'arraybuffer';

  xhr.onload = e => {
    var uInt8Array = new Uint8Array(xhr.response);
    window.db = new SQL.Database(uInt8Array);
  };
  xhr.send();
});

