import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js';
export declare class ProfilesController {
    private readonly profileService;
    constructor(profileService: ProfilesService);
    fetchAll(): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    }[];
    fetchOne(id: string): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    create(body: {
        name: string;
        description: string;
    }): {
        name: string;
        description: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    update(id: string, body: UpdateProfileDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    remove(id: string): {
        message: string;
        removed: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
            description: string;
        };
    };
}
