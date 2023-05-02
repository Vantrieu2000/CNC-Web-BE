import { BaseEntity, DeleteResult, FindOneOptions, Repository, UpdateResult } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { IbaseService } from './i.base.service'

export class BaseService<T, R extends Repository<T>> implements IbaseService<T> {
    protected readonly repository: R
  
    constructor(repository: R) {
      this.repository = repository
    }

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findById(id: string, options?:FindOneOptions<T>): Promise<T> {
    return await this.repository.findOne(id,options)
  }

  async create(item): Promise<T> {
    return await this.repository.save(item);
  }

  async update(criteria: number | string, partialEntity: QueryDeepPartialEntity<T>): Promise<UpdateResult> {
    return await this.repository.update(criteria, partialEntity);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
