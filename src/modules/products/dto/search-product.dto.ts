import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';

export class FindAdDto extends PageOptionsDto {
    @ApiPropertyOptional()
    @IsOptional()
    readonly search: string;

    @ApiPropertyOptional()
    @IsOptional()
    readonly isAll: boolean;
}