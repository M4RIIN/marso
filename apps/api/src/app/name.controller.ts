import { Controller, Get } from '@nestjs/common';

interface NameResponse {
  name: string;
}

@Controller('api')
export class NameController {
  @Get('name')
  getName(): NameResponse {
    return { name: 'Alexandre' };
  }
}
