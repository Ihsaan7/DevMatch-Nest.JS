import { Controller , Get , Query} from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {

    @Get()
    fetchAll(@Query('age') age: number)
    {
        return [{ age }];
    }
}
