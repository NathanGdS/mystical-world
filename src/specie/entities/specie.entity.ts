import { HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';

export class Specie {
  id: string;
  shortDescription: string;
  mythology: string;

  constructor(shortDescription: string, mythology: string) {
    this.shortDescription = shortDescription;
    this.mythology = mythology;
    this.id = uuidV4();
    this.validate();
  }

  validate() {
    if (!this.id || !this.shortDescription || !this.mythology) {
      throw new HttpException(
        'Entity not fully defined!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
