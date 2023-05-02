import { DeleteResult, FindOneOptions, UpdateResult } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

export interface IbaseService<T> {
  findAll(): Promise<T[]>
  findById(id: string, options?:FindOneOptions<T>): Promise<T>
  create(item: T): Promise<T>
  update(criteria: number, partialEntity: QueryDeepPartialEntity<T>): Promise<UpdateResult>
  delete(id: string): Promise<DeleteResult>
}
