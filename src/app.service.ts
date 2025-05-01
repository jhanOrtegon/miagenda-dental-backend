import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return '🦷 MiAgenda Dental API is healthy!';
  }
}
