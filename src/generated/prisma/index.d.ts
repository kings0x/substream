
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Plans
 * 
 */
export type Plans = $Result.DefaultSelection<Prisma.$PlansPayload>
/**
 * Model Subscriptions
 * 
 */
export type Subscriptions = $Result.DefaultSelection<Prisma.$SubscriptionsPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model PaymentMethods
 * 
 */
export type PaymentMethods = $Result.DefaultSelection<Prisma.$PaymentMethodsPayload>
/**
 * Model Invoices
 * 
 */
export type Invoices = $Result.DefaultSelection<Prisma.$InvoicesPayload>
/**
 * Model Refunds
 * 
 */
export type Refunds = $Result.DefaultSelection<Prisma.$RefundsPayload>
/**
 * Model WebhookEvents
 * 
 */
export type WebhookEvents = $Result.DefaultSelection<Prisma.$WebhookEventsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Currency: {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  NGN: 'NGN'
};

export type Currency = (typeof Currency)[keyof typeof Currency]


export const BillingInterval: {
  monthly: 'monthly',
  yearly: 'yearly'
};

export type BillingInterval = (typeof BillingInterval)[keyof typeof BillingInterval]


export const SubscriptionStatus: {
  active: 'active',
  past_due: 'past_due',
  cancelled: 'cancelled',
  trailing: 'trailing',
  expired: 'expired'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const PaymentStatus: {
  pending: 'pending',
  succeeded: 'succeeded',
  failed: 'failed',
  refunded: 'refunded'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentProviders: {
  stripe: 'stripe'
};

export type PaymentProviders = (typeof PaymentProviders)[keyof typeof PaymentProviders]


export const PaymentType: {
  card: 'card'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const CardBrand: {
  visa: 'visa',
  mastercard: 'mastercard'
};

export type CardBrand = (typeof CardBrand)[keyof typeof CardBrand]


export const InvoiceStatus: {
  draft: 'draft',
  open: 'open',
  paid: 'paid',
  void: 'void',
  uncollectible: 'uncollectible'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const RefundStatus: {
  pending: 'pending',
  succeeded: 'succeeded',
  failed: 'failed'
};

export type RefundStatus = (typeof RefundStatus)[keyof typeof RefundStatus]


export const WebhookEventProcessedStatus: {
  pending: 'pending',
  processed: 'processed',
  failed: 'failed'
};

export type WebhookEventProcessedStatus = (typeof WebhookEventProcessedStatus)[keyof typeof WebhookEventProcessedStatus]

}

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

export type BillingInterval = $Enums.BillingInterval

export const BillingInterval: typeof $Enums.BillingInterval

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentProviders = $Enums.PaymentProviders

export const PaymentProviders: typeof $Enums.PaymentProviders

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type CardBrand = $Enums.CardBrand

export const CardBrand: typeof $Enums.CardBrand

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type RefundStatus = $Enums.RefundStatus

export const RefundStatus: typeof $Enums.RefundStatus

export type WebhookEventProcessedStatus = $Enums.WebhookEventProcessedStatus

export const WebhookEventProcessedStatus: typeof $Enums.WebhookEventProcessedStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plans`: Exposes CRUD operations for the **Plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plans.findMany()
    * ```
    */
  get plans(): Prisma.PlansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptions`: Exposes CRUD operations for the **Subscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscriptions.findMany()
    * ```
    */
  get subscriptions(): Prisma.SubscriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMethods`: Exposes CRUD operations for the **PaymentMethods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethods.findMany()
    * ```
    */
  get paymentMethods(): Prisma.PaymentMethodsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **Invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.InvoicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refunds`: Exposes CRUD operations for the **Refunds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refunds
    * const refunds = await prisma.refunds.findMany()
    * ```
    */
  get refunds(): Prisma.RefundsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookEvents`: Exposes CRUD operations for the **WebhookEvents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookEvents
    * const webhookEvents = await prisma.webhookEvents.findMany()
    * ```
    */
  get webhookEvents(): Prisma.WebhookEventsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Users: 'Users',
    Plans: 'Plans',
    Subscriptions: 'Subscriptions',
    Payments: 'Payments',
    PaymentMethods: 'PaymentMethods',
    Invoices: 'Invoices',
    Refunds: 'Refunds',
    WebhookEvents: 'WebhookEvents'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "plans" | "subscriptions" | "payments" | "paymentMethods" | "invoices" | "refunds" | "webhookEvents"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Plans: {
        payload: Prisma.$PlansPayload<ExtArgs>
        fields: Prisma.PlansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          findFirst: {
            args: Prisma.PlansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          findMany: {
            args: Prisma.PlansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>[]
          }
          create: {
            args: Prisma.PlansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          createMany: {
            args: Prisma.PlansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>[]
          }
          delete: {
            args: Prisma.PlansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          update: {
            args: Prisma.PlansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          deleteMany: {
            args: Prisma.PlansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlansUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>[]
          }
          upsert: {
            args: Prisma.PlansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          aggregate: {
            args: Prisma.PlansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlans>
          }
          groupBy: {
            args: Prisma.PlansGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlansGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlansCountArgs<ExtArgs>
            result: $Utils.Optional<PlansCountAggregateOutputType> | number
          }
        }
      }
      Subscriptions: {
        payload: Prisma.$SubscriptionsPayload<ExtArgs>
        fields: Prisma.SubscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          findMany: {
            args: Prisma.SubscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>[]
          }
          create: {
            args: Prisma.SubscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          createMany: {
            args: Prisma.SubscriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          update: {
            args: Prisma.SubscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptions>
          }
          groupBy: {
            args: Prisma.SubscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethods: {
        payload: Prisma.$PaymentMethodsPayload<ExtArgs>
        fields: Prisma.PaymentMethodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          update: {
            args: Prisma.PaymentMethodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentMethodsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentMethodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethods>
          }
          groupBy: {
            args: Prisma.PaymentMethodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodsCountAggregateOutputType> | number
          }
        }
      }
      Invoices: {
        payload: Prisma.$InvoicesPayload<ExtArgs>
        fields: Prisma.InvoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          findFirst: {
            args: Prisma.InvoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          findMany: {
            args: Prisma.InvoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>[]
          }
          create: {
            args: Prisma.InvoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          createMany: {
            args: Prisma.InvoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>[]
          }
          delete: {
            args: Prisma.InvoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          update: {
            args: Prisma.InvoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          deleteMany: {
            args: Prisma.InvoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>[]
          }
          upsert: {
            args: Prisma.InvoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.InvoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
          }
        }
      }
      Refunds: {
        payload: Prisma.$RefundsPayload<ExtArgs>
        fields: Prisma.RefundsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefundsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefundsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundsPayload>
          }
          findFirst: {
            args: Prisma.RefundsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefundsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundsPayload>
          }
          findMany: {
            args: Prisma.RefundsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundsPayload>[]
          }
          create: {
            args: Prisma.RefundsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundsPayload>
          }
          createMany: {
            args: Prisma.RefundsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefundsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundsPayload>[]
          }
          delete: {
            args: Prisma.RefundsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundsPayload>
          }
          update: {
            args: Prisma.RefundsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundsPayload>
          }
          deleteMany: {
            args: Prisma.RefundsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefundsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefundsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundsPayload>[]
          }
          upsert: {
            args: Prisma.RefundsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundsPayload>
          }
          aggregate: {
            args: Prisma.RefundsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefunds>
          }
          groupBy: {
            args: Prisma.RefundsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefundsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefundsCountArgs<ExtArgs>
            result: $Utils.Optional<RefundsCountAggregateOutputType> | number
          }
        }
      }
      WebhookEvents: {
        payload: Prisma.$WebhookEventsPayload<ExtArgs>
        fields: Prisma.WebhookEventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookEventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookEventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventsPayload>
          }
          findFirst: {
            args: Prisma.WebhookEventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookEventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventsPayload>
          }
          findMany: {
            args: Prisma.WebhookEventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventsPayload>[]
          }
          create: {
            args: Prisma.WebhookEventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventsPayload>
          }
          createMany: {
            args: Prisma.WebhookEventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookEventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventsPayload>[]
          }
          delete: {
            args: Prisma.WebhookEventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventsPayload>
          }
          update: {
            args: Prisma.WebhookEventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventsPayload>
          }
          deleteMany: {
            args: Prisma.WebhookEventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookEventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookEventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventsPayload>[]
          }
          upsert: {
            args: Prisma.WebhookEventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventsPayload>
          }
          aggregate: {
            args: Prisma.WebhookEventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookEvents>
          }
          groupBy: {
            args: Prisma.WebhookEventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookEventsCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    plans?: PlansOmit
    subscriptions?: SubscriptionsOmit
    payments?: PaymentsOmit
    paymentMethods?: PaymentMethodsOmit
    invoices?: InvoicesOmit
    refunds?: RefundsOmit
    webhookEvents?: WebhookEventsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Subscriptions: number
    Payments: number
    PaymentMethods: number
    Invoices: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscriptions?: boolean | UsersCountOutputTypeCountSubscriptionsArgs
    Payments?: boolean | UsersCountOutputTypeCountPaymentsArgs
    PaymentMethods?: boolean | UsersCountOutputTypeCountPaymentMethodsArgs
    Invoices?: boolean | UsersCountOutputTypeCountInvoicesArgs
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
  export type UsersCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPaymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
  }


  /**
   * Count Type PlansCountOutputType
   */

  export type PlansCountOutputType = {
    Subscriptions: number
  }

  export type PlansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscriptions?: boolean | PlansCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlansCountOutputType
     */
    select?: PlansCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionsWhereInput
  }


  /**
   * Count Type SubscriptionsCountOutputType
   */

  export type SubscriptionsCountOutputType = {
    Payments: number
    Invoices: number
  }

  export type SubscriptionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payments?: boolean | SubscriptionsCountOutputTypeCountPaymentsArgs
    Invoices?: boolean | SubscriptionsCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionsCountOutputType without action
   */
  export type SubscriptionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionsCountOutputType
     */
    select?: SubscriptionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionsCountOutputType without action
   */
  export type SubscriptionsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }

  /**
   * SubscriptionsCountOutputType without action
   */
  export type SubscriptionsCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
  }


  /**
   * Count Type PaymentsCountOutputType
   */

  export type PaymentsCountOutputType = {
    Refunds: number
  }

  export type PaymentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Refunds?: boolean | PaymentsCountOutputTypeCountRefundsArgs
  }

  // Custom InputTypes
  /**
   * PaymentsCountOutputType without action
   */
  export type PaymentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsCountOutputType
     */
    select?: PaymentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentsCountOutputType without action
   */
  export type PaymentsCountOutputTypeCountRefundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundsWhereInput
  }


  /**
   * Count Type PaymentMethodsCountOutputType
   */

  export type PaymentMethodsCountOutputType = {
    Payments: number
    Invoices: number
  }

  export type PaymentMethodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payments?: boolean | PaymentMethodsCountOutputTypeCountPaymentsArgs
    Invoices?: boolean | PaymentMethodsCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * PaymentMethodsCountOutputType without action
   */
  export type PaymentMethodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodsCountOutputType
     */
    select?: PaymentMethodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentMethodsCountOutputType without action
   */
  export type PaymentMethodsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }

  /**
   * PaymentMethodsCountOutputType without action
   */
  export type PaymentMethodsCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
  }


  /**
   * Count Type InvoicesCountOutputType
   */

  export type InvoicesCountOutputType = {
    Payments: number
  }

  export type InvoicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payments?: boolean | InvoicesCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoicesCountOutputType
     */
    select?: InvoicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    phone_number: number | null
  }

  export type UsersSumAggregateOutputType = {
    phone_number: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password_hash: string | null
    avatar: string | null
    google_id: string | null
    code: string | null
    code_generated_at: Date | null
    is_verified: boolean | null
    refresh_token: string | null
    refresh_generated_at: Date | null
    google_refresh_token: string | null
    phone_number: number | null
    address_line_1: string | null
    address_line_2: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password_hash: string | null
    avatar: string | null
    google_id: string | null
    code: string | null
    code_generated_at: Date | null
    is_verified: boolean | null
    refresh_token: string | null
    refresh_generated_at: Date | null
    google_refresh_token: string | null
    phone_number: number | null
    address_line_1: string | null
    address_line_2: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password_hash: number
    avatar: number
    google_id: number
    code: number
    code_generated_at: number
    is_verified: number
    refresh_token: number
    refresh_generated_at: number
    google_refresh_token: number
    phone_number: number
    address_line_1: number
    address_line_2: number
    city: number
    state: number
    postal_code: number
    country: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    phone_number?: true
  }

  export type UsersSumAggregateInputType = {
    phone_number?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    avatar?: true
    google_id?: true
    code?: true
    code_generated_at?: true
    is_verified?: true
    refresh_token?: true
    refresh_generated_at?: true
    google_refresh_token?: true
    phone_number?: true
    address_line_1?: true
    address_line_2?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    avatar?: true
    google_id?: true
    code?: true
    code_generated_at?: true
    is_verified?: true
    refresh_token?: true
    refresh_generated_at?: true
    google_refresh_token?: true
    phone_number?: true
    address_line_1?: true
    address_line_2?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    avatar?: true
    google_id?: true
    code?: true
    code_generated_at?: true
    is_verified?: true
    refresh_token?: true
    refresh_generated_at?: true
    google_refresh_token?: true
    phone_number?: true
    address_line_1?: true
    address_line_2?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
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




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    email: string
    password_hash: string | null
    avatar: string | null
    google_id: string | null
    code: string | null
    code_generated_at: Date | null
    is_verified: boolean
    refresh_token: string | null
    refresh_generated_at: Date | null
    google_refresh_token: string | null
    phone_number: number | null
    address_line_1: string | null
    address_line_2: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    role: string | null
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    avatar?: boolean
    google_id?: boolean
    code?: boolean
    code_generated_at?: boolean
    is_verified?: boolean
    refresh_token?: boolean
    refresh_generated_at?: boolean
    google_refresh_token?: boolean
    phone_number?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    Subscriptions?: boolean | Users$SubscriptionsArgs<ExtArgs>
    Payments?: boolean | Users$PaymentsArgs<ExtArgs>
    PaymentMethods?: boolean | Users$PaymentMethodsArgs<ExtArgs>
    Invoices?: boolean | Users$InvoicesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    avatar?: boolean
    google_id?: boolean
    code?: boolean
    code_generated_at?: boolean
    is_verified?: boolean
    refresh_token?: boolean
    refresh_generated_at?: boolean
    google_refresh_token?: boolean
    phone_number?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    avatar?: boolean
    google_id?: boolean
    code?: boolean
    code_generated_at?: boolean
    is_verified?: boolean
    refresh_token?: boolean
    refresh_generated_at?: boolean
    google_refresh_token?: boolean
    phone_number?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    avatar?: boolean
    google_id?: boolean
    code?: boolean
    code_generated_at?: boolean
    is_verified?: boolean
    refresh_token?: boolean
    refresh_generated_at?: boolean
    google_refresh_token?: boolean
    phone_number?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "password_hash" | "avatar" | "google_id" | "code" | "code_generated_at" | "is_verified" | "refresh_token" | "refresh_generated_at" | "google_refresh_token" | "phone_number" | "address_line_1" | "address_line_2" | "city" | "state" | "postal_code" | "country" | "role" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscriptions?: boolean | Users$SubscriptionsArgs<ExtArgs>
    Payments?: boolean | Users$PaymentsArgs<ExtArgs>
    PaymentMethods?: boolean | Users$PaymentMethodsArgs<ExtArgs>
    Invoices?: boolean | Users$InvoicesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Subscriptions: Prisma.$SubscriptionsPayload<ExtArgs>[]
      Payments: Prisma.$PaymentsPayload<ExtArgs>[]
      PaymentMethods: Prisma.$PaymentMethodsPayload<ExtArgs>[]
      Invoices: Prisma.$InvoicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      last_name: string
      email: string
      password_hash: string | null
      avatar: string | null
      google_id: string | null
      code: string | null
      code_generated_at: Date | null
      is_verified: boolean
      refresh_token: string | null
      refresh_generated_at: Date | null
      google_refresh_token: string | null
      phone_number: number | null
      address_line_1: string | null
      address_line_2: string | null
      city: string | null
      state: string | null
      postal_code: string | null
      country: string | null
      role: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
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
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Subscriptions<T extends Users$SubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$SubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payments<T extends Users$PaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$PaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PaymentMethods<T extends Users$PaymentMethodsArgs<ExtArgs> = {}>(args?: Subset<T, Users$PaymentMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Invoices<T extends Users$InvoicesArgs<ExtArgs> = {}>(args?: Subset<T, Users$InvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly first_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password_hash: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly google_id: FieldRef<"Users", 'String'>
    readonly code: FieldRef<"Users", 'String'>
    readonly code_generated_at: FieldRef<"Users", 'DateTime'>
    readonly is_verified: FieldRef<"Users", 'Boolean'>
    readonly refresh_token: FieldRef<"Users", 'String'>
    readonly refresh_generated_at: FieldRef<"Users", 'DateTime'>
    readonly google_refresh_token: FieldRef<"Users", 'String'>
    readonly phone_number: FieldRef<"Users", 'Int'>
    readonly address_line_1: FieldRef<"Users", 'String'>
    readonly address_line_2: FieldRef<"Users", 'String'>
    readonly city: FieldRef<"Users", 'String'>
    readonly state: FieldRef<"Users", 'String'>
    readonly postal_code: FieldRef<"Users", 'String'>
    readonly country: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Subscriptions
   */
  export type Users$SubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    where?: SubscriptionsWhereInput
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    cursor?: SubscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Users.Payments
   */
  export type Users$PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Users.PaymentMethods
   */
  export type Users$PaymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    where?: PaymentMethodsWhereInput
    orderBy?: PaymentMethodsOrderByWithRelationInput | PaymentMethodsOrderByWithRelationInput[]
    cursor?: PaymentMethodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentMethodsScalarFieldEnum | PaymentMethodsScalarFieldEnum[]
  }

  /**
   * Users.Invoices
   */
  export type Users$InvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    cursor?: InvoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Plans
   */

  export type AggregatePlans = {
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  export type PlansAvgAggregateOutputType = {
    price_cents: number | null
  }

  export type PlansSumAggregateOutputType = {
    price_cents: number | null
  }

  export type PlansMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price_cents: number | null
    currency: $Enums.Currency | null
    billing_interval: $Enums.BillingInterval | null
    trial_period_days: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PlansMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price_cents: number | null
    currency: $Enums.Currency | null
    billing_interval: $Enums.BillingInterval | null
    trial_period_days: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PlansCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price_cents: number
    currency: number
    billing_interval: number
    trial_period_days: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PlansAvgAggregateInputType = {
    price_cents?: true
  }

  export type PlansSumAggregateInputType = {
    price_cents?: true
  }

  export type PlansMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price_cents?: true
    currency?: true
    billing_interval?: true
    trial_period_days?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type PlansMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price_cents?: true
    currency?: true
    billing_interval?: true
    trial_period_days?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type PlansCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price_cents?: true
    currency?: true
    billing_interval?: true
    trial_period_days?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PlansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to aggregate.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlansMaxAggregateInputType
  }

  export type GetPlansAggregateType<T extends PlansAggregateArgs> = {
        [P in keyof T & keyof AggregatePlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlans[P]>
      : GetScalarType<T[P], AggregatePlans[P]>
  }




  export type PlansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlansWhereInput
    orderBy?: PlansOrderByWithAggregationInput | PlansOrderByWithAggregationInput[]
    by: PlansScalarFieldEnum[] | PlansScalarFieldEnum
    having?: PlansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlansCountAggregateInputType | true
    _avg?: PlansAvgAggregateInputType
    _sum?: PlansSumAggregateInputType
    _min?: PlansMinAggregateInputType
    _max?: PlansMaxAggregateInputType
  }

  export type PlansGroupByOutputType = {
    id: string
    name: string
    description: string
    price_cents: number
    currency: $Enums.Currency
    billing_interval: $Enums.BillingInterval
    trial_period_days: string | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  type GetPlansGroupByPayload<T extends PlansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlansGroupByOutputType[P]>
            : GetScalarType<T[P], PlansGroupByOutputType[P]>
        }
      >
    >


  export type PlansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price_cents?: boolean
    currency?: boolean
    billing_interval?: boolean
    trial_period_days?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    Subscriptions?: boolean | Plans$SubscriptionsArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plans"]>

  export type PlansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price_cents?: boolean
    currency?: boolean
    billing_interval?: boolean
    trial_period_days?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["plans"]>

  export type PlansSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price_cents?: boolean
    currency?: boolean
    billing_interval?: boolean
    trial_period_days?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["plans"]>

  export type PlansSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price_cents?: boolean
    currency?: boolean
    billing_interval?: boolean
    trial_period_days?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PlansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price_cents" | "currency" | "billing_interval" | "trial_period_days" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["plans"]>
  export type PlansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscriptions?: boolean | Plans$SubscriptionsArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlansIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plans"
    objects: {
      Subscriptions: Prisma.$SubscriptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price_cents: number
      currency: $Enums.Currency
      billing_interval: $Enums.BillingInterval
      trial_period_days: string | null
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["plans"]>
    composites: {}
  }

  type PlansGetPayload<S extends boolean | null | undefined | PlansDefaultArgs> = $Result.GetResult<Prisma.$PlansPayload, S>

  type PlansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlansCountAggregateInputType | true
    }

  export interface PlansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plans'], meta: { name: 'Plans' } }
    /**
     * Find zero or one Plans that matches the filter.
     * @param {PlansFindUniqueArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlansFindUniqueArgs>(args: SelectSubset<T, PlansFindUniqueArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlansFindUniqueOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlansFindUniqueOrThrowArgs>(args: SelectSubset<T, PlansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindFirstArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlansFindFirstArgs>(args?: SelectSubset<T, PlansFindFirstArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindFirstOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlansFindFirstOrThrowArgs>(args?: SelectSubset<T, PlansFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plans.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plansWithIdOnly = await prisma.plans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlansFindManyArgs>(args?: SelectSubset<T, PlansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plans.
     * @param {PlansCreateArgs} args - Arguments to create a Plans.
     * @example
     * // Create one Plans
     * const Plans = await prisma.plans.create({
     *   data: {
     *     // ... data to create a Plans
     *   }
     * })
     * 
     */
    create<T extends PlansCreateArgs>(args: SelectSubset<T, PlansCreateArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlansCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plans = await prisma.plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlansCreateManyArgs>(args?: SelectSubset<T, PlansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlansCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plans = await prisma.plans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const plansWithIdOnly = await prisma.plans.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlansCreateManyAndReturnArgs>(args?: SelectSubset<T, PlansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plans.
     * @param {PlansDeleteArgs} args - Arguments to delete one Plans.
     * @example
     * // Delete one Plans
     * const Plans = await prisma.plans.delete({
     *   where: {
     *     // ... filter to delete one Plans
     *   }
     * })
     * 
     */
    delete<T extends PlansDeleteArgs>(args: SelectSubset<T, PlansDeleteArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plans.
     * @param {PlansUpdateArgs} args - Arguments to update one Plans.
     * @example
     * // Update one Plans
     * const plans = await prisma.plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlansUpdateArgs>(args: SelectSubset<T, PlansUpdateArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlansDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlansDeleteManyArgs>(args?: SelectSubset<T, PlansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlansUpdateManyArgs>(args: SelectSubset<T, PlansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlansUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const plansWithIdOnly = await prisma.plans.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlansUpdateManyAndReturnArgs>(args: SelectSubset<T, PlansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plans.
     * @param {PlansUpsertArgs} args - Arguments to update or create a Plans.
     * @example
     * // Update or create a Plans
     * const plans = await prisma.plans.upsert({
     *   create: {
     *     // ... data to create a Plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plans we want to update
     *   }
     * })
     */
    upsert<T extends PlansUpsertArgs>(args: SelectSubset<T, PlansUpsertArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plans.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlansCountArgs>(
      args?: Subset<T, PlansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlansAggregateArgs>(args: Subset<T, PlansAggregateArgs>): Prisma.PrismaPromise<GetPlansAggregateType<T>>

    /**
     * Group by Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansGroupByArgs} args - Group by arguments.
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
      T extends PlansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlansGroupByArgs['orderBy'] }
        : { orderBy?: PlansGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plans model
   */
  readonly fields: PlansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Subscriptions<T extends Plans$SubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Plans$SubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plans model
   */
  interface PlansFieldRefs {
    readonly id: FieldRef<"Plans", 'String'>
    readonly name: FieldRef<"Plans", 'String'>
    readonly description: FieldRef<"Plans", 'String'>
    readonly price_cents: FieldRef<"Plans", 'Int'>
    readonly currency: FieldRef<"Plans", 'Currency'>
    readonly billing_interval: FieldRef<"Plans", 'BillingInterval'>
    readonly trial_period_days: FieldRef<"Plans", 'String'>
    readonly is_active: FieldRef<"Plans", 'Boolean'>
    readonly created_at: FieldRef<"Plans", 'DateTime'>
    readonly updated_at: FieldRef<"Plans", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plans findUnique
   */
  export type PlansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans findUniqueOrThrow
   */
  export type PlansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans findFirst
   */
  export type PlansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans findFirstOrThrow
   */
  export type PlansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans findMany
   */
  export type PlansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans create
   */
  export type PlansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The data needed to create a Plans.
     */
    data: XOR<PlansCreateInput, PlansUncheckedCreateInput>
  }

  /**
   * Plans createMany
   */
  export type PlansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlansCreateManyInput | PlansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plans createManyAndReturn
   */
  export type PlansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlansCreateManyInput | PlansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plans update
   */
  export type PlansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The data needed to update a Plans.
     */
    data: XOR<PlansUpdateInput, PlansUncheckedUpdateInput>
    /**
     * Choose, which Plans to update.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans updateMany
   */
  export type PlansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlansUpdateManyMutationInput, PlansUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlansWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plans updateManyAndReturn
   */
  export type PlansUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlansUpdateManyMutationInput, PlansUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlansWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plans upsert
   */
  export type PlansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The filter to search for the Plans to update in case it exists.
     */
    where: PlansWhereUniqueInput
    /**
     * In case the Plans found by the `where` argument doesn't exist, create a new Plans with this data.
     */
    create: XOR<PlansCreateInput, PlansUncheckedCreateInput>
    /**
     * In case the Plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlansUpdateInput, PlansUncheckedUpdateInput>
  }

  /**
   * Plans delete
   */
  export type PlansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter which Plans to delete.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans deleteMany
   */
  export type PlansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlansWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plans.Subscriptions
   */
  export type Plans$SubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    where?: SubscriptionsWhereInput
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    cursor?: SubscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Plans without action
   */
  export type PlansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
  }


  /**
   * Model Subscriptions
   */

  export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  export type SubscriptionsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    plan_id: string | null
    status: $Enums.SubscriptionStatus | null
    start_date: Date | null
    end_date: Date | null
    trial_end_date: Date | null
    cancel_at: Date | null
    canceled_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubscriptionsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    plan_id: string | null
    status: $Enums.SubscriptionStatus | null
    start_date: Date | null
    end_date: Date | null
    trial_end_date: Date | null
    cancel_at: Date | null
    canceled_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubscriptionsCountAggregateOutputType = {
    id: number
    user_id: number
    plan_id: number
    status: number
    start_date: number
    end_date: number
    trial_end_date: number
    cancel_at: number
    canceled_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SubscriptionsMinAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    status?: true
    start_date?: true
    end_date?: true
    trial_end_date?: true
    cancel_at?: true
    canceled_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SubscriptionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    status?: true
    start_date?: true
    end_date?: true
    trial_end_date?: true
    cancel_at?: true
    canceled_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SubscriptionsCountAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    status?: true
    start_date?: true
    end_date?: true
    trial_end_date?: true
    cancel_at?: true
    canceled_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SubscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to aggregate.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type GetSubscriptionsAggregateType<T extends SubscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptions[P]>
      : GetScalarType<T[P], AggregateSubscriptions[P]>
  }




  export type SubscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionsWhereInput
    orderBy?: SubscriptionsOrderByWithAggregationInput | SubscriptionsOrderByWithAggregationInput[]
    by: SubscriptionsScalarFieldEnum[] | SubscriptionsScalarFieldEnum
    having?: SubscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionsCountAggregateInputType | true
    _min?: SubscriptionsMinAggregateInputType
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type SubscriptionsGroupByOutputType = {
    id: string
    user_id: string
    plan_id: string
    status: $Enums.SubscriptionStatus
    start_date: Date
    end_date: Date | null
    trial_end_date: Date | null
    cancel_at: Date | null
    canceled_at: Date | null
    created_at: Date
    updated_at: Date
    _count: SubscriptionsCountAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  type GetSubscriptionsGroupByPayload<T extends SubscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    trial_end_date?: boolean
    cancel_at?: boolean
    canceled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
    Payments?: boolean | Subscriptions$PaymentsArgs<ExtArgs>
    Invoices?: boolean | Subscriptions$InvoicesArgs<ExtArgs>
    _count?: boolean | SubscriptionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type SubscriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    trial_end_date?: boolean
    cancel_at?: boolean
    canceled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type SubscriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    trial_end_date?: boolean
    cancel_at?: boolean
    canceled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type SubscriptionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    trial_end_date?: boolean
    cancel_at?: boolean
    canceled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SubscriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "plan_id" | "status" | "start_date" | "end_date" | "trial_end_date" | "cancel_at" | "canceled_at" | "created_at" | "updated_at", ExtArgs["result"]["subscriptions"]>
  export type SubscriptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
    Payments?: boolean | Subscriptions$PaymentsArgs<ExtArgs>
    Invoices?: boolean | Subscriptions$InvoicesArgs<ExtArgs>
    _count?: boolean | SubscriptionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
  }
  export type SubscriptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
  }

  export type $SubscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscriptions"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      plan: Prisma.$PlansPayload<ExtArgs>
      Payments: Prisma.$PaymentsPayload<ExtArgs>[]
      Invoices: Prisma.$InvoicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      plan_id: string
      status: $Enums.SubscriptionStatus
      start_date: Date
      end_date: Date | null
      trial_end_date: Date | null
      cancel_at: Date | null
      canceled_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["subscriptions"]>
    composites: {}
  }

  type SubscriptionsGetPayload<S extends boolean | null | undefined | SubscriptionsDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionsPayload, S>

  type SubscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionsCountAggregateInputType | true
    }

  export interface SubscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscriptions'], meta: { name: 'Subscriptions' } }
    /**
     * Find zero or one Subscriptions that matches the filter.
     * @param {SubscriptionsFindUniqueArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionsFindUniqueArgs>(args: SelectSubset<T, SubscriptionsFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionsFindUniqueOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindFirstArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionsFindFirstArgs>(args?: SelectSubset<T, SubscriptionsFindFirstArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindFirstOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionsFindManyArgs>(args?: SelectSubset<T, SubscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscriptions.
     * @param {SubscriptionsCreateArgs} args - Arguments to create a Subscriptions.
     * @example
     * // Create one Subscriptions
     * const Subscriptions = await prisma.subscriptions.create({
     *   data: {
     *     // ... data to create a Subscriptions
     *   }
     * })
     * 
     */
    create<T extends SubscriptionsCreateArgs>(args: SelectSubset<T, SubscriptionsCreateArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionsCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionsCreateManyArgs>(args?: SelectSubset<T, SubscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionsCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscriptions.
     * @param {SubscriptionsDeleteArgs} args - Arguments to delete one Subscriptions.
     * @example
     * // Delete one Subscriptions
     * const Subscriptions = await prisma.subscriptions.delete({
     *   where: {
     *     // ... filter to delete one Subscriptions
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionsDeleteArgs>(args: SelectSubset<T, SubscriptionsDeleteArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscriptions.
     * @param {SubscriptionsUpdateArgs} args - Arguments to update one Subscriptions.
     * @example
     * // Update one Subscriptions
     * const subscriptions = await prisma.subscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionsUpdateArgs>(args: SelectSubset<T, SubscriptionsUpdateArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionsDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionsDeleteManyArgs>(args?: SelectSubset<T, SubscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionsUpdateManyArgs>(args: SelectSubset<T, SubscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionsUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscriptions.
     * @param {SubscriptionsUpsertArgs} args - Arguments to update or create a Subscriptions.
     * @example
     * // Update or create a Subscriptions
     * const subscriptions = await prisma.subscriptions.upsert({
     *   create: {
     *     // ... data to create a Subscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriptions we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionsUpsertArgs>(args: SelectSubset<T, SubscriptionsUpsertArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscriptions.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionsCountArgs>(
      args?: Subset<T, SubscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionsAggregateArgs>(args: Subset<T, SubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>

    /**
     * Group by Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscriptions model
   */
  readonly fields: SubscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlansDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlansDefaultArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Payments<T extends Subscriptions$PaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Subscriptions$PaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Invoices<T extends Subscriptions$InvoicesArgs<ExtArgs> = {}>(args?: Subset<T, Subscriptions$InvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscriptions model
   */
  interface SubscriptionsFieldRefs {
    readonly id: FieldRef<"Subscriptions", 'String'>
    readonly user_id: FieldRef<"Subscriptions", 'String'>
    readonly plan_id: FieldRef<"Subscriptions", 'String'>
    readonly status: FieldRef<"Subscriptions", 'SubscriptionStatus'>
    readonly start_date: FieldRef<"Subscriptions", 'DateTime'>
    readonly end_date: FieldRef<"Subscriptions", 'DateTime'>
    readonly trial_end_date: FieldRef<"Subscriptions", 'DateTime'>
    readonly cancel_at: FieldRef<"Subscriptions", 'DateTime'>
    readonly canceled_at: FieldRef<"Subscriptions", 'DateTime'>
    readonly created_at: FieldRef<"Subscriptions", 'DateTime'>
    readonly updated_at: FieldRef<"Subscriptions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscriptions findUnique
   */
  export type SubscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions findUniqueOrThrow
   */
  export type SubscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions findFirst
   */
  export type SubscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Subscriptions findFirstOrThrow
   */
  export type SubscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Subscriptions findMany
   */
  export type SubscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Subscriptions create
   */
  export type SubscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscriptions.
     */
    data: XOR<SubscriptionsCreateInput, SubscriptionsUncheckedCreateInput>
  }

  /**
   * Subscriptions createMany
   */
  export type SubscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionsCreateManyInput | SubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscriptions createManyAndReturn
   */
  export type SubscriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionsCreateManyInput | SubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscriptions update
   */
  export type SubscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscriptions.
     */
    data: XOR<SubscriptionsUpdateInput, SubscriptionsUncheckedUpdateInput>
    /**
     * Choose, which Subscriptions to update.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions updateMany
   */
  export type SubscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionsWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscriptions updateManyAndReturn
   */
  export type SubscriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionsWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscriptions upsert
   */
  export type SubscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscriptions to update in case it exists.
     */
    where: SubscriptionsWhereUniqueInput
    /**
     * In case the Subscriptions found by the `where` argument doesn't exist, create a new Subscriptions with this data.
     */
    create: XOR<SubscriptionsCreateInput, SubscriptionsUncheckedCreateInput>
    /**
     * In case the Subscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionsUpdateInput, SubscriptionsUncheckedUpdateInput>
  }

  /**
   * Subscriptions delete
   */
  export type SubscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter which Subscriptions to delete.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions deleteMany
   */
  export type SubscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionsWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscriptions.Payments
   */
  export type Subscriptions$PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Subscriptions.Invoices
   */
  export type Subscriptions$InvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    cursor?: InvoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Subscriptions without action
   */
  export type SubscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    amount_cents: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    amount_cents: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    subscription_id: string | null
    amount_cents: number | null
    currency: $Enums.Currency | null
    status: $Enums.PaymentStatus | null
    payment_method_id: string | null
    invoice_id: string | null
    transaction_reference: string | null
    paid_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    subscription_id: string | null
    amount_cents: number | null
    currency: $Enums.Currency | null
    status: $Enums.PaymentStatus | null
    payment_method_id: string | null
    invoice_id: string | null
    transaction_reference: string | null
    paid_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    user_id: number
    subscription_id: number
    amount_cents: number
    currency: number
    status: number
    payment_method_id: number
    invoice_id: number
    transaction_reference: number
    paid_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    amount_cents?: true
  }

  export type PaymentsSumAggregateInputType = {
    amount_cents?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    user_id?: true
    subscription_id?: true
    amount_cents?: true
    currency?: true
    status?: true
    payment_method_id?: true
    invoice_id?: true
    transaction_reference?: true
    paid_at?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    subscription_id?: true
    amount_cents?: true
    currency?: true
    status?: true
    payment_method_id?: true
    invoice_id?: true
    transaction_reference?: true
    paid_at?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    user_id?: true
    subscription_id?: true
    amount_cents?: true
    currency?: true
    status?: true
    payment_method_id?: true
    invoice_id?: true
    transaction_reference?: true
    paid_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    user_id: string
    subscription_id: string | null
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    payment_method_id: string
    invoice_id: string
    transaction_reference: string | null
    paid_at: Date | null
    created_at: Date
    updated_at: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subscription_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    status?: boolean
    payment_method_id?: boolean
    invoice_id?: boolean
    transaction_reference?: boolean
    paid_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | Payments$subscriptionArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
    Refunds?: boolean | Payments$RefundsArgs<ExtArgs>
    _count?: boolean | PaymentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subscription_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    status?: boolean
    payment_method_id?: boolean
    invoice_id?: boolean
    transaction_reference?: boolean
    paid_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | Payments$subscriptionArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subscription_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    status?: boolean
    payment_method_id?: boolean
    invoice_id?: boolean
    transaction_reference?: boolean
    paid_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | Payments$subscriptionArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    subscription_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    status?: boolean
    payment_method_id?: boolean
    invoice_id?: boolean
    transaction_reference?: boolean
    paid_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "subscription_id" | "amount_cents" | "currency" | "status" | "payment_method_id" | "invoice_id" | "transaction_reference" | "paid_at" | "created_at" | "updated_at", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | Payments$subscriptionArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
    Refunds?: boolean | Payments$RefundsArgs<ExtArgs>
    _count?: boolean | PaymentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | Payments$subscriptionArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | Payments$subscriptionArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      subscription: Prisma.$SubscriptionsPayload<ExtArgs> | null
      paymentMethod: Prisma.$PaymentMethodsPayload<ExtArgs>
      invoice: Prisma.$InvoicesPayload<ExtArgs>
      Refunds: Prisma.$RefundsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      subscription_id: string | null
      amount_cents: number
      currency: $Enums.Currency
      status: $Enums.PaymentStatus
      payment_method_id: string
      invoice_id: string
      transaction_reference: string | null
      paid_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
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
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends Payments$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Payments$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paymentMethod<T extends PaymentMethodsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodsDefaultArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice<T extends InvoicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoicesDefaultArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Refunds<T extends Payments$RefundsArgs<ExtArgs> = {}>(args?: Subset<T, Payments$RefundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'String'>
    readonly user_id: FieldRef<"Payments", 'String'>
    readonly subscription_id: FieldRef<"Payments", 'String'>
    readonly amount_cents: FieldRef<"Payments", 'Int'>
    readonly currency: FieldRef<"Payments", 'Currency'>
    readonly status: FieldRef<"Payments", 'PaymentStatus'>
    readonly payment_method_id: FieldRef<"Payments", 'String'>
    readonly invoice_id: FieldRef<"Payments", 'String'>
    readonly transaction_reference: FieldRef<"Payments", 'String'>
    readonly paid_at: FieldRef<"Payments", 'DateTime'>
    readonly created_at: FieldRef<"Payments", 'DateTime'>
    readonly updated_at: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments createManyAndReturn
   */
  export type PaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments updateManyAndReturn
   */
  export type PaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments.subscription
   */
  export type Payments$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    where?: SubscriptionsWhereInput
  }

  /**
   * Payments.Refunds
   */
  export type Payments$RefundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsInclude<ExtArgs> | null
    where?: RefundsWhereInput
    orderBy?: RefundsOrderByWithRelationInput | RefundsOrderByWithRelationInput[]
    cursor?: RefundsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefundsScalarFieldEnum | RefundsScalarFieldEnum[]
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethods
   */

  export type AggregatePaymentMethods = {
    _count: PaymentMethodsCountAggregateOutputType | null
    _avg: PaymentMethodsAvgAggregateOutputType | null
    _sum: PaymentMethodsSumAggregateOutputType | null
    _min: PaymentMethodsMinAggregateOutputType | null
    _max: PaymentMethodsMaxAggregateOutputType | null
  }

  export type PaymentMethodsAvgAggregateOutputType = {
    last_digits: number | null
    expiry_month: number | null
    expiry_year: number | null
  }

  export type PaymentMethodsSumAggregateOutputType = {
    last_digits: number | null
    expiry_month: number | null
    expiry_year: number | null
  }

  export type PaymentMethodsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    provider: $Enums.PaymentProviders | null
    type: $Enums.PaymentType | null
    last_digits: number | null
    expiry_month: number | null
    expiry_year: number | null
    brand: $Enums.CardBrand | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentMethodsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    provider: $Enums.PaymentProviders | null
    type: $Enums.PaymentType | null
    last_digits: number | null
    expiry_month: number | null
    expiry_year: number | null
    brand: $Enums.CardBrand | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentMethodsCountAggregateOutputType = {
    id: number
    user_id: number
    provider: number
    type: number
    last_digits: number
    expiry_month: number
    expiry_year: number
    brand: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentMethodsAvgAggregateInputType = {
    last_digits?: true
    expiry_month?: true
    expiry_year?: true
  }

  export type PaymentMethodsSumAggregateInputType = {
    last_digits?: true
    expiry_month?: true
    expiry_year?: true
  }

  export type PaymentMethodsMinAggregateInputType = {
    id?: true
    user_id?: true
    provider?: true
    type?: true
    last_digits?: true
    expiry_month?: true
    expiry_year?: true
    brand?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentMethodsMaxAggregateInputType = {
    id?: true
    user_id?: true
    provider?: true
    type?: true
    last_digits?: true
    expiry_month?: true
    expiry_year?: true
    brand?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentMethodsCountAggregateInputType = {
    id?: true
    user_id?: true
    provider?: true
    type?: true
    last_digits?: true
    expiry_month?: true
    expiry_year?: true
    brand?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentMethodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to aggregate.
     */
    where?: PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodsOrderByWithRelationInput | PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodsMaxAggregateInputType
  }

  export type GetPaymentMethodsAggregateType<T extends PaymentMethodsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethods[P]>
      : GetScalarType<T[P], AggregatePaymentMethods[P]>
  }




  export type PaymentMethodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodsWhereInput
    orderBy?: PaymentMethodsOrderByWithAggregationInput | PaymentMethodsOrderByWithAggregationInput[]
    by: PaymentMethodsScalarFieldEnum[] | PaymentMethodsScalarFieldEnum
    having?: PaymentMethodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodsCountAggregateInputType | true
    _avg?: PaymentMethodsAvgAggregateInputType
    _sum?: PaymentMethodsSumAggregateInputType
    _min?: PaymentMethodsMinAggregateInputType
    _max?: PaymentMethodsMaxAggregateInputType
  }

  export type PaymentMethodsGroupByOutputType = {
    id: string
    user_id: string
    provider: $Enums.PaymentProviders
    type: $Enums.PaymentType
    last_digits: number | null
    expiry_month: number | null
    expiry_year: number | null
    brand: $Enums.CardBrand | null
    created_at: Date
    updated_at: Date
    _count: PaymentMethodsCountAggregateOutputType | null
    _avg: PaymentMethodsAvgAggregateOutputType | null
    _sum: PaymentMethodsSumAggregateOutputType | null
    _min: PaymentMethodsMinAggregateOutputType | null
    _max: PaymentMethodsMaxAggregateOutputType | null
  }

  type GetPaymentMethodsGroupByPayload<T extends PaymentMethodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    provider?: boolean
    type?: boolean
    last_digits?: boolean
    expiry_month?: boolean
    expiry_year?: boolean
    brand?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Payments?: boolean | PaymentMethods$PaymentsArgs<ExtArgs>
    Invoices?: boolean | PaymentMethods$InvoicesArgs<ExtArgs>
    _count?: boolean | PaymentMethodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethods"]>

  export type PaymentMethodsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    provider?: boolean
    type?: boolean
    last_digits?: boolean
    expiry_month?: boolean
    expiry_year?: boolean
    brand?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethods"]>

  export type PaymentMethodsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    provider?: boolean
    type?: boolean
    last_digits?: boolean
    expiry_month?: boolean
    expiry_year?: boolean
    brand?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethods"]>

  export type PaymentMethodsSelectScalar = {
    id?: boolean
    user_id?: boolean
    provider?: boolean
    type?: boolean
    last_digits?: boolean
    expiry_month?: boolean
    expiry_year?: boolean
    brand?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaymentMethodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "provider" | "type" | "last_digits" | "expiry_month" | "expiry_year" | "brand" | "created_at" | "updated_at", ExtArgs["result"]["paymentMethods"]>
  export type PaymentMethodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Payments?: boolean | PaymentMethods$PaymentsArgs<ExtArgs>
    Invoices?: boolean | PaymentMethods$InvoicesArgs<ExtArgs>
    _count?: boolean | PaymentMethodsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentMethodsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PaymentMethodsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PaymentMethodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethods"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      Payments: Prisma.$PaymentsPayload<ExtArgs>[]
      Invoices: Prisma.$InvoicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      provider: $Enums.PaymentProviders
      type: $Enums.PaymentType
      last_digits: number | null
      expiry_month: number | null
      expiry_year: number | null
      brand: $Enums.CardBrand | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["paymentMethods"]>
    composites: {}
  }

  type PaymentMethodsGetPayload<S extends boolean | null | undefined | PaymentMethodsDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodsPayload, S>

  type PaymentMethodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodsCountAggregateInputType | true
    }

  export interface PaymentMethodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethods'], meta: { name: 'PaymentMethods' } }
    /**
     * Find zero or one PaymentMethods that matches the filter.
     * @param {PaymentMethodsFindUniqueArgs} args - Arguments to find a PaymentMethods
     * @example
     * // Get one PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodsFindUniqueArgs>(args: SelectSubset<T, PaymentMethodsFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodsFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethods
     * @example
     * // Get one PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsFindFirstArgs} args - Arguments to find a PaymentMethods
     * @example
     * // Get one PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodsFindFirstArgs>(args?: SelectSubset<T, PaymentMethodsFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsFindFirstOrThrowArgs} args - Arguments to find a PaymentMethods
     * @example
     * // Get one PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodsWithIdOnly = await prisma.paymentMethods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodsFindManyArgs>(args?: SelectSubset<T, PaymentMethodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethods.
     * @param {PaymentMethodsCreateArgs} args - Arguments to create a PaymentMethods.
     * @example
     * // Create one PaymentMethods
     * const PaymentMethods = await prisma.paymentMethods.create({
     *   data: {
     *     // ... data to create a PaymentMethods
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodsCreateArgs>(args: SelectSubset<T, PaymentMethodsCreateArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodsCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodsCreateManyArgs>(args?: SelectSubset<T, PaymentMethodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodsCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `id`
     * const paymentMethodsWithIdOnly = await prisma.paymentMethods.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentMethods.
     * @param {PaymentMethodsDeleteArgs} args - Arguments to delete one PaymentMethods.
     * @example
     * // Delete one PaymentMethods
     * const PaymentMethods = await prisma.paymentMethods.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethods
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodsDeleteArgs>(args: SelectSubset<T, PaymentMethodsDeleteArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethods.
     * @param {PaymentMethodsUpdateArgs} args - Arguments to update one PaymentMethods.
     * @example
     * // Update one PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodsUpdateArgs>(args: SelectSubset<T, PaymentMethodsUpdateArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodsDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodsDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodsUpdateManyArgs>(args: SelectSubset<T, PaymentMethodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods and returns the data updated in the database.
     * @param {PaymentMethodsUpdateManyAndReturnArgs} args - Arguments to update many PaymentMethods.
     * @example
     * // Update many PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentMethods and only return the `id`
     * const paymentMethodsWithIdOnly = await prisma.paymentMethods.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentMethodsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentMethodsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentMethods.
     * @param {PaymentMethodsUpsertArgs} args - Arguments to update or create a PaymentMethods.
     * @example
     * // Update or create a PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.upsert({
     *   create: {
     *     // ... data to create a PaymentMethods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethods we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodsUpsertArgs>(args: SelectSubset<T, PaymentMethodsUpsertArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethods.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodsCountArgs>(
      args?: Subset<T, PaymentMethodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentMethodsAggregateArgs>(args: Subset<T, PaymentMethodsAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodsAggregateType<T>>

    /**
     * Group by PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsGroupByArgs} args - Group by arguments.
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
      T extends PaymentMethodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentMethodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethods model
   */
  readonly fields: PaymentMethodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Payments<T extends PaymentMethods$PaymentsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethods$PaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Invoices<T extends PaymentMethods$InvoicesArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethods$InvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentMethods model
   */
  interface PaymentMethodsFieldRefs {
    readonly id: FieldRef<"PaymentMethods", 'String'>
    readonly user_id: FieldRef<"PaymentMethods", 'String'>
    readonly provider: FieldRef<"PaymentMethods", 'PaymentProviders'>
    readonly type: FieldRef<"PaymentMethods", 'PaymentType'>
    readonly last_digits: FieldRef<"PaymentMethods", 'Int'>
    readonly expiry_month: FieldRef<"PaymentMethods", 'Int'>
    readonly expiry_year: FieldRef<"PaymentMethods", 'Int'>
    readonly brand: FieldRef<"PaymentMethods", 'CardBrand'>
    readonly created_at: FieldRef<"PaymentMethods", 'DateTime'>
    readonly updated_at: FieldRef<"PaymentMethods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethods findUnique
   */
  export type PaymentMethodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where: PaymentMethodsWhereUniqueInput
  }

  /**
   * PaymentMethods findUniqueOrThrow
   */
  export type PaymentMethodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where: PaymentMethodsWhereUniqueInput
  }

  /**
   * PaymentMethods findFirst
   */
  export type PaymentMethodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodsOrderByWithRelationInput | PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodsScalarFieldEnum | PaymentMethodsScalarFieldEnum[]
  }

  /**
   * PaymentMethods findFirstOrThrow
   */
  export type PaymentMethodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodsOrderByWithRelationInput | PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodsScalarFieldEnum | PaymentMethodsScalarFieldEnum[]
  }

  /**
   * PaymentMethods findMany
   */
  export type PaymentMethodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodsOrderByWithRelationInput | PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodsScalarFieldEnum | PaymentMethodsScalarFieldEnum[]
  }

  /**
   * PaymentMethods create
   */
  export type PaymentMethodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethods.
     */
    data: XOR<PaymentMethodsCreateInput, PaymentMethodsUncheckedCreateInput>
  }

  /**
   * PaymentMethods createMany
   */
  export type PaymentMethodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodsCreateManyInput | PaymentMethodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethods createManyAndReturn
   */
  export type PaymentMethodsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodsCreateManyInput | PaymentMethodsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethods update
   */
  export type PaymentMethodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethods.
     */
    data: XOR<PaymentMethodsUpdateInput, PaymentMethodsUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethods to update.
     */
    where: PaymentMethodsWhereUniqueInput
  }

  /**
   * PaymentMethods updateMany
   */
  export type PaymentMethodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodsUpdateManyMutationInput, PaymentMethodsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodsWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethods updateManyAndReturn
   */
  export type PaymentMethodsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodsUpdateManyMutationInput, PaymentMethodsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodsWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethods upsert
   */
  export type PaymentMethodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethods to update in case it exists.
     */
    where: PaymentMethodsWhereUniqueInput
    /**
     * In case the PaymentMethods found by the `where` argument doesn't exist, create a new PaymentMethods with this data.
     */
    create: XOR<PaymentMethodsCreateInput, PaymentMethodsUncheckedCreateInput>
    /**
     * In case the PaymentMethods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodsUpdateInput, PaymentMethodsUncheckedUpdateInput>
  }

  /**
   * PaymentMethods delete
   */
  export type PaymentMethodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethods to delete.
     */
    where: PaymentMethodsWhereUniqueInput
  }

  /**
   * PaymentMethods deleteMany
   */
  export type PaymentMethodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodsWhereInput
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number
  }

  /**
   * PaymentMethods.Payments
   */
  export type PaymentMethods$PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * PaymentMethods.Invoices
   */
  export type PaymentMethods$InvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    cursor?: InvoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * PaymentMethods without action
   */
  export type PaymentMethodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
  }


  /**
   * Model Invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    amount_due_cents: number | null
    amount_paid_cents: number | null
  }

  export type InvoicesSumAggregateOutputType = {
    amount_due_cents: number | null
    amount_paid_cents: number | null
  }

  export type InvoicesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    subscription_id: string | null
    payment_method_id: string | null
    amount_due_cents: number | null
    amount_paid_cents: number | null
    currency: $Enums.Currency | null
    due_date: Date | null
    paid_at: Date | null
    status: $Enums.InvoiceStatus | null
    invoice_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvoicesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    subscription_id: string | null
    payment_method_id: string | null
    amount_due_cents: number | null
    amount_paid_cents: number | null
    currency: $Enums.Currency | null
    due_date: Date | null
    paid_at: Date | null
    status: $Enums.InvoiceStatus | null
    invoice_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvoicesCountAggregateOutputType = {
    id: number
    user_id: number
    subscription_id: number
    payment_method_id: number
    amount_due_cents: number
    amount_paid_cents: number
    currency: number
    due_date: number
    paid_at: number
    status: number
    invoice_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    amount_due_cents?: true
    amount_paid_cents?: true
  }

  export type InvoicesSumAggregateInputType = {
    amount_due_cents?: true
    amount_paid_cents?: true
  }

  export type InvoicesMinAggregateInputType = {
    id?: true
    user_id?: true
    subscription_id?: true
    payment_method_id?: true
    amount_due_cents?: true
    amount_paid_cents?: true
    currency?: true
    due_date?: true
    paid_at?: true
    status?: true
    invoice_number?: true
    created_at?: true
    updated_at?: true
  }

  export type InvoicesMaxAggregateInputType = {
    id?: true
    user_id?: true
    subscription_id?: true
    payment_method_id?: true
    amount_due_cents?: true
    amount_paid_cents?: true
    currency?: true
    due_date?: true
    paid_at?: true
    status?: true
    invoice_number?: true
    created_at?: true
    updated_at?: true
  }

  export type InvoicesCountAggregateInputType = {
    id?: true
    user_id?: true
    subscription_id?: true
    payment_method_id?: true
    amount_due_cents?: true
    amount_paid_cents?: true
    currency?: true
    due_date?: true
    paid_at?: true
    status?: true
    invoice_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to aggregate.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type InvoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithAggregationInput | InvoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: InvoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    id: string
    user_id: string
    subscription_id: string
    payment_method_id: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date
    paid_at: Date | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at: Date
    updated_at: Date
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends InvoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type InvoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subscription_id?: boolean
    payment_method_id?: boolean
    amount_due_cents?: boolean
    amount_paid_cents?: boolean
    currency?: boolean
    due_date?: boolean
    paid_at?: boolean
    status?: boolean
    invoice_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
    paymentMethods?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
    Payments?: boolean | Invoices$PaymentsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type InvoicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subscription_id?: boolean
    payment_method_id?: boolean
    amount_due_cents?: boolean
    amount_paid_cents?: boolean
    currency?: boolean
    due_date?: boolean
    paid_at?: boolean
    status?: boolean
    invoice_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
    paymentMethods?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type InvoicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subscription_id?: boolean
    payment_method_id?: boolean
    amount_due_cents?: boolean
    amount_paid_cents?: boolean
    currency?: boolean
    due_date?: boolean
    paid_at?: boolean
    status?: boolean
    invoice_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
    paymentMethods?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type InvoicesSelectScalar = {
    id?: boolean
    user_id?: boolean
    subscription_id?: boolean
    payment_method_id?: boolean
    amount_due_cents?: boolean
    amount_paid_cents?: boolean
    currency?: boolean
    due_date?: boolean
    paid_at?: boolean
    status?: boolean
    invoice_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type InvoicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "subscription_id" | "payment_method_id" | "amount_due_cents" | "amount_paid_cents" | "currency" | "due_date" | "paid_at" | "status" | "invoice_number" | "created_at" | "updated_at", ExtArgs["result"]["invoices"]>
  export type InvoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
    paymentMethods?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
    Payments?: boolean | Invoices$PaymentsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
    paymentMethods?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
  }
  export type InvoicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
    paymentMethods?: boolean | PaymentMethodsDefaultArgs<ExtArgs>
  }

  export type $InvoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoices"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      subscription: Prisma.$SubscriptionsPayload<ExtArgs>
      paymentMethods: Prisma.$PaymentMethodsPayload<ExtArgs>
      Payments: Prisma.$PaymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      subscription_id: string
      payment_method_id: string
      amount_due_cents: number
      amount_paid_cents: number
      currency: $Enums.Currency
      due_date: Date
      paid_at: Date | null
      status: $Enums.InvoiceStatus
      invoice_number: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type InvoicesGetPayload<S extends boolean | null | undefined | InvoicesDefaultArgs> = $Result.GetResult<Prisma.$InvoicesPayload, S>

  type InvoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface InvoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoices'], meta: { name: 'Invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {InvoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoicesFindUniqueArgs>(args: SelectSubset<T, InvoicesFindUniqueArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoicesFindFirstArgs>(args?: SelectSubset<T, InvoicesFindFirstArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoicesFindManyArgs>(args?: SelectSubset<T, InvoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices.
     * @param {InvoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends InvoicesCreateArgs>(args: SelectSubset<T, InvoicesCreateArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoicesCreateManyArgs>(args?: SelectSubset<T, InvoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoicesCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoicesCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoices.
     * @param {InvoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends InvoicesDeleteArgs>(args: SelectSubset<T, InvoicesDeleteArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices.
     * @param {InvoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoicesUpdateArgs>(args: SelectSubset<T, InvoicesUpdateArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoicesDeleteManyArgs>(args?: SelectSubset<T, InvoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoicesUpdateManyArgs>(args: SelectSubset<T, InvoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoicesUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoicesUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoices.
     * @param {InvoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends InvoicesUpsertArgs>(args: SelectSubset<T, InvoicesUpsertArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoicesCountArgs>(
      args?: Subset<T, InvoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesGroupByArgs} args - Group by arguments.
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
      T extends InvoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoicesGroupByArgs['orderBy'] }
        : { orderBy?: InvoicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoices model
   */
  readonly fields: InvoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends SubscriptionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionsDefaultArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentMethods<T extends PaymentMethodsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodsDefaultArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Payments<T extends Invoices$PaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Invoices$PaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoices model
   */
  interface InvoicesFieldRefs {
    readonly id: FieldRef<"Invoices", 'String'>
    readonly user_id: FieldRef<"Invoices", 'String'>
    readonly subscription_id: FieldRef<"Invoices", 'String'>
    readonly payment_method_id: FieldRef<"Invoices", 'String'>
    readonly amount_due_cents: FieldRef<"Invoices", 'Int'>
    readonly amount_paid_cents: FieldRef<"Invoices", 'Int'>
    readonly currency: FieldRef<"Invoices", 'Currency'>
    readonly due_date: FieldRef<"Invoices", 'DateTime'>
    readonly paid_at: FieldRef<"Invoices", 'DateTime'>
    readonly status: FieldRef<"Invoices", 'InvoiceStatus'>
    readonly invoice_number: FieldRef<"Invoices", 'String'>
    readonly created_at: FieldRef<"Invoices", 'DateTime'>
    readonly updated_at: FieldRef<"Invoices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoices findUnique
   */
  export type InvoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices findUniqueOrThrow
   */
  export type InvoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices findFirst
   */
  export type InvoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices findFirstOrThrow
   */
  export type InvoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices findMany
   */
  export type InvoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices create
   */
  export type InvoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoices.
     */
    data: XOR<InvoicesCreateInput, InvoicesUncheckedCreateInput>
  }

  /**
   * Invoices createMany
   */
  export type InvoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoicesCreateManyInput | InvoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoices createManyAndReturn
   */
  export type InvoicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoicesCreateManyInput | InvoicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoices update
   */
  export type InvoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoices.
     */
    data: XOR<InvoicesUpdateInput, InvoicesUncheckedUpdateInput>
    /**
     * Choose, which Invoices to update.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices updateMany
   */
  export type InvoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoicesWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoices updateManyAndReturn
   */
  export type InvoicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoicesWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoices upsert
   */
  export type InvoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoices to update in case it exists.
     */
    where: InvoicesWhereUniqueInput
    /**
     * In case the Invoices found by the `where` argument doesn't exist, create a new Invoices with this data.
     */
    create: XOR<InvoicesCreateInput, InvoicesUncheckedCreateInput>
    /**
     * In case the Invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoicesUpdateInput, InvoicesUncheckedUpdateInput>
  }

  /**
   * Invoices delete
   */
  export type InvoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter which Invoices to delete.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices deleteMany
   */
  export type InvoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoicesWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoices.Payments
   */
  export type Invoices$PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Invoices without action
   */
  export type InvoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
  }


  /**
   * Model Refunds
   */

  export type AggregateRefunds = {
    _count: RefundsCountAggregateOutputType | null
    _avg: RefundsAvgAggregateOutputType | null
    _sum: RefundsSumAggregateOutputType | null
    _min: RefundsMinAggregateOutputType | null
    _max: RefundsMaxAggregateOutputType | null
  }

  export type RefundsAvgAggregateOutputType = {
    amount_cents: number | null
  }

  export type RefundsSumAggregateOutputType = {
    amount_cents: number | null
  }

  export type RefundsMinAggregateOutputType = {
    id: string | null
    payment_id: string | null
    amount_cents: number | null
    currency: $Enums.Currency | null
    reason: string | null
    status: $Enums.RefundStatus | null
    gateway_ref: string | null
    processed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RefundsMaxAggregateOutputType = {
    id: string | null
    payment_id: string | null
    amount_cents: number | null
    currency: $Enums.Currency | null
    reason: string | null
    status: $Enums.RefundStatus | null
    gateway_ref: string | null
    processed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RefundsCountAggregateOutputType = {
    id: number
    payment_id: number
    amount_cents: number
    currency: number
    reason: number
    status: number
    gateway_ref: number
    processed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RefundsAvgAggregateInputType = {
    amount_cents?: true
  }

  export type RefundsSumAggregateInputType = {
    amount_cents?: true
  }

  export type RefundsMinAggregateInputType = {
    id?: true
    payment_id?: true
    amount_cents?: true
    currency?: true
    reason?: true
    status?: true
    gateway_ref?: true
    processed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type RefundsMaxAggregateInputType = {
    id?: true
    payment_id?: true
    amount_cents?: true
    currency?: true
    reason?: true
    status?: true
    gateway_ref?: true
    processed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type RefundsCountAggregateInputType = {
    id?: true
    payment_id?: true
    amount_cents?: true
    currency?: true
    reason?: true
    status?: true
    gateway_ref?: true
    processed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RefundsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refunds to aggregate.
     */
    where?: RefundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundsOrderByWithRelationInput | RefundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refunds
    **/
    _count?: true | RefundsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefundsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefundsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefundsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefundsMaxAggregateInputType
  }

  export type GetRefundsAggregateType<T extends RefundsAggregateArgs> = {
        [P in keyof T & keyof AggregateRefunds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefunds[P]>
      : GetScalarType<T[P], AggregateRefunds[P]>
  }




  export type RefundsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundsWhereInput
    orderBy?: RefundsOrderByWithAggregationInput | RefundsOrderByWithAggregationInput[]
    by: RefundsScalarFieldEnum[] | RefundsScalarFieldEnum
    having?: RefundsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefundsCountAggregateInputType | true
    _avg?: RefundsAvgAggregateInputType
    _sum?: RefundsSumAggregateInputType
    _min?: RefundsMinAggregateInputType
    _max?: RefundsMaxAggregateInputType
  }

  export type RefundsGroupByOutputType = {
    id: string
    payment_id: string
    amount_cents: number
    currency: $Enums.Currency
    reason: string | null
    status: $Enums.RefundStatus
    gateway_ref: string | null
    processed_at: Date | null
    created_at: Date
    updated_at: Date | null
    _count: RefundsCountAggregateOutputType | null
    _avg: RefundsAvgAggregateOutputType | null
    _sum: RefundsSumAggregateOutputType | null
    _min: RefundsMinAggregateOutputType | null
    _max: RefundsMaxAggregateOutputType | null
  }

  type GetRefundsGroupByPayload<T extends RefundsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefundsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefundsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefundsGroupByOutputType[P]>
            : GetScalarType<T[P], RefundsGroupByOutputType[P]>
        }
      >
    >


  export type RefundsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payment_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    reason?: boolean
    status?: boolean
    gateway_ref?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    payments?: boolean | PaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refunds"]>

  export type RefundsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payment_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    reason?: boolean
    status?: boolean
    gateway_ref?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    payments?: boolean | PaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refunds"]>

  export type RefundsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payment_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    reason?: boolean
    status?: boolean
    gateway_ref?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    payments?: boolean | PaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refunds"]>

  export type RefundsSelectScalar = {
    id?: boolean
    payment_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    reason?: boolean
    status?: boolean
    gateway_ref?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RefundsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "payment_id" | "amount_cents" | "currency" | "reason" | "status" | "gateway_ref" | "processed_at" | "created_at" | "updated_at", ExtArgs["result"]["refunds"]>
  export type RefundsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentsDefaultArgs<ExtArgs>
  }
  export type RefundsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentsDefaultArgs<ExtArgs>
  }
  export type RefundsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentsDefaultArgs<ExtArgs>
  }

  export type $RefundsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Refunds"
    objects: {
      payments: Prisma.$PaymentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      payment_id: string
      amount_cents: number
      currency: $Enums.Currency
      reason: string | null
      status: $Enums.RefundStatus
      gateway_ref: string | null
      processed_at: Date | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["refunds"]>
    composites: {}
  }

  type RefundsGetPayload<S extends boolean | null | undefined | RefundsDefaultArgs> = $Result.GetResult<Prisma.$RefundsPayload, S>

  type RefundsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefundsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefundsCountAggregateInputType | true
    }

  export interface RefundsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Refunds'], meta: { name: 'Refunds' } }
    /**
     * Find zero or one Refunds that matches the filter.
     * @param {RefundsFindUniqueArgs} args - Arguments to find a Refunds
     * @example
     * // Get one Refunds
     * const refunds = await prisma.refunds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefundsFindUniqueArgs>(args: SelectSubset<T, RefundsFindUniqueArgs<ExtArgs>>): Prisma__RefundsClient<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refunds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefundsFindUniqueOrThrowArgs} args - Arguments to find a Refunds
     * @example
     * // Get one Refunds
     * const refunds = await prisma.refunds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefundsFindUniqueOrThrowArgs>(args: SelectSubset<T, RefundsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefundsClient<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundsFindFirstArgs} args - Arguments to find a Refunds
     * @example
     * // Get one Refunds
     * const refunds = await prisma.refunds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefundsFindFirstArgs>(args?: SelectSubset<T, RefundsFindFirstArgs<ExtArgs>>): Prisma__RefundsClient<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refunds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundsFindFirstOrThrowArgs} args - Arguments to find a Refunds
     * @example
     * // Get one Refunds
     * const refunds = await prisma.refunds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefundsFindFirstOrThrowArgs>(args?: SelectSubset<T, RefundsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefundsClient<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refunds
     * const refunds = await prisma.refunds.findMany()
     * 
     * // Get first 10 Refunds
     * const refunds = await prisma.refunds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refundsWithIdOnly = await prisma.refunds.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefundsFindManyArgs>(args?: SelectSubset<T, RefundsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refunds.
     * @param {RefundsCreateArgs} args - Arguments to create a Refunds.
     * @example
     * // Create one Refunds
     * const Refunds = await prisma.refunds.create({
     *   data: {
     *     // ... data to create a Refunds
     *   }
     * })
     * 
     */
    create<T extends RefundsCreateArgs>(args: SelectSubset<T, RefundsCreateArgs<ExtArgs>>): Prisma__RefundsClient<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refunds.
     * @param {RefundsCreateManyArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refunds = await prisma.refunds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefundsCreateManyArgs>(args?: SelectSubset<T, RefundsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Refunds and returns the data saved in the database.
     * @param {RefundsCreateManyAndReturnArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refunds = await prisma.refunds.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Refunds and only return the `id`
     * const refundsWithIdOnly = await prisma.refunds.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefundsCreateManyAndReturnArgs>(args?: SelectSubset<T, RefundsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Refunds.
     * @param {RefundsDeleteArgs} args - Arguments to delete one Refunds.
     * @example
     * // Delete one Refunds
     * const Refunds = await prisma.refunds.delete({
     *   where: {
     *     // ... filter to delete one Refunds
     *   }
     * })
     * 
     */
    delete<T extends RefundsDeleteArgs>(args: SelectSubset<T, RefundsDeleteArgs<ExtArgs>>): Prisma__RefundsClient<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refunds.
     * @param {RefundsUpdateArgs} args - Arguments to update one Refunds.
     * @example
     * // Update one Refunds
     * const refunds = await prisma.refunds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefundsUpdateArgs>(args: SelectSubset<T, RefundsUpdateArgs<ExtArgs>>): Prisma__RefundsClient<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refunds.
     * @param {RefundsDeleteManyArgs} args - Arguments to filter Refunds to delete.
     * @example
     * // Delete a few Refunds
     * const { count } = await prisma.refunds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefundsDeleteManyArgs>(args?: SelectSubset<T, RefundsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refunds
     * const refunds = await prisma.refunds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefundsUpdateManyArgs>(args: SelectSubset<T, RefundsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds and returns the data updated in the database.
     * @param {RefundsUpdateManyAndReturnArgs} args - Arguments to update many Refunds.
     * @example
     * // Update many Refunds
     * const refunds = await prisma.refunds.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Refunds and only return the `id`
     * const refundsWithIdOnly = await prisma.refunds.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefundsUpdateManyAndReturnArgs>(args: SelectSubset<T, RefundsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Refunds.
     * @param {RefundsUpsertArgs} args - Arguments to update or create a Refunds.
     * @example
     * // Update or create a Refunds
     * const refunds = await prisma.refunds.upsert({
     *   create: {
     *     // ... data to create a Refunds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refunds we want to update
     *   }
     * })
     */
    upsert<T extends RefundsUpsertArgs>(args: SelectSubset<T, RefundsUpsertArgs<ExtArgs>>): Prisma__RefundsClient<$Result.GetResult<Prisma.$RefundsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundsCountArgs} args - Arguments to filter Refunds to count.
     * @example
     * // Count the number of Refunds
     * const count = await prisma.refunds.count({
     *   where: {
     *     // ... the filter for the Refunds we want to count
     *   }
     * })
    **/
    count<T extends RefundsCountArgs>(
      args?: Subset<T, RefundsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefundsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefundsAggregateArgs>(args: Subset<T, RefundsAggregateArgs>): Prisma.PrismaPromise<GetRefundsAggregateType<T>>

    /**
     * Group by Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundsGroupByArgs} args - Group by arguments.
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
      T extends RefundsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefundsGroupByArgs['orderBy'] }
        : { orderBy?: RefundsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefundsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Refunds model
   */
  readonly fields: RefundsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refunds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefundsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends PaymentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentsDefaultArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Refunds model
   */
  interface RefundsFieldRefs {
    readonly id: FieldRef<"Refunds", 'String'>
    readonly payment_id: FieldRef<"Refunds", 'String'>
    readonly amount_cents: FieldRef<"Refunds", 'Int'>
    readonly currency: FieldRef<"Refunds", 'Currency'>
    readonly reason: FieldRef<"Refunds", 'String'>
    readonly status: FieldRef<"Refunds", 'RefundStatus'>
    readonly gateway_ref: FieldRef<"Refunds", 'String'>
    readonly processed_at: FieldRef<"Refunds", 'DateTime'>
    readonly created_at: FieldRef<"Refunds", 'DateTime'>
    readonly updated_at: FieldRef<"Refunds", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Refunds findUnique
   */
  export type RefundsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsInclude<ExtArgs> | null
    /**
     * Filter, which Refunds to fetch.
     */
    where: RefundsWhereUniqueInput
  }

  /**
   * Refunds findUniqueOrThrow
   */
  export type RefundsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsInclude<ExtArgs> | null
    /**
     * Filter, which Refunds to fetch.
     */
    where: RefundsWhereUniqueInput
  }

  /**
   * Refunds findFirst
   */
  export type RefundsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsInclude<ExtArgs> | null
    /**
     * Filter, which Refunds to fetch.
     */
    where?: RefundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundsOrderByWithRelationInput | RefundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundsScalarFieldEnum | RefundsScalarFieldEnum[]
  }

  /**
   * Refunds findFirstOrThrow
   */
  export type RefundsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsInclude<ExtArgs> | null
    /**
     * Filter, which Refunds to fetch.
     */
    where?: RefundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundsOrderByWithRelationInput | RefundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundsScalarFieldEnum | RefundsScalarFieldEnum[]
  }

  /**
   * Refunds findMany
   */
  export type RefundsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsInclude<ExtArgs> | null
    /**
     * Filter, which Refunds to fetch.
     */
    where?: RefundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundsOrderByWithRelationInput | RefundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refunds.
     */
    cursor?: RefundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    distinct?: RefundsScalarFieldEnum | RefundsScalarFieldEnum[]
  }

  /**
   * Refunds create
   */
  export type RefundsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsInclude<ExtArgs> | null
    /**
     * The data needed to create a Refunds.
     */
    data: XOR<RefundsCreateInput, RefundsUncheckedCreateInput>
  }

  /**
   * Refunds createMany
   */
  export type RefundsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Refunds.
     */
    data: RefundsCreateManyInput | RefundsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Refunds createManyAndReturn
   */
  export type RefundsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * The data used to create many Refunds.
     */
    data: RefundsCreateManyInput | RefundsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Refunds update
   */
  export type RefundsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsInclude<ExtArgs> | null
    /**
     * The data needed to update a Refunds.
     */
    data: XOR<RefundsUpdateInput, RefundsUncheckedUpdateInput>
    /**
     * Choose, which Refunds to update.
     */
    where: RefundsWhereUniqueInput
  }

  /**
   * Refunds updateMany
   */
  export type RefundsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundsUpdateManyMutationInput, RefundsUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundsWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
  }

  /**
   * Refunds updateManyAndReturn
   */
  export type RefundsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundsUpdateManyMutationInput, RefundsUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundsWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Refunds upsert
   */
  export type RefundsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsInclude<ExtArgs> | null
    /**
     * The filter to search for the Refunds to update in case it exists.
     */
    where: RefundsWhereUniqueInput
    /**
     * In case the Refunds found by the `where` argument doesn't exist, create a new Refunds with this data.
     */
    create: XOR<RefundsCreateInput, RefundsUncheckedCreateInput>
    /**
     * In case the Refunds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefundsUpdateInput, RefundsUncheckedUpdateInput>
  }

  /**
   * Refunds delete
   */
  export type RefundsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsInclude<ExtArgs> | null
    /**
     * Filter which Refunds to delete.
     */
    where: RefundsWhereUniqueInput
  }

  /**
   * Refunds deleteMany
   */
  export type RefundsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refunds to delete
     */
    where?: RefundsWhereInput
    /**
     * Limit how many Refunds to delete.
     */
    limit?: number
  }

  /**
   * Refunds without action
   */
  export type RefundsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refunds
     */
    select?: RefundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refunds
     */
    omit?: RefundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundsInclude<ExtArgs> | null
  }


  /**
   * Model WebhookEvents
   */

  export type AggregateWebhookEvents = {
    _count: WebhookEventsCountAggregateOutputType | null
    _min: WebhookEventsMinAggregateOutputType | null
    _max: WebhookEventsMaxAggregateOutputType | null
  }

  export type WebhookEventsMinAggregateOutputType = {
    id: string | null
    provider: $Enums.PaymentProviders | null
    event_type: string | null
    event_id: string | null
    processed: $Enums.WebhookEventProcessedStatus | null
    recieved_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WebhookEventsMaxAggregateOutputType = {
    id: string | null
    provider: $Enums.PaymentProviders | null
    event_type: string | null
    event_id: string | null
    processed: $Enums.WebhookEventProcessedStatus | null
    recieved_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WebhookEventsCountAggregateOutputType = {
    id: number
    provider: number
    event_type: number
    event_id: number
    payload: number
    processed: number
    recieved_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WebhookEventsMinAggregateInputType = {
    id?: true
    provider?: true
    event_type?: true
    event_id?: true
    processed?: true
    recieved_at?: true
    created_at?: true
    updated_at?: true
  }

  export type WebhookEventsMaxAggregateInputType = {
    id?: true
    provider?: true
    event_type?: true
    event_id?: true
    processed?: true
    recieved_at?: true
    created_at?: true
    updated_at?: true
  }

  export type WebhookEventsCountAggregateInputType = {
    id?: true
    provider?: true
    event_type?: true
    event_id?: true
    payload?: true
    processed?: true
    recieved_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WebhookEventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvents to aggregate.
     */
    where?: WebhookEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventsOrderByWithRelationInput | WebhookEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookEvents
    **/
    _count?: true | WebhookEventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookEventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookEventsMaxAggregateInputType
  }

  export type GetWebhookEventsAggregateType<T extends WebhookEventsAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookEvents[P]>
      : GetScalarType<T[P], AggregateWebhookEvents[P]>
  }




  export type WebhookEventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookEventsWhereInput
    orderBy?: WebhookEventsOrderByWithAggregationInput | WebhookEventsOrderByWithAggregationInput[]
    by: WebhookEventsScalarFieldEnum[] | WebhookEventsScalarFieldEnum
    having?: WebhookEventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookEventsCountAggregateInputType | true
    _min?: WebhookEventsMinAggregateInputType
    _max?: WebhookEventsMaxAggregateInputType
  }

  export type WebhookEventsGroupByOutputType = {
    id: string
    provider: $Enums.PaymentProviders
    event_type: string
    event_id: string
    payload: JsonValue
    processed: $Enums.WebhookEventProcessedStatus
    recieved_at: Date
    created_at: Date
    updated_at: Date | null
    _count: WebhookEventsCountAggregateOutputType | null
    _min: WebhookEventsMinAggregateOutputType | null
    _max: WebhookEventsMaxAggregateOutputType | null
  }

  type GetWebhookEventsGroupByPayload<T extends WebhookEventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookEventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookEventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookEventsGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookEventsGroupByOutputType[P]>
        }
      >
    >


  export type WebhookEventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    event_type?: boolean
    event_id?: boolean
    payload?: boolean
    processed?: boolean
    recieved_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["webhookEvents"]>

  export type WebhookEventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    event_type?: boolean
    event_id?: boolean
    payload?: boolean
    processed?: boolean
    recieved_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["webhookEvents"]>

  export type WebhookEventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    event_type?: boolean
    event_id?: boolean
    payload?: boolean
    processed?: boolean
    recieved_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["webhookEvents"]>

  export type WebhookEventsSelectScalar = {
    id?: boolean
    provider?: boolean
    event_type?: boolean
    event_id?: boolean
    payload?: boolean
    processed?: boolean
    recieved_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WebhookEventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "event_type" | "event_id" | "payload" | "processed" | "recieved_at" | "created_at" | "updated_at", ExtArgs["result"]["webhookEvents"]>

  export type $WebhookEventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookEvents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: $Enums.PaymentProviders
      event_type: string
      event_id: string
      payload: Prisma.JsonValue
      processed: $Enums.WebhookEventProcessedStatus
      recieved_at: Date
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["webhookEvents"]>
    composites: {}
  }

  type WebhookEventsGetPayload<S extends boolean | null | undefined | WebhookEventsDefaultArgs> = $Result.GetResult<Prisma.$WebhookEventsPayload, S>

  type WebhookEventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookEventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookEventsCountAggregateInputType | true
    }

  export interface WebhookEventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookEvents'], meta: { name: 'WebhookEvents' } }
    /**
     * Find zero or one WebhookEvents that matches the filter.
     * @param {WebhookEventsFindUniqueArgs} args - Arguments to find a WebhookEvents
     * @example
     * // Get one WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookEventsFindUniqueArgs>(args: SelectSubset<T, WebhookEventsFindUniqueArgs<ExtArgs>>): Prisma__WebhookEventsClient<$Result.GetResult<Prisma.$WebhookEventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookEvents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookEventsFindUniqueOrThrowArgs} args - Arguments to find a WebhookEvents
     * @example
     * // Get one WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookEventsFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookEventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookEventsClient<$Result.GetResult<Prisma.$WebhookEventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventsFindFirstArgs} args - Arguments to find a WebhookEvents
     * @example
     * // Get one WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookEventsFindFirstArgs>(args?: SelectSubset<T, WebhookEventsFindFirstArgs<ExtArgs>>): Prisma__WebhookEventsClient<$Result.GetResult<Prisma.$WebhookEventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventsFindFirstOrThrowArgs} args - Arguments to find a WebhookEvents
     * @example
     * // Get one WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookEventsFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookEventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookEventsClient<$Result.GetResult<Prisma.$WebhookEventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.findMany()
     * 
     * // Get first 10 WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookEventsWithIdOnly = await prisma.webhookEvents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookEventsFindManyArgs>(args?: SelectSubset<T, WebhookEventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookEvents.
     * @param {WebhookEventsCreateArgs} args - Arguments to create a WebhookEvents.
     * @example
     * // Create one WebhookEvents
     * const WebhookEvents = await prisma.webhookEvents.create({
     *   data: {
     *     // ... data to create a WebhookEvents
     *   }
     * })
     * 
     */
    create<T extends WebhookEventsCreateArgs>(args: SelectSubset<T, WebhookEventsCreateArgs<ExtArgs>>): Prisma__WebhookEventsClient<$Result.GetResult<Prisma.$WebhookEventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookEvents.
     * @param {WebhookEventsCreateManyArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookEventsCreateManyArgs>(args?: SelectSubset<T, WebhookEventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookEvents and returns the data saved in the database.
     * @param {WebhookEventsCreateManyAndReturnArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookEvents and only return the `id`
     * const webhookEventsWithIdOnly = await prisma.webhookEvents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookEventsCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookEventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookEvents.
     * @param {WebhookEventsDeleteArgs} args - Arguments to delete one WebhookEvents.
     * @example
     * // Delete one WebhookEvents
     * const WebhookEvents = await prisma.webhookEvents.delete({
     *   where: {
     *     // ... filter to delete one WebhookEvents
     *   }
     * })
     * 
     */
    delete<T extends WebhookEventsDeleteArgs>(args: SelectSubset<T, WebhookEventsDeleteArgs<ExtArgs>>): Prisma__WebhookEventsClient<$Result.GetResult<Prisma.$WebhookEventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookEvents.
     * @param {WebhookEventsUpdateArgs} args - Arguments to update one WebhookEvents.
     * @example
     * // Update one WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookEventsUpdateArgs>(args: SelectSubset<T, WebhookEventsUpdateArgs<ExtArgs>>): Prisma__WebhookEventsClient<$Result.GetResult<Prisma.$WebhookEventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookEvents.
     * @param {WebhookEventsDeleteManyArgs} args - Arguments to filter WebhookEvents to delete.
     * @example
     * // Delete a few WebhookEvents
     * const { count } = await prisma.webhookEvents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookEventsDeleteManyArgs>(args?: SelectSubset<T, WebhookEventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookEventsUpdateManyArgs>(args: SelectSubset<T, WebhookEventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents and returns the data updated in the database.
     * @param {WebhookEventsUpdateManyAndReturnArgs} args - Arguments to update many WebhookEvents.
     * @example
     * // Update many WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookEvents and only return the `id`
     * const webhookEventsWithIdOnly = await prisma.webhookEvents.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookEventsUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookEventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookEvents.
     * @param {WebhookEventsUpsertArgs} args - Arguments to update or create a WebhookEvents.
     * @example
     * // Update or create a WebhookEvents
     * const webhookEvents = await prisma.webhookEvents.upsert({
     *   create: {
     *     // ... data to create a WebhookEvents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookEvents we want to update
     *   }
     * })
     */
    upsert<T extends WebhookEventsUpsertArgs>(args: SelectSubset<T, WebhookEventsUpsertArgs<ExtArgs>>): Prisma__WebhookEventsClient<$Result.GetResult<Prisma.$WebhookEventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventsCountArgs} args - Arguments to filter WebhookEvents to count.
     * @example
     * // Count the number of WebhookEvents
     * const count = await prisma.webhookEvents.count({
     *   where: {
     *     // ... the filter for the WebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends WebhookEventsCountArgs>(
      args?: Subset<T, WebhookEventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookEventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebhookEventsAggregateArgs>(args: Subset<T, WebhookEventsAggregateArgs>): Prisma.PrismaPromise<GetWebhookEventsAggregateType<T>>

    /**
     * Group by WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventsGroupByArgs} args - Group by arguments.
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
      T extends WebhookEventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookEventsGroupByArgs['orderBy'] }
        : { orderBy?: WebhookEventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebhookEventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookEvents model
   */
  readonly fields: WebhookEventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookEvents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookEventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookEvents model
   */
  interface WebhookEventsFieldRefs {
    readonly id: FieldRef<"WebhookEvents", 'String'>
    readonly provider: FieldRef<"WebhookEvents", 'PaymentProviders'>
    readonly event_type: FieldRef<"WebhookEvents", 'String'>
    readonly event_id: FieldRef<"WebhookEvents", 'String'>
    readonly payload: FieldRef<"WebhookEvents", 'Json'>
    readonly processed: FieldRef<"WebhookEvents", 'WebhookEventProcessedStatus'>
    readonly recieved_at: FieldRef<"WebhookEvents", 'DateTime'>
    readonly created_at: FieldRef<"WebhookEvents", 'DateTime'>
    readonly updated_at: FieldRef<"WebhookEvents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookEvents findUnique
   */
  export type WebhookEventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvents to fetch.
     */
    where: WebhookEventsWhereUniqueInput
  }

  /**
   * WebhookEvents findUniqueOrThrow
   */
  export type WebhookEventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvents to fetch.
     */
    where: WebhookEventsWhereUniqueInput
  }

  /**
   * WebhookEvents findFirst
   */
  export type WebhookEventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvents to fetch.
     */
    where?: WebhookEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventsOrderByWithRelationInput | WebhookEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventsScalarFieldEnum | WebhookEventsScalarFieldEnum[]
  }

  /**
   * WebhookEvents findFirstOrThrow
   */
  export type WebhookEventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvents to fetch.
     */
    where?: WebhookEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventsOrderByWithRelationInput | WebhookEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventsScalarFieldEnum | WebhookEventsScalarFieldEnum[]
  }

  /**
   * WebhookEvents findMany
   */
  export type WebhookEventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvents to fetch.
     */
    where?: WebhookEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventsOrderByWithRelationInput | WebhookEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookEvents.
     */
    cursor?: WebhookEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    distinct?: WebhookEventsScalarFieldEnum | WebhookEventsScalarFieldEnum[]
  }

  /**
   * WebhookEvents create
   */
  export type WebhookEventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
    /**
     * The data needed to create a WebhookEvents.
     */
    data: XOR<WebhookEventsCreateInput, WebhookEventsUncheckedCreateInput>
  }

  /**
   * WebhookEvents createMany
   */
  export type WebhookEventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventsCreateManyInput | WebhookEventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEvents createManyAndReturn
   */
  export type WebhookEventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventsCreateManyInput | WebhookEventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEvents update
   */
  export type WebhookEventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
    /**
     * The data needed to update a WebhookEvents.
     */
    data: XOR<WebhookEventsUpdateInput, WebhookEventsUncheckedUpdateInput>
    /**
     * Choose, which WebhookEvents to update.
     */
    where: WebhookEventsWhereUniqueInput
  }

  /**
   * WebhookEvents updateMany
   */
  export type WebhookEventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventsUpdateManyMutationInput, WebhookEventsUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventsWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
  }

  /**
   * WebhookEvents updateManyAndReturn
   */
  export type WebhookEventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventsUpdateManyMutationInput, WebhookEventsUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventsWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
  }

  /**
   * WebhookEvents upsert
   */
  export type WebhookEventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
    /**
     * The filter to search for the WebhookEvents to update in case it exists.
     */
    where: WebhookEventsWhereUniqueInput
    /**
     * In case the WebhookEvents found by the `where` argument doesn't exist, create a new WebhookEvents with this data.
     */
    create: XOR<WebhookEventsCreateInput, WebhookEventsUncheckedCreateInput>
    /**
     * In case the WebhookEvents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookEventsUpdateInput, WebhookEventsUncheckedUpdateInput>
  }

  /**
   * WebhookEvents delete
   */
  export type WebhookEventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
    /**
     * Filter which WebhookEvents to delete.
     */
    where: WebhookEventsWhereUniqueInput
  }

  /**
   * WebhookEvents deleteMany
   */
  export type WebhookEventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvents to delete
     */
    where?: WebhookEventsWhereInput
    /**
     * Limit how many WebhookEvents to delete.
     */
    limit?: number
  }

  /**
   * WebhookEvents without action
   */
  export type WebhookEventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvents
     */
    select?: WebhookEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvents
     */
    omit?: WebhookEventsOmit<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password_hash: 'password_hash',
    avatar: 'avatar',
    google_id: 'google_id',
    code: 'code',
    code_generated_at: 'code_generated_at',
    is_verified: 'is_verified',
    refresh_token: 'refresh_token',
    refresh_generated_at: 'refresh_generated_at',
    google_refresh_token: 'google_refresh_token',
    phone_number: 'phone_number',
    address_line_1: 'address_line_1',
    address_line_2: 'address_line_2',
    city: 'city',
    state: 'state',
    postal_code: 'postal_code',
    country: 'country',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PlansScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price_cents: 'price_cents',
    currency: 'currency',
    billing_interval: 'billing_interval',
    trial_period_days: 'trial_period_days',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PlansScalarFieldEnum = (typeof PlansScalarFieldEnum)[keyof typeof PlansScalarFieldEnum]


  export const SubscriptionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    plan_id: 'plan_id',
    status: 'status',
    start_date: 'start_date',
    end_date: 'end_date',
    trial_end_date: 'trial_end_date',
    cancel_at: 'cancel_at',
    canceled_at: 'canceled_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SubscriptionsScalarFieldEnum = (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    subscription_id: 'subscription_id',
    amount_cents: 'amount_cents',
    currency: 'currency',
    status: 'status',
    payment_method_id: 'payment_method_id',
    invoice_id: 'invoice_id',
    transaction_reference: 'transaction_reference',
    paid_at: 'paid_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const PaymentMethodsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    provider: 'provider',
    type: 'type',
    last_digits: 'last_digits',
    expiry_month: 'expiry_month',
    expiry_year: 'expiry_year',
    brand: 'brand',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentMethodsScalarFieldEnum = (typeof PaymentMethodsScalarFieldEnum)[keyof typeof PaymentMethodsScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    subscription_id: 'subscription_id',
    payment_method_id: 'payment_method_id',
    amount_due_cents: 'amount_due_cents',
    amount_paid_cents: 'amount_paid_cents',
    currency: 'currency',
    due_date: 'due_date',
    paid_at: 'paid_at',
    status: 'status',
    invoice_number: 'invoice_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


  export const RefundsScalarFieldEnum: {
    id: 'id',
    payment_id: 'payment_id',
    amount_cents: 'amount_cents',
    currency: 'currency',
    reason: 'reason',
    status: 'status',
    gateway_ref: 'gateway_ref',
    processed_at: 'processed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RefundsScalarFieldEnum = (typeof RefundsScalarFieldEnum)[keyof typeof RefundsScalarFieldEnum]


  export const WebhookEventsScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    event_type: 'event_type',
    event_id: 'event_id',
    payload: 'payload',
    processed: 'processed',
    recieved_at: 'recieved_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WebhookEventsScalarFieldEnum = (typeof WebhookEventsScalarFieldEnum)[keyof typeof WebhookEventsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'BillingInterval'
   */
  export type EnumBillingIntervalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingInterval'>
    


  /**
   * Reference to a field of type 'BillingInterval[]'
   */
  export type ListEnumBillingIntervalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingInterval[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentProviders'
   */
  export type EnumPaymentProvidersFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProviders'>
    


  /**
   * Reference to a field of type 'PaymentProviders[]'
   */
  export type ListEnumPaymentProvidersFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProviders[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    


  /**
   * Reference to a field of type 'CardBrand'
   */
  export type EnumCardBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardBrand'>
    


  /**
   * Reference to a field of type 'CardBrand[]'
   */
  export type ListEnumCardBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardBrand[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'RefundStatus'
   */
  export type EnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus'>
    


  /**
   * Reference to a field of type 'RefundStatus[]'
   */
  export type ListEnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'WebhookEventProcessedStatus'
   */
  export type EnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebhookEventProcessedStatus'>
    


  /**
   * Reference to a field of type 'WebhookEventProcessedStatus[]'
   */
  export type ListEnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebhookEventProcessedStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password_hash?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    google_id?: StringNullableFilter<"Users"> | string | null
    code?: StringNullableFilter<"Users"> | string | null
    code_generated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    is_verified?: BoolFilter<"Users"> | boolean
    refresh_token?: StringNullableFilter<"Users"> | string | null
    refresh_generated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    google_refresh_token?: StringNullableFilter<"Users"> | string | null
    phone_number?: IntNullableFilter<"Users"> | number | null
    address_line_1?: StringNullableFilter<"Users"> | string | null
    address_line_2?: StringNullableFilter<"Users"> | string | null
    city?: StringNullableFilter<"Users"> | string | null
    state?: StringNullableFilter<"Users"> | string | null
    postal_code?: StringNullableFilter<"Users"> | string | null
    country?: StringNullableFilter<"Users"> | string | null
    role?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    Subscriptions?: SubscriptionsListRelationFilter
    Payments?: PaymentsListRelationFilter
    PaymentMethods?: PaymentMethodsListRelationFilter
    Invoices?: InvoicesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    google_id?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    code_generated_at?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    refresh_generated_at?: SortOrderInput | SortOrder
    google_refresh_token?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    address_line_1?: SortOrderInput | SortOrder
    address_line_2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Subscriptions?: SubscriptionsOrderByRelationAggregateInput
    Payments?: PaymentsOrderByRelationAggregateInput
    PaymentMethods?: PaymentMethodsOrderByRelationAggregateInput
    Invoices?: InvoicesOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    google_id?: string
    phone_number?: number
    code_is_verified?: UsersCodeIs_verifiedCompoundUniqueInput
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    password_hash?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    code?: StringNullableFilter<"Users"> | string | null
    code_generated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    is_verified?: BoolFilter<"Users"> | boolean
    refresh_token?: StringNullableFilter<"Users"> | string | null
    refresh_generated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    google_refresh_token?: StringNullableFilter<"Users"> | string | null
    address_line_1?: StringNullableFilter<"Users"> | string | null
    address_line_2?: StringNullableFilter<"Users"> | string | null
    city?: StringNullableFilter<"Users"> | string | null
    state?: StringNullableFilter<"Users"> | string | null
    postal_code?: StringNullableFilter<"Users"> | string | null
    country?: StringNullableFilter<"Users"> | string | null
    role?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    Subscriptions?: SubscriptionsListRelationFilter
    Payments?: PaymentsListRelationFilter
    PaymentMethods?: PaymentMethodsListRelationFilter
    Invoices?: InvoicesListRelationFilter
  }, "id" | "email" | "google_id" | "phone_number" | "code_is_verified">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    google_id?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    code_generated_at?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    refresh_generated_at?: SortOrderInput | SortOrder
    google_refresh_token?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    address_line_1?: SortOrderInput | SortOrder
    address_line_2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    first_name?: StringWithAggregatesFilter<"Users"> | string
    last_name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password_hash?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    google_id?: StringNullableWithAggregatesFilter<"Users"> | string | null
    code?: StringNullableWithAggregatesFilter<"Users"> | string | null
    code_generated_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    is_verified?: BoolWithAggregatesFilter<"Users"> | boolean
    refresh_token?: StringNullableWithAggregatesFilter<"Users"> | string | null
    refresh_generated_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    google_refresh_token?: StringNullableWithAggregatesFilter<"Users"> | string | null
    phone_number?: IntNullableWithAggregatesFilter<"Users"> | number | null
    address_line_1?: StringNullableWithAggregatesFilter<"Users"> | string | null
    address_line_2?: StringNullableWithAggregatesFilter<"Users"> | string | null
    city?: StringNullableWithAggregatesFilter<"Users"> | string | null
    state?: StringNullableWithAggregatesFilter<"Users"> | string | null
    postal_code?: StringNullableWithAggregatesFilter<"Users"> | string | null
    country?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: StringNullableWithAggregatesFilter<"Users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type PlansWhereInput = {
    AND?: PlansWhereInput | PlansWhereInput[]
    OR?: PlansWhereInput[]
    NOT?: PlansWhereInput | PlansWhereInput[]
    id?: StringFilter<"Plans"> | string
    name?: StringFilter<"Plans"> | string
    description?: StringFilter<"Plans"> | string
    price_cents?: IntFilter<"Plans"> | number
    currency?: EnumCurrencyFilter<"Plans"> | $Enums.Currency
    billing_interval?: EnumBillingIntervalFilter<"Plans"> | $Enums.BillingInterval
    trial_period_days?: StringNullableFilter<"Plans"> | string | null
    is_active?: BoolFilter<"Plans"> | boolean
    created_at?: DateTimeFilter<"Plans"> | Date | string
    updated_at?: DateTimeFilter<"Plans"> | Date | string
    Subscriptions?: SubscriptionsListRelationFilter
  }

  export type PlansOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price_cents?: SortOrder
    currency?: SortOrder
    billing_interval?: SortOrder
    trial_period_days?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Subscriptions?: SubscriptionsOrderByRelationAggregateInput
  }

  export type PlansWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_billing_interval?: PlansNameBilling_intervalCompoundUniqueInput
    AND?: PlansWhereInput | PlansWhereInput[]
    OR?: PlansWhereInput[]
    NOT?: PlansWhereInput | PlansWhereInput[]
    name?: StringFilter<"Plans"> | string
    description?: StringFilter<"Plans"> | string
    price_cents?: IntFilter<"Plans"> | number
    currency?: EnumCurrencyFilter<"Plans"> | $Enums.Currency
    billing_interval?: EnumBillingIntervalFilter<"Plans"> | $Enums.BillingInterval
    trial_period_days?: StringNullableFilter<"Plans"> | string | null
    is_active?: BoolFilter<"Plans"> | boolean
    created_at?: DateTimeFilter<"Plans"> | Date | string
    updated_at?: DateTimeFilter<"Plans"> | Date | string
    Subscriptions?: SubscriptionsListRelationFilter
  }, "id" | "name_billing_interval">

  export type PlansOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price_cents?: SortOrder
    currency?: SortOrder
    billing_interval?: SortOrder
    trial_period_days?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PlansCountOrderByAggregateInput
    _avg?: PlansAvgOrderByAggregateInput
    _max?: PlansMaxOrderByAggregateInput
    _min?: PlansMinOrderByAggregateInput
    _sum?: PlansSumOrderByAggregateInput
  }

  export type PlansScalarWhereWithAggregatesInput = {
    AND?: PlansScalarWhereWithAggregatesInput | PlansScalarWhereWithAggregatesInput[]
    OR?: PlansScalarWhereWithAggregatesInput[]
    NOT?: PlansScalarWhereWithAggregatesInput | PlansScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plans"> | string
    name?: StringWithAggregatesFilter<"Plans"> | string
    description?: StringWithAggregatesFilter<"Plans"> | string
    price_cents?: IntWithAggregatesFilter<"Plans"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"Plans"> | $Enums.Currency
    billing_interval?: EnumBillingIntervalWithAggregatesFilter<"Plans"> | $Enums.BillingInterval
    trial_period_days?: StringNullableWithAggregatesFilter<"Plans"> | string | null
    is_active?: BoolWithAggregatesFilter<"Plans"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Plans"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Plans"> | Date | string
  }

  export type SubscriptionsWhereInput = {
    AND?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    OR?: SubscriptionsWhereInput[]
    NOT?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    id?: StringFilter<"Subscriptions"> | string
    user_id?: StringFilter<"Subscriptions"> | string
    plan_id?: StringFilter<"Subscriptions"> | string
    status?: EnumSubscriptionStatusFilter<"Subscriptions"> | $Enums.SubscriptionStatus
    start_date?: DateTimeFilter<"Subscriptions"> | Date | string
    end_date?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    trial_end_date?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    cancel_at?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    canceled_at?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    created_at?: DateTimeFilter<"Subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"Subscriptions"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    plan?: XOR<PlansScalarRelationFilter, PlansWhereInput>
    Payments?: PaymentsListRelationFilter
    Invoices?: InvoicesListRelationFilter
  }

  export type SubscriptionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    trial_end_date?: SortOrderInput | SortOrder
    cancel_at?: SortOrderInput | SortOrder
    canceled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    plan?: PlansOrderByWithRelationInput
    Payments?: PaymentsOrderByRelationAggregateInput
    Invoices?: InvoicesOrderByRelationAggregateInput
  }

  export type SubscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    OR?: SubscriptionsWhereInput[]
    NOT?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    user_id?: StringFilter<"Subscriptions"> | string
    plan_id?: StringFilter<"Subscriptions"> | string
    status?: EnumSubscriptionStatusFilter<"Subscriptions"> | $Enums.SubscriptionStatus
    start_date?: DateTimeFilter<"Subscriptions"> | Date | string
    end_date?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    trial_end_date?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    cancel_at?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    canceled_at?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    created_at?: DateTimeFilter<"Subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"Subscriptions"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    plan?: XOR<PlansScalarRelationFilter, PlansWhereInput>
    Payments?: PaymentsListRelationFilter
    Invoices?: InvoicesListRelationFilter
  }, "id">

  export type SubscriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    trial_end_date?: SortOrderInput | SortOrder
    cancel_at?: SortOrderInput | SortOrder
    canceled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SubscriptionsCountOrderByAggregateInput
    _max?: SubscriptionsMaxOrderByAggregateInput
    _min?: SubscriptionsMinOrderByAggregateInput
  }

  export type SubscriptionsScalarWhereWithAggregatesInput = {
    AND?: SubscriptionsScalarWhereWithAggregatesInput | SubscriptionsScalarWhereWithAggregatesInput[]
    OR?: SubscriptionsScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionsScalarWhereWithAggregatesInput | SubscriptionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscriptions"> | string
    user_id?: StringWithAggregatesFilter<"Subscriptions"> | string
    plan_id?: StringWithAggregatesFilter<"Subscriptions"> | string
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscriptions"> | $Enums.SubscriptionStatus
    start_date?: DateTimeWithAggregatesFilter<"Subscriptions"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"Subscriptions"> | Date | string | null
    trial_end_date?: DateTimeNullableWithAggregatesFilter<"Subscriptions"> | Date | string | null
    cancel_at?: DateTimeNullableWithAggregatesFilter<"Subscriptions"> | Date | string | null
    canceled_at?: DateTimeNullableWithAggregatesFilter<"Subscriptions"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Subscriptions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Subscriptions"> | Date | string
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: StringFilter<"Payments"> | string
    user_id?: StringFilter<"Payments"> | string
    subscription_id?: StringNullableFilter<"Payments"> | string | null
    amount_cents?: IntFilter<"Payments"> | number
    currency?: EnumCurrencyFilter<"Payments"> | $Enums.Currency
    status?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    payment_method_id?: StringFilter<"Payments"> | string
    invoice_id?: StringFilter<"Payments"> | string
    transaction_reference?: StringNullableFilter<"Payments"> | string | null
    paid_at?: DateTimeNullableFilter<"Payments"> | Date | string | null
    created_at?: DateTimeFilter<"Payments"> | Date | string
    updated_at?: DateTimeFilter<"Payments"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    subscription?: XOR<SubscriptionsNullableScalarRelationFilter, SubscriptionsWhereInput> | null
    paymentMethod?: XOR<PaymentMethodsScalarRelationFilter, PaymentMethodsWhereInput>
    invoice?: XOR<InvoicesScalarRelationFilter, InvoicesWhereInput>
    Refunds?: RefundsListRelationFilter
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    subscription_id?: SortOrderInput | SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method_id?: SortOrder
    invoice_id?: SortOrder
    transaction_reference?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    subscription?: SubscriptionsOrderByWithRelationInput
    paymentMethod?: PaymentMethodsOrderByWithRelationInput
    invoice?: InvoicesOrderByWithRelationInput
    Refunds?: RefundsOrderByRelationAggregateInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    user_id?: StringFilter<"Payments"> | string
    subscription_id?: StringNullableFilter<"Payments"> | string | null
    amount_cents?: IntFilter<"Payments"> | number
    currency?: EnumCurrencyFilter<"Payments"> | $Enums.Currency
    status?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    payment_method_id?: StringFilter<"Payments"> | string
    invoice_id?: StringFilter<"Payments"> | string
    transaction_reference?: StringNullableFilter<"Payments"> | string | null
    paid_at?: DateTimeNullableFilter<"Payments"> | Date | string | null
    created_at?: DateTimeFilter<"Payments"> | Date | string
    updated_at?: DateTimeFilter<"Payments"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    subscription?: XOR<SubscriptionsNullableScalarRelationFilter, SubscriptionsWhereInput> | null
    paymentMethod?: XOR<PaymentMethodsScalarRelationFilter, PaymentMethodsWhereInput>
    invoice?: XOR<InvoicesScalarRelationFilter, InvoicesWhereInput>
    Refunds?: RefundsListRelationFilter
  }, "id">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    subscription_id?: SortOrderInput | SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method_id?: SortOrder
    invoice_id?: SortOrder
    transaction_reference?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payments"> | string
    user_id?: StringWithAggregatesFilter<"Payments"> | string
    subscription_id?: StringNullableWithAggregatesFilter<"Payments"> | string | null
    amount_cents?: IntWithAggregatesFilter<"Payments"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"Payments"> | $Enums.Currency
    status?: EnumPaymentStatusWithAggregatesFilter<"Payments"> | $Enums.PaymentStatus
    payment_method_id?: StringWithAggregatesFilter<"Payments"> | string
    invoice_id?: StringWithAggregatesFilter<"Payments"> | string
    transaction_reference?: StringNullableWithAggregatesFilter<"Payments"> | string | null
    paid_at?: DateTimeNullableWithAggregatesFilter<"Payments"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type PaymentMethodsWhereInput = {
    AND?: PaymentMethodsWhereInput | PaymentMethodsWhereInput[]
    OR?: PaymentMethodsWhereInput[]
    NOT?: PaymentMethodsWhereInput | PaymentMethodsWhereInput[]
    id?: StringFilter<"PaymentMethods"> | string
    user_id?: StringFilter<"PaymentMethods"> | string
    provider?: EnumPaymentProvidersFilter<"PaymentMethods"> | $Enums.PaymentProviders
    type?: EnumPaymentTypeFilter<"PaymentMethods"> | $Enums.PaymentType
    last_digits?: IntNullableFilter<"PaymentMethods"> | number | null
    expiry_month?: IntNullableFilter<"PaymentMethods"> | number | null
    expiry_year?: IntNullableFilter<"PaymentMethods"> | number | null
    brand?: EnumCardBrandNullableFilter<"PaymentMethods"> | $Enums.CardBrand | null
    created_at?: DateTimeFilter<"PaymentMethods"> | Date | string
    updated_at?: DateTimeFilter<"PaymentMethods"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Payments?: PaymentsListRelationFilter
    Invoices?: InvoicesListRelationFilter
  }

  export type PaymentMethodsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    type?: SortOrder
    last_digits?: SortOrderInput | SortOrder
    expiry_month?: SortOrderInput | SortOrder
    expiry_year?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    Payments?: PaymentsOrderByRelationAggregateInput
    Invoices?: InvoicesOrderByRelationAggregateInput
  }

  export type PaymentMethodsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentMethodsWhereInput | PaymentMethodsWhereInput[]
    OR?: PaymentMethodsWhereInput[]
    NOT?: PaymentMethodsWhereInput | PaymentMethodsWhereInput[]
    user_id?: StringFilter<"PaymentMethods"> | string
    provider?: EnumPaymentProvidersFilter<"PaymentMethods"> | $Enums.PaymentProviders
    type?: EnumPaymentTypeFilter<"PaymentMethods"> | $Enums.PaymentType
    last_digits?: IntNullableFilter<"PaymentMethods"> | number | null
    expiry_month?: IntNullableFilter<"PaymentMethods"> | number | null
    expiry_year?: IntNullableFilter<"PaymentMethods"> | number | null
    brand?: EnumCardBrandNullableFilter<"PaymentMethods"> | $Enums.CardBrand | null
    created_at?: DateTimeFilter<"PaymentMethods"> | Date | string
    updated_at?: DateTimeFilter<"PaymentMethods"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Payments?: PaymentsListRelationFilter
    Invoices?: InvoicesListRelationFilter
  }, "id">

  export type PaymentMethodsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    type?: SortOrder
    last_digits?: SortOrderInput | SortOrder
    expiry_month?: SortOrderInput | SortOrder
    expiry_year?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaymentMethodsCountOrderByAggregateInput
    _avg?: PaymentMethodsAvgOrderByAggregateInput
    _max?: PaymentMethodsMaxOrderByAggregateInput
    _min?: PaymentMethodsMinOrderByAggregateInput
    _sum?: PaymentMethodsSumOrderByAggregateInput
  }

  export type PaymentMethodsScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodsScalarWhereWithAggregatesInput | PaymentMethodsScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodsScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodsScalarWhereWithAggregatesInput | PaymentMethodsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentMethods"> | string
    user_id?: StringWithAggregatesFilter<"PaymentMethods"> | string
    provider?: EnumPaymentProvidersWithAggregatesFilter<"PaymentMethods"> | $Enums.PaymentProviders
    type?: EnumPaymentTypeWithAggregatesFilter<"PaymentMethods"> | $Enums.PaymentType
    last_digits?: IntNullableWithAggregatesFilter<"PaymentMethods"> | number | null
    expiry_month?: IntNullableWithAggregatesFilter<"PaymentMethods"> | number | null
    expiry_year?: IntNullableWithAggregatesFilter<"PaymentMethods"> | number | null
    brand?: EnumCardBrandNullableWithAggregatesFilter<"PaymentMethods"> | $Enums.CardBrand | null
    created_at?: DateTimeWithAggregatesFilter<"PaymentMethods"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PaymentMethods"> | Date | string
  }

  export type InvoicesWhereInput = {
    AND?: InvoicesWhereInput | InvoicesWhereInput[]
    OR?: InvoicesWhereInput[]
    NOT?: InvoicesWhereInput | InvoicesWhereInput[]
    id?: StringFilter<"Invoices"> | string
    user_id?: StringFilter<"Invoices"> | string
    subscription_id?: StringFilter<"Invoices"> | string
    payment_method_id?: StringFilter<"Invoices"> | string
    amount_due_cents?: IntFilter<"Invoices"> | number
    amount_paid_cents?: IntFilter<"Invoices"> | number
    currency?: EnumCurrencyFilter<"Invoices"> | $Enums.Currency
    due_date?: DateTimeFilter<"Invoices"> | Date | string
    paid_at?: DateTimeNullableFilter<"Invoices"> | Date | string | null
    status?: EnumInvoiceStatusFilter<"Invoices"> | $Enums.InvoiceStatus
    invoice_number?: StringFilter<"Invoices"> | string
    created_at?: DateTimeFilter<"Invoices"> | Date | string
    updated_at?: DateTimeFilter<"Invoices"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    subscription?: XOR<SubscriptionsScalarRelationFilter, SubscriptionsWhereInput>
    paymentMethods?: XOR<PaymentMethodsScalarRelationFilter, PaymentMethodsWhereInput>
    Payments?: PaymentsListRelationFilter
  }

  export type InvoicesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    subscription_id?: SortOrder
    payment_method_id?: SortOrder
    amount_due_cents?: SortOrder
    amount_paid_cents?: SortOrder
    currency?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    status?: SortOrder
    invoice_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    subscription?: SubscriptionsOrderByWithRelationInput
    paymentMethods?: PaymentMethodsOrderByWithRelationInput
    Payments?: PaymentsOrderByRelationAggregateInput
  }

  export type InvoicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoice_number?: string
    AND?: InvoicesWhereInput | InvoicesWhereInput[]
    OR?: InvoicesWhereInput[]
    NOT?: InvoicesWhereInput | InvoicesWhereInput[]
    user_id?: StringFilter<"Invoices"> | string
    subscription_id?: StringFilter<"Invoices"> | string
    payment_method_id?: StringFilter<"Invoices"> | string
    amount_due_cents?: IntFilter<"Invoices"> | number
    amount_paid_cents?: IntFilter<"Invoices"> | number
    currency?: EnumCurrencyFilter<"Invoices"> | $Enums.Currency
    due_date?: DateTimeFilter<"Invoices"> | Date | string
    paid_at?: DateTimeNullableFilter<"Invoices"> | Date | string | null
    status?: EnumInvoiceStatusFilter<"Invoices"> | $Enums.InvoiceStatus
    created_at?: DateTimeFilter<"Invoices"> | Date | string
    updated_at?: DateTimeFilter<"Invoices"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    subscription?: XOR<SubscriptionsScalarRelationFilter, SubscriptionsWhereInput>
    paymentMethods?: XOR<PaymentMethodsScalarRelationFilter, PaymentMethodsWhereInput>
    Payments?: PaymentsListRelationFilter
  }, "id" | "invoice_number">

  export type InvoicesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    subscription_id?: SortOrder
    payment_method_id?: SortOrder
    amount_due_cents?: SortOrder
    amount_paid_cents?: SortOrder
    currency?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    status?: SortOrder
    invoice_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: InvoicesCountOrderByAggregateInput
    _avg?: InvoicesAvgOrderByAggregateInput
    _max?: InvoicesMaxOrderByAggregateInput
    _min?: InvoicesMinOrderByAggregateInput
    _sum?: InvoicesSumOrderByAggregateInput
  }

  export type InvoicesScalarWhereWithAggregatesInput = {
    AND?: InvoicesScalarWhereWithAggregatesInput | InvoicesScalarWhereWithAggregatesInput[]
    OR?: InvoicesScalarWhereWithAggregatesInput[]
    NOT?: InvoicesScalarWhereWithAggregatesInput | InvoicesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoices"> | string
    user_id?: StringWithAggregatesFilter<"Invoices"> | string
    subscription_id?: StringWithAggregatesFilter<"Invoices"> | string
    payment_method_id?: StringWithAggregatesFilter<"Invoices"> | string
    amount_due_cents?: IntWithAggregatesFilter<"Invoices"> | number
    amount_paid_cents?: IntWithAggregatesFilter<"Invoices"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"Invoices"> | $Enums.Currency
    due_date?: DateTimeWithAggregatesFilter<"Invoices"> | Date | string
    paid_at?: DateTimeNullableWithAggregatesFilter<"Invoices"> | Date | string | null
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoices"> | $Enums.InvoiceStatus
    invoice_number?: StringWithAggregatesFilter<"Invoices"> | string
    created_at?: DateTimeWithAggregatesFilter<"Invoices"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Invoices"> | Date | string
  }

  export type RefundsWhereInput = {
    AND?: RefundsWhereInput | RefundsWhereInput[]
    OR?: RefundsWhereInput[]
    NOT?: RefundsWhereInput | RefundsWhereInput[]
    id?: StringFilter<"Refunds"> | string
    payment_id?: StringFilter<"Refunds"> | string
    amount_cents?: IntFilter<"Refunds"> | number
    currency?: EnumCurrencyFilter<"Refunds"> | $Enums.Currency
    reason?: StringNullableFilter<"Refunds"> | string | null
    status?: EnumRefundStatusFilter<"Refunds"> | $Enums.RefundStatus
    gateway_ref?: StringNullableFilter<"Refunds"> | string | null
    processed_at?: DateTimeNullableFilter<"Refunds"> | Date | string | null
    created_at?: DateTimeFilter<"Refunds"> | Date | string
    updated_at?: DateTimeNullableFilter<"Refunds"> | Date | string | null
    payments?: XOR<PaymentsScalarRelationFilter, PaymentsWhereInput>
  }

  export type RefundsOrderByWithRelationInput = {
    id?: SortOrder
    payment_id?: SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    gateway_ref?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    payments?: PaymentsOrderByWithRelationInput
  }

  export type RefundsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefundsWhereInput | RefundsWhereInput[]
    OR?: RefundsWhereInput[]
    NOT?: RefundsWhereInput | RefundsWhereInput[]
    payment_id?: StringFilter<"Refunds"> | string
    amount_cents?: IntFilter<"Refunds"> | number
    currency?: EnumCurrencyFilter<"Refunds"> | $Enums.Currency
    reason?: StringNullableFilter<"Refunds"> | string | null
    status?: EnumRefundStatusFilter<"Refunds"> | $Enums.RefundStatus
    gateway_ref?: StringNullableFilter<"Refunds"> | string | null
    processed_at?: DateTimeNullableFilter<"Refunds"> | Date | string | null
    created_at?: DateTimeFilter<"Refunds"> | Date | string
    updated_at?: DateTimeNullableFilter<"Refunds"> | Date | string | null
    payments?: XOR<PaymentsScalarRelationFilter, PaymentsWhereInput>
  }, "id">

  export type RefundsOrderByWithAggregationInput = {
    id?: SortOrder
    payment_id?: SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    gateway_ref?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: RefundsCountOrderByAggregateInput
    _avg?: RefundsAvgOrderByAggregateInput
    _max?: RefundsMaxOrderByAggregateInput
    _min?: RefundsMinOrderByAggregateInput
    _sum?: RefundsSumOrderByAggregateInput
  }

  export type RefundsScalarWhereWithAggregatesInput = {
    AND?: RefundsScalarWhereWithAggregatesInput | RefundsScalarWhereWithAggregatesInput[]
    OR?: RefundsScalarWhereWithAggregatesInput[]
    NOT?: RefundsScalarWhereWithAggregatesInput | RefundsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Refunds"> | string
    payment_id?: StringWithAggregatesFilter<"Refunds"> | string
    amount_cents?: IntWithAggregatesFilter<"Refunds"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"Refunds"> | $Enums.Currency
    reason?: StringNullableWithAggregatesFilter<"Refunds"> | string | null
    status?: EnumRefundStatusWithAggregatesFilter<"Refunds"> | $Enums.RefundStatus
    gateway_ref?: StringNullableWithAggregatesFilter<"Refunds"> | string | null
    processed_at?: DateTimeNullableWithAggregatesFilter<"Refunds"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Refunds"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Refunds"> | Date | string | null
  }

  export type WebhookEventsWhereInput = {
    AND?: WebhookEventsWhereInput | WebhookEventsWhereInput[]
    OR?: WebhookEventsWhereInput[]
    NOT?: WebhookEventsWhereInput | WebhookEventsWhereInput[]
    id?: StringFilter<"WebhookEvents"> | string
    provider?: EnumPaymentProvidersFilter<"WebhookEvents"> | $Enums.PaymentProviders
    event_type?: StringFilter<"WebhookEvents"> | string
    event_id?: StringFilter<"WebhookEvents"> | string
    payload?: JsonFilter<"WebhookEvents">
    processed?: EnumWebhookEventProcessedStatusFilter<"WebhookEvents"> | $Enums.WebhookEventProcessedStatus
    recieved_at?: DateTimeFilter<"WebhookEvents"> | Date | string
    created_at?: DateTimeFilter<"WebhookEvents"> | Date | string
    updated_at?: DateTimeNullableFilter<"WebhookEvents"> | Date | string | null
  }

  export type WebhookEventsOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    event_type?: SortOrder
    event_id?: SortOrder
    payload?: SortOrder
    processed?: SortOrder
    recieved_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type WebhookEventsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    event_id?: string
    AND?: WebhookEventsWhereInput | WebhookEventsWhereInput[]
    OR?: WebhookEventsWhereInput[]
    NOT?: WebhookEventsWhereInput | WebhookEventsWhereInput[]
    provider?: EnumPaymentProvidersFilter<"WebhookEvents"> | $Enums.PaymentProviders
    event_type?: StringFilter<"WebhookEvents"> | string
    payload?: JsonFilter<"WebhookEvents">
    processed?: EnumWebhookEventProcessedStatusFilter<"WebhookEvents"> | $Enums.WebhookEventProcessedStatus
    recieved_at?: DateTimeFilter<"WebhookEvents"> | Date | string
    created_at?: DateTimeFilter<"WebhookEvents"> | Date | string
    updated_at?: DateTimeNullableFilter<"WebhookEvents"> | Date | string | null
  }, "id" | "event_id">

  export type WebhookEventsOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    event_type?: SortOrder
    event_id?: SortOrder
    payload?: SortOrder
    processed?: SortOrder
    recieved_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: WebhookEventsCountOrderByAggregateInput
    _max?: WebhookEventsMaxOrderByAggregateInput
    _min?: WebhookEventsMinOrderByAggregateInput
  }

  export type WebhookEventsScalarWhereWithAggregatesInput = {
    AND?: WebhookEventsScalarWhereWithAggregatesInput | WebhookEventsScalarWhereWithAggregatesInput[]
    OR?: WebhookEventsScalarWhereWithAggregatesInput[]
    NOT?: WebhookEventsScalarWhereWithAggregatesInput | WebhookEventsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookEvents"> | string
    provider?: EnumPaymentProvidersWithAggregatesFilter<"WebhookEvents"> | $Enums.PaymentProviders
    event_type?: StringWithAggregatesFilter<"WebhookEvents"> | string
    event_id?: StringWithAggregatesFilter<"WebhookEvents"> | string
    payload?: JsonWithAggregatesFilter<"WebhookEvents">
    processed?: EnumWebhookEventProcessedStatusWithAggregatesFilter<"WebhookEvents"> | $Enums.WebhookEventProcessedStatus
    recieved_at?: DateTimeWithAggregatesFilter<"WebhookEvents"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"WebhookEvents"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"WebhookEvents"> | Date | string | null
  }

  export type UsersCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash?: string | null
    avatar?: string | null
    google_id?: string | null
    code?: string | null
    code_generated_at?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    refresh_generated_at?: Date | string | null
    google_refresh_token?: string | null
    phone_number?: number | null
    address_line_1?: string | null
    address_line_2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    role?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Subscriptions?: SubscriptionsCreateNestedManyWithoutUserInput
    Payments?: PaymentsCreateNestedManyWithoutUserInput
    PaymentMethods?: PaymentMethodsCreateNestedManyWithoutUserInput
    Invoices?: InvoicesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash?: string | null
    avatar?: string | null
    google_id?: string | null
    code?: string | null
    code_generated_at?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    refresh_generated_at?: Date | string | null
    google_refresh_token?: string | null
    phone_number?: number | null
    address_line_1?: string | null
    address_line_2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    role?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Subscriptions?: SubscriptionsUncheckedCreateNestedManyWithoutUserInput
    Payments?: PaymentsUncheckedCreateNestedManyWithoutUserInput
    PaymentMethods?: PaymentMethodsUncheckedCreateNestedManyWithoutUserInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscriptions?: SubscriptionsUpdateManyWithoutUserNestedInput
    Payments?: PaymentsUpdateManyWithoutUserNestedInput
    PaymentMethods?: PaymentMethodsUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscriptions?: SubscriptionsUncheckedUpdateManyWithoutUserNestedInput
    Payments?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
    PaymentMethods?: PaymentMethodsUncheckedUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash?: string | null
    avatar?: string | null
    google_id?: string | null
    code?: string | null
    code_generated_at?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    refresh_generated_at?: Date | string | null
    google_refresh_token?: string | null
    phone_number?: number | null
    address_line_1?: string | null
    address_line_2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    role?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlansCreateInput = {
    id?: string
    name: string
    description: string
    price_cents: number
    currency: $Enums.Currency
    billing_interval: $Enums.BillingInterval
    trial_period_days?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    Subscriptions?: SubscriptionsCreateNestedManyWithoutPlanInput
  }

  export type PlansUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price_cents: number
    currency: $Enums.Currency
    billing_interval: $Enums.BillingInterval
    trial_period_days?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    Subscriptions?: SubscriptionsUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlansUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    billing_interval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    trial_period_days?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscriptions?: SubscriptionsUpdateManyWithoutPlanNestedInput
  }

  export type PlansUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    billing_interval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    trial_period_days?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscriptions?: SubscriptionsUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlansCreateManyInput = {
    id?: string
    name: string
    description: string
    price_cents: number
    currency: $Enums.Currency
    billing_interval: $Enums.BillingInterval
    trial_period_days?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PlansUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    billing_interval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    trial_period_days?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlansUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    billing_interval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    trial_period_days?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsCreateInput = {
    id?: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutSubscriptionsInput
    plan: PlansCreateNestedOneWithoutSubscriptionsInput
    Payments?: PaymentsCreateNestedManyWithoutSubscriptionInput
    Invoices?: InvoicesCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsUncheckedCreateInput = {
    id?: string
    user_id: string
    plan_id: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSubscriptionsNestedInput
    plan?: PlansUpdateOneRequiredWithoutSubscriptionsNestedInput
    Payments?: PaymentsUpdateManyWithoutSubscriptionNestedInput
    Invoices?: InvoicesUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsCreateManyInput = {
    id?: string
    user_id: string
    plan_id: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubscriptionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateInput = {
    id?: string
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutPaymentsInput
    subscription?: SubscriptionsCreateNestedOneWithoutPaymentsInput
    paymentMethod: PaymentMethodsCreateNestedOneWithoutPaymentsInput
    invoice: InvoicesCreateNestedOneWithoutPaymentsInput
    Refunds?: RefundsCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: string
    user_id: string
    subscription_id?: string | null
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    payment_method_id: string
    invoice_id: string
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Refunds?: RefundsUncheckedCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPaymentsNestedInput
    subscription?: SubscriptionsUpdateOneWithoutPaymentsNestedInput
    paymentMethod?: PaymentMethodsUpdateOneRequiredWithoutPaymentsNestedInput
    invoice?: InvoicesUpdateOneRequiredWithoutPaymentsNestedInput
    Refunds?: RefundsUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method_id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Refunds?: RefundsUncheckedUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsCreateManyInput = {
    id?: string
    user_id: string
    subscription_id?: string | null
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    payment_method_id: string
    invoice_id: string
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method_id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodsCreateInput = {
    id?: string
    provider: $Enums.PaymentProviders
    type: $Enums.PaymentType
    last_digits?: number | null
    expiry_month?: number | null
    expiry_year?: number | null
    brand?: $Enums.CardBrand | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutPaymentMethodsInput
    Payments?: PaymentsCreateNestedManyWithoutPaymentMethodInput
    Invoices?: InvoicesCreateNestedManyWithoutPaymentMethodsInput
  }

  export type PaymentMethodsUncheckedCreateInput = {
    id?: string
    user_id: string
    provider: $Enums.PaymentProviders
    type: $Enums.PaymentType
    last_digits?: number | null
    expiry_month?: number | null
    expiry_year?: number | null
    brand?: $Enums.CardBrand | null
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutPaymentMethodInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutPaymentMethodsInput
  }

  export type PaymentMethodsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    last_digits?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_month?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: NullableEnumCardBrandFieldUpdateOperationsInput | $Enums.CardBrand | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPaymentMethodsNestedInput
    Payments?: PaymentsUpdateManyWithoutPaymentMethodNestedInput
    Invoices?: InvoicesUpdateManyWithoutPaymentMethodsNestedInput
  }

  export type PaymentMethodsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    last_digits?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_month?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: NullableEnumCardBrandFieldUpdateOperationsInput | $Enums.CardBrand | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutPaymentMethodNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutPaymentMethodsNestedInput
  }

  export type PaymentMethodsCreateManyInput = {
    id?: string
    user_id: string
    provider: $Enums.PaymentProviders
    type: $Enums.PaymentType
    last_digits?: number | null
    expiry_month?: number | null
    expiry_year?: number | null
    brand?: $Enums.CardBrand | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentMethodsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    last_digits?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_month?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: NullableEnumCardBrandFieldUpdateOperationsInput | $Enums.CardBrand | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    last_digits?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_month?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: NullableEnumCardBrandFieldUpdateOperationsInput | $Enums.CardBrand | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesCreateInput = {
    id?: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutInvoicesInput
    subscription: SubscriptionsCreateNestedOneWithoutInvoicesInput
    paymentMethods: PaymentMethodsCreateNestedOneWithoutInvoicesInput
    Payments?: PaymentsCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUncheckedCreateInput = {
    id?: string
    user_id: string
    subscription_id: string
    payment_method_id: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutInvoicesNestedInput
    subscription?: SubscriptionsUpdateOneRequiredWithoutInvoicesNestedInput
    paymentMethods?: PaymentMethodsUpdateOneRequiredWithoutInvoicesNestedInput
    Payments?: PaymentsUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: StringFieldUpdateOperationsInput | string
    payment_method_id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesCreateManyInput = {
    id?: string
    user_id: string
    subscription_id: string
    payment_method_id: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: StringFieldUpdateOperationsInput | string
    payment_method_id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundsCreateInput = {
    id?: string
    amount_cents: number
    currency: $Enums.Currency
    reason?: string | null
    status: $Enums.RefundStatus
    gateway_ref?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    payments: PaymentsCreateNestedOneWithoutRefundsInput
  }

  export type RefundsUncheckedCreateInput = {
    id?: string
    payment_id: string
    amount_cents: number
    currency: $Enums.Currency
    reason?: string | null
    status: $Enums.RefundStatus
    gateway_ref?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type RefundsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    gateway_ref?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentsUpdateOneRequiredWithoutRefundsNestedInput
  }

  export type RefundsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    gateway_ref?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefundsCreateManyInput = {
    id?: string
    payment_id: string
    amount_cents: number
    currency: $Enums.Currency
    reason?: string | null
    status: $Enums.RefundStatus
    gateway_ref?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type RefundsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    gateway_ref?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefundsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    gateway_ref?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookEventsCreateInput = {
    id?: string
    provider: $Enums.PaymentProviders
    event_type: string
    event_id: string
    payload: JsonNullValueInput | InputJsonValue
    processed: $Enums.WebhookEventProcessedStatus
    recieved_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type WebhookEventsUncheckedCreateInput = {
    id?: string
    provider: $Enums.PaymentProviders
    event_type: string
    event_id: string
    payload: JsonNullValueInput | InputJsonValue
    processed: $Enums.WebhookEventProcessedStatus
    recieved_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type WebhookEventsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    event_type?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processed?: EnumWebhookEventProcessedStatusFieldUpdateOperationsInput | $Enums.WebhookEventProcessedStatus
    recieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookEventsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    event_type?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processed?: EnumWebhookEventProcessedStatusFieldUpdateOperationsInput | $Enums.WebhookEventProcessedStatus
    recieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookEventsCreateManyInput = {
    id?: string
    provider: $Enums.PaymentProviders
    event_type: string
    event_id: string
    payload: JsonNullValueInput | InputJsonValue
    processed: $Enums.WebhookEventProcessedStatus
    recieved_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type WebhookEventsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    event_type?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processed?: EnumWebhookEventProcessedStatusFieldUpdateOperationsInput | $Enums.WebhookEventProcessedStatus
    recieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookEventsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    event_type?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processed?: EnumWebhookEventProcessedStatusFieldUpdateOperationsInput | $Enums.WebhookEventProcessedStatus
    recieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type SubscriptionsListRelationFilter = {
    every?: SubscriptionsWhereInput
    some?: SubscriptionsWhereInput
    none?: SubscriptionsWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: PaymentsWhereInput
    some?: PaymentsWhereInput
    none?: PaymentsWhereInput
  }

  export type PaymentMethodsListRelationFilter = {
    every?: PaymentMethodsWhereInput
    some?: PaymentMethodsWhereInput
    none?: PaymentMethodsWhereInput
  }

  export type InvoicesListRelationFilter = {
    every?: InvoicesWhereInput
    some?: InvoicesWhereInput
    none?: InvoicesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubscriptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentMethodsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCodeIs_verifiedCompoundUniqueInput = {
    code: string
    is_verified: boolean
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar?: SortOrder
    google_id?: SortOrder
    code?: SortOrder
    code_generated_at?: SortOrder
    is_verified?: SortOrder
    refresh_token?: SortOrder
    refresh_generated_at?: SortOrder
    google_refresh_token?: SortOrder
    phone_number?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    phone_number?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar?: SortOrder
    google_id?: SortOrder
    code?: SortOrder
    code_generated_at?: SortOrder
    is_verified?: SortOrder
    refresh_token?: SortOrder
    refresh_generated_at?: SortOrder
    google_refresh_token?: SortOrder
    phone_number?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar?: SortOrder
    google_id?: SortOrder
    code?: SortOrder
    code_generated_at?: SortOrder
    is_verified?: SortOrder
    refresh_token?: SortOrder
    refresh_generated_at?: SortOrder
    google_refresh_token?: SortOrder
    phone_number?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    phone_number?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type EnumBillingIntervalFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingIntervalFilter<$PrismaModel> | $Enums.BillingInterval
  }

  export type PlansNameBilling_intervalCompoundUniqueInput = {
    name: string
    billing_interval: $Enums.BillingInterval
  }

  export type PlansCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price_cents?: SortOrder
    currency?: SortOrder
    billing_interval?: SortOrder
    trial_period_days?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PlansAvgOrderByAggregateInput = {
    price_cents?: SortOrder
  }

  export type PlansMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price_cents?: SortOrder
    currency?: SortOrder
    billing_interval?: SortOrder
    trial_period_days?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PlansMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price_cents?: SortOrder
    currency?: SortOrder
    billing_interval?: SortOrder
    trial_period_days?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PlansSumOrderByAggregateInput = {
    price_cents?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type EnumBillingIntervalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingIntervalWithAggregatesFilter<$PrismaModel> | $Enums.BillingInterval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingIntervalFilter<$PrismaModel>
    _max?: NestedEnumBillingIntervalFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PlansScalarRelationFilter = {
    is?: PlansWhereInput
    isNot?: PlansWhereInput
  }

  export type SubscriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    trial_end_date?: SortOrder
    cancel_at?: SortOrder
    canceled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SubscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    trial_end_date?: SortOrder
    cancel_at?: SortOrder
    canceled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SubscriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    trial_end_date?: SortOrder
    cancel_at?: SortOrder
    canceled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type SubscriptionsNullableScalarRelationFilter = {
    is?: SubscriptionsWhereInput | null
    isNot?: SubscriptionsWhereInput | null
  }

  export type PaymentMethodsScalarRelationFilter = {
    is?: PaymentMethodsWhereInput
    isNot?: PaymentMethodsWhereInput
  }

  export type InvoicesScalarRelationFilter = {
    is?: InvoicesWhereInput
    isNot?: InvoicesWhereInput
  }

  export type RefundsListRelationFilter = {
    every?: RefundsWhereInput
    some?: RefundsWhereInput
    none?: RefundsWhereInput
  }

  export type RefundsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subscription_id?: SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method_id?: SortOrder
    invoice_id?: SortOrder
    transaction_reference?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    amount_cents?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subscription_id?: SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method_id?: SortOrder
    invoice_id?: SortOrder
    transaction_reference?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subscription_id?: SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method_id?: SortOrder
    invoice_id?: SortOrder
    transaction_reference?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    amount_cents?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentProvidersFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProviders | EnumPaymentProvidersFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProviders[] | ListEnumPaymentProvidersFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProviders[] | ListEnumPaymentProvidersFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProvidersFilter<$PrismaModel> | $Enums.PaymentProviders
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type EnumCardBrandNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CardBrand | EnumCardBrandFieldRefInput<$PrismaModel> | null
    in?: $Enums.CardBrand[] | ListEnumCardBrandFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CardBrand[] | ListEnumCardBrandFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCardBrandNullableFilter<$PrismaModel> | $Enums.CardBrand | null
  }

  export type PaymentMethodsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    type?: SortOrder
    last_digits?: SortOrder
    expiry_month?: SortOrder
    expiry_year?: SortOrder
    brand?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMethodsAvgOrderByAggregateInput = {
    last_digits?: SortOrder
    expiry_month?: SortOrder
    expiry_year?: SortOrder
  }

  export type PaymentMethodsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    type?: SortOrder
    last_digits?: SortOrder
    expiry_month?: SortOrder
    expiry_year?: SortOrder
    brand?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMethodsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    type?: SortOrder
    last_digits?: SortOrder
    expiry_month?: SortOrder
    expiry_year?: SortOrder
    brand?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMethodsSumOrderByAggregateInput = {
    last_digits?: SortOrder
    expiry_month?: SortOrder
    expiry_year?: SortOrder
  }

  export type EnumPaymentProvidersWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProviders | EnumPaymentProvidersFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProviders[] | ListEnumPaymentProvidersFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProviders[] | ListEnumPaymentProvidersFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProvidersWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProviders
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProvidersFilter<$PrismaModel>
    _max?: NestedEnumPaymentProvidersFilter<$PrismaModel>
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type EnumCardBrandNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardBrand | EnumCardBrandFieldRefInput<$PrismaModel> | null
    in?: $Enums.CardBrand[] | ListEnumCardBrandFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CardBrand[] | ListEnumCardBrandFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCardBrandNullableWithAggregatesFilter<$PrismaModel> | $Enums.CardBrand | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCardBrandNullableFilter<$PrismaModel>
    _max?: NestedEnumCardBrandNullableFilter<$PrismaModel>
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type SubscriptionsScalarRelationFilter = {
    is?: SubscriptionsWhereInput
    isNot?: SubscriptionsWhereInput
  }

  export type InvoicesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subscription_id?: SortOrder
    payment_method_id?: SortOrder
    amount_due_cents?: SortOrder
    amount_paid_cents?: SortOrder
    currency?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
    invoice_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoicesAvgOrderByAggregateInput = {
    amount_due_cents?: SortOrder
    amount_paid_cents?: SortOrder
  }

  export type InvoicesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subscription_id?: SortOrder
    payment_method_id?: SortOrder
    amount_due_cents?: SortOrder
    amount_paid_cents?: SortOrder
    currency?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
    invoice_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoicesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subscription_id?: SortOrder
    payment_method_id?: SortOrder
    amount_due_cents?: SortOrder
    amount_paid_cents?: SortOrder
    currency?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
    invoice_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoicesSumOrderByAggregateInput = {
    amount_due_cents?: SortOrder
    amount_paid_cents?: SortOrder
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type EnumRefundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusFilter<$PrismaModel> | $Enums.RefundStatus
  }

  export type PaymentsScalarRelationFilter = {
    is?: PaymentsWhereInput
    isNot?: PaymentsWhereInput
  }

  export type RefundsCountOrderByAggregateInput = {
    id?: SortOrder
    payment_id?: SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    gateway_ref?: SortOrder
    processed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RefundsAvgOrderByAggregateInput = {
    amount_cents?: SortOrder
  }

  export type RefundsMaxOrderByAggregateInput = {
    id?: SortOrder
    payment_id?: SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    gateway_ref?: SortOrder
    processed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RefundsMinOrderByAggregateInput = {
    id?: SortOrder
    payment_id?: SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    gateway_ref?: SortOrder
    processed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RefundsSumOrderByAggregateInput = {
    amount_cents?: SortOrder
  }

  export type EnumRefundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRefundStatusFilter<$PrismaModel>
    _max?: NestedEnumRefundStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumWebhookEventProcessedStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEventProcessedStatus | EnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEventProcessedStatus[] | ListEnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEventProcessedStatus[] | ListEnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventProcessedStatusFilter<$PrismaModel> | $Enums.WebhookEventProcessedStatus
  }

  export type WebhookEventsCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    event_type?: SortOrder
    event_id?: SortOrder
    payload?: SortOrder
    processed?: SortOrder
    recieved_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WebhookEventsMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    event_type?: SortOrder
    event_id?: SortOrder
    processed?: SortOrder
    recieved_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WebhookEventsMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    event_type?: SortOrder
    event_id?: SortOrder
    processed?: SortOrder
    recieved_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumWebhookEventProcessedStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEventProcessedStatus | EnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEventProcessedStatus[] | ListEnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEventProcessedStatus[] | ListEnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventProcessedStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebhookEventProcessedStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebhookEventProcessedStatusFilter<$PrismaModel>
    _max?: NestedEnumWebhookEventProcessedStatusFilter<$PrismaModel>
  }

  export type SubscriptionsCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput> | SubscriptionsCreateWithoutUserInput[] | SubscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutUserInput | SubscriptionsCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionsCreateManyUserInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type PaymentsCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type PaymentMethodsCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentMethodsCreateWithoutUserInput, PaymentMethodsUncheckedCreateWithoutUserInput> | PaymentMethodsCreateWithoutUserInput[] | PaymentMethodsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutUserInput | PaymentMethodsCreateOrConnectWithoutUserInput[]
    createMany?: PaymentMethodsCreateManyUserInputEnvelope
    connect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
  }

  export type InvoicesCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput> | InvoicesCreateWithoutUserInput[] | InvoicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutUserInput | InvoicesCreateOrConnectWithoutUserInput[]
    createMany?: InvoicesCreateManyUserInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type SubscriptionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput> | SubscriptionsCreateWithoutUserInput[] | SubscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutUserInput | SubscriptionsCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionsCreateManyUserInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type PaymentMethodsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentMethodsCreateWithoutUserInput, PaymentMethodsUncheckedCreateWithoutUserInput> | PaymentMethodsCreateWithoutUserInput[] | PaymentMethodsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutUserInput | PaymentMethodsCreateOrConnectWithoutUserInput[]
    createMany?: PaymentMethodsCreateManyUserInputEnvelope
    connect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
  }

  export type InvoicesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput> | InvoicesCreateWithoutUserInput[] | InvoicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutUserInput | InvoicesCreateOrConnectWithoutUserInput[]
    createMany?: InvoicesCreateManyUserInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubscriptionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput> | SubscriptionsCreateWithoutUserInput[] | SubscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutUserInput | SubscriptionsCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutUserInput | SubscriptionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionsCreateManyUserInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutUserInput | SubscriptionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutUserInput | SubscriptionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
  }

  export type PaymentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutUserInput | PaymentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutUserInput | PaymentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutUserInput | PaymentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type PaymentMethodsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentMethodsCreateWithoutUserInput, PaymentMethodsUncheckedCreateWithoutUserInput> | PaymentMethodsCreateWithoutUserInput[] | PaymentMethodsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutUserInput | PaymentMethodsCreateOrConnectWithoutUserInput[]
    upsert?: PaymentMethodsUpsertWithWhereUniqueWithoutUserInput | PaymentMethodsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentMethodsCreateManyUserInputEnvelope
    set?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    disconnect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    delete?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    connect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    update?: PaymentMethodsUpdateWithWhereUniqueWithoutUserInput | PaymentMethodsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentMethodsUpdateManyWithWhereWithoutUserInput | PaymentMethodsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentMethodsScalarWhereInput | PaymentMethodsScalarWhereInput[]
  }

  export type InvoicesUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput> | InvoicesCreateWithoutUserInput[] | InvoicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutUserInput | InvoicesCreateOrConnectWithoutUserInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutUserInput | InvoicesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoicesCreateManyUserInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutUserInput | InvoicesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutUserInput | InvoicesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type SubscriptionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput> | SubscriptionsCreateWithoutUserInput[] | SubscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutUserInput | SubscriptionsCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutUserInput | SubscriptionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionsCreateManyUserInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutUserInput | SubscriptionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutUserInput | SubscriptionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutUserInput | PaymentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutUserInput | PaymentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutUserInput | PaymentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type PaymentMethodsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentMethodsCreateWithoutUserInput, PaymentMethodsUncheckedCreateWithoutUserInput> | PaymentMethodsCreateWithoutUserInput[] | PaymentMethodsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutUserInput | PaymentMethodsCreateOrConnectWithoutUserInput[]
    upsert?: PaymentMethodsUpsertWithWhereUniqueWithoutUserInput | PaymentMethodsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentMethodsCreateManyUserInputEnvelope
    set?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    disconnect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    delete?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    connect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    update?: PaymentMethodsUpdateWithWhereUniqueWithoutUserInput | PaymentMethodsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentMethodsUpdateManyWithWhereWithoutUserInput | PaymentMethodsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentMethodsScalarWhereInput | PaymentMethodsScalarWhereInput[]
  }

  export type InvoicesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput> | InvoicesCreateWithoutUserInput[] | InvoicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutUserInput | InvoicesCreateOrConnectWithoutUserInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutUserInput | InvoicesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoicesCreateManyUserInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutUserInput | InvoicesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutUserInput | InvoicesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type SubscriptionsCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type SubscriptionsUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type EnumBillingIntervalFieldUpdateOperationsInput = {
    set?: $Enums.BillingInterval
  }

  export type SubscriptionsUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutPlanInput | SubscriptionsUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutPlanInput | SubscriptionsUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutPlanInput | SubscriptionsUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
  }

  export type SubscriptionsUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutPlanInput | SubscriptionsUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutPlanInput | SubscriptionsUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutPlanInput | SubscriptionsUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UsersCreateWithoutSubscriptionsInput, UsersUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSubscriptionsInput
    connect?: UsersWhereUniqueInput
  }

  export type PlansCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<PlansCreateWithoutSubscriptionsInput, PlansUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlansCreateOrConnectWithoutSubscriptionsInput
    connect?: PlansWhereUniqueInput
  }

  export type PaymentsCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type InvoicesCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<InvoicesCreateWithoutSubscriptionInput, InvoicesUncheckedCreateWithoutSubscriptionInput> | InvoicesCreateWithoutSubscriptionInput[] | InvoicesUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutSubscriptionInput | InvoicesCreateOrConnectWithoutSubscriptionInput[]
    createMany?: InvoicesCreateManySubscriptionInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type InvoicesUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<InvoicesCreateWithoutSubscriptionInput, InvoicesUncheckedCreateWithoutSubscriptionInput> | InvoicesCreateWithoutSubscriptionInput[] | InvoicesUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutSubscriptionInput | InvoicesCreateOrConnectWithoutSubscriptionInput[]
    createMany?: InvoicesCreateManySubscriptionInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type UsersUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UsersCreateWithoutSubscriptionsInput, UsersUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSubscriptionsInput
    upsert?: UsersUpsertWithoutSubscriptionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSubscriptionsInput, UsersUpdateWithoutSubscriptionsInput>, UsersUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlansUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<PlansCreateWithoutSubscriptionsInput, PlansUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlansCreateOrConnectWithoutSubscriptionsInput
    upsert?: PlansUpsertWithoutSubscriptionsInput
    connect?: PlansWhereUniqueInput
    update?: XOR<XOR<PlansUpdateToOneWithWhereWithoutSubscriptionsInput, PlansUpdateWithoutSubscriptionsInput>, PlansUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PaymentsUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutSubscriptionInput | PaymentsUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type InvoicesUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<InvoicesCreateWithoutSubscriptionInput, InvoicesUncheckedCreateWithoutSubscriptionInput> | InvoicesCreateWithoutSubscriptionInput[] | InvoicesUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutSubscriptionInput | InvoicesCreateOrConnectWithoutSubscriptionInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutSubscriptionInput | InvoicesUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: InvoicesCreateManySubscriptionInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutSubscriptionInput | InvoicesUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutSubscriptionInput | InvoicesUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutSubscriptionInput | PaymentsUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type InvoicesUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<InvoicesCreateWithoutSubscriptionInput, InvoicesUncheckedCreateWithoutSubscriptionInput> | InvoicesCreateWithoutSubscriptionInput[] | InvoicesUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutSubscriptionInput | InvoicesCreateOrConnectWithoutSubscriptionInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutSubscriptionInput | InvoicesUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: InvoicesCreateManySubscriptionInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutSubscriptionInput | InvoicesUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutSubscriptionInput | InvoicesUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UsersCreateWithoutPaymentsInput, UsersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPaymentsInput
    connect?: UsersWhereUniqueInput
  }

  export type SubscriptionsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SubscriptionsCreateWithoutPaymentsInput, SubscriptionsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPaymentsInput
    connect?: SubscriptionsWhereUniqueInput
  }

  export type PaymentMethodsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PaymentMethodsCreateWithoutPaymentsInput, PaymentMethodsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutPaymentsInput
    connect?: PaymentMethodsWhereUniqueInput
  }

  export type InvoicesCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<InvoicesCreateWithoutPaymentsInput, InvoicesUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoicesCreateOrConnectWithoutPaymentsInput
    connect?: InvoicesWhereUniqueInput
  }

  export type RefundsCreateNestedManyWithoutPaymentsInput = {
    create?: XOR<RefundsCreateWithoutPaymentsInput, RefundsUncheckedCreateWithoutPaymentsInput> | RefundsCreateWithoutPaymentsInput[] | RefundsUncheckedCreateWithoutPaymentsInput[]
    connectOrCreate?: RefundsCreateOrConnectWithoutPaymentsInput | RefundsCreateOrConnectWithoutPaymentsInput[]
    createMany?: RefundsCreateManyPaymentsInputEnvelope
    connect?: RefundsWhereUniqueInput | RefundsWhereUniqueInput[]
  }

  export type RefundsUncheckedCreateNestedManyWithoutPaymentsInput = {
    create?: XOR<RefundsCreateWithoutPaymentsInput, RefundsUncheckedCreateWithoutPaymentsInput> | RefundsCreateWithoutPaymentsInput[] | RefundsUncheckedCreateWithoutPaymentsInput[]
    connectOrCreate?: RefundsCreateOrConnectWithoutPaymentsInput | RefundsCreateOrConnectWithoutPaymentsInput[]
    createMany?: RefundsCreateManyPaymentsInputEnvelope
    connect?: RefundsWhereUniqueInput | RefundsWhereUniqueInput[]
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UsersUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UsersCreateWithoutPaymentsInput, UsersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPaymentsInput
    upsert?: UsersUpsertWithoutPaymentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPaymentsInput, UsersUpdateWithoutPaymentsInput>, UsersUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionsUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutPaymentsInput, SubscriptionsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPaymentsInput
    upsert?: SubscriptionsUpsertWithoutPaymentsInput
    disconnect?: SubscriptionsWhereInput | boolean
    delete?: SubscriptionsWhereInput | boolean
    connect?: SubscriptionsWhereUniqueInput
    update?: XOR<XOR<SubscriptionsUpdateToOneWithWhereWithoutPaymentsInput, SubscriptionsUpdateWithoutPaymentsInput>, SubscriptionsUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentMethodsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PaymentMethodsCreateWithoutPaymentsInput, PaymentMethodsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutPaymentsInput
    upsert?: PaymentMethodsUpsertWithoutPaymentsInput
    connect?: PaymentMethodsWhereUniqueInput
    update?: XOR<XOR<PaymentMethodsUpdateToOneWithWhereWithoutPaymentsInput, PaymentMethodsUpdateWithoutPaymentsInput>, PaymentMethodsUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoicesUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<InvoicesCreateWithoutPaymentsInput, InvoicesUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoicesCreateOrConnectWithoutPaymentsInput
    upsert?: InvoicesUpsertWithoutPaymentsInput
    connect?: InvoicesWhereUniqueInput
    update?: XOR<XOR<InvoicesUpdateToOneWithWhereWithoutPaymentsInput, InvoicesUpdateWithoutPaymentsInput>, InvoicesUncheckedUpdateWithoutPaymentsInput>
  }

  export type RefundsUpdateManyWithoutPaymentsNestedInput = {
    create?: XOR<RefundsCreateWithoutPaymentsInput, RefundsUncheckedCreateWithoutPaymentsInput> | RefundsCreateWithoutPaymentsInput[] | RefundsUncheckedCreateWithoutPaymentsInput[]
    connectOrCreate?: RefundsCreateOrConnectWithoutPaymentsInput | RefundsCreateOrConnectWithoutPaymentsInput[]
    upsert?: RefundsUpsertWithWhereUniqueWithoutPaymentsInput | RefundsUpsertWithWhereUniqueWithoutPaymentsInput[]
    createMany?: RefundsCreateManyPaymentsInputEnvelope
    set?: RefundsWhereUniqueInput | RefundsWhereUniqueInput[]
    disconnect?: RefundsWhereUniqueInput | RefundsWhereUniqueInput[]
    delete?: RefundsWhereUniqueInput | RefundsWhereUniqueInput[]
    connect?: RefundsWhereUniqueInput | RefundsWhereUniqueInput[]
    update?: RefundsUpdateWithWhereUniqueWithoutPaymentsInput | RefundsUpdateWithWhereUniqueWithoutPaymentsInput[]
    updateMany?: RefundsUpdateManyWithWhereWithoutPaymentsInput | RefundsUpdateManyWithWhereWithoutPaymentsInput[]
    deleteMany?: RefundsScalarWhereInput | RefundsScalarWhereInput[]
  }

  export type RefundsUncheckedUpdateManyWithoutPaymentsNestedInput = {
    create?: XOR<RefundsCreateWithoutPaymentsInput, RefundsUncheckedCreateWithoutPaymentsInput> | RefundsCreateWithoutPaymentsInput[] | RefundsUncheckedCreateWithoutPaymentsInput[]
    connectOrCreate?: RefundsCreateOrConnectWithoutPaymentsInput | RefundsCreateOrConnectWithoutPaymentsInput[]
    upsert?: RefundsUpsertWithWhereUniqueWithoutPaymentsInput | RefundsUpsertWithWhereUniqueWithoutPaymentsInput[]
    createMany?: RefundsCreateManyPaymentsInputEnvelope
    set?: RefundsWhereUniqueInput | RefundsWhereUniqueInput[]
    disconnect?: RefundsWhereUniqueInput | RefundsWhereUniqueInput[]
    delete?: RefundsWhereUniqueInput | RefundsWhereUniqueInput[]
    connect?: RefundsWhereUniqueInput | RefundsWhereUniqueInput[]
    update?: RefundsUpdateWithWhereUniqueWithoutPaymentsInput | RefundsUpdateWithWhereUniqueWithoutPaymentsInput[]
    updateMany?: RefundsUpdateManyWithWhereWithoutPaymentsInput | RefundsUpdateManyWithWhereWithoutPaymentsInput[]
    deleteMany?: RefundsScalarWhereInput | RefundsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutPaymentMethodsInput = {
    create?: XOR<UsersCreateWithoutPaymentMethodsInput, UsersUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPaymentMethodsInput
    connect?: UsersWhereUniqueInput
  }

  export type PaymentsCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<PaymentsCreateWithoutPaymentMethodInput, PaymentsUncheckedCreateWithoutPaymentMethodInput> | PaymentsCreateWithoutPaymentMethodInput[] | PaymentsUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutPaymentMethodInput | PaymentsCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: PaymentsCreateManyPaymentMethodInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type InvoicesCreateNestedManyWithoutPaymentMethodsInput = {
    create?: XOR<InvoicesCreateWithoutPaymentMethodsInput, InvoicesUncheckedCreateWithoutPaymentMethodsInput> | InvoicesCreateWithoutPaymentMethodsInput[] | InvoicesUncheckedCreateWithoutPaymentMethodsInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutPaymentMethodsInput | InvoicesCreateOrConnectWithoutPaymentMethodsInput[]
    createMany?: InvoicesCreateManyPaymentMethodsInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<PaymentsCreateWithoutPaymentMethodInput, PaymentsUncheckedCreateWithoutPaymentMethodInput> | PaymentsCreateWithoutPaymentMethodInput[] | PaymentsUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutPaymentMethodInput | PaymentsCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: PaymentsCreateManyPaymentMethodInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type InvoicesUncheckedCreateNestedManyWithoutPaymentMethodsInput = {
    create?: XOR<InvoicesCreateWithoutPaymentMethodsInput, InvoicesUncheckedCreateWithoutPaymentMethodsInput> | InvoicesCreateWithoutPaymentMethodsInput[] | InvoicesUncheckedCreateWithoutPaymentMethodsInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutPaymentMethodsInput | InvoicesCreateOrConnectWithoutPaymentMethodsInput[]
    createMany?: InvoicesCreateManyPaymentMethodsInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type EnumPaymentProvidersFieldUpdateOperationsInput = {
    set?: $Enums.PaymentProviders
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type NullableEnumCardBrandFieldUpdateOperationsInput = {
    set?: $Enums.CardBrand | null
  }

  export type UsersUpdateOneRequiredWithoutPaymentMethodsNestedInput = {
    create?: XOR<UsersCreateWithoutPaymentMethodsInput, UsersUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPaymentMethodsInput
    upsert?: UsersUpsertWithoutPaymentMethodsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPaymentMethodsInput, UsersUpdateWithoutPaymentMethodsInput>, UsersUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type PaymentsUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<PaymentsCreateWithoutPaymentMethodInput, PaymentsUncheckedCreateWithoutPaymentMethodInput> | PaymentsCreateWithoutPaymentMethodInput[] | PaymentsUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutPaymentMethodInput | PaymentsCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutPaymentMethodInput | PaymentsUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: PaymentsCreateManyPaymentMethodInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutPaymentMethodInput | PaymentsUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutPaymentMethodInput | PaymentsUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type InvoicesUpdateManyWithoutPaymentMethodsNestedInput = {
    create?: XOR<InvoicesCreateWithoutPaymentMethodsInput, InvoicesUncheckedCreateWithoutPaymentMethodsInput> | InvoicesCreateWithoutPaymentMethodsInput[] | InvoicesUncheckedCreateWithoutPaymentMethodsInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutPaymentMethodsInput | InvoicesCreateOrConnectWithoutPaymentMethodsInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutPaymentMethodsInput | InvoicesUpsertWithWhereUniqueWithoutPaymentMethodsInput[]
    createMany?: InvoicesCreateManyPaymentMethodsInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutPaymentMethodsInput | InvoicesUpdateWithWhereUniqueWithoutPaymentMethodsInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutPaymentMethodsInput | InvoicesUpdateManyWithWhereWithoutPaymentMethodsInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<PaymentsCreateWithoutPaymentMethodInput, PaymentsUncheckedCreateWithoutPaymentMethodInput> | PaymentsCreateWithoutPaymentMethodInput[] | PaymentsUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutPaymentMethodInput | PaymentsCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutPaymentMethodInput | PaymentsUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: PaymentsCreateManyPaymentMethodInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutPaymentMethodInput | PaymentsUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutPaymentMethodInput | PaymentsUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type InvoicesUncheckedUpdateManyWithoutPaymentMethodsNestedInput = {
    create?: XOR<InvoicesCreateWithoutPaymentMethodsInput, InvoicesUncheckedCreateWithoutPaymentMethodsInput> | InvoicesCreateWithoutPaymentMethodsInput[] | InvoicesUncheckedCreateWithoutPaymentMethodsInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutPaymentMethodsInput | InvoicesCreateOrConnectWithoutPaymentMethodsInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutPaymentMethodsInput | InvoicesUpsertWithWhereUniqueWithoutPaymentMethodsInput[]
    createMany?: InvoicesCreateManyPaymentMethodsInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutPaymentMethodsInput | InvoicesUpdateWithWhereUniqueWithoutPaymentMethodsInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutPaymentMethodsInput | InvoicesUpdateManyWithWhereWithoutPaymentMethodsInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UsersCreateWithoutInvoicesInput, UsersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutInvoicesInput
    connect?: UsersWhereUniqueInput
  }

  export type SubscriptionsCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<SubscriptionsCreateWithoutInvoicesInput, SubscriptionsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutInvoicesInput
    connect?: SubscriptionsWhereUniqueInput
  }

  export type PaymentMethodsCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<PaymentMethodsCreateWithoutInvoicesInput, PaymentMethodsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutInvoicesInput
    connect?: PaymentMethodsWhereUniqueInput
  }

  export type PaymentsCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentsCreateWithoutInvoiceInput, PaymentsUncheckedCreateWithoutInvoiceInput> | PaymentsCreateWithoutInvoiceInput[] | PaymentsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutInvoiceInput | PaymentsCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentsCreateManyInvoiceInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentsCreateWithoutInvoiceInput, PaymentsUncheckedCreateWithoutInvoiceInput> | PaymentsCreateWithoutInvoiceInput[] | PaymentsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutInvoiceInput | PaymentsCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentsCreateManyInvoiceInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type UsersUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<UsersCreateWithoutInvoicesInput, UsersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutInvoicesInput
    upsert?: UsersUpsertWithoutInvoicesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutInvoicesInput, UsersUpdateWithoutInvoicesInput>, UsersUncheckedUpdateWithoutInvoicesInput>
  }

  export type SubscriptionsUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutInvoicesInput, SubscriptionsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutInvoicesInput
    upsert?: SubscriptionsUpsertWithoutInvoicesInput
    connect?: SubscriptionsWhereUniqueInput
    update?: XOR<XOR<SubscriptionsUpdateToOneWithWhereWithoutInvoicesInput, SubscriptionsUpdateWithoutInvoicesInput>, SubscriptionsUncheckedUpdateWithoutInvoicesInput>
  }

  export type PaymentMethodsUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<PaymentMethodsCreateWithoutInvoicesInput, PaymentMethodsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutInvoicesInput
    upsert?: PaymentMethodsUpsertWithoutInvoicesInput
    connect?: PaymentMethodsWhereUniqueInput
    update?: XOR<XOR<PaymentMethodsUpdateToOneWithWhereWithoutInvoicesInput, PaymentMethodsUpdateWithoutInvoicesInput>, PaymentMethodsUncheckedUpdateWithoutInvoicesInput>
  }

  export type PaymentsUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentsCreateWithoutInvoiceInput, PaymentsUncheckedCreateWithoutInvoiceInput> | PaymentsCreateWithoutInvoiceInput[] | PaymentsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutInvoiceInput | PaymentsCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutInvoiceInput | PaymentsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentsCreateManyInvoiceInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutInvoiceInput | PaymentsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutInvoiceInput | PaymentsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentsCreateWithoutInvoiceInput, PaymentsUncheckedCreateWithoutInvoiceInput> | PaymentsCreateWithoutInvoiceInput[] | PaymentsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutInvoiceInput | PaymentsCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutInvoiceInput | PaymentsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentsCreateManyInvoiceInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutInvoiceInput | PaymentsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutInvoiceInput | PaymentsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type PaymentsCreateNestedOneWithoutRefundsInput = {
    create?: XOR<PaymentsCreateWithoutRefundsInput, PaymentsUncheckedCreateWithoutRefundsInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutRefundsInput
    connect?: PaymentsWhereUniqueInput
  }

  export type EnumRefundStatusFieldUpdateOperationsInput = {
    set?: $Enums.RefundStatus
  }

  export type PaymentsUpdateOneRequiredWithoutRefundsNestedInput = {
    create?: XOR<PaymentsCreateWithoutRefundsInput, PaymentsUncheckedCreateWithoutRefundsInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutRefundsInput
    upsert?: PaymentsUpsertWithoutRefundsInput
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutRefundsInput, PaymentsUpdateWithoutRefundsInput>, PaymentsUncheckedUpdateWithoutRefundsInput>
  }

  export type EnumWebhookEventProcessedStatusFieldUpdateOperationsInput = {
    set?: $Enums.WebhookEventProcessedStatus
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedEnumBillingIntervalFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingIntervalFilter<$PrismaModel> | $Enums.BillingInterval
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type NestedEnumBillingIntervalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingIntervalWithAggregatesFilter<$PrismaModel> | $Enums.BillingInterval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingIntervalFilter<$PrismaModel>
    _max?: NestedEnumBillingIntervalFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentProvidersFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProviders | EnumPaymentProvidersFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProviders[] | ListEnumPaymentProvidersFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProviders[] | ListEnumPaymentProvidersFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProvidersFilter<$PrismaModel> | $Enums.PaymentProviders
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumCardBrandNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CardBrand | EnumCardBrandFieldRefInput<$PrismaModel> | null
    in?: $Enums.CardBrand[] | ListEnumCardBrandFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CardBrand[] | ListEnumCardBrandFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCardBrandNullableFilter<$PrismaModel> | $Enums.CardBrand | null
  }

  export type NestedEnumPaymentProvidersWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProviders | EnumPaymentProvidersFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProviders[] | ListEnumPaymentProvidersFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProviders[] | ListEnumPaymentProvidersFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProvidersWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProviders
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProvidersFilter<$PrismaModel>
    _max?: NestedEnumPaymentProvidersFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumCardBrandNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardBrand | EnumCardBrandFieldRefInput<$PrismaModel> | null
    in?: $Enums.CardBrand[] | ListEnumCardBrandFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CardBrand[] | ListEnumCardBrandFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCardBrandNullableWithAggregatesFilter<$PrismaModel> | $Enums.CardBrand | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCardBrandNullableFilter<$PrismaModel>
    _max?: NestedEnumCardBrandNullableFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedEnumRefundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusFilter<$PrismaModel> | $Enums.RefundStatus
  }

  export type NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRefundStatusFilter<$PrismaModel>
    _max?: NestedEnumRefundStatusFilter<$PrismaModel>
  }

  export type NestedEnumWebhookEventProcessedStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEventProcessedStatus | EnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEventProcessedStatus[] | ListEnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEventProcessedStatus[] | ListEnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventProcessedStatusFilter<$PrismaModel> | $Enums.WebhookEventProcessedStatus
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumWebhookEventProcessedStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEventProcessedStatus | EnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEventProcessedStatus[] | ListEnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEventProcessedStatus[] | ListEnumWebhookEventProcessedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventProcessedStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebhookEventProcessedStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebhookEventProcessedStatusFilter<$PrismaModel>
    _max?: NestedEnumWebhookEventProcessedStatusFilter<$PrismaModel>
  }

  export type SubscriptionsCreateWithoutUserInput = {
    id?: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    plan: PlansCreateNestedOneWithoutSubscriptionsInput
    Payments?: PaymentsCreateNestedManyWithoutSubscriptionInput
    Invoices?: InvoicesCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsUncheckedCreateWithoutUserInput = {
    id?: string
    plan_id: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsCreateOrConnectWithoutUserInput = {
    where: SubscriptionsWhereUniqueInput
    create: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionsCreateManyUserInputEnvelope = {
    data: SubscriptionsCreateManyUserInput | SubscriptionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentsCreateWithoutUserInput = {
    id?: string
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    subscription?: SubscriptionsCreateNestedOneWithoutPaymentsInput
    paymentMethod: PaymentMethodsCreateNestedOneWithoutPaymentsInput
    invoice: InvoicesCreateNestedOneWithoutPaymentsInput
    Refunds?: RefundsCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateWithoutUserInput = {
    id?: string
    subscription_id?: string | null
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    payment_method_id: string
    invoice_id: string
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Refunds?: RefundsUncheckedCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsCreateOrConnectWithoutUserInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput>
  }

  export type PaymentsCreateManyUserInputEnvelope = {
    data: PaymentsCreateManyUserInput | PaymentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentMethodsCreateWithoutUserInput = {
    id?: string
    provider: $Enums.PaymentProviders
    type: $Enums.PaymentType
    last_digits?: number | null
    expiry_month?: number | null
    expiry_year?: number | null
    brand?: $Enums.CardBrand | null
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsCreateNestedManyWithoutPaymentMethodInput
    Invoices?: InvoicesCreateNestedManyWithoutPaymentMethodsInput
  }

  export type PaymentMethodsUncheckedCreateWithoutUserInput = {
    id?: string
    provider: $Enums.PaymentProviders
    type: $Enums.PaymentType
    last_digits?: number | null
    expiry_month?: number | null
    expiry_year?: number | null
    brand?: $Enums.CardBrand | null
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutPaymentMethodInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutPaymentMethodsInput
  }

  export type PaymentMethodsCreateOrConnectWithoutUserInput = {
    where: PaymentMethodsWhereUniqueInput
    create: XOR<PaymentMethodsCreateWithoutUserInput, PaymentMethodsUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodsCreateManyUserInputEnvelope = {
    data: PaymentMethodsCreateManyUserInput | PaymentMethodsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvoicesCreateWithoutUserInput = {
    id?: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
    subscription: SubscriptionsCreateNestedOneWithoutInvoicesInput
    paymentMethods: PaymentMethodsCreateNestedOneWithoutInvoicesInput
    Payments?: PaymentsCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUncheckedCreateWithoutUserInput = {
    id?: string
    subscription_id: string
    payment_method_id: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesCreateOrConnectWithoutUserInput = {
    where: InvoicesWhereUniqueInput
    create: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput>
  }

  export type InvoicesCreateManyUserInputEnvelope = {
    data: InvoicesCreateManyUserInput | InvoicesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionsUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionsWhereUniqueInput
    update: XOR<SubscriptionsUpdateWithoutUserInput, SubscriptionsUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionsUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionsWhereUniqueInput
    data: XOR<SubscriptionsUpdateWithoutUserInput, SubscriptionsUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionsUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionsScalarWhereInput
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionsScalarWhereInput = {
    AND?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
    OR?: SubscriptionsScalarWhereInput[]
    NOT?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
    id?: StringFilter<"Subscriptions"> | string
    user_id?: StringFilter<"Subscriptions"> | string
    plan_id?: StringFilter<"Subscriptions"> | string
    status?: EnumSubscriptionStatusFilter<"Subscriptions"> | $Enums.SubscriptionStatus
    start_date?: DateTimeFilter<"Subscriptions"> | Date | string
    end_date?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    trial_end_date?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    cancel_at?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    canceled_at?: DateTimeNullableFilter<"Subscriptions"> | Date | string | null
    created_at?: DateTimeFilter<"Subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"Subscriptions"> | Date | string
  }

  export type PaymentsUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutUserInput, PaymentsUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutUserInput, PaymentsUncheckedUpdateWithoutUserInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutUserInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentsScalarWhereInput = {
    AND?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    OR?: PaymentsScalarWhereInput[]
    NOT?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    id?: StringFilter<"Payments"> | string
    user_id?: StringFilter<"Payments"> | string
    subscription_id?: StringNullableFilter<"Payments"> | string | null
    amount_cents?: IntFilter<"Payments"> | number
    currency?: EnumCurrencyFilter<"Payments"> | $Enums.Currency
    status?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    payment_method_id?: StringFilter<"Payments"> | string
    invoice_id?: StringFilter<"Payments"> | string
    transaction_reference?: StringNullableFilter<"Payments"> | string | null
    paid_at?: DateTimeNullableFilter<"Payments"> | Date | string | null
    created_at?: DateTimeFilter<"Payments"> | Date | string
    updated_at?: DateTimeFilter<"Payments"> | Date | string
  }

  export type PaymentMethodsUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentMethodsWhereUniqueInput
    update: XOR<PaymentMethodsUpdateWithoutUserInput, PaymentMethodsUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentMethodsCreateWithoutUserInput, PaymentMethodsUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodsUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentMethodsWhereUniqueInput
    data: XOR<PaymentMethodsUpdateWithoutUserInput, PaymentMethodsUncheckedUpdateWithoutUserInput>
  }

  export type PaymentMethodsUpdateManyWithWhereWithoutUserInput = {
    where: PaymentMethodsScalarWhereInput
    data: XOR<PaymentMethodsUpdateManyMutationInput, PaymentMethodsUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentMethodsScalarWhereInput = {
    AND?: PaymentMethodsScalarWhereInput | PaymentMethodsScalarWhereInput[]
    OR?: PaymentMethodsScalarWhereInput[]
    NOT?: PaymentMethodsScalarWhereInput | PaymentMethodsScalarWhereInput[]
    id?: StringFilter<"PaymentMethods"> | string
    user_id?: StringFilter<"PaymentMethods"> | string
    provider?: EnumPaymentProvidersFilter<"PaymentMethods"> | $Enums.PaymentProviders
    type?: EnumPaymentTypeFilter<"PaymentMethods"> | $Enums.PaymentType
    last_digits?: IntNullableFilter<"PaymentMethods"> | number | null
    expiry_month?: IntNullableFilter<"PaymentMethods"> | number | null
    expiry_year?: IntNullableFilter<"PaymentMethods"> | number | null
    brand?: EnumCardBrandNullableFilter<"PaymentMethods"> | $Enums.CardBrand | null
    created_at?: DateTimeFilter<"PaymentMethods"> | Date | string
    updated_at?: DateTimeFilter<"PaymentMethods"> | Date | string
  }

  export type InvoicesUpsertWithWhereUniqueWithoutUserInput = {
    where: InvoicesWhereUniqueInput
    update: XOR<InvoicesUpdateWithoutUserInput, InvoicesUncheckedUpdateWithoutUserInput>
    create: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput>
  }

  export type InvoicesUpdateWithWhereUniqueWithoutUserInput = {
    where: InvoicesWhereUniqueInput
    data: XOR<InvoicesUpdateWithoutUserInput, InvoicesUncheckedUpdateWithoutUserInput>
  }

  export type InvoicesUpdateManyWithWhereWithoutUserInput = {
    where: InvoicesScalarWhereInput
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyWithoutUserInput>
  }

  export type InvoicesScalarWhereInput = {
    AND?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
    OR?: InvoicesScalarWhereInput[]
    NOT?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
    id?: StringFilter<"Invoices"> | string
    user_id?: StringFilter<"Invoices"> | string
    subscription_id?: StringFilter<"Invoices"> | string
    payment_method_id?: StringFilter<"Invoices"> | string
    amount_due_cents?: IntFilter<"Invoices"> | number
    amount_paid_cents?: IntFilter<"Invoices"> | number
    currency?: EnumCurrencyFilter<"Invoices"> | $Enums.Currency
    due_date?: DateTimeFilter<"Invoices"> | Date | string
    paid_at?: DateTimeNullableFilter<"Invoices"> | Date | string | null
    status?: EnumInvoiceStatusFilter<"Invoices"> | $Enums.InvoiceStatus
    invoice_number?: StringFilter<"Invoices"> | string
    created_at?: DateTimeFilter<"Invoices"> | Date | string
    updated_at?: DateTimeFilter<"Invoices"> | Date | string
  }

  export type SubscriptionsCreateWithoutPlanInput = {
    id?: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutSubscriptionsInput
    Payments?: PaymentsCreateNestedManyWithoutSubscriptionInput
    Invoices?: InvoicesCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsUncheckedCreateWithoutPlanInput = {
    id?: string
    user_id: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsCreateOrConnectWithoutPlanInput = {
    where: SubscriptionsWhereUniqueInput
    create: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionsCreateManyPlanInputEnvelope = {
    data: SubscriptionsCreateManyPlanInput | SubscriptionsCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionsUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionsWhereUniqueInput
    update: XOR<SubscriptionsUpdateWithoutPlanInput, SubscriptionsUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionsUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionsWhereUniqueInput
    data: XOR<SubscriptionsUpdateWithoutPlanInput, SubscriptionsUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionsUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionsScalarWhereInput
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyWithoutPlanInput>
  }

  export type UsersCreateWithoutSubscriptionsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash?: string | null
    avatar?: string | null
    google_id?: string | null
    code?: string | null
    code_generated_at?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    refresh_generated_at?: Date | string | null
    google_refresh_token?: string | null
    phone_number?: number | null
    address_line_1?: string | null
    address_line_2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    role?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsCreateNestedManyWithoutUserInput
    PaymentMethods?: PaymentMethodsCreateNestedManyWithoutUserInput
    Invoices?: InvoicesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash?: string | null
    avatar?: string | null
    google_id?: string | null
    code?: string | null
    code_generated_at?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    refresh_generated_at?: Date | string | null
    google_refresh_token?: string | null
    phone_number?: number | null
    address_line_1?: string | null
    address_line_2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    role?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutUserInput
    PaymentMethods?: PaymentMethodsUncheckedCreateNestedManyWithoutUserInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSubscriptionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSubscriptionsInput, UsersUncheckedCreateWithoutSubscriptionsInput>
  }

  export type PlansCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    description: string
    price_cents: number
    currency: $Enums.Currency
    billing_interval: $Enums.BillingInterval
    trial_period_days?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PlansUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    description: string
    price_cents: number
    currency: $Enums.Currency
    billing_interval: $Enums.BillingInterval
    trial_period_days?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PlansCreateOrConnectWithoutSubscriptionsInput = {
    where: PlansWhereUniqueInput
    create: XOR<PlansCreateWithoutSubscriptionsInput, PlansUncheckedCreateWithoutSubscriptionsInput>
  }

  export type PaymentsCreateWithoutSubscriptionInput = {
    id?: string
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutPaymentsInput
    paymentMethod: PaymentMethodsCreateNestedOneWithoutPaymentsInput
    invoice: InvoicesCreateNestedOneWithoutPaymentsInput
    Refunds?: RefundsCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    user_id: string
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    payment_method_id: string
    invoice_id: string
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Refunds?: RefundsUncheckedCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentsCreateManySubscriptionInputEnvelope = {
    data: PaymentsCreateManySubscriptionInput | PaymentsCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type InvoicesCreateWithoutSubscriptionInput = {
    id?: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutInvoicesInput
    paymentMethods: PaymentMethodsCreateNestedOneWithoutInvoicesInput
    Payments?: PaymentsCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    user_id: string
    payment_method_id: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesCreateOrConnectWithoutSubscriptionInput = {
    where: InvoicesWhereUniqueInput
    create: XOR<InvoicesCreateWithoutSubscriptionInput, InvoicesUncheckedCreateWithoutSubscriptionInput>
  }

  export type InvoicesCreateManySubscriptionInputEnvelope = {
    data: InvoicesCreateManySubscriptionInput | InvoicesCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutSubscriptionsInput = {
    update: XOR<UsersUpdateWithoutSubscriptionsInput, UsersUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UsersCreateWithoutSubscriptionsInput, UsersUncheckedCreateWithoutSubscriptionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSubscriptionsInput, UsersUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UsersUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUpdateManyWithoutUserNestedInput
    PaymentMethods?: PaymentMethodsUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
    PaymentMethods?: PaymentMethodsUncheckedUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlansUpsertWithoutSubscriptionsInput = {
    update: XOR<PlansUpdateWithoutSubscriptionsInput, PlansUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<PlansCreateWithoutSubscriptionsInput, PlansUncheckedCreateWithoutSubscriptionsInput>
    where?: PlansWhereInput
  }

  export type PlansUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: PlansWhereInput
    data: XOR<PlansUpdateWithoutSubscriptionsInput, PlansUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlansUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    billing_interval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    trial_period_days?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlansUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    billing_interval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    trial_period_days?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutSubscriptionInput, PaymentsUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutSubscriptionInput, PaymentsUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type InvoicesUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: InvoicesWhereUniqueInput
    update: XOR<InvoicesUpdateWithoutSubscriptionInput, InvoicesUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<InvoicesCreateWithoutSubscriptionInput, InvoicesUncheckedCreateWithoutSubscriptionInput>
  }

  export type InvoicesUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: InvoicesWhereUniqueInput
    data: XOR<InvoicesUpdateWithoutSubscriptionInput, InvoicesUncheckedUpdateWithoutSubscriptionInput>
  }

  export type InvoicesUpdateManyWithWhereWithoutSubscriptionInput = {
    where: InvoicesScalarWhereInput
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type UsersCreateWithoutPaymentsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash?: string | null
    avatar?: string | null
    google_id?: string | null
    code?: string | null
    code_generated_at?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    refresh_generated_at?: Date | string | null
    google_refresh_token?: string | null
    phone_number?: number | null
    address_line_1?: string | null
    address_line_2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    role?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Subscriptions?: SubscriptionsCreateNestedManyWithoutUserInput
    PaymentMethods?: PaymentMethodsCreateNestedManyWithoutUserInput
    Invoices?: InvoicesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPaymentsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash?: string | null
    avatar?: string | null
    google_id?: string | null
    code?: string | null
    code_generated_at?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    refresh_generated_at?: Date | string | null
    google_refresh_token?: string | null
    phone_number?: number | null
    address_line_1?: string | null
    address_line_2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    role?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Subscriptions?: SubscriptionsUncheckedCreateNestedManyWithoutUserInput
    PaymentMethods?: PaymentMethodsUncheckedCreateNestedManyWithoutUserInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPaymentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPaymentsInput, UsersUncheckedCreateWithoutPaymentsInput>
  }

  export type SubscriptionsCreateWithoutPaymentsInput = {
    id?: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutSubscriptionsInput
    plan: PlansCreateNestedOneWithoutSubscriptionsInput
    Invoices?: InvoicesCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsUncheckedCreateWithoutPaymentsInput = {
    id?: string
    user_id: string
    plan_id: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionsWhereUniqueInput
    create: XOR<SubscriptionsCreateWithoutPaymentsInput, SubscriptionsUncheckedCreateWithoutPaymentsInput>
  }

  export type PaymentMethodsCreateWithoutPaymentsInput = {
    id?: string
    provider: $Enums.PaymentProviders
    type: $Enums.PaymentType
    last_digits?: number | null
    expiry_month?: number | null
    expiry_year?: number | null
    brand?: $Enums.CardBrand | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutPaymentMethodsInput
    Invoices?: InvoicesCreateNestedManyWithoutPaymentMethodsInput
  }

  export type PaymentMethodsUncheckedCreateWithoutPaymentsInput = {
    id?: string
    user_id: string
    provider: $Enums.PaymentProviders
    type: $Enums.PaymentType
    last_digits?: number | null
    expiry_month?: number | null
    expiry_year?: number | null
    brand?: $Enums.CardBrand | null
    created_at?: Date | string
    updated_at?: Date | string
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutPaymentMethodsInput
  }

  export type PaymentMethodsCreateOrConnectWithoutPaymentsInput = {
    where: PaymentMethodsWhereUniqueInput
    create: XOR<PaymentMethodsCreateWithoutPaymentsInput, PaymentMethodsUncheckedCreateWithoutPaymentsInput>
  }

  export type InvoicesCreateWithoutPaymentsInput = {
    id?: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutInvoicesInput
    subscription: SubscriptionsCreateNestedOneWithoutInvoicesInput
    paymentMethods: PaymentMethodsCreateNestedOneWithoutInvoicesInput
  }

  export type InvoicesUncheckedCreateWithoutPaymentsInput = {
    id?: string
    user_id: string
    subscription_id: string
    payment_method_id: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoicesCreateOrConnectWithoutPaymentsInput = {
    where: InvoicesWhereUniqueInput
    create: XOR<InvoicesCreateWithoutPaymentsInput, InvoicesUncheckedCreateWithoutPaymentsInput>
  }

  export type RefundsCreateWithoutPaymentsInput = {
    id?: string
    amount_cents: number
    currency: $Enums.Currency
    reason?: string | null
    status: $Enums.RefundStatus
    gateway_ref?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type RefundsUncheckedCreateWithoutPaymentsInput = {
    id?: string
    amount_cents: number
    currency: $Enums.Currency
    reason?: string | null
    status: $Enums.RefundStatus
    gateway_ref?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type RefundsCreateOrConnectWithoutPaymentsInput = {
    where: RefundsWhereUniqueInput
    create: XOR<RefundsCreateWithoutPaymentsInput, RefundsUncheckedCreateWithoutPaymentsInput>
  }

  export type RefundsCreateManyPaymentsInputEnvelope = {
    data: RefundsCreateManyPaymentsInput | RefundsCreateManyPaymentsInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutPaymentsInput = {
    update: XOR<UsersUpdateWithoutPaymentsInput, UsersUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UsersCreateWithoutPaymentsInput, UsersUncheckedCreateWithoutPaymentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPaymentsInput, UsersUncheckedUpdateWithoutPaymentsInput>
  }

  export type UsersUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscriptions?: SubscriptionsUpdateManyWithoutUserNestedInput
    PaymentMethods?: PaymentMethodsUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscriptions?: SubscriptionsUncheckedUpdateManyWithoutUserNestedInput
    PaymentMethods?: PaymentMethodsUncheckedUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionsUpsertWithoutPaymentsInput = {
    update: XOR<SubscriptionsUpdateWithoutPaymentsInput, SubscriptionsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SubscriptionsCreateWithoutPaymentsInput, SubscriptionsUncheckedCreateWithoutPaymentsInput>
    where?: SubscriptionsWhereInput
  }

  export type SubscriptionsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionsWhereInput
    data: XOR<SubscriptionsUpdateWithoutPaymentsInput, SubscriptionsUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionsUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSubscriptionsNestedInput
    plan?: PlansUpdateOneRequiredWithoutSubscriptionsNestedInput
    Invoices?: InvoicesUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoicesUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type PaymentMethodsUpsertWithoutPaymentsInput = {
    update: XOR<PaymentMethodsUpdateWithoutPaymentsInput, PaymentMethodsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PaymentMethodsCreateWithoutPaymentsInput, PaymentMethodsUncheckedCreateWithoutPaymentsInput>
    where?: PaymentMethodsWhereInput
  }

  export type PaymentMethodsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PaymentMethodsWhereInput
    data: XOR<PaymentMethodsUpdateWithoutPaymentsInput, PaymentMethodsUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentMethodsUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    last_digits?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_month?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: NullableEnumCardBrandFieldUpdateOperationsInput | $Enums.CardBrand | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPaymentMethodsNestedInput
    Invoices?: InvoicesUpdateManyWithoutPaymentMethodsNestedInput
  }

  export type PaymentMethodsUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    last_digits?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_month?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: NullableEnumCardBrandFieldUpdateOperationsInput | $Enums.CardBrand | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoicesUncheckedUpdateManyWithoutPaymentMethodsNestedInput
  }

  export type InvoicesUpsertWithoutPaymentsInput = {
    update: XOR<InvoicesUpdateWithoutPaymentsInput, InvoicesUncheckedUpdateWithoutPaymentsInput>
    create: XOR<InvoicesCreateWithoutPaymentsInput, InvoicesUncheckedCreateWithoutPaymentsInput>
    where?: InvoicesWhereInput
  }

  export type InvoicesUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: InvoicesWhereInput
    data: XOR<InvoicesUpdateWithoutPaymentsInput, InvoicesUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoicesUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutInvoicesNestedInput
    subscription?: SubscriptionsUpdateOneRequiredWithoutInvoicesNestedInput
    paymentMethods?: PaymentMethodsUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoicesUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: StringFieldUpdateOperationsInput | string
    payment_method_id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundsUpsertWithWhereUniqueWithoutPaymentsInput = {
    where: RefundsWhereUniqueInput
    update: XOR<RefundsUpdateWithoutPaymentsInput, RefundsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<RefundsCreateWithoutPaymentsInput, RefundsUncheckedCreateWithoutPaymentsInput>
  }

  export type RefundsUpdateWithWhereUniqueWithoutPaymentsInput = {
    where: RefundsWhereUniqueInput
    data: XOR<RefundsUpdateWithoutPaymentsInput, RefundsUncheckedUpdateWithoutPaymentsInput>
  }

  export type RefundsUpdateManyWithWhereWithoutPaymentsInput = {
    where: RefundsScalarWhereInput
    data: XOR<RefundsUpdateManyMutationInput, RefundsUncheckedUpdateManyWithoutPaymentsInput>
  }

  export type RefundsScalarWhereInput = {
    AND?: RefundsScalarWhereInput | RefundsScalarWhereInput[]
    OR?: RefundsScalarWhereInput[]
    NOT?: RefundsScalarWhereInput | RefundsScalarWhereInput[]
    id?: StringFilter<"Refunds"> | string
    payment_id?: StringFilter<"Refunds"> | string
    amount_cents?: IntFilter<"Refunds"> | number
    currency?: EnumCurrencyFilter<"Refunds"> | $Enums.Currency
    reason?: StringNullableFilter<"Refunds"> | string | null
    status?: EnumRefundStatusFilter<"Refunds"> | $Enums.RefundStatus
    gateway_ref?: StringNullableFilter<"Refunds"> | string | null
    processed_at?: DateTimeNullableFilter<"Refunds"> | Date | string | null
    created_at?: DateTimeFilter<"Refunds"> | Date | string
    updated_at?: DateTimeNullableFilter<"Refunds"> | Date | string | null
  }

  export type UsersCreateWithoutPaymentMethodsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash?: string | null
    avatar?: string | null
    google_id?: string | null
    code?: string | null
    code_generated_at?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    refresh_generated_at?: Date | string | null
    google_refresh_token?: string | null
    phone_number?: number | null
    address_line_1?: string | null
    address_line_2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    role?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Subscriptions?: SubscriptionsCreateNestedManyWithoutUserInput
    Payments?: PaymentsCreateNestedManyWithoutUserInput
    Invoices?: InvoicesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPaymentMethodsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash?: string | null
    avatar?: string | null
    google_id?: string | null
    code?: string | null
    code_generated_at?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    refresh_generated_at?: Date | string | null
    google_refresh_token?: string | null
    phone_number?: number | null
    address_line_1?: string | null
    address_line_2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    role?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Subscriptions?: SubscriptionsUncheckedCreateNestedManyWithoutUserInput
    Payments?: PaymentsUncheckedCreateNestedManyWithoutUserInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPaymentMethodsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPaymentMethodsInput, UsersUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type PaymentsCreateWithoutPaymentMethodInput = {
    id?: string
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutPaymentsInput
    subscription?: SubscriptionsCreateNestedOneWithoutPaymentsInput
    invoice: InvoicesCreateNestedOneWithoutPaymentsInput
    Refunds?: RefundsCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateWithoutPaymentMethodInput = {
    id?: string
    user_id: string
    subscription_id?: string | null
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    invoice_id: string
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Refunds?: RefundsUncheckedCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsCreateOrConnectWithoutPaymentMethodInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutPaymentMethodInput, PaymentsUncheckedCreateWithoutPaymentMethodInput>
  }

  export type PaymentsCreateManyPaymentMethodInputEnvelope = {
    data: PaymentsCreateManyPaymentMethodInput | PaymentsCreateManyPaymentMethodInput[]
    skipDuplicates?: boolean
  }

  export type InvoicesCreateWithoutPaymentMethodsInput = {
    id?: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutInvoicesInput
    subscription: SubscriptionsCreateNestedOneWithoutInvoicesInput
    Payments?: PaymentsCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUncheckedCreateWithoutPaymentMethodsInput = {
    id?: string
    user_id: string
    subscription_id: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesCreateOrConnectWithoutPaymentMethodsInput = {
    where: InvoicesWhereUniqueInput
    create: XOR<InvoicesCreateWithoutPaymentMethodsInput, InvoicesUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type InvoicesCreateManyPaymentMethodsInputEnvelope = {
    data: InvoicesCreateManyPaymentMethodsInput | InvoicesCreateManyPaymentMethodsInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutPaymentMethodsInput = {
    update: XOR<UsersUpdateWithoutPaymentMethodsInput, UsersUncheckedUpdateWithoutPaymentMethodsInput>
    create: XOR<UsersCreateWithoutPaymentMethodsInput, UsersUncheckedCreateWithoutPaymentMethodsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPaymentMethodsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPaymentMethodsInput, UsersUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type UsersUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscriptions?: SubscriptionsUpdateManyWithoutUserNestedInput
    Payments?: PaymentsUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscriptions?: SubscriptionsUncheckedUpdateManyWithoutUserNestedInput
    Payments?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentsUpsertWithWhereUniqueWithoutPaymentMethodInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutPaymentMethodInput, PaymentsUncheckedUpdateWithoutPaymentMethodInput>
    create: XOR<PaymentsCreateWithoutPaymentMethodInput, PaymentsUncheckedCreateWithoutPaymentMethodInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutPaymentMethodInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutPaymentMethodInput, PaymentsUncheckedUpdateWithoutPaymentMethodInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutPaymentMethodInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutPaymentMethodInput>
  }

  export type InvoicesUpsertWithWhereUniqueWithoutPaymentMethodsInput = {
    where: InvoicesWhereUniqueInput
    update: XOR<InvoicesUpdateWithoutPaymentMethodsInput, InvoicesUncheckedUpdateWithoutPaymentMethodsInput>
    create: XOR<InvoicesCreateWithoutPaymentMethodsInput, InvoicesUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type InvoicesUpdateWithWhereUniqueWithoutPaymentMethodsInput = {
    where: InvoicesWhereUniqueInput
    data: XOR<InvoicesUpdateWithoutPaymentMethodsInput, InvoicesUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type InvoicesUpdateManyWithWhereWithoutPaymentMethodsInput = {
    where: InvoicesScalarWhereInput
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyWithoutPaymentMethodsInput>
  }

  export type UsersCreateWithoutInvoicesInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash?: string | null
    avatar?: string | null
    google_id?: string | null
    code?: string | null
    code_generated_at?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    refresh_generated_at?: Date | string | null
    google_refresh_token?: string | null
    phone_number?: number | null
    address_line_1?: string | null
    address_line_2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    role?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Subscriptions?: SubscriptionsCreateNestedManyWithoutUserInput
    Payments?: PaymentsCreateNestedManyWithoutUserInput
    PaymentMethods?: PaymentMethodsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutInvoicesInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash?: string | null
    avatar?: string | null
    google_id?: string | null
    code?: string | null
    code_generated_at?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    refresh_generated_at?: Date | string | null
    google_refresh_token?: string | null
    phone_number?: number | null
    address_line_1?: string | null
    address_line_2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    role?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Subscriptions?: SubscriptionsUncheckedCreateNestedManyWithoutUserInput
    Payments?: PaymentsUncheckedCreateNestedManyWithoutUserInput
    PaymentMethods?: PaymentMethodsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutInvoicesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutInvoicesInput, UsersUncheckedCreateWithoutInvoicesInput>
  }

  export type SubscriptionsCreateWithoutInvoicesInput = {
    id?: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutSubscriptionsInput
    plan: PlansCreateNestedOneWithoutSubscriptionsInput
    Payments?: PaymentsCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsUncheckedCreateWithoutInvoicesInput = {
    id?: string
    user_id: string
    plan_id: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsCreateOrConnectWithoutInvoicesInput = {
    where: SubscriptionsWhereUniqueInput
    create: XOR<SubscriptionsCreateWithoutInvoicesInput, SubscriptionsUncheckedCreateWithoutInvoicesInput>
  }

  export type PaymentMethodsCreateWithoutInvoicesInput = {
    id?: string
    provider: $Enums.PaymentProviders
    type: $Enums.PaymentType
    last_digits?: number | null
    expiry_month?: number | null
    expiry_year?: number | null
    brand?: $Enums.CardBrand | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutPaymentMethodsInput
    Payments?: PaymentsCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodsUncheckedCreateWithoutInvoicesInput = {
    id?: string
    user_id: string
    provider: $Enums.PaymentProviders
    type: $Enums.PaymentType
    last_digits?: number | null
    expiry_month?: number | null
    expiry_year?: number | null
    brand?: $Enums.CardBrand | null
    created_at?: Date | string
    updated_at?: Date | string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodsCreateOrConnectWithoutInvoicesInput = {
    where: PaymentMethodsWhereUniqueInput
    create: XOR<PaymentMethodsCreateWithoutInvoicesInput, PaymentMethodsUncheckedCreateWithoutInvoicesInput>
  }

  export type PaymentsCreateWithoutInvoiceInput = {
    id?: string
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutPaymentsInput
    subscription?: SubscriptionsCreateNestedOneWithoutPaymentsInput
    paymentMethod: PaymentMethodsCreateNestedOneWithoutPaymentsInput
    Refunds?: RefundsCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateWithoutInvoiceInput = {
    id?: string
    user_id: string
    subscription_id?: string | null
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    payment_method_id: string
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Refunds?: RefundsUncheckedCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsCreateOrConnectWithoutInvoiceInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutInvoiceInput, PaymentsUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentsCreateManyInvoiceInputEnvelope = {
    data: PaymentsCreateManyInvoiceInput | PaymentsCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutInvoicesInput = {
    update: XOR<UsersUpdateWithoutInvoicesInput, UsersUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UsersCreateWithoutInvoicesInput, UsersUncheckedCreateWithoutInvoicesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutInvoicesInput, UsersUncheckedUpdateWithoutInvoicesInput>
  }

  export type UsersUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscriptions?: SubscriptionsUpdateManyWithoutUserNestedInput
    Payments?: PaymentsUpdateManyWithoutUserNestedInput
    PaymentMethods?: PaymentMethodsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    code_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscriptions?: SubscriptionsUncheckedUpdateManyWithoutUserNestedInput
    Payments?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
    PaymentMethods?: PaymentMethodsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionsUpsertWithoutInvoicesInput = {
    update: XOR<SubscriptionsUpdateWithoutInvoicesInput, SubscriptionsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<SubscriptionsCreateWithoutInvoicesInput, SubscriptionsUncheckedCreateWithoutInvoicesInput>
    where?: SubscriptionsWhereInput
  }

  export type SubscriptionsUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: SubscriptionsWhereInput
    data: XOR<SubscriptionsUpdateWithoutInvoicesInput, SubscriptionsUncheckedUpdateWithoutInvoicesInput>
  }

  export type SubscriptionsUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSubscriptionsNestedInput
    plan?: PlansUpdateOneRequiredWithoutSubscriptionsNestedInput
    Payments?: PaymentsUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type PaymentMethodsUpsertWithoutInvoicesInput = {
    update: XOR<PaymentMethodsUpdateWithoutInvoicesInput, PaymentMethodsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<PaymentMethodsCreateWithoutInvoicesInput, PaymentMethodsUncheckedCreateWithoutInvoicesInput>
    where?: PaymentMethodsWhereInput
  }

  export type PaymentMethodsUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: PaymentMethodsWhereInput
    data: XOR<PaymentMethodsUpdateWithoutInvoicesInput, PaymentMethodsUncheckedUpdateWithoutInvoicesInput>
  }

  export type PaymentMethodsUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    last_digits?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_month?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: NullableEnumCardBrandFieldUpdateOperationsInput | $Enums.CardBrand | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPaymentMethodsNestedInput
    Payments?: PaymentsUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodsUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    last_digits?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_month?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: NullableEnumCardBrandFieldUpdateOperationsInput | $Enums.CardBrand | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentsUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutInvoiceInput, PaymentsUncheckedUpdateWithoutInvoiceInput>
    create: XOR<PaymentsCreateWithoutInvoiceInput, PaymentsUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutInvoiceInput, PaymentsUncheckedUpdateWithoutInvoiceInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutInvoiceInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type PaymentsCreateWithoutRefundsInput = {
    id?: string
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutPaymentsInput
    subscription?: SubscriptionsCreateNestedOneWithoutPaymentsInput
    paymentMethod: PaymentMethodsCreateNestedOneWithoutPaymentsInput
    invoice: InvoicesCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateWithoutRefundsInput = {
    id?: string
    user_id: string
    subscription_id?: string | null
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    payment_method_id: string
    invoice_id: string
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutRefundsInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutRefundsInput, PaymentsUncheckedCreateWithoutRefundsInput>
  }

  export type PaymentsUpsertWithoutRefundsInput = {
    update: XOR<PaymentsUpdateWithoutRefundsInput, PaymentsUncheckedUpdateWithoutRefundsInput>
    create: XOR<PaymentsCreateWithoutRefundsInput, PaymentsUncheckedCreateWithoutRefundsInput>
    where?: PaymentsWhereInput
  }

  export type PaymentsUpdateToOneWithWhereWithoutRefundsInput = {
    where?: PaymentsWhereInput
    data: XOR<PaymentsUpdateWithoutRefundsInput, PaymentsUncheckedUpdateWithoutRefundsInput>
  }

  export type PaymentsUpdateWithoutRefundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPaymentsNestedInput
    subscription?: SubscriptionsUpdateOneWithoutPaymentsNestedInput
    paymentMethod?: PaymentMethodsUpdateOneRequiredWithoutPaymentsNestedInput
    invoice?: InvoicesUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutRefundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method_id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsCreateManyUserInput = {
    id?: string
    plan_id: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsCreateManyUserInput = {
    id?: string
    subscription_id?: string | null
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    payment_method_id: string
    invoice_id: string
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentMethodsCreateManyUserInput = {
    id?: string
    provider: $Enums.PaymentProviders
    type: $Enums.PaymentType
    last_digits?: number | null
    expiry_month?: number | null
    expiry_year?: number | null
    brand?: $Enums.CardBrand | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoicesCreateManyUserInput = {
    id?: string
    subscription_id: string
    payment_method_id: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubscriptionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlansUpdateOneRequiredWithoutSubscriptionsNestedInput
    Payments?: PaymentsUpdateManyWithoutSubscriptionNestedInput
    Invoices?: InvoicesUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionsUpdateOneWithoutPaymentsNestedInput
    paymentMethod?: PaymentMethodsUpdateOneRequiredWithoutPaymentsNestedInput
    invoice?: InvoicesUpdateOneRequiredWithoutPaymentsNestedInput
    Refunds?: RefundsUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method_id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Refunds?: RefundsUncheckedUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method_id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    last_digits?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_month?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: NullableEnumCardBrandFieldUpdateOperationsInput | $Enums.CardBrand | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUpdateManyWithoutPaymentMethodNestedInput
    Invoices?: InvoicesUpdateManyWithoutPaymentMethodsNestedInput
  }

  export type PaymentMethodsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    last_digits?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_month?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: NullableEnumCardBrandFieldUpdateOperationsInput | $Enums.CardBrand | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutPaymentMethodNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutPaymentMethodsNestedInput
  }

  export type PaymentMethodsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersFieldUpdateOperationsInput | $Enums.PaymentProviders
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    last_digits?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_month?: NullableIntFieldUpdateOperationsInput | number | null
    expiry_year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: NullableEnumCardBrandFieldUpdateOperationsInput | $Enums.CardBrand | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionsUpdateOneRequiredWithoutInvoicesNestedInput
    paymentMethods?: PaymentMethodsUpdateOneRequiredWithoutInvoicesNestedInput
    Payments?: PaymentsUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscription_id?: StringFieldUpdateOperationsInput | string
    payment_method_id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscription_id?: StringFieldUpdateOperationsInput | string
    payment_method_id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsCreateManyPlanInput = {
    id?: string
    user_id: string
    status: $Enums.SubscriptionStatus
    start_date: Date | string
    end_date?: Date | string | null
    trial_end_date?: Date | string | null
    cancel_at?: Date | string | null
    canceled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubscriptionsUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSubscriptionsNestedInput
    Payments?: PaymentsUpdateManyWithoutSubscriptionNestedInput
    Invoices?: InvoicesUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancel_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManySubscriptionInput = {
    id?: string
    user_id: string
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    payment_method_id: string
    invoice_id: string
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoicesCreateManySubscriptionInput = {
    id?: string
    user_id: string
    payment_method_id: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPaymentsNestedInput
    paymentMethod?: PaymentMethodsUpdateOneRequiredWithoutPaymentsNestedInput
    invoice?: InvoicesUpdateOneRequiredWithoutPaymentsNestedInput
    Refunds?: RefundsUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method_id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Refunds?: RefundsUncheckedUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method_id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutInvoicesNestedInput
    paymentMethods?: PaymentMethodsUpdateOneRequiredWithoutInvoicesNestedInput
    Payments?: PaymentsUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    payment_method_id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    payment_method_id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundsCreateManyPaymentsInput = {
    id?: string
    amount_cents: number
    currency: $Enums.Currency
    reason?: string | null
    status: $Enums.RefundStatus
    gateway_ref?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type RefundsUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    gateway_ref?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefundsUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    gateway_ref?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefundsUncheckedUpdateManyWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    gateway_ref?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentsCreateManyPaymentMethodInput = {
    id?: string
    user_id: string
    subscription_id?: string | null
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    invoice_id: string
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoicesCreateManyPaymentMethodsInput = {
    id?: string
    user_id: string
    subscription_id: string
    amount_due_cents: number
    amount_paid_cents: number
    currency: $Enums.Currency
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.InvoiceStatus
    invoice_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPaymentsNestedInput
    subscription?: SubscriptionsUpdateOneWithoutPaymentsNestedInput
    invoice?: InvoicesUpdateOneRequiredWithoutPaymentsNestedInput
    Refunds?: RefundsUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    invoice_id?: StringFieldUpdateOperationsInput | string
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Refunds?: RefundsUncheckedUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateManyWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    invoice_id?: StringFieldUpdateOperationsInput | string
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutInvoicesNestedInput
    subscription?: SubscriptionsUpdateOneRequiredWithoutInvoicesNestedInput
    Payments?: PaymentsUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateManyWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: StringFieldUpdateOperationsInput | string
    amount_due_cents?: IntFieldUpdateOperationsInput | number
    amount_paid_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    invoice_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyInvoiceInput = {
    id?: string
    user_id: string
    subscription_id?: string | null
    amount_cents: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    payment_method_id: string
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPaymentsNestedInput
    subscription?: SubscriptionsUpdateOneWithoutPaymentsNestedInput
    paymentMethod?: PaymentMethodsUpdateOneRequiredWithoutPaymentsNestedInput
    Refunds?: RefundsUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method_id?: StringFieldUpdateOperationsInput | string
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Refunds?: RefundsUncheckedUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method_id?: StringFieldUpdateOperationsInput | string
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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