import { IsString, IsNotEmpty, Length, MaxLength } from "class-validator";

export class UpdateProfileDto {
    @IsString()
    @Length(3, 100)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(500)
    description: string;
}