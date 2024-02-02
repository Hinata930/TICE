
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model tasks
 * 
 */
export type tasks = $Result.DefaultSelection<Prisma.$tasksPayload>
/**
 * Model teams
 * 
 */
export type teams = $Result.DefaultSelection<Prisma.$teamsPayload>
/**
 * Model user_team
 * 
 */
export type user_team = $Result.DefaultSelection<Prisma.$user_teamPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model user_role
 * 
 */
export type user_role = $Result.DefaultSelection<Prisma.$user_rolePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.roles.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.roles.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<ExtArgs>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.teamsDelegate<ExtArgs>;

  /**
   * `prisma.user_team`: Exposes CRUD operations for the **user_team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_teams
    * const user_teams = await prisma.user_team.findMany()
    * ```
    */
  get user_team(): Prisma.user_teamDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.user_role`: Exposes CRUD operations for the **user_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles
    * const user_roles = await prisma.user_role.findMany()
    * ```
    */
  get user_role(): Prisma.user_roleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    roles: 'roles',
    tasks: 'tasks',
    teams: 'teams',
    user_team: 'user_team',
    users: 'users',
    user_role: 'user_role'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'roles' | 'tasks' | 'teams' | 'user_team' | 'users' | 'user_role'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>,
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      tasks: {
        payload: Prisma.$tasksPayload<ExtArgs>
        fields: Prisma.tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findFirst: {
            args: Prisma.tasksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findMany: {
            args: Prisma.tasksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          create: {
            args: Prisma.tasksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          createMany: {
            args: Prisma.tasksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tasksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          update: {
            args: Prisma.tasksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          deleteMany: {
            args: Prisma.tasksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tasksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tasksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.tasksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasksCountArgs<ExtArgs>,
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      teams: {
        payload: Prisma.$teamsPayload<ExtArgs>
        fields: Prisma.teamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          findFirst: {
            args: Prisma.teamsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          findMany: {
            args: Prisma.teamsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          create: {
            args: Prisma.teamsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          createMany: {
            args: Prisma.teamsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.teamsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          update: {
            args: Prisma.teamsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          deleteMany: {
            args: Prisma.teamsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.teamsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.teamsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          aggregate: {
            args: Prisma.TeamsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeams>
          }
          groupBy: {
            args: Prisma.teamsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamsCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamsCountAggregateOutputType> | number
          }
        }
      }
      user_team: {
        payload: Prisma.$user_teamPayload<ExtArgs>
        fields: Prisma.user_teamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_teamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_teamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_teamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_teamPayload>
          }
          findFirst: {
            args: Prisma.user_teamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_teamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_teamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_teamPayload>
          }
          findMany: {
            args: Prisma.user_teamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_teamPayload>[]
          }
          create: {
            args: Prisma.user_teamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_teamPayload>
          }
          createMany: {
            args: Prisma.user_teamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_teamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_teamPayload>
          }
          update: {
            args: Prisma.user_teamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_teamPayload>
          }
          deleteMany: {
            args: Prisma.user_teamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_teamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_teamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_teamPayload>
          }
          aggregate: {
            args: Prisma.User_teamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_team>
          }
          groupBy: {
            args: Prisma.user_teamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_teamGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_teamCountArgs<ExtArgs>,
            result: $Utils.Optional<User_teamCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      user_role: {
        payload: Prisma.$user_rolePayload<ExtArgs>
        fields: Prisma.user_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_roleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_roleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findFirst: {
            args: Prisma.user_roleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_roleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findMany: {
            args: Prisma.user_roleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          create: {
            args: Prisma.user_roleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          createMany: {
            args: Prisma.user_roleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_roleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          update: {
            args: Prisma.user_roleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          deleteMany: {
            args: Prisma.user_roleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_roleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_roleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          aggregate: {
            args: Prisma.User_roleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_role>
          }
          groupBy: {
            args: Prisma.user_roleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_roleCountArgs<ExtArgs>,
            result: $Utils.Optional<User_roleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    user_role: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_role?: boolean | RolesCountOutputTypeCountUser_roleArgs
  }

  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUser_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
  }



  /**
   * Count Type TeamsCountOutputType
   */

  export type TeamsCountOutputType = {
    roles: number
    tasks: number
    user_role: number
    user_team: number
  }

  export type TeamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | TeamsCountOutputTypeCountRolesArgs
    tasks?: boolean | TeamsCountOutputTypeCountTasksArgs
    user_role?: boolean | TeamsCountOutputTypeCountUser_roleArgs
    user_team?: boolean | TeamsCountOutputTypeCountUser_teamArgs
  }

  // Custom InputTypes

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsCountOutputType
     */
    select?: TeamsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
  }


  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountUser_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
  }


  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountUser_teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_teamWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    tasks: number
    user_role: number
    user_team: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UsersCountOutputTypeCountTasksArgs
    user_role?: boolean | UsersCountOutputTypeCountUser_roleArgs
    user_team?: boolean | UsersCountOutputTypeCountUser_teamArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_teamWhereInput
  }



  /**
   * Models
   */

  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    team_id: string | null
    role_name: string | null
    role_description: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    team_id: string | null
    role_name: string | null
    role_description: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    team_id: number
    role_name: number
    role_description: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    team_id?: true
    role_name?: true
    role_description?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    team_id?: true
    role_name?: true
    role_description?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    team_id?: true
    role_name?: true
    role_description?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    team_id: string | null
    role_name: string
    role_description: string | null
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    team_id?: boolean
    role_name?: boolean
    role_description?: boolean
    teams?: boolean | roles$teamsArgs<ExtArgs>
    user_role?: boolean | roles$user_roleArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    team_id?: boolean
    role_name?: boolean
    role_description?: boolean
  }

  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | roles$teamsArgs<ExtArgs>
    user_role?: boolean | roles$user_roleArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      teams: Prisma.$teamsPayload<ExtArgs> | null
      user_role: Prisma.$user_rolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
      team_id: string | null
      role_name: string
      role_description: string | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }


  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends rolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends rolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesCreateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends rolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends rolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    teams<T extends roles$teamsArgs<ExtArgs> = {}>(args?: Subset<T, roles$teamsArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user_role<T extends roles$user_roleArgs<ExtArgs> = {}>(args?: Subset<T, roles$user_roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the roles model
   */ 
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'String'>
    readonly created_at: FieldRef<"roles", 'DateTime'>
    readonly updated_at: FieldRef<"roles", 'DateTime'>
    readonly team_id: FieldRef<"roles", 'String'>
    readonly role_name: FieldRef<"roles", 'String'>
    readonly role_description: FieldRef<"roles", 'String'>
  }
    

  // Custom InputTypes

  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }


  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
  }


  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }


  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
  }


  /**
   * roles.teams
   */
  export type roles$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    where?: teamsWhereInput
  }


  /**
   * roles.user_role
   */
  export type roles$user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    cursor?: user_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }


  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
  }



  /**
   * Model tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    task_creator: string | null
    team_id: string | null
    due_date: Date | null
    task_title: string | null
    task_description: string | null
  }

  export type TasksMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    task_creator: string | null
    team_id: string | null
    due_date: Date | null
    task_title: string | null
    task_description: string | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    task_creator: number
    team_id: number
    due_date: number
    task_title: number
    task_description: number
    _all: number
  }


  export type TasksMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    task_creator?: true
    team_id?: true
    due_date?: true
    task_title?: true
    task_description?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    task_creator?: true
    team_id?: true
    due_date?: true
    task_title?: true
    task_description?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    task_creator?: true
    team_id?: true
    due_date?: true
    task_title?: true
    task_description?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to aggregate.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithAggregationInput | tasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    task_creator: string | null
    team_id: string | null
    due_date: Date | null
    task_title: string
    task_description: string | null
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    task_creator?: boolean
    team_id?: boolean
    due_date?: boolean
    task_title?: boolean
    task_description?: boolean
    teams?: boolean | tasks$teamsArgs<ExtArgs>
    users?: boolean | tasks$usersArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    task_creator?: boolean
    team_id?: boolean
    due_date?: boolean
    task_title?: boolean
    task_description?: boolean
  }

  export type tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | tasks$teamsArgs<ExtArgs>
    users?: boolean | tasks$usersArgs<ExtArgs>
  }


  export type $tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasks"
    objects: {
      teams: Prisma.$teamsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
      task_creator: string | null
      team_id: string | null
      due_date: Date | null
      task_title: string
      task_description: string | null
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }


  type tasksGetPayload<S extends boolean | null | undefined | tasksDefaultArgs> = $Result.GetResult<Prisma.$tasksPayload, S>

  type tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tasksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasks'], meta: { name: 'tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tasksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tasksFindUniqueArgs<ExtArgs>>
    ): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tasks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tasksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tasksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tasksFindFirstArgs<ExtArgs>>
    ): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tasksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tasksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tasksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
    **/
    create<T extends tasksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tasksCreateArgs<ExtArgs>>
    ): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tasks.
     *     @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const tasks = await prisma.tasks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tasksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tasksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
    **/
    delete<T extends tasksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tasksDeleteArgs<ExtArgs>>
    ): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tasksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tasksUpdateArgs<ExtArgs>>
    ): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tasksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tasksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tasksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tasksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
    **/
    upsert<T extends tasksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tasksUpsertArgs<ExtArgs>>
    ): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasksGroupByArgs['orderBy'] }
        : { orderBy?: tasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasks model
   */
  readonly fields: tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    teams<T extends tasks$teamsArgs<ExtArgs> = {}>(args?: Subset<T, tasks$teamsArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    users<T extends tasks$usersArgs<ExtArgs> = {}>(args?: Subset<T, tasks$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tasks model
   */ 
  interface tasksFieldRefs {
    readonly id: FieldRef<"tasks", 'String'>
    readonly created_at: FieldRef<"tasks", 'DateTime'>
    readonly updated_at: FieldRef<"tasks", 'DateTime'>
    readonly task_creator: FieldRef<"tasks", 'String'>
    readonly team_id: FieldRef<"tasks", 'String'>
    readonly due_date: FieldRef<"tasks", 'DateTime'>
    readonly task_title: FieldRef<"tasks", 'String'>
    readonly task_description: FieldRef<"tasks", 'String'>
  }
    

  // Custom InputTypes

  /**
   * tasks findUnique
   */
  export type tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }


  /**
   * tasks findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }


  /**
   * tasks findFirst
   */
  export type tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }


  /**
   * tasks findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }


  /**
   * tasks findMany
   */
  export type tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }


  /**
   * tasks create
   */
  export type tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tasks.
     */
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }


  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tasks update
   */
  export type tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tasks.
     */
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     */
    where: tasksWhereUniqueInput
  }


  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
  }


  /**
   * tasks upsert
   */
  export type tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tasks to update in case it exists.
     */
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     */
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }


  /**
   * tasks delete
   */
  export type tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter which tasks to delete.
     */
    where: tasksWhereUniqueInput
  }


  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: tasksWhereInput
  }


  /**
   * tasks.teams
   */
  export type tasks$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    where?: teamsWhereInput
  }


  /**
   * tasks.users
   */
  export type tasks$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * tasks without action
   */
  export type tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
  }



  /**
   * Model teams
   */

  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    team_name: string | null
  }

  export type TeamsMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    team_name: string | null
  }

  export type TeamsCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    team_name: number
    _all: number
  }


  export type TeamsMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    team_name?: true
  }

  export type TeamsMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    team_name?: true
  }

  export type TeamsCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    team_name?: true
    _all?: true
  }

  export type TeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to aggregate.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type teamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamsWhereInput
    orderBy?: teamsOrderByWithAggregationInput | teamsOrderByWithAggregationInput[]
    by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
    having?: teamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }

  export type TeamsGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    team_name: string
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends teamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type teamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    team_name?: boolean
    roles?: boolean | teams$rolesArgs<ExtArgs>
    tasks?: boolean | teams$tasksArgs<ExtArgs>
    user_role?: boolean | teams$user_roleArgs<ExtArgs>
    user_team?: boolean | teams$user_teamArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    team_name?: boolean
  }

  export type teamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | teams$rolesArgs<ExtArgs>
    tasks?: boolean | teams$tasksArgs<ExtArgs>
    user_role?: boolean | teams$user_roleArgs<ExtArgs>
    user_team?: boolean | teams$user_teamArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $teamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teams"
    objects: {
      roles: Prisma.$rolesPayload<ExtArgs>[]
      tasks: Prisma.$tasksPayload<ExtArgs>[]
      user_role: Prisma.$user_rolePayload<ExtArgs>[]
      user_team: Prisma.$user_teamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
      team_name: string
    }, ExtArgs["result"]["teams"]>
    composites: {}
  }


  type teamsGetPayload<S extends boolean | null | undefined | teamsDefaultArgs> = $Result.GetResult<Prisma.$teamsPayload, S>

  type teamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<teamsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamsCountAggregateInputType | true
    }

  export interface teamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teams'], meta: { name: 'teams' } }
    /**
     * Find zero or one Teams that matches the filter.
     * @param {teamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends teamsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teamsFindUniqueArgs<ExtArgs>>
    ): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Teams that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {teamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends teamsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends teamsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teamsFindFirstArgs<ExtArgs>>
    ): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends teamsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends teamsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Teams.
     * @param {teamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
    **/
    create<T extends teamsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teamsCreateArgs<ExtArgs>>
    ): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Teams.
     *     @param {teamsCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const teams = await prisma.teams.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends teamsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teams.
     * @param {teamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
    **/
    delete<T extends teamsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teamsDeleteArgs<ExtArgs>>
    ): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Teams.
     * @param {teamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends teamsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teamsUpdateArgs<ExtArgs>>
    ): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {teamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends teamsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends teamsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teamsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teams.
     * @param {teamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
    **/
    upsert<T extends teamsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teamsUpsertArgs<ExtArgs>>
    ): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends teamsCountArgs>(
      args?: Subset<T, teamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamsGroupByArgs['orderBy'] }
        : { orderBy?: teamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teams model
   */
  readonly fields: teamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roles<T extends teams$rolesArgs<ExtArgs> = {}>(args?: Subset<T, teams$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findMany'> | Null>;

    tasks<T extends teams$tasksArgs<ExtArgs> = {}>(args?: Subset<T, teams$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_role<T extends teams$user_roleArgs<ExtArgs> = {}>(args?: Subset<T, teams$user_roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findMany'> | Null>;

    user_team<T extends teams$user_teamArgs<ExtArgs> = {}>(args?: Subset<T, teams$user_teamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_teamPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the teams model
   */ 
  interface teamsFieldRefs {
    readonly id: FieldRef<"teams", 'String'>
    readonly created_at: FieldRef<"teams", 'DateTime'>
    readonly updated_at: FieldRef<"teams", 'DateTime'>
    readonly team_name: FieldRef<"teams", 'String'>
  }
    

  // Custom InputTypes

  /**
   * teams findUnique
   */
  export type teamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where: teamsWhereUniqueInput
  }


  /**
   * teams findUniqueOrThrow
   */
  export type teamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where: teamsWhereUniqueInput
  }


  /**
   * teams findFirst
   */
  export type teamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }


  /**
   * teams findFirstOrThrow
   */
  export type teamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }


  /**
   * teams findMany
   */
  export type teamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }


  /**
   * teams create
   */
  export type teamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The data needed to create a teams.
     */
    data: XOR<teamsCreateInput, teamsUncheckedCreateInput>
  }


  /**
   * teams createMany
   */
  export type teamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamsCreateManyInput | teamsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * teams update
   */
  export type teamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The data needed to update a teams.
     */
    data: XOR<teamsUpdateInput, teamsUncheckedUpdateInput>
    /**
     * Choose, which teams to update.
     */
    where: teamsWhereUniqueInput
  }


  /**
   * teams updateMany
   */
  export type teamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamsWhereInput
  }


  /**
   * teams upsert
   */
  export type teamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The filter to search for the teams to update in case it exists.
     */
    where: teamsWhereUniqueInput
    /**
     * In case the teams found by the `where` argument doesn't exist, create a new teams with this data.
     */
    create: XOR<teamsCreateInput, teamsUncheckedCreateInput>
    /**
     * In case the teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamsUpdateInput, teamsUncheckedUpdateInput>
  }


  /**
   * teams delete
   */
  export type teamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter which teams to delete.
     */
    where: teamsWhereUniqueInput
  }


  /**
   * teams deleteMany
   */
  export type teamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamsWhereInput
  }


  /**
   * teams.roles
   */
  export type teams$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    cursor?: rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * teams.tasks
   */
  export type teams$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }


  /**
   * teams.user_role
   */
  export type teams$user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    cursor?: user_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }


  /**
   * teams.user_team
   */
  export type teams$user_teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
    where?: user_teamWhereInput
    orderBy?: user_teamOrderByWithRelationInput | user_teamOrderByWithRelationInput[]
    cursor?: user_teamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_teamScalarFieldEnum | User_teamScalarFieldEnum[]
  }


  /**
   * teams without action
   */
  export type teamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
  }



  /**
   * Model user_team
   */

  export type AggregateUser_team = {
    _count: User_teamCountAggregateOutputType | null
    _min: User_teamMinAggregateOutputType | null
    _max: User_teamMaxAggregateOutputType | null
  }

  export type User_teamMinAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    team_id: string | null
    id: string | null
  }

  export type User_teamMaxAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    team_id: string | null
    id: string | null
  }

  export type User_teamCountAggregateOutputType = {
    created_at: number
    updated_at: number
    user_id: number
    team_id: number
    id: number
    _all: number
  }


  export type User_teamMinAggregateInputType = {
    created_at?: true
    updated_at?: true
    user_id?: true
    team_id?: true
    id?: true
  }

  export type User_teamMaxAggregateInputType = {
    created_at?: true
    updated_at?: true
    user_id?: true
    team_id?: true
    id?: true
  }

  export type User_teamCountAggregateInputType = {
    created_at?: true
    updated_at?: true
    user_id?: true
    team_id?: true
    id?: true
    _all?: true
  }

  export type User_teamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_team to aggregate.
     */
    where?: user_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_teams to fetch.
     */
    orderBy?: user_teamOrderByWithRelationInput | user_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_teams
    **/
    _count?: true | User_teamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_teamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_teamMaxAggregateInputType
  }

  export type GetUser_teamAggregateType<T extends User_teamAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_team]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_team[P]>
      : GetScalarType<T[P], AggregateUser_team[P]>
  }




  export type user_teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_teamWhereInput
    orderBy?: user_teamOrderByWithAggregationInput | user_teamOrderByWithAggregationInput[]
    by: User_teamScalarFieldEnum[] | User_teamScalarFieldEnum
    having?: user_teamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_teamCountAggregateInputType | true
    _min?: User_teamMinAggregateInputType
    _max?: User_teamMaxAggregateInputType
  }

  export type User_teamGroupByOutputType = {
    created_at: Date
    updated_at: Date
    user_id: string | null
    team_id: string | null
    id: string
    _count: User_teamCountAggregateOutputType | null
    _min: User_teamMinAggregateOutputType | null
    _max: User_teamMaxAggregateOutputType | null
  }

  type GetUser_teamGroupByPayload<T extends user_teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_teamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_teamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_teamGroupByOutputType[P]>
            : GetScalarType<T[P], User_teamGroupByOutputType[P]>
        }
      >
    >


  export type user_teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    team_id?: boolean
    id?: boolean
    teams?: boolean | user_team$teamsArgs<ExtArgs>
    users?: boolean | user_team$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_team"]>

  export type user_teamSelectScalar = {
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    team_id?: boolean
    id?: boolean
  }

  export type user_teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | user_team$teamsArgs<ExtArgs>
    users?: boolean | user_team$usersArgs<ExtArgs>
  }


  export type $user_teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_team"
    objects: {
      teams: Prisma.$teamsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      created_at: Date
      updated_at: Date
      user_id: string | null
      team_id: string | null
      id: string
    }, ExtArgs["result"]["user_team"]>
    composites: {}
  }


  type user_teamGetPayload<S extends boolean | null | undefined | user_teamDefaultArgs> = $Result.GetResult<Prisma.$user_teamPayload, S>

  type user_teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_teamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_teamCountAggregateInputType | true
    }

  export interface user_teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_team'], meta: { name: 'user_team' } }
    /**
     * Find zero or one User_team that matches the filter.
     * @param {user_teamFindUniqueArgs} args - Arguments to find a User_team
     * @example
     * // Get one User_team
     * const user_team = await prisma.user_team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_teamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_teamFindUniqueArgs<ExtArgs>>
    ): Prisma__user_teamClient<$Result.GetResult<Prisma.$user_teamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_team that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_teamFindUniqueOrThrowArgs} args - Arguments to find a User_team
     * @example
     * // Get one User_team
     * const user_team = await prisma.user_team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_teamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_teamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_teamClient<$Result.GetResult<Prisma.$user_teamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamFindFirstArgs} args - Arguments to find a User_team
     * @example
     * // Get one User_team
     * const user_team = await prisma.user_team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_teamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_teamFindFirstArgs<ExtArgs>>
    ): Prisma__user_teamClient<$Result.GetResult<Prisma.$user_teamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamFindFirstOrThrowArgs} args - Arguments to find a User_team
     * @example
     * // Get one User_team
     * const user_team = await prisma.user_team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_teamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_teamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_teamClient<$Result.GetResult<Prisma.$user_teamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_teams
     * const user_teams = await prisma.user_team.findMany()
     * 
     * // Get first 10 User_teams
     * const user_teams = await prisma.user_team.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const user_teamWithCreated_atOnly = await prisma.user_team.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends user_teamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_teamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_teamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_team.
     * @param {user_teamCreateArgs} args - Arguments to create a User_team.
     * @example
     * // Create one User_team
     * const User_team = await prisma.user_team.create({
     *   data: {
     *     // ... data to create a User_team
     *   }
     * })
     * 
    **/
    create<T extends user_teamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_teamCreateArgs<ExtArgs>>
    ): Prisma__user_teamClient<$Result.GetResult<Prisma.$user_teamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_teams.
     *     @param {user_teamCreateManyArgs} args - Arguments to create many User_teams.
     *     @example
     *     // Create many User_teams
     *     const user_team = await prisma.user_team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_teamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_teamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_team.
     * @param {user_teamDeleteArgs} args - Arguments to delete one User_team.
     * @example
     * // Delete one User_team
     * const User_team = await prisma.user_team.delete({
     *   where: {
     *     // ... filter to delete one User_team
     *   }
     * })
     * 
    **/
    delete<T extends user_teamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_teamDeleteArgs<ExtArgs>>
    ): Prisma__user_teamClient<$Result.GetResult<Prisma.$user_teamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_team.
     * @param {user_teamUpdateArgs} args - Arguments to update one User_team.
     * @example
     * // Update one User_team
     * const user_team = await prisma.user_team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_teamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_teamUpdateArgs<ExtArgs>>
    ): Prisma__user_teamClient<$Result.GetResult<Prisma.$user_teamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_teams.
     * @param {user_teamDeleteManyArgs} args - Arguments to filter User_teams to delete.
     * @example
     * // Delete a few User_teams
     * const { count } = await prisma.user_team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_teamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_teamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_teams
     * const user_team = await prisma.user_team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_teamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_teamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_team.
     * @param {user_teamUpsertArgs} args - Arguments to update or create a User_team.
     * @example
     * // Update or create a User_team
     * const user_team = await prisma.user_team.upsert({
     *   create: {
     *     // ... data to create a User_team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_team we want to update
     *   }
     * })
    **/
    upsert<T extends user_teamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_teamUpsertArgs<ExtArgs>>
    ): Prisma__user_teamClient<$Result.GetResult<Prisma.$user_teamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamCountArgs} args - Arguments to filter User_teams to count.
     * @example
     * // Count the number of User_teams
     * const count = await prisma.user_team.count({
     *   where: {
     *     // ... the filter for the User_teams we want to count
     *   }
     * })
    **/
    count<T extends user_teamCountArgs>(
      args?: Subset<T, user_teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_teamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_teamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_teamAggregateArgs>(args: Subset<T, User_teamAggregateArgs>): Prisma.PrismaPromise<GetUser_teamAggregateType<T>>

    /**
     * Group by User_team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_teamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_teamGroupByArgs['orderBy'] }
        : { orderBy?: user_teamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_teamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_teamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_team model
   */
  readonly fields: user_teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_teamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    teams<T extends user_team$teamsArgs<ExtArgs> = {}>(args?: Subset<T, user_team$teamsArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    users<T extends user_team$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_team$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user_team model
   */ 
  interface user_teamFieldRefs {
    readonly created_at: FieldRef<"user_team", 'DateTime'>
    readonly updated_at: FieldRef<"user_team", 'DateTime'>
    readonly user_id: FieldRef<"user_team", 'String'>
    readonly team_id: FieldRef<"user_team", 'String'>
    readonly id: FieldRef<"user_team", 'String'>
  }
    

  // Custom InputTypes

  /**
   * user_team findUnique
   */
  export type user_teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
    /**
     * Filter, which user_team to fetch.
     */
    where: user_teamWhereUniqueInput
  }


  /**
   * user_team findUniqueOrThrow
   */
  export type user_teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
    /**
     * Filter, which user_team to fetch.
     */
    where: user_teamWhereUniqueInput
  }


  /**
   * user_team findFirst
   */
  export type user_teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
    /**
     * Filter, which user_team to fetch.
     */
    where?: user_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_teams to fetch.
     */
    orderBy?: user_teamOrderByWithRelationInput | user_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_teams.
     */
    cursor?: user_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_teams.
     */
    distinct?: User_teamScalarFieldEnum | User_teamScalarFieldEnum[]
  }


  /**
   * user_team findFirstOrThrow
   */
  export type user_teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
    /**
     * Filter, which user_team to fetch.
     */
    where?: user_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_teams to fetch.
     */
    orderBy?: user_teamOrderByWithRelationInput | user_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_teams.
     */
    cursor?: user_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_teams.
     */
    distinct?: User_teamScalarFieldEnum | User_teamScalarFieldEnum[]
  }


  /**
   * user_team findMany
   */
  export type user_teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
    /**
     * Filter, which user_teams to fetch.
     */
    where?: user_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_teams to fetch.
     */
    orderBy?: user_teamOrderByWithRelationInput | user_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_teams.
     */
    cursor?: user_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_teams.
     */
    skip?: number
    distinct?: User_teamScalarFieldEnum | User_teamScalarFieldEnum[]
  }


  /**
   * user_team create
   */
  export type user_teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
    /**
     * The data needed to create a user_team.
     */
    data?: XOR<user_teamCreateInput, user_teamUncheckedCreateInput>
  }


  /**
   * user_team createMany
   */
  export type user_teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_teams.
     */
    data: user_teamCreateManyInput | user_teamCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user_team update
   */
  export type user_teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
    /**
     * The data needed to update a user_team.
     */
    data: XOR<user_teamUpdateInput, user_teamUncheckedUpdateInput>
    /**
     * Choose, which user_team to update.
     */
    where: user_teamWhereUniqueInput
  }


  /**
   * user_team updateMany
   */
  export type user_teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_teams.
     */
    data: XOR<user_teamUpdateManyMutationInput, user_teamUncheckedUpdateManyInput>
    /**
     * Filter which user_teams to update
     */
    where?: user_teamWhereInput
  }


  /**
   * user_team upsert
   */
  export type user_teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
    /**
     * The filter to search for the user_team to update in case it exists.
     */
    where: user_teamWhereUniqueInput
    /**
     * In case the user_team found by the `where` argument doesn't exist, create a new user_team with this data.
     */
    create: XOR<user_teamCreateInput, user_teamUncheckedCreateInput>
    /**
     * In case the user_team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_teamUpdateInput, user_teamUncheckedUpdateInput>
  }


  /**
   * user_team delete
   */
  export type user_teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
    /**
     * Filter which user_team to delete.
     */
    where: user_teamWhereUniqueInput
  }


  /**
   * user_team deleteMany
   */
  export type user_teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_teams to delete
     */
    where?: user_teamWhereInput
  }


  /**
   * user_team.teams
   */
  export type user_team$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    where?: teamsWhereInput
  }


  /**
   * user_team.users
   */
  export type user_team$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * user_team without action
   */
  export type user_teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    username: string | null
    first_name: string | null
    last_name: string | null
    email_address: string | null
    image_url: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    username: string | null
    first_name: string | null
    last_name: string | null
    email_address: string | null
    image_url: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    user_id: number
    username: number
    first_name: number
    last_name: number
    email_address: number
    image_url: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    username?: true
    first_name?: true
    last_name?: true
    email_address?: true
    image_url?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    username?: true
    first_name?: true
    last_name?: true
    email_address?: true
    image_url?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    username?: true
    first_name?: true
    last_name?: true
    email_address?: true
    image_url?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    user_id: string
    username: string | null
    first_name: string | null
    last_name: string | null
    email_address: string
    image_url: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    email_address?: boolean
    image_url?: boolean
    tasks?: boolean | users$tasksArgs<ExtArgs>
    user_role?: boolean | users$user_roleArgs<ExtArgs>
    user_team?: boolean | users$user_teamArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    email_address?: boolean
    image_url?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | users$tasksArgs<ExtArgs>
    user_role?: boolean | users$user_roleArgs<ExtArgs>
    user_team?: boolean | users$user_teamArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      tasks: Prisma.$tasksPayload<ExtArgs>[]
      user_role: Prisma.$user_rolePayload<ExtArgs>[]
      user_team: Prisma.$user_teamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
      user_id: string
      username: string | null
      first_name: string | null
      last_name: string | null
      email_address: string
      image_url: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tasks<T extends users$tasksArgs<ExtArgs> = {}>(args?: Subset<T, users$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_role<T extends users$user_roleArgs<ExtArgs> = {}>(args?: Subset<T, users$user_roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findMany'> | Null>;

    user_team<T extends users$user_teamArgs<ExtArgs> = {}>(args?: Subset<T, users$user_teamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_teamPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly user_id: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly email_address: FieldRef<"users", 'String'>
    readonly image_url: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.tasks
   */
  export type users$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }


  /**
   * users.user_role
   */
  export type users$user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    cursor?: user_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }


  /**
   * users.user_team
   */
  export type users$user_teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_team
     */
    select?: user_teamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_teamInclude<ExtArgs> | null
    where?: user_teamWhereInput
    orderBy?: user_teamOrderByWithRelationInput | user_teamOrderByWithRelationInput[]
    cursor?: user_teamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_teamScalarFieldEnum | User_teamScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model user_role
   */

  export type AggregateUser_role = {
    _count: User_roleCountAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  export type User_roleMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    team_id: string | null
    role_id: string | null
  }

  export type User_roleMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    team_id: string | null
    role_id: string | null
  }

  export type User_roleCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    user_id: number
    team_id: number
    role_id: number
    _all: number
  }


  export type User_roleMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    team_id?: true
    role_id?: true
  }

  export type User_roleMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    team_id?: true
    role_id?: true
  }

  export type User_roleCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    team_id?: true
    role_id?: true
    _all?: true
  }

  export type User_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_role to aggregate.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles
    **/
    _count?: true | User_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_roleMaxAggregateInputType
  }

  export type GetUser_roleAggregateType<T extends User_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_role[P]>
      : GetScalarType<T[P], AggregateUser_role[P]>
  }




  export type user_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithAggregationInput | user_roleOrderByWithAggregationInput[]
    by: User_roleScalarFieldEnum[] | User_roleScalarFieldEnum
    having?: user_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_roleCountAggregateInputType | true
    _min?: User_roleMinAggregateInputType
    _max?: User_roleMaxAggregateInputType
  }

  export type User_roleGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    user_id: string | null
    team_id: string | null
    role_id: string | null
    _count: User_roleCountAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  type GetUser_roleGroupByPayload<T extends user_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_roleGroupByOutputType[P]>
            : GetScalarType<T[P], User_roleGroupByOutputType[P]>
        }
      >
    >


  export type user_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    team_id?: boolean
    role_id?: boolean
    roles?: boolean | user_role$rolesArgs<ExtArgs>
    teams?: boolean | user_role$teamsArgs<ExtArgs>
    users?: boolean | user_role$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_role"]>

  export type user_roleSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    team_id?: boolean
    role_id?: boolean
  }

  export type user_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | user_role$rolesArgs<ExtArgs>
    teams?: boolean | user_role$teamsArgs<ExtArgs>
    users?: boolean | user_role$usersArgs<ExtArgs>
  }


  export type $user_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_role"
    objects: {
      roles: Prisma.$rolesPayload<ExtArgs> | null
      teams: Prisma.$teamsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
      user_id: string | null
      team_id: string | null
      role_id: string | null
    }, ExtArgs["result"]["user_role"]>
    composites: {}
  }


  type user_roleGetPayload<S extends boolean | null | undefined | user_roleDefaultArgs> = $Result.GetResult<Prisma.$user_rolePayload, S>

  type user_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_roleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_roleCountAggregateInputType | true
    }

  export interface user_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_role'], meta: { name: 'user_role' } }
    /**
     * Find zero or one User_role that matches the filter.
     * @param {user_roleFindUniqueArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleFindUniqueArgs<ExtArgs>>
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_roleFindUniqueOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindFirstArgs<ExtArgs>>
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_role.findMany()
     * 
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_roleWithIdOnly = await prisma.user_role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_role.
     * @param {user_roleCreateArgs} args - Arguments to create a User_role.
     * @example
     * // Create one User_role
     * const User_role = await prisma.user_role.create({
     *   data: {
     *     // ... data to create a User_role
     *   }
     * })
     * 
    **/
    create<T extends user_roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleCreateArgs<ExtArgs>>
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_roles.
     *     @param {user_roleCreateManyArgs} args - Arguments to create many User_roles.
     *     @example
     *     // Create many User_roles
     *     const user_role = await prisma.user_role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_role.
     * @param {user_roleDeleteArgs} args - Arguments to delete one User_role.
     * @example
     * // Delete one User_role
     * const User_role = await prisma.user_role.delete({
     *   where: {
     *     // ... filter to delete one User_role
     *   }
     * })
     * 
    **/
    delete<T extends user_roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleDeleteArgs<ExtArgs>>
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_role.
     * @param {user_roleUpdateArgs} args - Arguments to update one User_role.
     * @example
     * // Update one User_role
     * const user_role = await prisma.user_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpdateArgs<ExtArgs>>
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_roles.
     * @param {user_roleDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_role.
     * @param {user_roleUpsertArgs} args - Arguments to update or create a User_role.
     * @example
     * // Update or create a User_role
     * const user_role = await prisma.user_role.upsert({
     *   create: {
     *     // ... data to create a User_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_role we want to update
     *   }
     * })
    **/
    upsert<T extends user_roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpsertArgs<ExtArgs>>
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_role.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
    **/
    count<T extends user_roleCountArgs>(
      args?: Subset<T, user_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_roleAggregateArgs>(args: Subset<T, User_roleAggregateArgs>): Prisma.PrismaPromise<GetUser_roleAggregateType<T>>

    /**
     * Group by User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_roleGroupByArgs['orderBy'] }
        : { orderBy?: user_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_role model
   */
  readonly fields: user_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roles<T extends user_role$rolesArgs<ExtArgs> = {}>(args?: Subset<T, user_role$rolesArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    teams<T extends user_role$teamsArgs<ExtArgs> = {}>(args?: Subset<T, user_role$teamsArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    users<T extends user_role$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_role$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user_role model
   */ 
  interface user_roleFieldRefs {
    readonly id: FieldRef<"user_role", 'String'>
    readonly created_at: FieldRef<"user_role", 'DateTime'>
    readonly updated_at: FieldRef<"user_role", 'DateTime'>
    readonly user_id: FieldRef<"user_role", 'String'>
    readonly team_id: FieldRef<"user_role", 'String'>
    readonly role_id: FieldRef<"user_role", 'String'>
  }
    

  // Custom InputTypes

  /**
   * user_role findUnique
   */
  export type user_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }


  /**
   * user_role findUniqueOrThrow
   */
  export type user_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }


  /**
   * user_role findFirst
   */
  export type user_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }


  /**
   * user_role findFirstOrThrow
   */
  export type user_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }


  /**
   * user_role findMany
   */
  export type user_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }


  /**
   * user_role create
   */
  export type user_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a user_role.
     */
    data?: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
  }


  /**
   * user_role createMany
   */
  export type user_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user_role update
   */
  export type user_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a user_role.
     */
    data: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
    /**
     * Choose, which user_role to update.
     */
    where: user_roleWhereUniqueInput
  }


  /**
   * user_role updateMany
   */
  export type user_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput
  }


  /**
   * user_role upsert
   */
  export type user_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the user_role to update in case it exists.
     */
    where: user_roleWhereUniqueInput
    /**
     * In case the user_role found by the `where` argument doesn't exist, create a new user_role with this data.
     */
    create: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
    /**
     * In case the user_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
  }


  /**
   * user_role delete
   */
  export type user_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter which user_role to delete.
     */
    where: user_roleWhereUniqueInput
  }


  /**
   * user_role deleteMany
   */
  export type user_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_roleWhereInput
  }


  /**
   * user_role.roles
   */
  export type user_role$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    where?: rolesWhereInput
  }


  /**
   * user_role.teams
   */
  export type user_role$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamsInclude<ExtArgs> | null
    where?: teamsWhereInput
  }


  /**
   * user_role.users
   */
  export type user_role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * user_role without action
   */
  export type user_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RolesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    team_id: 'team_id',
    role_name: 'role_name',
    role_description: 'role_description'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    task_creator: 'task_creator',
    team_id: 'team_id',
    due_date: 'due_date',
    task_title: 'task_title',
    task_description: 'task_description'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const TeamsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    team_name: 'team_name'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const User_teamScalarFieldEnum: {
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    team_id: 'team_id',
    id: 'id'
  };

  export type User_teamScalarFieldEnum = (typeof User_teamScalarFieldEnum)[keyof typeof User_teamScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name',
    email_address: 'email_address',
    image_url: 'image_url'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const User_roleScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    team_id: 'team_id',
    role_id: 'role_id'
  };

  export type User_roleScalarFieldEnum = (typeof User_roleScalarFieldEnum)[keyof typeof User_roleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: UuidFilter<"roles"> | string
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
    team_id?: UuidNullableFilter<"roles"> | string | null
    role_name?: StringFilter<"roles"> | string
    role_description?: StringNullableFilter<"roles"> | string | null
    teams?: XOR<TeamsNullableRelationFilter, teamsWhereInput> | null
    user_role?: User_roleListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team_id?: SortOrderInput | SortOrder
    role_name?: SortOrder
    role_description?: SortOrderInput | SortOrder
    teams?: teamsOrderByWithRelationInput
    user_role?: user_roleOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    team_id_role_name?: rolesTeam_idRole_nameCompoundUniqueInput
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
    team_id?: UuidNullableFilter<"roles"> | string | null
    role_name?: StringFilter<"roles"> | string
    role_description?: StringNullableFilter<"roles"> | string | null
    teams?: XOR<TeamsNullableRelationFilter, teamsWhereInput> | null
    user_role?: User_roleListRelationFilter
  }, "id" | "team_id_role_name">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team_id?: SortOrderInput | SortOrder
    role_name?: SortOrder
    role_description?: SortOrderInput | SortOrder
    _count?: rolesCountOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"roles"> | string
    created_at?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    team_id?: UuidNullableWithAggregatesFilter<"roles"> | string | null
    role_name?: StringWithAggregatesFilter<"roles"> | string
    role_description?: StringNullableWithAggregatesFilter<"roles"> | string | null
  }

  export type tasksWhereInput = {
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    id?: UuidFilter<"tasks"> | string
    created_at?: DateTimeFilter<"tasks"> | Date | string
    updated_at?: DateTimeFilter<"tasks"> | Date | string
    task_creator?: UuidNullableFilter<"tasks"> | string | null
    team_id?: UuidNullableFilter<"tasks"> | string | null
    due_date?: DateTimeNullableFilter<"tasks"> | Date | string | null
    task_title?: StringFilter<"tasks"> | string
    task_description?: StringNullableFilter<"tasks"> | string | null
    teams?: XOR<TeamsNullableRelationFilter, teamsWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type tasksOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    task_creator?: SortOrderInput | SortOrder
    team_id?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    task_title?: SortOrder
    task_description?: SortOrderInput | SortOrder
    teams?: teamsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type tasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    created_at?: DateTimeFilter<"tasks"> | Date | string
    updated_at?: DateTimeFilter<"tasks"> | Date | string
    task_creator?: UuidNullableFilter<"tasks"> | string | null
    team_id?: UuidNullableFilter<"tasks"> | string | null
    due_date?: DateTimeNullableFilter<"tasks"> | Date | string | null
    task_title?: StringFilter<"tasks"> | string
    task_description?: StringNullableFilter<"tasks"> | string | null
    teams?: XOR<TeamsNullableRelationFilter, teamsWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "id">

  export type tasksOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    task_creator?: SortOrderInput | SortOrder
    team_id?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    task_title?: SortOrder
    task_description?: SortOrderInput | SortOrder
    _count?: tasksCountOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    OR?: tasksScalarWhereWithAggregatesInput[]
    NOT?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"tasks"> | string
    created_at?: DateTimeWithAggregatesFilter<"tasks"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tasks"> | Date | string
    task_creator?: UuidNullableWithAggregatesFilter<"tasks"> | string | null
    team_id?: UuidNullableWithAggregatesFilter<"tasks"> | string | null
    due_date?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    task_title?: StringWithAggregatesFilter<"tasks"> | string
    task_description?: StringNullableWithAggregatesFilter<"tasks"> | string | null
  }

  export type teamsWhereInput = {
    AND?: teamsWhereInput | teamsWhereInput[]
    OR?: teamsWhereInput[]
    NOT?: teamsWhereInput | teamsWhereInput[]
    id?: UuidFilter<"teams"> | string
    created_at?: DateTimeFilter<"teams"> | Date | string
    updated_at?: DateTimeFilter<"teams"> | Date | string
    team_name?: StringFilter<"teams"> | string
    roles?: RolesListRelationFilter
    tasks?: TasksListRelationFilter
    user_role?: User_roleListRelationFilter
    user_team?: User_teamListRelationFilter
  }

  export type teamsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team_name?: SortOrder
    roles?: rolesOrderByRelationAggregateInput
    tasks?: tasksOrderByRelationAggregateInput
    user_role?: user_roleOrderByRelationAggregateInput
    user_team?: user_teamOrderByRelationAggregateInput
  }

  export type teamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: teamsWhereInput | teamsWhereInput[]
    OR?: teamsWhereInput[]
    NOT?: teamsWhereInput | teamsWhereInput[]
    created_at?: DateTimeFilter<"teams"> | Date | string
    updated_at?: DateTimeFilter<"teams"> | Date | string
    team_name?: StringFilter<"teams"> | string
    roles?: RolesListRelationFilter
    tasks?: TasksListRelationFilter
    user_role?: User_roleListRelationFilter
    user_team?: User_teamListRelationFilter
  }, "id">

  export type teamsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team_name?: SortOrder
    _count?: teamsCountOrderByAggregateInput
    _max?: teamsMaxOrderByAggregateInput
    _min?: teamsMinOrderByAggregateInput
  }

  export type teamsScalarWhereWithAggregatesInput = {
    AND?: teamsScalarWhereWithAggregatesInput | teamsScalarWhereWithAggregatesInput[]
    OR?: teamsScalarWhereWithAggregatesInput[]
    NOT?: teamsScalarWhereWithAggregatesInput | teamsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"teams"> | string
    created_at?: DateTimeWithAggregatesFilter<"teams"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"teams"> | Date | string
    team_name?: StringWithAggregatesFilter<"teams"> | string
  }

  export type user_teamWhereInput = {
    AND?: user_teamWhereInput | user_teamWhereInput[]
    OR?: user_teamWhereInput[]
    NOT?: user_teamWhereInput | user_teamWhereInput[]
    created_at?: DateTimeFilter<"user_team"> | Date | string
    updated_at?: DateTimeFilter<"user_team"> | Date | string
    user_id?: UuidNullableFilter<"user_team"> | string | null
    team_id?: UuidNullableFilter<"user_team"> | string | null
    id?: UuidFilter<"user_team"> | string
    teams?: XOR<TeamsNullableRelationFilter, teamsWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type user_teamOrderByWithRelationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrderInput | SortOrder
    team_id?: SortOrderInput | SortOrder
    id?: SortOrder
    teams?: teamsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_teamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_teamWhereInput | user_teamWhereInput[]
    OR?: user_teamWhereInput[]
    NOT?: user_teamWhereInput | user_teamWhereInput[]
    created_at?: DateTimeFilter<"user_team"> | Date | string
    updated_at?: DateTimeFilter<"user_team"> | Date | string
    user_id?: UuidNullableFilter<"user_team"> | string | null
    team_id?: UuidNullableFilter<"user_team"> | string | null
    teams?: XOR<TeamsNullableRelationFilter, teamsWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "id">

  export type user_teamOrderByWithAggregationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrderInput | SortOrder
    team_id?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: user_teamCountOrderByAggregateInput
    _max?: user_teamMaxOrderByAggregateInput
    _min?: user_teamMinOrderByAggregateInput
  }

  export type user_teamScalarWhereWithAggregatesInput = {
    AND?: user_teamScalarWhereWithAggregatesInput | user_teamScalarWhereWithAggregatesInput[]
    OR?: user_teamScalarWhereWithAggregatesInput[]
    NOT?: user_teamScalarWhereWithAggregatesInput | user_teamScalarWhereWithAggregatesInput[]
    created_at?: DateTimeWithAggregatesFilter<"user_team"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_team"> | Date | string
    user_id?: UuidNullableWithAggregatesFilter<"user_team"> | string | null
    team_id?: UuidNullableWithAggregatesFilter<"user_team"> | string | null
    id?: UuidWithAggregatesFilter<"user_team"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    user_id?: StringFilter<"users"> | string
    username?: StringNullableFilter<"users"> | string | null
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    email_address?: StringFilter<"users"> | string
    image_url?: StringFilter<"users"> | string
    tasks?: TasksListRelationFilter
    user_role?: User_roleListRelationFilter
    user_team?: User_teamListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    username?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email_address?: SortOrder
    image_url?: SortOrder
    tasks?: tasksOrderByRelationAggregateInput
    user_role?: user_roleOrderByRelationAggregateInput
    user_team?: user_teamOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    email_address?: StringFilter<"users"> | string
    image_url?: StringFilter<"users"> | string
    tasks?: TasksListRelationFilter
    user_role?: User_roleListRelationFilter
    user_team?: User_teamListRelationFilter
  }, "id" | "user_id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    username?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email_address?: SortOrder
    image_url?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    user_id?: StringWithAggregatesFilter<"users"> | string
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email_address?: StringWithAggregatesFilter<"users"> | string
    image_url?: StringWithAggregatesFilter<"users"> | string
  }

  export type user_roleWhereInput = {
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    id?: UuidFilter<"user_role"> | string
    created_at?: DateTimeFilter<"user_role"> | Date | string
    updated_at?: DateTimeFilter<"user_role"> | Date | string
    user_id?: UuidNullableFilter<"user_role"> | string | null
    team_id?: UuidNullableFilter<"user_role"> | string | null
    role_id?: UuidNullableFilter<"user_role"> | string | null
    roles?: XOR<RolesNullableRelationFilter, rolesWhereInput> | null
    teams?: XOR<TeamsNullableRelationFilter, teamsWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type user_roleOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrderInput | SortOrder
    team_id?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    roles?: rolesOrderByWithRelationInput
    teams?: teamsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_roleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    team_id_user_id?: user_roleTeam_idUser_idCompoundUniqueInput
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    created_at?: DateTimeFilter<"user_role"> | Date | string
    updated_at?: DateTimeFilter<"user_role"> | Date | string
    user_id?: UuidNullableFilter<"user_role"> | string | null
    team_id?: UuidNullableFilter<"user_role"> | string | null
    role_id?: UuidNullableFilter<"user_role"> | string | null
    roles?: XOR<RolesNullableRelationFilter, rolesWhereInput> | null
    teams?: XOR<TeamsNullableRelationFilter, teamsWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "id" | "team_id_user_id">

  export type user_roleOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrderInput | SortOrder
    team_id?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    _count?: user_roleCountOrderByAggregateInput
    _max?: user_roleMaxOrderByAggregateInput
    _min?: user_roleMinOrderByAggregateInput
  }

  export type user_roleScalarWhereWithAggregatesInput = {
    AND?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    OR?: user_roleScalarWhereWithAggregatesInput[]
    NOT?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_role"> | string
    created_at?: DateTimeWithAggregatesFilter<"user_role"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_role"> | Date | string
    user_id?: UuidNullableWithAggregatesFilter<"user_role"> | string | null
    team_id?: UuidNullableWithAggregatesFilter<"user_role"> | string | null
    role_id?: UuidNullableWithAggregatesFilter<"user_role"> | string | null
  }

  export type rolesCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    role_name: string
    role_description?: string | null
    teams?: teamsCreateNestedOneWithoutRolesInput
    user_role?: user_roleCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_id?: string | null
    role_name: string
    role_description?: string | null
    user_role?: user_roleUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: teamsUpdateOneWithoutRolesNestedInput
    user_role?: user_roleUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    user_role?: user_roleUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_id?: string | null
    role_name: string
    role_description?: string | null
  }

  export type rolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    due_date?: Date | string | null
    task_title: string
    task_description?: string | null
    teams?: teamsCreateNestedOneWithoutTasksInput
    users?: usersCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    task_creator?: string | null
    team_id?: string | null
    due_date?: Date | string | null
    task_title: string
    task_description?: string | null
  }

  export type tasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: teamsUpdateOneWithoutTasksNestedInput
    users?: usersUpdateOneWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_creator?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    task_creator?: string | null
    team_id?: string | null
    due_date?: Date | string | null
    task_title: string
    task_description?: string | null
  }

  export type tasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_creator?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type teamsCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_name: string
    roles?: rolesCreateNestedManyWithoutTeamsInput
    tasks?: tasksCreateNestedManyWithoutTeamsInput
    user_role?: user_roleCreateNestedManyWithoutTeamsInput
    user_team?: user_teamCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_name: string
    roles?: rolesUncheckedCreateNestedManyWithoutTeamsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutTeamsInput
    user_role?: user_roleUncheckedCreateNestedManyWithoutTeamsInput
    user_team?: user_teamUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
    roles?: rolesUpdateManyWithoutTeamsNestedInput
    tasks?: tasksUpdateManyWithoutTeamsNestedInput
    user_role?: user_roleUpdateManyWithoutTeamsNestedInput
    user_team?: user_teamUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
    roles?: rolesUncheckedUpdateManyWithoutTeamsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutTeamsNestedInput
    user_role?: user_roleUncheckedUpdateManyWithoutTeamsNestedInput
    user_team?: user_teamUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type teamsCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_name: string
  }

  export type teamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
  }

  export type teamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
  }

  export type user_teamCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    id?: string
    teams?: teamsCreateNestedOneWithoutUser_teamInput
    users?: usersCreateNestedOneWithoutUser_teamInput
  }

  export type user_teamUncheckedCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: string | null
    team_id?: string | null
    id?: string
  }

  export type user_teamUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    teams?: teamsUpdateOneWithoutUser_teamNestedInput
    users?: usersUpdateOneWithoutUser_teamNestedInput
  }

  export type user_teamUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type user_teamCreateManyInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: string | null
    team_id?: string | null
    id?: string
  }

  export type user_teamUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type user_teamUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    username?: string | null
    first_name?: string | null
    last_name?: string | null
    email_address: string
    image_url: string
    tasks?: tasksCreateNestedManyWithoutUsersInput
    user_role?: user_roleCreateNestedManyWithoutUsersInput
    user_team?: user_teamCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    username?: string | null
    first_name?: string | null
    last_name?: string | null
    email_address: string
    image_url: string
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    user_role?: user_roleUncheckedCreateNestedManyWithoutUsersInput
    user_team?: user_teamUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    user_role?: user_roleUpdateManyWithoutUsersNestedInput
    user_team?: user_teamUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    user_role?: user_roleUncheckedUpdateManyWithoutUsersNestedInput
    user_team?: user_teamUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    username?: string | null
    first_name?: string | null
    last_name?: string | null
    email_address: string
    image_url: string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type user_roleCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: rolesCreateNestedOneWithoutUser_roleInput
    teams?: teamsCreateNestedOneWithoutUser_roleInput
    users?: usersCreateNestedOneWithoutUser_roleInput
  }

  export type user_roleUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: string | null
    team_id?: string | null
    role_id?: string | null
  }

  export type user_roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUpdateOneWithoutUser_roleNestedInput
    teams?: teamsUpdateOneWithoutUser_roleNestedInput
    users?: usersUpdateOneWithoutUser_roleNestedInput
  }

  export type user_roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_roleCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: string | null
    team_id?: string | null
    role_id?: string | null
  }

  export type user_roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TeamsNullableRelationFilter = {
    is?: teamsWhereInput | null
    isNot?: teamsWhereInput | null
  }

  export type User_roleListRelationFilter = {
    every?: user_roleWhereInput
    some?: user_roleWhereInput
    none?: user_roleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_roleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesTeam_idRole_nameCompoundUniqueInput = {
    team_id: string
    role_name: string
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team_id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team_id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team_id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type tasksCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    task_creator?: SortOrder
    team_id?: SortOrder
    due_date?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    task_creator?: SortOrder
    team_id?: SortOrder
    due_date?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    task_creator?: SortOrder
    team_id?: SortOrder
    due_date?: SortOrder
    task_title?: SortOrder
    task_description?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RolesListRelationFilter = {
    every?: rolesWhereInput
    some?: rolesWhereInput
    none?: rolesWhereInput
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type User_teamListRelationFilter = {
    every?: user_teamWhereInput
    some?: user_teamWhereInput
    none?: user_teamWhereInput
  }

  export type rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_teamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team_name?: SortOrder
  }

  export type teamsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team_name?: SortOrder
  }

  export type teamsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team_name?: SortOrder
  }

  export type user_teamCountOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    id?: SortOrder
  }

  export type user_teamMaxOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    id?: SortOrder
  }

  export type user_teamMinOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    id?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email_address?: SortOrder
    image_url?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email_address?: SortOrder
    image_url?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email_address?: SortOrder
    image_url?: SortOrder
  }

  export type RolesNullableRelationFilter = {
    is?: rolesWhereInput | null
    isNot?: rolesWhereInput | null
  }

  export type user_roleTeam_idUser_idCompoundUniqueInput = {
    team_id: string
    user_id: string
  }

  export type user_roleCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    role_id?: SortOrder
  }

  export type user_roleMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    role_id?: SortOrder
  }

  export type user_roleMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    role_id?: SortOrder
  }

  export type teamsCreateNestedOneWithoutRolesInput = {
    create?: XOR<teamsCreateWithoutRolesInput, teamsUncheckedCreateWithoutRolesInput>
    connectOrCreate?: teamsCreateOrConnectWithoutRolesInput
    connect?: teamsWhereUniqueInput
  }

  export type user_roleCreateNestedManyWithoutRolesInput = {
    create?: XOR<user_roleCreateWithoutRolesInput, user_roleUncheckedCreateWithoutRolesInput> | user_roleCreateWithoutRolesInput[] | user_roleUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRolesInput | user_roleCreateOrConnectWithoutRolesInput[]
    createMany?: user_roleCreateManyRolesInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type user_roleUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<user_roleCreateWithoutRolesInput, user_roleUncheckedCreateWithoutRolesInput> | user_roleCreateWithoutRolesInput[] | user_roleUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRolesInput | user_roleCreateOrConnectWithoutRolesInput[]
    createMany?: user_roleCreateManyRolesInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type teamsUpdateOneWithoutRolesNestedInput = {
    create?: XOR<teamsCreateWithoutRolesInput, teamsUncheckedCreateWithoutRolesInput>
    connectOrCreate?: teamsCreateOrConnectWithoutRolesInput
    upsert?: teamsUpsertWithoutRolesInput
    disconnect?: teamsWhereInput | boolean
    delete?: teamsWhereInput | boolean
    connect?: teamsWhereUniqueInput
    update?: XOR<XOR<teamsUpdateToOneWithWhereWithoutRolesInput, teamsUpdateWithoutRolesInput>, teamsUncheckedUpdateWithoutRolesInput>
  }

  export type user_roleUpdateManyWithoutRolesNestedInput = {
    create?: XOR<user_roleCreateWithoutRolesInput, user_roleUncheckedCreateWithoutRolesInput> | user_roleCreateWithoutRolesInput[] | user_roleUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRolesInput | user_roleCreateOrConnectWithoutRolesInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutRolesInput | user_roleUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: user_roleCreateManyRolesInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutRolesInput | user_roleUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutRolesInput | user_roleUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type user_roleUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<user_roleCreateWithoutRolesInput, user_roleUncheckedCreateWithoutRolesInput> | user_roleCreateWithoutRolesInput[] | user_roleUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRolesInput | user_roleCreateOrConnectWithoutRolesInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutRolesInput | user_roleUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: user_roleCreateManyRolesInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutRolesInput | user_roleUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutRolesInput | user_roleUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type teamsCreateNestedOneWithoutTasksInput = {
    create?: XOR<teamsCreateWithoutTasksInput, teamsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: teamsCreateOrConnectWithoutTasksInput
    connect?: teamsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTasksInput = {
    create?: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasksInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type teamsUpdateOneWithoutTasksNestedInput = {
    create?: XOR<teamsCreateWithoutTasksInput, teamsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: teamsCreateOrConnectWithoutTasksInput
    upsert?: teamsUpsertWithoutTasksInput
    disconnect?: teamsWhereInput | boolean
    delete?: teamsWhereInput | boolean
    connect?: teamsWhereUniqueInput
    update?: XOR<XOR<teamsUpdateToOneWithWhereWithoutTasksInput, teamsUpdateWithoutTasksInput>, teamsUncheckedUpdateWithoutTasksInput>
  }

  export type usersUpdateOneWithoutTasksNestedInput = {
    create?: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasksInput
    upsert?: usersUpsertWithoutTasksInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTasksInput, usersUpdateWithoutTasksInput>, usersUncheckedUpdateWithoutTasksInput>
  }

  export type rolesCreateNestedManyWithoutTeamsInput = {
    create?: XOR<rolesCreateWithoutTeamsInput, rolesUncheckedCreateWithoutTeamsInput> | rolesCreateWithoutTeamsInput[] | rolesUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutTeamsInput | rolesCreateOrConnectWithoutTeamsInput[]
    createMany?: rolesCreateManyTeamsInputEnvelope
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutTeamsInput = {
    create?: XOR<tasksCreateWithoutTeamsInput, tasksUncheckedCreateWithoutTeamsInput> | tasksCreateWithoutTeamsInput[] | tasksUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutTeamsInput | tasksCreateOrConnectWithoutTeamsInput[]
    createMany?: tasksCreateManyTeamsInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type user_roleCreateNestedManyWithoutTeamsInput = {
    create?: XOR<user_roleCreateWithoutTeamsInput, user_roleUncheckedCreateWithoutTeamsInput> | user_roleCreateWithoutTeamsInput[] | user_roleUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutTeamsInput | user_roleCreateOrConnectWithoutTeamsInput[]
    createMany?: user_roleCreateManyTeamsInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type user_teamCreateNestedManyWithoutTeamsInput = {
    create?: XOR<user_teamCreateWithoutTeamsInput, user_teamUncheckedCreateWithoutTeamsInput> | user_teamCreateWithoutTeamsInput[] | user_teamUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_teamCreateOrConnectWithoutTeamsInput | user_teamCreateOrConnectWithoutTeamsInput[]
    createMany?: user_teamCreateManyTeamsInputEnvelope
    connect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
  }

  export type rolesUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<rolesCreateWithoutTeamsInput, rolesUncheckedCreateWithoutTeamsInput> | rolesCreateWithoutTeamsInput[] | rolesUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutTeamsInput | rolesCreateOrConnectWithoutTeamsInput[]
    createMany?: rolesCreateManyTeamsInputEnvelope
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<tasksCreateWithoutTeamsInput, tasksUncheckedCreateWithoutTeamsInput> | tasksCreateWithoutTeamsInput[] | tasksUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutTeamsInput | tasksCreateOrConnectWithoutTeamsInput[]
    createMany?: tasksCreateManyTeamsInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type user_roleUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<user_roleCreateWithoutTeamsInput, user_roleUncheckedCreateWithoutTeamsInput> | user_roleCreateWithoutTeamsInput[] | user_roleUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutTeamsInput | user_roleCreateOrConnectWithoutTeamsInput[]
    createMany?: user_roleCreateManyTeamsInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type user_teamUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<user_teamCreateWithoutTeamsInput, user_teamUncheckedCreateWithoutTeamsInput> | user_teamCreateWithoutTeamsInput[] | user_teamUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_teamCreateOrConnectWithoutTeamsInput | user_teamCreateOrConnectWithoutTeamsInput[]
    createMany?: user_teamCreateManyTeamsInputEnvelope
    connect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
  }

  export type rolesUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<rolesCreateWithoutTeamsInput, rolesUncheckedCreateWithoutTeamsInput> | rolesCreateWithoutTeamsInput[] | rolesUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutTeamsInput | rolesCreateOrConnectWithoutTeamsInput[]
    upsert?: rolesUpsertWithWhereUniqueWithoutTeamsInput | rolesUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: rolesCreateManyTeamsInputEnvelope
    set?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    disconnect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    delete?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    update?: rolesUpdateWithWhereUniqueWithoutTeamsInput | rolesUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: rolesUpdateManyWithWhereWithoutTeamsInput | rolesUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: rolesScalarWhereInput | rolesScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<tasksCreateWithoutTeamsInput, tasksUncheckedCreateWithoutTeamsInput> | tasksCreateWithoutTeamsInput[] | tasksUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutTeamsInput | tasksCreateOrConnectWithoutTeamsInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutTeamsInput | tasksUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: tasksCreateManyTeamsInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutTeamsInput | tasksUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutTeamsInput | tasksUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type user_roleUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<user_roleCreateWithoutTeamsInput, user_roleUncheckedCreateWithoutTeamsInput> | user_roleCreateWithoutTeamsInput[] | user_roleUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutTeamsInput | user_roleCreateOrConnectWithoutTeamsInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutTeamsInput | user_roleUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: user_roleCreateManyTeamsInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutTeamsInput | user_roleUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutTeamsInput | user_roleUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type user_teamUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<user_teamCreateWithoutTeamsInput, user_teamUncheckedCreateWithoutTeamsInput> | user_teamCreateWithoutTeamsInput[] | user_teamUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_teamCreateOrConnectWithoutTeamsInput | user_teamCreateOrConnectWithoutTeamsInput[]
    upsert?: user_teamUpsertWithWhereUniqueWithoutTeamsInput | user_teamUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: user_teamCreateManyTeamsInputEnvelope
    set?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    disconnect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    delete?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    connect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    update?: user_teamUpdateWithWhereUniqueWithoutTeamsInput | user_teamUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: user_teamUpdateManyWithWhereWithoutTeamsInput | user_teamUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: user_teamScalarWhereInput | user_teamScalarWhereInput[]
  }

  export type rolesUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<rolesCreateWithoutTeamsInput, rolesUncheckedCreateWithoutTeamsInput> | rolesCreateWithoutTeamsInput[] | rolesUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutTeamsInput | rolesCreateOrConnectWithoutTeamsInput[]
    upsert?: rolesUpsertWithWhereUniqueWithoutTeamsInput | rolesUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: rolesCreateManyTeamsInputEnvelope
    set?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    disconnect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    delete?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    update?: rolesUpdateWithWhereUniqueWithoutTeamsInput | rolesUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: rolesUpdateManyWithWhereWithoutTeamsInput | rolesUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: rolesScalarWhereInput | rolesScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<tasksCreateWithoutTeamsInput, tasksUncheckedCreateWithoutTeamsInput> | tasksCreateWithoutTeamsInput[] | tasksUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutTeamsInput | tasksCreateOrConnectWithoutTeamsInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutTeamsInput | tasksUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: tasksCreateManyTeamsInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutTeamsInput | tasksUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutTeamsInput | tasksUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type user_roleUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<user_roleCreateWithoutTeamsInput, user_roleUncheckedCreateWithoutTeamsInput> | user_roleCreateWithoutTeamsInput[] | user_roleUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutTeamsInput | user_roleCreateOrConnectWithoutTeamsInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutTeamsInput | user_roleUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: user_roleCreateManyTeamsInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutTeamsInput | user_roleUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutTeamsInput | user_roleUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type user_teamUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<user_teamCreateWithoutTeamsInput, user_teamUncheckedCreateWithoutTeamsInput> | user_teamCreateWithoutTeamsInput[] | user_teamUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_teamCreateOrConnectWithoutTeamsInput | user_teamCreateOrConnectWithoutTeamsInput[]
    upsert?: user_teamUpsertWithWhereUniqueWithoutTeamsInput | user_teamUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: user_teamCreateManyTeamsInputEnvelope
    set?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    disconnect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    delete?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    connect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    update?: user_teamUpdateWithWhereUniqueWithoutTeamsInput | user_teamUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: user_teamUpdateManyWithWhereWithoutTeamsInput | user_teamUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: user_teamScalarWhereInput | user_teamScalarWhereInput[]
  }

  export type teamsCreateNestedOneWithoutUser_teamInput = {
    create?: XOR<teamsCreateWithoutUser_teamInput, teamsUncheckedCreateWithoutUser_teamInput>
    connectOrCreate?: teamsCreateOrConnectWithoutUser_teamInput
    connect?: teamsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_teamInput = {
    create?: XOR<usersCreateWithoutUser_teamInput, usersUncheckedCreateWithoutUser_teamInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_teamInput
    connect?: usersWhereUniqueInput
  }

  export type teamsUpdateOneWithoutUser_teamNestedInput = {
    create?: XOR<teamsCreateWithoutUser_teamInput, teamsUncheckedCreateWithoutUser_teamInput>
    connectOrCreate?: teamsCreateOrConnectWithoutUser_teamInput
    upsert?: teamsUpsertWithoutUser_teamInput
    disconnect?: teamsWhereInput | boolean
    delete?: teamsWhereInput | boolean
    connect?: teamsWhereUniqueInput
    update?: XOR<XOR<teamsUpdateToOneWithWhereWithoutUser_teamInput, teamsUpdateWithoutUser_teamInput>, teamsUncheckedUpdateWithoutUser_teamInput>
  }

  export type usersUpdateOneWithoutUser_teamNestedInput = {
    create?: XOR<usersCreateWithoutUser_teamInput, usersUncheckedCreateWithoutUser_teamInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_teamInput
    upsert?: usersUpsertWithoutUser_teamInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_teamInput, usersUpdateWithoutUser_teamInput>, usersUncheckedUpdateWithoutUser_teamInput>
  }

  export type tasksCreateNestedManyWithoutUsersInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type user_roleCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_roleCreateWithoutUsersInput, user_roleUncheckedCreateWithoutUsersInput> | user_roleCreateWithoutUsersInput[] | user_roleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUsersInput | user_roleCreateOrConnectWithoutUsersInput[]
    createMany?: user_roleCreateManyUsersInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type user_teamCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_teamCreateWithoutUsersInput, user_teamUncheckedCreateWithoutUsersInput> | user_teamCreateWithoutUsersInput[] | user_teamUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_teamCreateOrConnectWithoutUsersInput | user_teamCreateOrConnectWithoutUsersInput[]
    createMany?: user_teamCreateManyUsersInputEnvelope
    connect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type user_roleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_roleCreateWithoutUsersInput, user_roleUncheckedCreateWithoutUsersInput> | user_roleCreateWithoutUsersInput[] | user_roleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUsersInput | user_roleCreateOrConnectWithoutUsersInput[]
    createMany?: user_roleCreateManyUsersInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type user_teamUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_teamCreateWithoutUsersInput, user_teamUncheckedCreateWithoutUsersInput> | user_teamCreateWithoutUsersInput[] | user_teamUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_teamCreateOrConnectWithoutUsersInput | user_teamCreateOrConnectWithoutUsersInput[]
    createMany?: user_teamCreateManyUsersInputEnvelope
    connect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
  }

  export type tasksUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsersInput | tasksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsersInput | tasksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsersInput | tasksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type user_roleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_roleCreateWithoutUsersInput, user_roleUncheckedCreateWithoutUsersInput> | user_roleCreateWithoutUsersInput[] | user_roleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUsersInput | user_roleCreateOrConnectWithoutUsersInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutUsersInput | user_roleUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_roleCreateManyUsersInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutUsersInput | user_roleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutUsersInput | user_roleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type user_teamUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_teamCreateWithoutUsersInput, user_teamUncheckedCreateWithoutUsersInput> | user_teamCreateWithoutUsersInput[] | user_teamUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_teamCreateOrConnectWithoutUsersInput | user_teamCreateOrConnectWithoutUsersInput[]
    upsert?: user_teamUpsertWithWhereUniqueWithoutUsersInput | user_teamUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_teamCreateManyUsersInputEnvelope
    set?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    disconnect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    delete?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    connect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    update?: user_teamUpdateWithWhereUniqueWithoutUsersInput | user_teamUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_teamUpdateManyWithWhereWithoutUsersInput | user_teamUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_teamScalarWhereInput | user_teamScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsersInput | tasksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsersInput | tasksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsersInput | tasksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type user_roleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_roleCreateWithoutUsersInput, user_roleUncheckedCreateWithoutUsersInput> | user_roleCreateWithoutUsersInput[] | user_roleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUsersInput | user_roleCreateOrConnectWithoutUsersInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutUsersInput | user_roleUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_roleCreateManyUsersInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutUsersInput | user_roleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutUsersInput | user_roleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type user_teamUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_teamCreateWithoutUsersInput, user_teamUncheckedCreateWithoutUsersInput> | user_teamCreateWithoutUsersInput[] | user_teamUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_teamCreateOrConnectWithoutUsersInput | user_teamCreateOrConnectWithoutUsersInput[]
    upsert?: user_teamUpsertWithWhereUniqueWithoutUsersInput | user_teamUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_teamCreateManyUsersInputEnvelope
    set?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    disconnect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    delete?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    connect?: user_teamWhereUniqueInput | user_teamWhereUniqueInput[]
    update?: user_teamUpdateWithWhereUniqueWithoutUsersInput | user_teamUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_teamUpdateManyWithWhereWithoutUsersInput | user_teamUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_teamScalarWhereInput | user_teamScalarWhereInput[]
  }

  export type rolesCreateNestedOneWithoutUser_roleInput = {
    create?: XOR<rolesCreateWithoutUser_roleInput, rolesUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_roleInput
    connect?: rolesWhereUniqueInput
  }

  export type teamsCreateNestedOneWithoutUser_roleInput = {
    create?: XOR<teamsCreateWithoutUser_roleInput, teamsUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: teamsCreateOrConnectWithoutUser_roleInput
    connect?: teamsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_roleInput = {
    create?: XOR<usersCreateWithoutUser_roleInput, usersUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_roleInput
    connect?: usersWhereUniqueInput
  }

  export type rolesUpdateOneWithoutUser_roleNestedInput = {
    create?: XOR<rolesCreateWithoutUser_roleInput, rolesUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_roleInput
    upsert?: rolesUpsertWithoutUser_roleInput
    disconnect?: rolesWhereInput | boolean
    delete?: rolesWhereInput | boolean
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUser_roleInput, rolesUpdateWithoutUser_roleInput>, rolesUncheckedUpdateWithoutUser_roleInput>
  }

  export type teamsUpdateOneWithoutUser_roleNestedInput = {
    create?: XOR<teamsCreateWithoutUser_roleInput, teamsUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: teamsCreateOrConnectWithoutUser_roleInput
    upsert?: teamsUpsertWithoutUser_roleInput
    disconnect?: teamsWhereInput | boolean
    delete?: teamsWhereInput | boolean
    connect?: teamsWhereUniqueInput
    update?: XOR<XOR<teamsUpdateToOneWithWhereWithoutUser_roleInput, teamsUpdateWithoutUser_roleInput>, teamsUncheckedUpdateWithoutUser_roleInput>
  }

  export type usersUpdateOneWithoutUser_roleNestedInput = {
    create?: XOR<usersCreateWithoutUser_roleInput, usersUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_roleInput
    upsert?: usersUpsertWithoutUser_roleInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_roleInput, usersUpdateWithoutUser_roleInput>, usersUncheckedUpdateWithoutUser_roleInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type teamsCreateWithoutRolesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_name: string
    tasks?: tasksCreateNestedManyWithoutTeamsInput
    user_role?: user_roleCreateNestedManyWithoutTeamsInput
    user_team?: user_teamCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutRolesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_name: string
    tasks?: tasksUncheckedCreateNestedManyWithoutTeamsInput
    user_role?: user_roleUncheckedCreateNestedManyWithoutTeamsInput
    user_team?: user_teamUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutRolesInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutRolesInput, teamsUncheckedCreateWithoutRolesInput>
  }

  export type user_roleCreateWithoutRolesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    teams?: teamsCreateNestedOneWithoutUser_roleInput
    users?: usersCreateNestedOneWithoutUser_roleInput
  }

  export type user_roleUncheckedCreateWithoutRolesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: string | null
    team_id?: string | null
  }

  export type user_roleCreateOrConnectWithoutRolesInput = {
    where: user_roleWhereUniqueInput
    create: XOR<user_roleCreateWithoutRolesInput, user_roleUncheckedCreateWithoutRolesInput>
  }

  export type user_roleCreateManyRolesInputEnvelope = {
    data: user_roleCreateManyRolesInput | user_roleCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type teamsUpsertWithoutRolesInput = {
    update: XOR<teamsUpdateWithoutRolesInput, teamsUncheckedUpdateWithoutRolesInput>
    create: XOR<teamsCreateWithoutRolesInput, teamsUncheckedCreateWithoutRolesInput>
    where?: teamsWhereInput
  }

  export type teamsUpdateToOneWithWhereWithoutRolesInput = {
    where?: teamsWhereInput
    data: XOR<teamsUpdateWithoutRolesInput, teamsUncheckedUpdateWithoutRolesInput>
  }

  export type teamsUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUpdateManyWithoutTeamsNestedInput
    user_role?: user_roleUpdateManyWithoutTeamsNestedInput
    user_team?: user_teamUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUncheckedUpdateManyWithoutTeamsNestedInput
    user_role?: user_roleUncheckedUpdateManyWithoutTeamsNestedInput
    user_team?: user_teamUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type user_roleUpsertWithWhereUniqueWithoutRolesInput = {
    where: user_roleWhereUniqueInput
    update: XOR<user_roleUpdateWithoutRolesInput, user_roleUncheckedUpdateWithoutRolesInput>
    create: XOR<user_roleCreateWithoutRolesInput, user_roleUncheckedCreateWithoutRolesInput>
  }

  export type user_roleUpdateWithWhereUniqueWithoutRolesInput = {
    where: user_roleWhereUniqueInput
    data: XOR<user_roleUpdateWithoutRolesInput, user_roleUncheckedUpdateWithoutRolesInput>
  }

  export type user_roleUpdateManyWithWhereWithoutRolesInput = {
    where: user_roleScalarWhereInput
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutRolesInput>
  }

  export type user_roleScalarWhereInput = {
    AND?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
    OR?: user_roleScalarWhereInput[]
    NOT?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
    id?: UuidFilter<"user_role"> | string
    created_at?: DateTimeFilter<"user_role"> | Date | string
    updated_at?: DateTimeFilter<"user_role"> | Date | string
    user_id?: UuidNullableFilter<"user_role"> | string | null
    team_id?: UuidNullableFilter<"user_role"> | string | null
    role_id?: UuidNullableFilter<"user_role"> | string | null
  }

  export type teamsCreateWithoutTasksInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_name: string
    roles?: rolesCreateNestedManyWithoutTeamsInput
    user_role?: user_roleCreateNestedManyWithoutTeamsInput
    user_team?: user_teamCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutTasksInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_name: string
    roles?: rolesUncheckedCreateNestedManyWithoutTeamsInput
    user_role?: user_roleUncheckedCreateNestedManyWithoutTeamsInput
    user_team?: user_teamUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutTasksInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutTasksInput, teamsUncheckedCreateWithoutTasksInput>
  }

  export type usersCreateWithoutTasksInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    username?: string | null
    first_name?: string | null
    last_name?: string | null
    email_address: string
    image_url: string
    user_role?: user_roleCreateNestedManyWithoutUsersInput
    user_team?: user_teamCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTasksInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    username?: string | null
    first_name?: string | null
    last_name?: string | null
    email_address: string
    image_url: string
    user_role?: user_roleUncheckedCreateNestedManyWithoutUsersInput
    user_team?: user_teamUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTasksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
  }

  export type teamsUpsertWithoutTasksInput = {
    update: XOR<teamsUpdateWithoutTasksInput, teamsUncheckedUpdateWithoutTasksInput>
    create: XOR<teamsCreateWithoutTasksInput, teamsUncheckedCreateWithoutTasksInput>
    where?: teamsWhereInput
  }

  export type teamsUpdateToOneWithWhereWithoutTasksInput = {
    where?: teamsWhereInput
    data: XOR<teamsUpdateWithoutTasksInput, teamsUncheckedUpdateWithoutTasksInput>
  }

  export type teamsUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
    roles?: rolesUpdateManyWithoutTeamsNestedInput
    user_role?: user_roleUpdateManyWithoutTeamsNestedInput
    user_team?: user_teamUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
    roles?: rolesUncheckedUpdateManyWithoutTeamsNestedInput
    user_role?: user_roleUncheckedUpdateManyWithoutTeamsNestedInput
    user_team?: user_teamUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type usersUpsertWithoutTasksInput = {
    update: XOR<usersUpdateWithoutTasksInput, usersUncheckedUpdateWithoutTasksInput>
    create: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTasksInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTasksInput, usersUncheckedUpdateWithoutTasksInput>
  }

  export type usersUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    user_role?: user_roleUpdateManyWithoutUsersNestedInput
    user_team?: user_teamUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    user_role?: user_roleUncheckedUpdateManyWithoutUsersNestedInput
    user_team?: user_teamUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type rolesCreateWithoutTeamsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    role_name: string
    role_description?: string | null
    user_role?: user_roleCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateWithoutTeamsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    role_name: string
    role_description?: string | null
    user_role?: user_roleUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesCreateOrConnectWithoutTeamsInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutTeamsInput, rolesUncheckedCreateWithoutTeamsInput>
  }

  export type rolesCreateManyTeamsInputEnvelope = {
    data: rolesCreateManyTeamsInput | rolesCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutTeamsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    due_date?: Date | string | null
    task_title: string
    task_description?: string | null
    users?: usersCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutTeamsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    task_creator?: string | null
    due_date?: Date | string | null
    task_title: string
    task_description?: string | null
  }

  export type tasksCreateOrConnectWithoutTeamsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutTeamsInput, tasksUncheckedCreateWithoutTeamsInput>
  }

  export type tasksCreateManyTeamsInputEnvelope = {
    data: tasksCreateManyTeamsInput | tasksCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type user_roleCreateWithoutTeamsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: rolesCreateNestedOneWithoutUser_roleInput
    users?: usersCreateNestedOneWithoutUser_roleInput
  }

  export type user_roleUncheckedCreateWithoutTeamsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: string | null
    role_id?: string | null
  }

  export type user_roleCreateOrConnectWithoutTeamsInput = {
    where: user_roleWhereUniqueInput
    create: XOR<user_roleCreateWithoutTeamsInput, user_roleUncheckedCreateWithoutTeamsInput>
  }

  export type user_roleCreateManyTeamsInputEnvelope = {
    data: user_roleCreateManyTeamsInput | user_roleCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type user_teamCreateWithoutTeamsInput = {
    created_at?: Date | string
    updated_at?: Date | string
    id?: string
    users?: usersCreateNestedOneWithoutUser_teamInput
  }

  export type user_teamUncheckedCreateWithoutTeamsInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: string | null
    id?: string
  }

  export type user_teamCreateOrConnectWithoutTeamsInput = {
    where: user_teamWhereUniqueInput
    create: XOR<user_teamCreateWithoutTeamsInput, user_teamUncheckedCreateWithoutTeamsInput>
  }

  export type user_teamCreateManyTeamsInputEnvelope = {
    data: user_teamCreateManyTeamsInput | user_teamCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type rolesUpsertWithWhereUniqueWithoutTeamsInput = {
    where: rolesWhereUniqueInput
    update: XOR<rolesUpdateWithoutTeamsInput, rolesUncheckedUpdateWithoutTeamsInput>
    create: XOR<rolesCreateWithoutTeamsInput, rolesUncheckedCreateWithoutTeamsInput>
  }

  export type rolesUpdateWithWhereUniqueWithoutTeamsInput = {
    where: rolesWhereUniqueInput
    data: XOR<rolesUpdateWithoutTeamsInput, rolesUncheckedUpdateWithoutTeamsInput>
  }

  export type rolesUpdateManyWithWhereWithoutTeamsInput = {
    where: rolesScalarWhereInput
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyWithoutTeamsInput>
  }

  export type rolesScalarWhereInput = {
    AND?: rolesScalarWhereInput | rolesScalarWhereInput[]
    OR?: rolesScalarWhereInput[]
    NOT?: rolesScalarWhereInput | rolesScalarWhereInput[]
    id?: UuidFilter<"roles"> | string
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
    team_id?: UuidNullableFilter<"roles"> | string | null
    role_name?: StringFilter<"roles"> | string
    role_description?: StringNullableFilter<"roles"> | string | null
  }

  export type tasksUpsertWithWhereUniqueWithoutTeamsInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutTeamsInput, tasksUncheckedUpdateWithoutTeamsInput>
    create: XOR<tasksCreateWithoutTeamsInput, tasksUncheckedCreateWithoutTeamsInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutTeamsInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutTeamsInput, tasksUncheckedUpdateWithoutTeamsInput>
  }

  export type tasksUpdateManyWithWhereWithoutTeamsInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutTeamsInput>
  }

  export type tasksScalarWhereInput = {
    AND?: tasksScalarWhereInput | tasksScalarWhereInput[]
    OR?: tasksScalarWhereInput[]
    NOT?: tasksScalarWhereInput | tasksScalarWhereInput[]
    id?: UuidFilter<"tasks"> | string
    created_at?: DateTimeFilter<"tasks"> | Date | string
    updated_at?: DateTimeFilter<"tasks"> | Date | string
    task_creator?: UuidNullableFilter<"tasks"> | string | null
    team_id?: UuidNullableFilter<"tasks"> | string | null
    due_date?: DateTimeNullableFilter<"tasks"> | Date | string | null
    task_title?: StringFilter<"tasks"> | string
    task_description?: StringNullableFilter<"tasks"> | string | null
  }

  export type user_roleUpsertWithWhereUniqueWithoutTeamsInput = {
    where: user_roleWhereUniqueInput
    update: XOR<user_roleUpdateWithoutTeamsInput, user_roleUncheckedUpdateWithoutTeamsInput>
    create: XOR<user_roleCreateWithoutTeamsInput, user_roleUncheckedCreateWithoutTeamsInput>
  }

  export type user_roleUpdateWithWhereUniqueWithoutTeamsInput = {
    where: user_roleWhereUniqueInput
    data: XOR<user_roleUpdateWithoutTeamsInput, user_roleUncheckedUpdateWithoutTeamsInput>
  }

  export type user_roleUpdateManyWithWhereWithoutTeamsInput = {
    where: user_roleScalarWhereInput
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutTeamsInput>
  }

  export type user_teamUpsertWithWhereUniqueWithoutTeamsInput = {
    where: user_teamWhereUniqueInput
    update: XOR<user_teamUpdateWithoutTeamsInput, user_teamUncheckedUpdateWithoutTeamsInput>
    create: XOR<user_teamCreateWithoutTeamsInput, user_teamUncheckedCreateWithoutTeamsInput>
  }

  export type user_teamUpdateWithWhereUniqueWithoutTeamsInput = {
    where: user_teamWhereUniqueInput
    data: XOR<user_teamUpdateWithoutTeamsInput, user_teamUncheckedUpdateWithoutTeamsInput>
  }

  export type user_teamUpdateManyWithWhereWithoutTeamsInput = {
    where: user_teamScalarWhereInput
    data: XOR<user_teamUpdateManyMutationInput, user_teamUncheckedUpdateManyWithoutTeamsInput>
  }

  export type user_teamScalarWhereInput = {
    AND?: user_teamScalarWhereInput | user_teamScalarWhereInput[]
    OR?: user_teamScalarWhereInput[]
    NOT?: user_teamScalarWhereInput | user_teamScalarWhereInput[]
    created_at?: DateTimeFilter<"user_team"> | Date | string
    updated_at?: DateTimeFilter<"user_team"> | Date | string
    user_id?: UuidNullableFilter<"user_team"> | string | null
    team_id?: UuidNullableFilter<"user_team"> | string | null
    id?: UuidFilter<"user_team"> | string
  }

  export type teamsCreateWithoutUser_teamInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_name: string
    roles?: rolesCreateNestedManyWithoutTeamsInput
    tasks?: tasksCreateNestedManyWithoutTeamsInput
    user_role?: user_roleCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutUser_teamInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_name: string
    roles?: rolesUncheckedCreateNestedManyWithoutTeamsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutTeamsInput
    user_role?: user_roleUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutUser_teamInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutUser_teamInput, teamsUncheckedCreateWithoutUser_teamInput>
  }

  export type usersCreateWithoutUser_teamInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    username?: string | null
    first_name?: string | null
    last_name?: string | null
    email_address: string
    image_url: string
    tasks?: tasksCreateNestedManyWithoutUsersInput
    user_role?: user_roleCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_teamInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    username?: string | null
    first_name?: string | null
    last_name?: string | null
    email_address: string
    image_url: string
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    user_role?: user_roleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_teamInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_teamInput, usersUncheckedCreateWithoutUser_teamInput>
  }

  export type teamsUpsertWithoutUser_teamInput = {
    update: XOR<teamsUpdateWithoutUser_teamInput, teamsUncheckedUpdateWithoutUser_teamInput>
    create: XOR<teamsCreateWithoutUser_teamInput, teamsUncheckedCreateWithoutUser_teamInput>
    where?: teamsWhereInput
  }

  export type teamsUpdateToOneWithWhereWithoutUser_teamInput = {
    where?: teamsWhereInput
    data: XOR<teamsUpdateWithoutUser_teamInput, teamsUncheckedUpdateWithoutUser_teamInput>
  }

  export type teamsUpdateWithoutUser_teamInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
    roles?: rolesUpdateManyWithoutTeamsNestedInput
    tasks?: tasksUpdateManyWithoutTeamsNestedInput
    user_role?: user_roleUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutUser_teamInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
    roles?: rolesUncheckedUpdateManyWithoutTeamsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutTeamsNestedInput
    user_role?: user_roleUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type usersUpsertWithoutUser_teamInput = {
    update: XOR<usersUpdateWithoutUser_teamInput, usersUncheckedUpdateWithoutUser_teamInput>
    create: XOR<usersCreateWithoutUser_teamInput, usersUncheckedCreateWithoutUser_teamInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_teamInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_teamInput, usersUncheckedUpdateWithoutUser_teamInput>
  }

  export type usersUpdateWithoutUser_teamInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    user_role?: user_roleUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_teamInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    user_role?: user_roleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tasksCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    due_date?: Date | string | null
    task_title: string
    task_description?: string | null
    teams?: teamsCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_id?: string | null
    due_date?: Date | string | null
    task_title: string
    task_description?: string | null
  }

  export type tasksCreateOrConnectWithoutUsersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput>
  }

  export type tasksCreateManyUsersInputEnvelope = {
    data: tasksCreateManyUsersInput | tasksCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_roleCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: rolesCreateNestedOneWithoutUser_roleInput
    teams?: teamsCreateNestedOneWithoutUser_roleInput
  }

  export type user_roleUncheckedCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_id?: string | null
    role_id?: string | null
  }

  export type user_roleCreateOrConnectWithoutUsersInput = {
    where: user_roleWhereUniqueInput
    create: XOR<user_roleCreateWithoutUsersInput, user_roleUncheckedCreateWithoutUsersInput>
  }

  export type user_roleCreateManyUsersInputEnvelope = {
    data: user_roleCreateManyUsersInput | user_roleCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_teamCreateWithoutUsersInput = {
    created_at?: Date | string
    updated_at?: Date | string
    id?: string
    teams?: teamsCreateNestedOneWithoutUser_teamInput
  }

  export type user_teamUncheckedCreateWithoutUsersInput = {
    created_at?: Date | string
    updated_at?: Date | string
    team_id?: string | null
    id?: string
  }

  export type user_teamCreateOrConnectWithoutUsersInput = {
    where: user_teamWhereUniqueInput
    create: XOR<user_teamCreateWithoutUsersInput, user_teamUncheckedCreateWithoutUsersInput>
  }

  export type user_teamCreateManyUsersInputEnvelope = {
    data: user_teamCreateManyUsersInput | user_teamCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type tasksUpsertWithWhereUniqueWithoutUsersInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutUsersInput, tasksUncheckedUpdateWithoutUsersInput>
    create: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutUsersInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutUsersInput, tasksUncheckedUpdateWithoutUsersInput>
  }

  export type tasksUpdateManyWithWhereWithoutUsersInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_roleUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_roleWhereUniqueInput
    update: XOR<user_roleUpdateWithoutUsersInput, user_roleUncheckedUpdateWithoutUsersInput>
    create: XOR<user_roleCreateWithoutUsersInput, user_roleUncheckedCreateWithoutUsersInput>
  }

  export type user_roleUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_roleWhereUniqueInput
    data: XOR<user_roleUpdateWithoutUsersInput, user_roleUncheckedUpdateWithoutUsersInput>
  }

  export type user_roleUpdateManyWithWhereWithoutUsersInput = {
    where: user_roleScalarWhereInput
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_teamUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_teamWhereUniqueInput
    update: XOR<user_teamUpdateWithoutUsersInput, user_teamUncheckedUpdateWithoutUsersInput>
    create: XOR<user_teamCreateWithoutUsersInput, user_teamUncheckedCreateWithoutUsersInput>
  }

  export type user_teamUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_teamWhereUniqueInput
    data: XOR<user_teamUpdateWithoutUsersInput, user_teamUncheckedUpdateWithoutUsersInput>
  }

  export type user_teamUpdateManyWithWhereWithoutUsersInput = {
    where: user_teamScalarWhereInput
    data: XOR<user_teamUpdateManyMutationInput, user_teamUncheckedUpdateManyWithoutUsersInput>
  }

  export type rolesCreateWithoutUser_roleInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    role_name: string
    role_description?: string | null
    teams?: teamsCreateNestedOneWithoutRolesInput
  }

  export type rolesUncheckedCreateWithoutUser_roleInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_id?: string | null
    role_name: string
    role_description?: string | null
  }

  export type rolesCreateOrConnectWithoutUser_roleInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUser_roleInput, rolesUncheckedCreateWithoutUser_roleInput>
  }

  export type teamsCreateWithoutUser_roleInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_name: string
    roles?: rolesCreateNestedManyWithoutTeamsInput
    tasks?: tasksCreateNestedManyWithoutTeamsInput
    user_team?: user_teamCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutUser_roleInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_name: string
    roles?: rolesUncheckedCreateNestedManyWithoutTeamsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutTeamsInput
    user_team?: user_teamUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutUser_roleInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutUser_roleInput, teamsUncheckedCreateWithoutUser_roleInput>
  }

  export type usersCreateWithoutUser_roleInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    username?: string | null
    first_name?: string | null
    last_name?: string | null
    email_address: string
    image_url: string
    tasks?: tasksCreateNestedManyWithoutUsersInput
    user_team?: user_teamCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_roleInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    username?: string | null
    first_name?: string | null
    last_name?: string | null
    email_address: string
    image_url: string
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    user_team?: user_teamUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_roleInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_roleInput, usersUncheckedCreateWithoutUser_roleInput>
  }

  export type rolesUpsertWithoutUser_roleInput = {
    update: XOR<rolesUpdateWithoutUser_roleInput, rolesUncheckedUpdateWithoutUser_roleInput>
    create: XOR<rolesCreateWithoutUser_roleInput, rolesUncheckedCreateWithoutUser_roleInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUser_roleInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUser_roleInput, rolesUncheckedUpdateWithoutUser_roleInput>
  }

  export type rolesUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: teamsUpdateOneWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type teamsUpsertWithoutUser_roleInput = {
    update: XOR<teamsUpdateWithoutUser_roleInput, teamsUncheckedUpdateWithoutUser_roleInput>
    create: XOR<teamsCreateWithoutUser_roleInput, teamsUncheckedCreateWithoutUser_roleInput>
    where?: teamsWhereInput
  }

  export type teamsUpdateToOneWithWhereWithoutUser_roleInput = {
    where?: teamsWhereInput
    data: XOR<teamsUpdateWithoutUser_roleInput, teamsUncheckedUpdateWithoutUser_roleInput>
  }

  export type teamsUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
    roles?: rolesUpdateManyWithoutTeamsNestedInput
    tasks?: tasksUpdateManyWithoutTeamsNestedInput
    user_team?: user_teamUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_name?: StringFieldUpdateOperationsInput | string
    roles?: rolesUncheckedUpdateManyWithoutTeamsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutTeamsNestedInput
    user_team?: user_teamUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type usersUpsertWithoutUser_roleInput = {
    update: XOR<usersUpdateWithoutUser_roleInput, usersUncheckedUpdateWithoutUser_roleInput>
    create: XOR<usersCreateWithoutUser_roleInput, usersUncheckedCreateWithoutUser_roleInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_roleInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_roleInput, usersUncheckedUpdateWithoutUser_roleInput>
  }

  export type usersUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    user_team?: user_teamUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    user_team?: user_teamUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type user_roleCreateManyRolesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: string | null
    team_id?: string | null
  }

  export type user_roleUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: teamsUpdateOneWithoutUser_roleNestedInput
    users?: usersUpdateOneWithoutUser_roleNestedInput
  }

  export type user_roleUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_roleUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolesCreateManyTeamsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    role_name: string
    role_description?: string | null
  }

  export type tasksCreateManyTeamsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    task_creator?: string | null
    due_date?: Date | string | null
    task_title: string
    task_description?: string | null
  }

  export type user_roleCreateManyTeamsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: string | null
    role_id?: string | null
  }

  export type user_teamCreateManyTeamsInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: string | null
    id?: string
  }

  export type rolesUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    user_role?: user_roleUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    user_role?: user_roleUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_creator?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_creator?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_roleUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUpdateOneWithoutUser_roleNestedInput
    users?: usersUpdateOneWithoutUser_roleNestedInput
  }

  export type user_roleUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_roleUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_teamUpdateWithoutTeamsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneWithoutUser_teamNestedInput
  }

  export type user_teamUncheckedUpdateWithoutTeamsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type user_teamUncheckedUpdateManyWithoutTeamsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type tasksCreateManyUsersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_id?: string | null
    due_date?: Date | string | null
    task_title: string
    task_description?: string | null
  }

  export type user_roleCreateManyUsersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    team_id?: string | null
    role_id?: string | null
  }

  export type user_teamCreateManyUsersInput = {
    created_at?: Date | string
    updated_at?: Date | string
    team_id?: string | null
    id?: string
  }

  export type tasksUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: teamsUpdateOneWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_title?: StringFieldUpdateOperationsInput | string
    task_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_roleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUpdateOneWithoutUser_roleNestedInput
    teams?: teamsUpdateOneWithoutUser_roleNestedInput
  }

  export type user_roleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_roleUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_teamUpdateWithoutUsersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    teams?: teamsUpdateOneWithoutUser_teamNestedInput
  }

  export type user_teamUncheckedUpdateWithoutUsersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type user_teamUncheckedUpdateManyWithoutUsersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RolesCountOutputTypeDefaultArgs instead
     */
    export type RolesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamsCountOutputTypeDefaultArgs instead
     */
    export type TeamsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rolesDefaultArgs instead
     */
    export type rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tasksDefaultArgs instead
     */
    export type tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tasksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use teamsDefaultArgs instead
     */
    export type teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teamsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_teamDefaultArgs instead
     */
    export type user_teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_teamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_roleDefaultArgs instead
     */
    export type user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_roleDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}