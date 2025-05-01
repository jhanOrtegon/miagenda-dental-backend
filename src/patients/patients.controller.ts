import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from './patient.entity';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  async create(@Body() body: Partial<Patient>): Promise<Patient> {
    return this.patientsService.create(body);
  }

  @Get()
  async findAll(): Promise<Patient[]> {
    return this.patientsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Patient | null> {
    return this.patientsService.findById(id);
  }
}
