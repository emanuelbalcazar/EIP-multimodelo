-- traigo los usuarios
SELECT FROM OUser

-- selecciono un atributo
SELECT Version FROM DBInfo

-- selecciono un registro por su ID
SELECT FROM #5:0

-- selecciono por un conjunto de ids
SELECT FROM [#10:1, #10:30, #10:5]

-- clausula Where
SELECT FROM OUser WHERE name = 'admin'

SELECT FROM OUser WHERE name <> 'admin'

-- ordenamiento descendente
SELECT FROM Countries ORDER BY Id DESC

-- limites
SELECT FROM Countries  LIMIT 20
SELECT FROM Countries SKIP 20 LIMIT 20
SELECT FROM Countries  SKIP 40 LIMIT 20

-- selecciono y cuento los tipos de atracciones
SELECT Type, COUNT(Type) FROM Attractions GROUP BY Type

-- año de nacimiento de los perfiles, y cuantos nacieron el mismo año
SELECT  COUNT (*) as NumberOfProfiles, 
Birthday.format('yyyy') AS YearOfBirth
FROM Profiles
GROUP BY YearOfBirth 
ORDER BY NumberOfProfiles DESC


-- el clasico insert de sql
INSERT INTO Locations(Name, Type) VALUES ('Madryn', 'hostel')

-- insert utilizando SET para definir los atributos y valores
INSERT INTO Locations SET Name='Madryn', Type='hostel'

-- insert con JSON, util para el mapeo de clases
INSERT INTO Locations CONTENT {Name: 'Madryn', Type: 'hostel'}

-- update con SET
UPDATE Locations SET Type='albergue' WHERE Name='Madryn'

-- update con MERGE
UPDATE Locations MERGE {Type: 'albergue'} WHERE Name='Madryn'

-- delete, baia baia hay un vertex por aca...
DELETE VERTEX FROM Locations WHERE Name='Madryn' UNSAFE


-- que hacen?
SELECT FROM Profiles WHERE Email LIKE '%.com'

SELECT FROM Profiles WHERE Email.right(3) = 'org'

SELECT FROM Profiles WHERE ANY() LIKE '%vogolo%'


-- convierto a mayusculas los nombres obtenidos
SELECT Name.toUppercase() FROM Profiles

-- creamos la funcion sumar con dos parametros
CREATE FUNCTION concatenar "return a.concat(b)" PARAMETERS [a,b] LANGUAGE JAVASCRIPT

SELECT concatenar('hola ', 3) as resultado

-- creamos la funcion que devuelve todos los hosteles
CREATE FUNCTION hosteles "SELECT Name, Type FROM Services WHERE Type = 'hostel'" LANGUAGE SQL

SELECT hosteles() as hosteles

