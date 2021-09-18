import {
    BeforeInsert,
    Column,
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity("SUCURSAL")
export class Sucursal {
    @PrimaryColumn({ name: "CODIGO_EMPRESA" })
    codigoEmpresa: number;

    @PrimaryGeneratedColumn({ name: "CODIGO_SUCURSAL" })
    codigoSucursal: number;

    @Column({ name: "NOMBRE_SUCURSAL" })
    nombreSucursal: string;

    @Column({ name: "REGION" })
    region: string;

    @Column({ name: "USUARIO_REGISTRO" })
    usuarioRegistro: string;

    @Column({ name: "FECHA_REGISTRO" })
    fechaRegistro: Date;

    @BeforeInsert()
    beforeInsertActions() {
        this.nombreSucursal = this.nombreSucursal.toUpperCase();
        this.region = this.region.toUpperCase();
        this.usuarioRegistro = "ROBERTO";
        this.fechaRegistro = new Date();
    }
}
