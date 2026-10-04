import { Controller , Get , Query , Param} from '@nestjs/common';

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
}
