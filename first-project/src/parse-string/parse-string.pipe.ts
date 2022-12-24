import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseStringPipe implements PipeTransform {
  transform(value: number, metadata: ArgumentMetadata) {
    return `${value}`;
  }
}
