import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Patient } from '../patients/patient.entity';

@Entity()
export class Clinic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.clinic)
  users: User[];

  @OneToMany(() => Patient, (patient) => patient.clinic)
  patients: Patient[];
}
