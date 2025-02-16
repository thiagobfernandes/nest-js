export abstract class CacheRepository {
    abstract get(key: string): Promise<any>;
    abstract set(key: string, value: string): Promise<void>;
    abstract del(key: string): Promise<void>;
}