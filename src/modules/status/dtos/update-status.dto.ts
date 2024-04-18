import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { COMMON_MESSAGE } from 'src/messages';

export class UpdateStatusDto {
  @IsString({ message: i18nValidationMessage(COMMON_MESSAGE.INVALID) })
  @IsNotEmpty({ message: i18nValidationMessage(COMMON_MESSAGE.NOT_EMPTY) })
  @ApiProperty({
    name: 'name',
    type: String,
    required: true,
  })
  name: string;

  @IsString({ message: i18nValidationMessage(COMMON_MESSAGE.INVALID) })
  @Transform(({ value }) => value.toLowerCase())
  @IsNotEmpty({ message: i18nValidationMessage(COMMON_MESSAGE.NOT_EMPTY) })
  @ApiProperty({
    name: 'slug',
    type: String,
    required: true,
  })
  slug: string;

  @IsString({ message: i18nValidationMessage(COMMON_MESSAGE.INVALID) })
  @MaxLength(30, { message: i18nValidationMessage(COMMON_MESSAGE.MAX) })
  @Transform(({ value }) => value.toLowerCase())
  @IsNotEmpty({ message: i18nValidationMessage(COMMON_MESSAGE.NOT_EMPTY) })
  @ApiProperty({
    name: 'color',
    type: String,
    required: true,
  })
  color: string;
}
