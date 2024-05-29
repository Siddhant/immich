import { ArrayMinSize } from 'class-validator';
import { AssetResponseDto, mapAsset } from 'src/dtos/asset-response.dto';
import { AuthDto } from 'src/dtos/auth.dto';
import { AssetStackEntity } from 'src/entities/asset-stack.entity';
import { ValidateUUID } from 'src/validation';

export class AssetStackCreateDto {
  /** first asset becomes the primary */
  @ValidateUUID({ each: true })
  @ArrayMinSize(2)
  assetIds!: string[];
}

export class AssetStackUpdateDto {
  @ValidateUUID({ optional: true })
  primaryAssetId?: string;
}

export class AssetStackResponseDto {
  id!: string;
  primaryAssetId!: string;
  assets!: AssetResponseDto[];
}

export const mapStack = (stack: AssetStackEntity, { auth }: { auth: AuthDto }) => {
  return {
    id: stack.id,
    primaryAssetId: stack.primaryAssetId,
    assets: stack.assets.map((asset) => mapAsset(asset, { auth })),
  };
};
