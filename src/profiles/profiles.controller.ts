import { Controller, Get, Query, Param, Post, Body, Put , Delete , HttpCode , HttpStatus , ParseUUIDPipe} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profileService : ProfilesService){}


  @Get()
  fetchAll() {
    return this.profileService.fetchAll();
  }

  @Get(':id')
  fetchOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profileService.findOne(id);
  }

  @Post()
  create(@Body() body: { name: string; description: string}) {
    return this.profileService.create(body)
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID, 
    @Body() body: UpdateProfileDto
      ) 
  {
    return this.profileService.update(id , body)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id:UUID)
  {
    return this.profileService.remove(id)
  }


}
