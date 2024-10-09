-- DROP DATABASE IF EXISTS hermes;
-- CREATE DATABASE hermes;

DROP TABLE IF EXISTS permissions CASCADE;
CREATE TABLE permissions(
    idPermission SERIAL NOT NULL,
    name VARCHAR(60) NOT NULL,
    state BOOLEAN NOT NULL,

    CONSTRAINT pk_idPermission PRIMARY KEY (idPermission),
    CONSTRAINT uc_namePermissions UNIQUE (name),
    CONSTRAINT chk_namePermissions CHECK (name ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$')
);
SELECT * FROM permissions;

DROP TABLE IF EXISTS privileges CASCADE;
CREATE TABLE privileges(
    idPrivilege SERIAL NOT NULL,
    name VARCHAR(60) NOT NULL,
    idPermission INTEGER NOT NULL,

    CONSTRAINT pk_idPrivilege PRIMARY KEY (idPrivilege),
    CONSTRAINT fk_idPermission FOREIGN KEY (idPermission) REFERENCES permissions(idPermission),
    CONSTRAINT uc_namePrivilege UNIQUE (name),
    CONSTRAINT chk_namePrivileges CHECK (name ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$')
);
SELECT * FROM privileges; 

  

DROP TABLE IF EXISTS roles CASCADE;
CREATE TABLE roles(
    idRole SERIAL NOT NULL,
    name VARCHAR(60) NOT NULL,
    state BOOLEAN NOT NULL,

    CONSTRAINT pk_idRole PRIMARY KEY (idRole),
    CONSTRAINT uc_nameRole UNIQUE (name),
    CONSTRAINT chk_nameRole CHECK (name ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$')
);
SELECT * FROM roles;

DROP TABLE IF EXISTS rolePrivilege CASCADE;
CREATE TABLE rolePrivileges(
    idRolePrivilege SERIAL NOT NULL,
    idRole INTEGER NOT NULL,
    idPrivilege INTEGER NOT NULL,
    
    CONSTRAINT pk_idRolePrivilege PRIMARY KEY (idRolePrivilege),
    CONSTRAINT fk_idRole FOREIGN KEY (idRole) REFERENCES roles(idRole),
    CONSTRAINT fk_idPrivilege FOREIGN KEY (idPrivilege) REFERENCES privileges(idPrivilege)
);
SELECT * FROM rolePrivilege;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users( 
    idUser SERIAL NOT NULL,
    idRole INTEGER NOT NULL,
    documentType VARCHAR(5) NOT NULL,
    identification VARCHAR(60) NOT NULL,
    name VARCHAR(60) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    state BOOLEAN,

    CONSTRAINT pk_idUser PRIMARY KEY (idUser),
    CONSTRAINT fk_idRoleUser FOREIGN KEY (idRole) REFERENCES roles(idRole),
    CONSTRAINT chk_documentTypeUser CHECK (documentType ~ '^(CC|CE|PA|SC|CD|TE|PEP|AS|DU|CCEX|CEEX|PAEX|SCEX|CDEX|TEX|RNEX|PEPEX|ASEX)$'),
    CONSTRAINT chk_identificationUser CHECK (identification ~ '^[a-z0-9]{6,}$'),
    CONSTRAINT chk_nameCustomer CHECK (name ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$'),
    CONSTRAINT chk_lastNameCustomer CHECK (lastName ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$'),
    CONSTRAINT chk_emailUser CHECK (email ~ '^[a-z0-9.!#$%&*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9.]{2,}$')

);
SELECT * FROM users;

DROP TABLE IF EXISTS categoryServices CASCADE;
CREATE TABLE categoryServices(
    idCategoryService SERIAL NOT NULL,
    name VARCHAR(60) NOT NULL,

    CONSTRAINT PK_categoryService PRIMARY KEY (idCategoryService),
    CONSTRAINT chk_nameCategoryServices CHECK (name ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$'),
    CONSTRAINT UC_nameCategoryService UNIQUE (name)
);
SELECT * FROM categoryServices;

DROP TABLE IF EXISTS services CASCADE;
CREATE TABLE services(
    idService SERIAL NOT NULL,
    idCategoryService INTEGER NOT NULL,
    name VARCHAR(60) NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    status BOOLEAN NOT NULL,

    CONSTRAINT PK_Service PRIMARY KEY (idService),
    CONSTRAINT UC_nameService UNIQUE (name),
    CONSTRAINT FK_categoryService FOREIGN KEY (idCategoryService) REFERENCES categoryServices(idCategoryService),
    CONSTRAINT chk_nameServices CHECK (name ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$'),
    CONSTRAINT chk_priceService CHECK (CAST(price AS TEXT) ~ '^[1-9][0-9]*(\.[0-9]{1,2})?$')
);
SELECT * FROM services;

DROP TABLE IF EXISTS packages CASCADE;
CREATE TABLE  packages (
    idPackage SERIAL NOT NULL,
    name  VARCHAR (60) NOT NULL,
    destination VARCHAR (60) NOT NULL,
    type VARCHAR (60) NOT NULL,
    level CHAR NOT NULL,
    price DECIMAL (15,2) NOT NULL,
    status  BOOLEAN NOT NULL,
    
    CONSTRAINT pk_packages PRIMARY KEY (idPackage),
    CONSTRAINT chk_namePackage  CHECK (name ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$'),
    CONSTRAINT chk_destinationPackage  CHECK (name ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$'),
    CONSTRAINT chk_type  CHECK (type ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$'),
    CONSTRAINT chk_level  CHECK (level ~ '^(B|M|A|N)$'),
    CONSTRAINT chk_pricePackage CHECK  (CAST(price AS TEXT) ~ '^[1-9][0-9]*(\.[0-9]{1,2})?$')
);
SELECT * FROM packages;

DROP TABLE IF EXISTS programationPackages CASCADE;
CREATE TABLE  programationPackages (
    idProgramation  SERIAL NOT NULL,
    registrationStartDate DATE NOT NULL,
    registrationDeadline  DATE NOT NULL,
    executionDate  DATE NOT NULL,
    endDateOfExecution DATE NOT NULL,

    CONSTRAINT pk_idProgramation PRIMARY KEY (idProgramation),
    CONSTRAINT chk_dateStart CHECK (registrationStartDate >= current_date),
    CONSTRAINT chk_dateEnd CHECK (registrationDeadline >= current_date + interval '7 days'),
    CONSTRAINT chk_dateExecution CHECK (executionDate >= registrationDeadline + interval '5 days'),
    CONSTRAINT chk_dateEnding CHECK (endDateOfExecution >= executionDate)

);
SELECT * FROM programationPackages; 

DROP TABLE IF EXISTS detailProgrammingPackages CASCADE;
CREATE TABLE detailProgrammingPackages (
    idDetailProgrammingPackage SERIAL NOT NULL,
    idPackage  INTEGER NOT NULL,
    idProgramation  INTEGER NOT NULL,
    pricePackage  DECIMAL (15,2),
    status  BOOLEAN,

    CONSTRAINT pk_detailProgrammingPackages PRIMARY KEY (idDetailProgrammingPackage),
    CONSTRAINT fk_packages FOREIGN KEY (idPackage) REFERENCES packages(idPackage),
    CONSTRAINT fk_programationPackages FOREIGN KEY (idProgramation) REFERENCES programationPackages(idProgramation),
    CONSTRAINT chk_pricePackage CHECK (CAST(pricePackage AS TEXT) ~ '^[1-9][0-9]*(\.[0-9]{1,2})?$')
);
SELECT * FROM detailProgrammingPackages;

DROP TABLE IF EXISTS detailPackageService CASCADE;
CREATE TABLE detailPackageService(
    idDetailPackageService SERIAL NOT NULL,
    idPackage INTEGER NOT NULL,
    idService INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    price DECIMAL(15,2),

    CONSTRAINT pk_idDetailPackageService PRIMARY KEY (idDetailPackageService),
    CONSTRAINT fk_idPackage FOREIGN KEY (idPackage) REFERENCES packages(idPackage),
    CONSTRAINT fk_idService FOREIGN KEY (idService) REFERENCES services(idService),
    CONSTRAINT chk_quantityDetailPackageService CHECK (CAST(quantity AS TEXT) ~ '^[0-9]{2,}$'),
    CONSTRAINT chk_priceDetailPackageService CHECK (CAST(price AS TEXT) ~ '^[1-9][0-9]*(\.[0-9]{1,2})?$')
);
SELECT * FROM detailPackageService;

DROP TABLE  IF EXISTS  detailProgrammingPackages_service CASCADE;
CREATE  TABLE  detailProgrammingPackages_service (
    idDetailProgrammingPackageService SERIAL NOT NULL,
    idDetailProgrammingPackage INTEGER NOT NULL,
    idDetailPackageService INTEGER NOT NULL,
    quantity  INTEGER NOT NULL,
    priceService DECIMAL (15,2),
    
    CONSTRAINT  pk_idDetailProgrammingPackageService  PRIMARY KEY (idDetailProgrammingPackageService),
    CONSTRAINT  fk_idDetailProgrammingPackage FOREIGN KEY (idDetailProgrammingPackage) REFERENCES  detailProgrammingPackages(idDetailProgrammingPackage),
    CONSTRAINT fk_idDetailPackageService FOREIGN KEY (idDetailPackageService) REFERENCES detailPackageService(idDetailPackageService),
    CONSTRAINT chk_quantityPackageService CHECK (CAST(quantity AS TEXT) ~ '^[0-9]{2,}$'),
    CONSTRAINT chk_pricePackageService CHECK (CAST(priceService AS TEXT) ~ '^[1-9][0-9]*(\.[0-9]{1,2})?$')
);
SELECT * FROM detailProgrammingPackages_service;

DROP TABLE IF EXISTS customers CASCADE;
CREATE TABLE customers(
    idCustomer SERIAL NOT NULL,
    idUser INTEGER NOT NULL,
    phone VARCHAR(15) NOT NULL,
    address VARCHAR(40) NOT NULL,
    country INTEGER NOT NULL,
    departament INTEGER NOT NULL,
    municipality INTEGER NOT NULL,
    sex CHAR NOT NULL,
    bloodType VARCHAR(3) NOT NULL,
    eps VARCHAR(60) NOT NULL,
    state BOOLEAN NOT NULL,
    
    CONSTRAINT pk_idCustomer PRIMARY KEY (idCustomer),
    CONSTRAINT fk_idUser FOREIGN KEY (idUser) REFERENCES users(idUser),
    CONSTRAINT chk_phoneCustomer CHECK (phone ~ '^\+?[0-9]{1,3}[0-9]{7,}$'),
    CONSTRAINT chk_departamentCustomer CHECK (CAST(departament AS TEXT) ~ '^[0-9]$'),
    CONSTRAINT chk_municipalityCustomer CHECK (CAST(municipality AS TEXT) ~ '^[0-9]$'),
    CONSTRAINT chk_countryCustomer CHECK (CAST(country AS TEXT) ~ '^[0-9]$'),
    CONSTRAINT chk_sexCustomer CHECK (sex ~ '^(H|M)$'),
    CONSTRAINT chk_bloodTypeCustomer CHECK (bloodType ~ '^(A|B|AB|O)+[+|-]$'),
    CONSTRAINT chk_epsCustomer CHECK (eps ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$'),
);
SELECT * FROM customers;

DROP TABLE IF EXISTS reservations CASCADE;
CREATE TABLE reservations(
    idReservation SERIAL NOT NULL,
    idDetailProgrammingPackage INTEGER NOT NULL,
    idCustomer INTEGER NOT NULL,
    dateReservation DATE DEFAULT CURRENT_DATE,
    priceReservation DECIMAL(15,2) NOT NULL,
    numberCompanions INTEGER NOT NULL,
    travelCustomer BOOLEAN NOT NULL,
    status CHAR NOT NULL,
    
    CONSTRAINT pk_idReservation PRIMARY KEY (idReservation),
    CONSTRAINT fk_idDetailProgrammingPackage FOREIGN KEY (idDetailProgrammingPackage) REFERENCES detailProgrammingPackages(idDetailProgrammingPackage),
    CONSTRAINT fk_idCustomer FOREIGN KEY (idCustomer) REFERENCES customers(idCustomer),
    CONSTRAINT chk_priceReservation CHECK (CAST(priceReservation AS TEXT) ~ '^[1-9][0-9]*(\.[0-9]{1,2})?$'),
	--ESTADO DE RESERVA: Pendiente(no pago), Confirmada(pago 50%), Pagada(pago completo), Modificada, Cancelada(retiro cliente), Anulada (dates), En curso y Finalizada
    CONSTRAINT chk_statusReservation CHECK (status ~ '^(N|C|P|M|R|A|E|F)$')
);
SELECT * FROM reservations;

  

DROP TABLE IF EXISTS reserveCompanions CASCADE;
CREATE TABLE reserveCompanions(
    idReserveCompanion SERIAL NOT NULL,
    idReservation SERIAL NOT NULL,
    documentType VARCHAR(5) NOT NULL,
    identification VARCHAR(60) NOT NULL,
    name VARCHAR(60),
    lastName VARCHAR(50),
    phone VARCHAR(15),
    sex CHAR,
    bloodType VARCHAR(3),
    eps VARCHAR(60),
    
    CONSTRAINT pk_idReserveCompanion PRIMARY KEY (idReserveCompanion),
    CONSTRAINT fk_idReservation FOREIGN KEY (idReservation) REFERENCES reservations(idReservation),
    CONSTRAINT chk_documentTypeCompanion CHECK (documentType ~ '^(CC|CE|PA|SC|CD|TE|PEP|AS|DU|CCEX|CEEX|PAEX|SCEX|CDEX|TEX|RNEX|PEPEX|ASEX)$'),
    CONSTRAINT chk_identificationCompanion CHECK (identification ~ '^[a-z0-9]{6,}$'),
    CONSTRAINT chk_nameCompanion CHECK (name ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$'),
    CONSTRAINT chk_lastNameCompanion CHECK (lastName ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$'),
    CONSTRAINT chk_phoneCompanion CHECK (phone ~ '^\+?[0-9]{1,3}[0-9]{7,}$'),
    CONSTRAINT chk_sexCompanion CHECK (sex ~ '^[hm]$'),
    CONSTRAINT chk_bloodTypeCompanion CHECK (bloodType ~ '^(A|B|AB|O)+[+|-]$'),
    CONSTRAINT chk_epsCompanion CHECK (eps ~ '^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$'),
);
SELECT * FROM reserveCompanions;

DROP TABLE IF EXISTS payments CASCADE;
CREATE TABLE payments ( 
    idPayment SERIAL NOT NULL,
    idReservation INTEGER NOT NULL,
    datePayment DATE DEFAULT CURRENT_DATE,
    price DECIMAL(15,2) NOT NULL,
    voucher VARCHAR(255) NOT NULL,
    status CHAR NOT NULL,

    CONSTRAINT pk_pay PRIMARY KEY (idPayment), 
    CONSTRAINT fk_reservation FOREIGN KEY (idReservation) REFERENCES reservations(idReservation), 
    CONSTRAINT chk_pricePay CHECK (CAST(price AS TEXT) ~ '^[1-9][0-9]*(\.[0-9]{1,2})?$'),
	-- ESTADOS DE PAGO: REVISAR, PAGO, NO PAGO, ANULADO
	CONSTRAINT chk_statusReservation CHECK (status ~ '^(R|P|N|A|)$')
);
SELECT * FROM payments;

-- DICTIONARY OF DATA
SELECT
    t1.TABLE_NAME AS tabla_nombre,
    t1.COLUMN_NAME AS columna_nombre,
    t1.COLUMN_DEFAULT AS columna_defecto,
    t1.IS_NULLABLE AS columna_nulo,
    t1.DATA_TYPE AS columna_tipo_dato,
    COALESCE(t1.NUMERIC_PRECISION,
    t1.CHARACTER_MAXIMUM_LENGTH) AS columna_longitud,
    PG_CATALOG.COL_DESCRIPTION(t2.OID,
    t1.DTD_IDENTIFIER::int) AS columna_descripcion,
    t1.DOMAIN_NAME AS columna_dominio
FROM 
    INFORMATION_SCHEMA.COLUMNS t1
    INNER JOIN PG_CLASS t2 ON (t2.RELNAME = t1.TABLE_NAME)
WHERE 
    t1.TABLE_SCHEMA = 'public'
ORDER BY
    t1.TABLE_NAME;