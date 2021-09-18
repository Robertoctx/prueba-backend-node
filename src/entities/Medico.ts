import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("MEDICO")
export class Medico {
    @PrimaryGeneratedColumn({ name: "CODIGO_MEDICO" })
    codigoMedico: number;

    @Column({ name: "TIPO_IDENTIFICACION" })
    tipoIdentificacion: string;

    @Column({ name: "NUMERO_IDENTIFICACION" })
    numeroIdentificacion: string;

    @Column({ name: "PRIMER_NOMBRE" })
    primerNombre: string;

    @Column({ name: "SEGUNDO_NOMBRE", default: null })
    segundoNombre: string;

    @Column({ name: "PRIMER_APELLIDO" })
    primerApellido: string;

    @Column({ name: "SEGUNDO_APELLIDO" })
    segundoApellido: string;

    @Column({ name: "NOMBRE_COMPLETO" })
    nombreCompleto: string;

    @Column({ name: "MAIL" })
    mail: string;

    @Column({ name: "FECHA_NACIMIENTO", default: null })
    fechaNacimiento: Date;

    @Column({ name: "SUELDO" })
    sueldo: Number;

    @Column({ name: "SEXO" })
    sexo: string;

    @Column({ name: "CODIGO_SUCURSAL" })
    codigoSucursal: number;

    @Column({ name: "CODIGO_EMPRESA" })
    codigoEmpresa: number;

    @Column({ name: "USUARIO_REGISTRO" })
    usuarioRegistro: string;

    @Column({ name: "FECHA_REGISTRO" })
    fechaRegistro: Date;

    @BeforeInsert()
    beforeInsertActions() {
        this.tipoIdentificacion = this.tipoIdentificacion.toUpperCase();
        this.primerNombre = this.primerNombre.toUpperCase();
        this.segundoNombre = this.segundoNombre.toUpperCase();
        this.primerApellido = this.primerApellido.toUpperCase();
        this.segundoApellido = this.segundoApellido.toUpperCase();
        this.mail = this.mail.toUpperCase();
        this.sexo = this.sexo.toUpperCase();
        this.usuarioRegistro = "ROBERTO";
        this.fechaRegistro = new Date();
        
        this.nombreCompleto = this.primerNombre + " ";
        if (this.segundoNombre) {
            this.nombreCompleto += this.segundoNombre + " ";
        }
        this.nombreCompleto += this.primerApellido + " ";
        this.nombreCompleto += this.segundoApellido;
    }
}
