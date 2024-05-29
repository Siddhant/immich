import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BulkIdResponseDto, BulkIdsDto } from 'src/dtos/asset-ids.response.dto';
import { AssetStackCreateDto, AssetStackResponseDto, AssetStackUpdateDto } from 'src/dtos/asset-stack.dto';
import { AuthDto } from 'src/dtos/auth.dto';
import { Auth, Authenticated } from 'src/middleware/auth.guard';
import { AssetStackService } from 'src/services/asset-stack.service';
import { UUIDParamDto } from 'src/validation';

@ApiTags('Stacks')
@Controller('stacks')
export class AssetStackController {
  constructor(private service: AssetStackService) {}

  @Post()
  createAssetStack(@Auth() auth: AuthDto, @Body() dto: AssetStackCreateDto): Promise<AssetStackResponseDto> {
    return this.service.create(auth, dto);
  }

  @Get(':id')
  @Authenticated({ sharedLink: true })
  getAssetStack(@Auth() auth: AuthDto, @Param() { id }: UUIDParamDto): Promise<AssetStackResponseDto> {
    return this.service.get(auth, id);
  }

  @Put(':id')
  @Authenticated()
  updateAssetStack(
    @Auth() auth: AuthDto,
    @Param() { id }: UUIDParamDto,
    @Body() dto: AssetStackUpdateDto,
  ): Promise<AssetStackResponseDto> {
    return this.service.update(auth, id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @Authenticated()
  deleteAssetStack(@Auth() auth: AuthDto, @Param() { id }: UUIDParamDto): Promise<void> {
    return this.service.delete(auth, id);
  }

  @Post(':id/merge')
  @Authenticated()
  mergeStacks(
    @Auth() auth: AuthDto,
    @Param() { id }: UUIDParamDto,
    @Body() dto: BulkIdsDto,
  ): Promise<BulkIdResponseDto[]> {
    return this.service.merge(auth, id, dto);
  }

  @Put(':id/assets')
  @Authenticated()
  addAssetsToStack(
    @Auth() auth: AuthDto,
    @Param() { id }: UUIDParamDto,
    @Body() dto: BulkIdsDto,
  ): Promise<BulkIdResponseDto[]> {
    return this.service.addAssets(auth, id, dto);
  }

  @Delete(':id/assets')
  @Authenticated()
  removeAssetFromStack(
    @Auth() auth: AuthDto,
    @Body() dto: BulkIdsDto,
    @Param() { id }: UUIDParamDto,
  ): Promise<BulkIdResponseDto[]> {
    return this.service.removeAssets(auth, id, dto);
  }
}
