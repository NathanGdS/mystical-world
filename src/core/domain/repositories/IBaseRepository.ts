export interface IBaseRepository<T, U> {
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T>;
  create(specie: T): Promise<void>;
  update(id: string, data: U): Promise<void>;
  remove(id: string): Promise<void>;
}
