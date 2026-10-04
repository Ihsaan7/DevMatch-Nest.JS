import { CreateProfileDto } from './dto/create-profile.dto.js';
export declare class ProfilesController {
    fetchAll(age: number): {
        age: number;
    }[];
    fetchOne(id: string): {
        id: string;
    };
    create(createProfileDto: CreateProfileDto): {
        name: string;
        description: string;
    };
}
