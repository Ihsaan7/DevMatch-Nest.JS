import { Controller , Get , Query , Param , Post , Body} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';

@Controller('profiles')
export class ProfilesController {

    @Get()
    fetchAll(@Query('age') age: number)
    {
        return [{ age }];
    }

    @Get(':id')
    fetchOne(@Param('id') id:string)
    {
        return { id }
    }

    @Post()
    create(@Body() createProfileDto : CreateProfileDto)
    {
        return{
            name: createProfileDto.name,
            description: createProfileDto.description
        }
    }
}
