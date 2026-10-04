import { Controller, Get, Query, Param, Post, Body, Put , Delete , HttpCode , HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profileService : ProfilesService){}


  @Get()
  fetchAll() {
    return this.profileService.fetchAll();
  }

  @Get(':id')
  fetchOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Post()
  create(@Body() body: { name: string; description: string}) {
    return this.profileService.create(body)
  }

  @Put(':id')
  update(
    @Param('id') id: string, 
    @Body() body: UpdateProfileDto
      ) 
  {
    return this.profileService.update(id , body)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id:string)
  {
    return this.profileService.remove(id)
  }


}
