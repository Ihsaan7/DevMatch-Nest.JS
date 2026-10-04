import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js';
import type { UUID } from 'crypto';
export declare class ProfilesController {
    private readonly profileService;
    constructor(profileService: ProfilesService);
    fetchAll(): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    }[];
    fetchOne(id: UUID): {
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
    update(id: UUID, body: UpdateProfileDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    remove(id: UUID): {
        message: string;
        removed: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
            description: string;
        };
    };
}
