import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsBooleanString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';


export class UserJwtDto {
  id: string;
  email: string;
  // role: UserRole;
}
