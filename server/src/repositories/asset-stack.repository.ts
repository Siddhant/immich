import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chunked, DummyValue, GenerateSql } from 'src/decorators';
import { AssetStackEntity } from 'src/entities/asset-stack.entity';
import { IAssetStackRepository } from 'src/interfaces/asset-stack.interface';
import { Instrumentation } from 'src/utils/instrumentation';
import { Repository } from 'typeorm';

@Instrumentation()
@Injectable()
export class AssetStackRepository implements IAssetStackRepository {
  constructor(@InjectRepository(AssetStackEntity) private repository: Repository<AssetStackEntity>) {}

  create(entity: Partial<AssetStackEntity>) {
    return this.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  update(entity: Partial<AssetStackEntity>) {
    return this.save(entity);
  }

  async getById(id: string): Promise<AssetStackEntity | null> {
    return this.repository.findOne({
      where: {
        id,
      },
      relations: {
        primaryAsset: true,
        assets: true,
      },
    });
  }

  @GenerateSql({ params: [DummyValue.UUID, [DummyValue.UUID]] }, { name: 'no assets', params: [DummyValue.UUID] })
  getAssetIds(stackId: string, assetIds: string[]): Promise<Set<string>> {
    return Promise.resolve(new Set());
  }

  @GenerateSql({ params: [DummyValue.UUID, [DummyValue.UUID]] })
  addAssetIds(albumId: string, assetIds: string[]): Promise<void> {
    return Promise.resolve();
  }

  @GenerateSql({ params: [DummyValue.UUID, [DummyValue.UUID]] })
  @Chunked({ paramIndex: 1 })
  removeAssetIds(albumId: string, assetIds: string[]): Promise<void> {
    return Promise.resolve();
  }

  updatePrimaryAssets(): Promise<void> {
    return Promise.resolve();
  }

  private async save(entity: Partial<AssetStackEntity>) {
    const { id } = await this.repository.save(entity);
    return this.repository.findOneOrFail({
      where: {
        id,
      },
      relations: {
        primaryAsset: true,
        assets: true,
      },
    });
  }
}
