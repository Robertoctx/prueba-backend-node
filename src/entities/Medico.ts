import {
    BeforeInsert,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Sucursal } from "./Sucursal";

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

    @OneToOne(
        (type) => Sucursal,
        (sucursal) => {
            sucursal.codigoSucursal, sucursal.region;
        },
        {
            eager: true,
        }
    )
    @JoinColumn({ name: "CODIGO_SUCURSAL" })
    sucursal: Sucursal;

    @BeforeInsert()
    beforeInsertActions() {
        this.tipoIdentificacion = this.tipoIdentificacion.toUpperCase();
        this.primerNombre = this.primerNombre.toUpperCase();
        if (this.segundoNombre) {
            this.segundoNombre = this.segundoNombre.toUpperCase();
        }
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
