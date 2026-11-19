import { 
     Controller, 
     Get, 
     Param, 
     Post, 
     Body, 
     Put, 
     Delete, 
     HttpCode, 
     HttpStatus, 
     ParseUUIDPipe,
     UseGuards
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js';
import { ProfilesGuard } from './profiles.guard.js';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
 constructor(private profileService: ProfilesService) {}

    // GET /profiles 
    @Get()
    findAll() {
      return this.profileService.findAll();
    }

    // GET /profiles/:id
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: UUID) {
     return this.profileService.findOne(id);
    }

    // POST /profiles 
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profileService.create(createProfileDto);
    }

     // PUT /profiles/:id 
    @Put(':id')
    update(
      @Param('id', ParseUUIDPipe) id: UUID,
      @Body() updateProfileDto: UpdateProfileDto
    ) {
     return this.profileService.update(id, updateProfileDto);
    }
    
    // DELETE /profiles/:id
    @Delete(':id')
    @UseGuards(ProfilesGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: UUID) {
      return this.profileService.remove(id);
    }
}