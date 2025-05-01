import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patient } from '../patients/patient.entity';
import { User } from '../users/user.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  status: 'pendiente' | 'confirmado' | 'completado' | 'cancelado';

  @ManyToOne(() => Patient)
  patient: Patient;

  @ManyToOne(() => User)
  dentist: User;
}
