import { Client } from "src/modules/client/entities/Client";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("address")
class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  place: string;

  @Column()
  number: number;

  @Column()
  complement?: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipcode: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  client_id: number;

  @OneToOne(() => Client, (client) => client.address)
  @JoinColumn({ name: "client_id" })
  client: Client;
}

export { Address };
