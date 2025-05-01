import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointment.entity';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  async create(@Body() body: Partial<Appointment>): Promise<Appointment> {
    return this.appointmentsService.create(body);
  }

  @Get()
  async findAll(): Promise<Appointment[]> {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Appointment | null> {
    return this.appointmentsService.findById(id);
  }
}
