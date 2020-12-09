## Installation

Use docker and docker-compose, no other way is supported

## Getting Started

## Use the SQLite db via a webpage

Load the [index.html](./index.html) file in a web browser 🎉

The JS code relies heavily on the https://github.com/sql-js/sql.js library.

## Building the SQLite db

### Start a sqlite session

``` bash
docker-compose run --rm sqlite
```

### Or start a bash terminal session if you like

``` bash
docker-compose run --rm sqlite /bin/bash
# do what you want on the file system
# ....
# and then start sqlite repl to interact with the database.db file
sqlite3 database.db
```

#### Import CSV file data

Using instructions to import csv files from https://www.sqlitetutorial.net/sqlite-import-csv/

``` bash
# switch to csv mode
.mode csv
#
# import the subjects csv file and create the schema :boom:
.import ./darien-map-database-20190131/subjects.csv subjects
# display the resulting table schema :tada:
.schema subjects
#
# repeat for the cameras
.import ./darien-map-database-20190131/cameras.csv cameras
.schema cameras
#
# repeat for the aggregations
.import ./darien-map-database-20190131/aggregations.csv aggregations
.schema aggregations
#
# repeat for the vegetation_map
.import ./darien-map-database-20190131/vegetation_map.csv vegetation_map
.schema vegetation_map
#
# repeat for the darien_national_park
.import ./darien-map-database-20190131/darien_national_park.csv darien_national_park
.schema darien_national_park
#
# repeat for the soberania_national_park
.import ./darien-map-database-20190131/soberania_national_park.csv soberania_national_park
.schema soberania_national_park
```
