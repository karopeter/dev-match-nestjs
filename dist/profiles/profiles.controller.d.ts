import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js';
export declare class ProfilesController {
    private profileService;
    constructor(profileService: ProfilesService);
    findAll(): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    }[];
    findOne(id: string): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    create(createProfileDto: CreateProfileDto): {
        name: string;
        description: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    update(id: string, updateProfileDto: UpdateProfileDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    remove(id: string): void;
}
