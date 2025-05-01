import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CashService } from './cash.service';
import { Transaction } from './transaction.entity';

@Controller('cash')
export class CashController {
  constructor(private readonly cashService: CashService) {}

  @Post()
  async create(@Body() body: Partial<Transaction>): Promise<Transaction> {
    return this.cashService.create(body);
  }

  @Get()
  async findAll(): Promise<Transaction[]> {
    return this.cashService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Transaction | null> {
    return this.cashService.findById(id);
  }
}
