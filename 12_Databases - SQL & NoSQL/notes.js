
// 1) Database and Database Management System :-

// Q) What is a database?
// --> It is a structured / organized collection of data
// --> structured / organized is very important



// Q) What is a database management system?
// --> The place where we store data in a structured way is called database
// --> The layer on top of it through which we can interact with the database and the end users including applications is called database management system
// --> Database management system is a software



//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************ */



// 2) Types of Database :-

// 1) Relational DB :- MySQL, (PostgreSQL known as Psotgres)
// 2) NoSQL DB :- MongoDB
// 3) In memory DB :- Redis  (like a cache)
// 4) Distributed SQL DB :- Cockroach DB
// 5) Time series DB :- Influx DB
// 6) OO DB :- db4o
// 7) Graph DB (also a type of NoSQL) :- Neo4j
// 8) Hierarchial DB :- IBM IMS
// 9) Network DB :- IDMS
// 10) Cloud DB :- Amazon RDS


// No need to learn all
// --> 3 to 4 types are enough with examples
// --> Big companies use different types of data bases for different projects




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************ */



// 3) RDBMS (MySQL, PostgreSQL)

// --> In 1970's and 1980's RDBMS (Relational Database Management System) started getting popular
// --> E.F. Codd named scientist gave Codd's 12 Rules
// --> Actually there were 13 rules in count numbered from 0 to 12
// --> If database follows these rules hypothetically then our Database becomes Relational DB
// --> RDB --> we have different tables and there are relations between them
// --> All RDBMS uses SQL

// --> The two most famous RDBMS are :-
// i) MySQL
// ii) PostgreSQL




// MySQL :-
// --> MySQL was created by Michael Widenius
// --> He had 3 daughters (My, Max, Maria)

// --> MySQL was named before the eldest daughter "My"
// --> Later on, he also created MaxDB, one more RDBMS in the name of his second daughter "Max"
// --> He also created MariaDB, after the name of his last daughter "Maria". MariaDB was a fork / clone of MySQL

// --> MySQL was later acquired by Sun MicroSystems
// --> A year later Sun MicroSystems was acquired by Oracle which now manages MySQL, hence during this aquisition, MariaDB was created as a clone of MySQL by Michael Widenius and other team.





// PostgreSQL :-
// --> It was created by Michael Stonebreaker
// --> He was working on a project called "Ingres" in University of California
// --> He started a new project after sometime to work on another project called PostIngres
// --> This project was about SQL
// --> Hence the project was later named as PostgreSQL




// SQL :-
// --> SQL = Structured Query Language
// --> The language used by DBMS to interact with the DB
// --> Hence, Relational Databases are also called SQL Databases




//****************************************************************************************************************************************************************************************************************************************************** */


// 4) NoSQL (MongoDB)

// --> It is a not only SQL Database (not only SQL but much more)
// --> It started in late 2000's


// #) Types of NoSQL DB :-
// i) Document DB
// ii) Key-Value DB
// iii) Graph DB
// iv) Wide Column
// v) Multi model (comprises of multiple types)



// #) MongoDB :-
// --> It is a document DB
// --> It was created in 2009 by 10gen company, same time when Node JS was released
// --> MongoDB goes well with JSON and JS objects
// --> It was named after the word "Humongous" which means gigantic or huge
// --> The company changed its name as MongoDB INC.
// --> MongoDB is very flexible and beginner firendly. It is very compatible with JS stack
// --> It stores data in documents which map to json very well
// --> It was majorly built using c++, JS, python




//****************************************************************************************************************************************************************************************************************************************************** */


// 5) RDBMS (MySQL) vs NoSQL (MongoDB)

// Please refer to the image (RDBMS vs NoSQL_1.jpg)
// Please refer to the image (RDBMS vs NoSQL_2.jpg)


//--> In RDBMS, data is stored in the form of tables
//--> Tables store data related to a particular type (e.g user table, student table)
//--> Every table has rows and columns
//--> The top most row which tells about the definition of every column is called SCHEMA .


// --> In RDBMS, relation between tables is maintained using foreign keys, normalization and joins.
// i) foreign keys :- to establish referential integrity (to relate the tables)
// ii) Normalization :- to avoid redundancy
// iii) Joins :- to retrieve required data from a combination of tables




// --> In MongoDB :-
// --> In RDBMS,we do not store data in a particular cell in the form of arrays, even if there can be multiple data for that particular cell
// --> In MongoDB, we have a collection instead of a table and we store the data in the form of documents (looks like a json format object)
// --> Hence, for every row in RDBMS, we have a separate document inside a collection
// --> For, every column in RDBMS for that particular row, we have fields in MongoDB
// In MongoDB, we can store arrays in a particular field of the same document, unlike in RDBMS where we use to create a separate table
// --> Hence we dont need to normalize at a very deep level





// ADVANTAGE :-
// --> No need for joins
// --> No need for data normalization
// --> Flexible Schema :-
// In RDBMS, due to fixed schema, if we skip data for a cell in a particular column, we will still have some space oocupied, and we have to provide the value "null". Even data type is also fixed.
// In MongoDB, due to schema flexibility, space is occupied only for the fields we specify the data for.








//# Differences :-

// i) RDBMS :- Tables, Rows, Columns
//    NoSQL :- Collection, document, fields


// ii) RDBMS :- Structured Data
//     NoSQL :- Unstructured Data


// iii) RDBMS :- Fixed Schema
//      NoSQL :- Flexible Schema


// iv) RDBMS :- Uses SQL (Structured Query Language) for all RDBMS
//     NoSQL :- Uses different languages for different databases (MongoDB --> MQL, Neo4J --> Cypher)


// v) RDBMS :- Tough Horizontal Scaling
//    NoSQL :- Easy to scale horizontally + vertically


// vi) RDBMS :- Relation b/w tables are made through foreign keys + Joins
//     NoSQL :- Relations are made using Nesting


// vii) RDBMS :- Read-heavy apps, transaction workloads (e.g :- banking apps)
//      NoSQL :- Real Time, Big data, distributed computing (e.g :- Real time analytis. social media)



// NOTE :- Choosing which type of database to use between SQL vs NoSQL, majorly depends on the requirements of our app



