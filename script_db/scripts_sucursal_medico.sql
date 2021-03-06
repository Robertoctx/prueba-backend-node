CREATE TABLE SUCURSAL (
    CODIGO_EMPRESA NUMBER,
    CODIGO_SUCURSAL NUMBER,
    NOMBRE_SUCURSAL VARCHAR2(50) NOT NULL,
    REGION VARCHAR2(3) CONSTRAINT CHECK_REGION CHECK (REGION IN ('COS', 'SIE','ORI','INS')) NOT NULL,
    USUARIO_REGISTRO VARCHAR2(25) NOT NULL,
    FECHA_REGISTRO DATE NOT NULL,
    CONSTRAINT PK_SUCURSAL PRIMARY KEY (CODIGO_EMPRESA, CODIGO_SUCURSAL)
);

CREATE SEQUENCE SEQ_MEDICO
    INCREMENT BY 1
    START WITH 1
    MINVALUE 1
    MAXVALUE 1000;
    
CREATE TABLE MEDICO (
    CODIGO_MEDICO NUMBER DEFAULT SEQ_MEDICO.NEXTVAL,
    TIPO_IDENTIFICACION VARCHAR2(1) CONSTRAINT CHECK_TIPO_IDENTIFICACION CHECK (TIPO_IDENTIFICACION IN ('C','R','P')) NOT NULL,
    NUMERO_IDENTIFICACION VARCHAR2(20) NOT NULL,
    PRIMER_NOMBRE VARCHAR2(25) NOT NULL,
    SEGUNDO_NOMBRE VARCHAR2(25),
    PRIMER_APELLIDO VARCHAR2(25) NOT NULL,
    SEGUNDO_APELLIDO VARCHAR2(25) NOT NULL,
    NOMBRE_COMPLETO VARCHAR2(100) NOT NULL,
    MAIL VARCHAR2(50) NOT NULL,
    FECHA_NACIMIENTO DATE,
    SUELDO NUMBER NOT NULL,
    SEXO VARCHAR2(1) CONSTRAINT CHECK_SEXO CHECK (SEXO IN ('F','M')) NOT NULL,
    CODIGO_SUCURSAL NUMBER NOT NULL,
    CODIGO_EMPRESA NUMBER NOT NULL,
    USUARIO_REGISTRO VARCHAR2(25) NOT NULL,
    FECHA_REGISTRO DATE NOT NULL,
    CONSTRAINT PK_MEDICO PRIMARY KEY (CODIGO_MEDICO),
    CONSTRAINT FK_SUCURSAL FOREIGN KEY (CODIGO_EMPRESA, CODIGO_SUCURSAL) REFERENCES SUCURSAL(CODIGO_EMPRESA, CODIGO_SUCURSAL)
);

INSERT INTO SUCURSAL (CODIGO_SUCURSAL, CODIGO_EMPRESA, NOMBRE_SUCURSAL, REGION, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES (1, 1, 'VERIS COSTA NORTE', 'COS', 'ROBERTO', SYSDATE);
INSERT INTO SUCURSAL (CODIGO_SUCURSAL, CODIGO_EMPRESA, NOMBRE_SUCURSAL, REGION, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES (2, 1, 'VERIS COSTA SUR', 'COS', 'ROBERTO', SYSDATE);
INSERT INTO SUCURSAL (CODIGO_SUCURSAL, CODIGO_EMPRESA, NOMBRE_SUCURSAL, REGION, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES (3, 1, 'VERIS SIERRA NORTE', 'SIE', 'ROBERTO', SYSDATE);
INSERT INTO SUCURSAL (CODIGO_SUCURSAL, CODIGO_EMPRESA, NOMBRE_SUCURSAL, REGION, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES (4, 1, 'VERIS SIERRA SUR', 'SIE', 'ROBERTO', SYSDATE);
INSERT INTO SUCURSAL (CODIGO_SUCURSAL, CODIGO_EMPRESA, NOMBRE_SUCURSAL, REGION, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES (5, 1, 'VERIS ORIENTE NORTE', 'ORI', 'ROBERTO', SYSDATE);
INSERT INTO SUCURSAL (CODIGO_SUCURSAL, CODIGO_EMPRESA, NOMBRE_SUCURSAL, REGION, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES (6, 1, 'VERIS INSULAR SUR', 'INS', 'ROBERTO', SYSDATE);

COMMIT;

SELECT * FROM SUCURSAL;
SELECT NVL(MAX(CODIGO_SUCURSAL),0)+1 AS COD FROM SUCURSAL;

INSERT INTO MEDICO (TIPO_IDENTIFICACION, NUMERO_IDENTIFICACION, PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO,
    NOMBRE_COMPLETO, MAIL, FECHA_NACIMIENTO, SUELDO, SEXO, CODIGO_SUCURSAL, CODIGO_EMPRESA, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES
    ('C', '0111111111', 'ANDRE', 'ANDRE', 'TAPIA', 'CENTENO', 'ANDRE ANDRE TAPIA CENTENO', 'ANDRE@EMAIL.COM', '23/09/1996', 409, 'M', 1, 1, 'ROBERTO', SYSDATE);

INSERT INTO MEDICO (TIPO_IDENTIFICACION, NUMERO_IDENTIFICACION, PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO,
    NOMBRE_COMPLETO, MAIL, FECHA_NACIMIENTO, SUELDO, SEXO, CODIGO_SUCURSAL, CODIGO_EMPRESA, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES
    ('C', '0111111112', 'JOSE', 'MARIA', 'VELASCO', 'IBARRA', 'JOSE MARIA VELASCO IBARRA', 'MARIA@EMAIL.COM', '24/06/1997', 408, 'M', 3, 1, 'ROBERTO', SYSDATE);

INSERT INTO MEDICO (TIPO_IDENTIFICACION, NUMERO_IDENTIFICACION, PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO,
    NOMBRE_COMPLETO, MAIL, FECHA_NACIMIENTO, SUELDO, SEXO, CODIGO_SUCURSAL, CODIGO_EMPRESA, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES
    ('C', '0111111113', 'JOSE', 'FRANCISCO', 'CEVALLOS', 'PINARGOTE', 'JOSE FRANCISCO CEVALLOS PINARGOTE', 'JOSE@EMAIL.COM', '23/09/1996', 407, 'M', 2, 1, 'ROBERTO', SYSDATE);
    
INSERT INTO MEDICO (TIPO_IDENTIFICACION, NUMERO_IDENTIFICACION, PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO,
    NOMBRE_COMPLETO, MAIL, FECHA_NACIMIENTO, SUELDO, SEXO, CODIGO_SUCURSAL, CODIGO_EMPRESA, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES
    ('C', '0111111114', 'GABRIEL', 'JOSE', 'BARBOSA', 'ANTEPARA', 'GABRIEL JOSE BARBOSA ANTEPARA', 'GABRIEL@EMAIL.COM', '23/09/1996', 406, 'M', 3, 1, 'ROBERTO', SYSDATE);
    
INSERT INTO MEDICO (TIPO_IDENTIFICACION, NUMERO_IDENTIFICACION, PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO,
    NOMBRE_COMPLETO, MAIL, FECHA_NACIMIENTO, SUELDO, SEXO, CODIGO_SUCURSAL, CODIGO_EMPRESA, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES
    ('C', '0111111115', 'JAIME', 'VICTOR', 'NEBOT', 'ERAZO', 'JAIME VICTOR NEBOT ERAZO', 'JAIME@EMAIL.COM', '23/09/1996', 405, 'M', 4, 1, 'ROBERTO', SYSDATE);

INSERT INTO MEDICO (TIPO_IDENTIFICACION, NUMERO_IDENTIFICACION, PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO,
    NOMBRE_COMPLETO, MAIL, FECHA_NACIMIENTO, SUELDO, SEXO, CODIGO_SUCURSAL, CODIGO_EMPRESA, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES
    ('C', '0111111116', 'HUGO', 'ROBERTO', 'CHAVEZ', 'FARIAS', 'HUGO ROBERTO CHAVEZ FARIAS', 'HUGO@EMAIL.COM', '23/09/1996', 404, 'M', 5, 1, 'ROBERTO', SYSDATE);

INSERT INTO MEDICO (TIPO_IDENTIFICACION, NUMERO_IDENTIFICACION, PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO,
    NOMBRE_COMPLETO, MAIL, FECHA_NACIMIENTO, SUELDO, SEXO, CODIGO_SUCURSAL, CODIGO_EMPRESA, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES
    ('C', '0111111117', 'JOSE', 'ELIAS', 'ARIAS', 'MALDONADO', 'JOSE ELIAS ARIAS MALDONADO', 'ELIAS@EMAIL.COM', '23/09/1996', 403, 'M', 6, 1, 'ROBERTO', SYSDATE);

INSERT INTO MEDICO (TIPO_IDENTIFICACION, NUMERO_IDENTIFICACION, PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO,
    NOMBRE_COMPLETO, MAIL, FECHA_NACIMIENTO, SUELDO, SEXO, CODIGO_SUCURSAL, CODIGO_EMPRESA, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES
    ('C', '0111111118', 'RONNIE', 'JESUS', 'CARRILLO', 'DELGADO', 'RONNIE JESUS CARRILLO DELGADO', 'RONNIE@EMAIL.COM', '23/09/1996', 402, 'M', 2, 1, 'ROBERTO', SYSDATE);


INSERT INTO MEDICO (TIPO_IDENTIFICACION, NUMERO_IDENTIFICACION, PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO,
    NOMBRE_COMPLETO, MAIL, FECHA_NACIMIENTO, SUELDO, SEXO, CODIGO_SUCURSAL, CODIGO_EMPRESA, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES
    ('C', '0111111119', 'JAIME', 'JACINTO', 'ALARC?N', 'MARTINEZ', 'JAIME JACINTO ALARC?N MARTINEZ', 'JAIME@EMAIL.COM', '23/09/1996', 401, 'M', 3, 1, 'ROBERTO', SYSDATE);
    
    
INSERT INTO MEDICO (TIPO_IDENTIFICACION, NUMERO_IDENTIFICACION, PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO,
    NOMBRE_COMPLETO, MAIL, FECHA_NACIMIENTO, SUELDO, SEXO, CODIGO_SUCURSAL, CODIGO_EMPRESA, USUARIO_REGISTRO, FECHA_REGISTRO)
    VALUES
    ('C', '0111111110', 'JUAN', 'ANTONIO', 'LAPASARAN', 'MEDINA', 'JUAN ANTONIO LAPASARAN MEDINA', 'JUAN@EMAIL.COM', '23/09/1996', 400, 'M', 1, 1, 'ROBERTO', SYSDATE);
    
COMMIT;

SELECT * FROM MEDICO;