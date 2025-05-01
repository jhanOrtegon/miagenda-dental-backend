import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Clinic } from '../clinics/clinic.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'admin' })
  role: 'admin' | 'asistente';

  @ManyToOne(() => Clinic, (clinic) => clinic.users)
  clinic: Clinic;
}
