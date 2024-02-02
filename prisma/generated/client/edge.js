
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  team_id: 'team_id',
  role_name: 'role_name',
  role_description: 'role_description'
};

exports.Prisma.TasksScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  task_creator: 'task_creator',
  team_id: 'team_id',
  due_date: 'due_date',
  task_title: 'task_title',
  task_description: 'task_description'
};

exports.Prisma.TeamsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  team_name: 'team_name'
};

exports.Prisma.User_teamScalarFieldEnum = {
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id',
  team_id: 'team_id',
  id: 'id'
};

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.User_roleScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id',
  team_id: 'team_id',
  role_id: 'role_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  roles: 'roles',
  tasks: 'tasks',
  teams: 'teams',
  user_team: 'user_team',
  users: 'users',
  user_role: 'user_role'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\hinata\\Desktop\\programming\\tice\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIHJvbGVzIHsKICBpZCAgICAgICAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICBjcmVhdGVkX2F0ICAgICAgIERhdGVUaW1lICAgIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJjbG9ja190aW1lc3RhbXAoKSIpKSBAZGIuVGltZXN0YW1wdHooNikKICB1cGRhdGVkX2F0ICAgICAgIERhdGVUaW1lICAgIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJjbG9ja190aW1lc3RhbXAoKSIpKSBAZGIuVGltZXN0YW1wdHooNikKICB0ZWFtX2lkICAgICAgICAgIFN0cmluZz8gICAgIEBkYi5VdWlkCiAgcm9sZV9uYW1lICAgICAgICBTdHJpbmcgICAgICBAZGIuVmFyQ2hhcigzMikKICByb2xlX2Rlc2NyaXB0aW9uIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDI1NikKICB0ZWFtcyAgICAgICAgICAgIHRlYW1zPyAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt0ZWFtX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBOb0FjdGlvbikKICB1c2VyX3JvbGUgICAgICAgIHVzZXJfcm9sZVtdCgogIEBAdW5pcXVlKFt0ZWFtX2lkLCByb2xlX25hbWVdLCBtYXA6ICJ1bmlxdWVfdGVhbV9yb2xlIikKfQoKbW9kZWwgdGFza3MgewogIGlkICAgICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICBjcmVhdGVkX2F0ICAgICAgIERhdGVUaW1lICBAZGVmYXVsdChkYmdlbmVyYXRlZCgiY2xvY2tfdGltZXN0YW1wKCkiKSkgQGRiLlRpbWVzdGFtcHR6KDYpCiAgdXBkYXRlZF9hdCAgICAgICBEYXRlVGltZSAgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImNsb2NrX3RpbWVzdGFtcCgpIikpIEBkYi5UaW1lc3RhbXB0eig2KQogIHRhc2tfY3JlYXRvciAgICAgU3RyaW5nPyAgIEBkYi5VdWlkCiAgdGVhbV9pZCAgICAgICAgICBTdHJpbmc/ICAgQGRiLlV1aWQKICBkdWVfZGF0ZSAgICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIHRhc2tfdGl0bGUgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1NikKICB0YXNrX2Rlc2NyaXB0aW9uIFN0cmluZz8KICB0ZWFtcyAgICAgICAgICAgIHRlYW1zPyAgICBAcmVsYXRpb24oZmllbGRzOiBbdGVhbV9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX3Rhc2tfdGVhbSIpCiAgdXNlcnMgICAgICAgICAgICB1c2Vycz8gICAgQHJlbGF0aW9uKGZpZWxkczogW3Rhc2tfY3JlYXRvcl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQp9Cgptb2RlbCB0ZWFtcyB7CiAgaWQgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgY3JlYXRlZF9hdCBEYXRlVGltZSAgICBAZGVmYXVsdChkYmdlbmVyYXRlZCgiY2xvY2tfdGltZXN0YW1wKCkiKSkgQGRiLlRpbWVzdGFtcHR6KDYpCiAgdXBkYXRlZF9hdCBEYXRlVGltZSAgICBAZGVmYXVsdChkYmdlbmVyYXRlZCgiY2xvY2tfdGltZXN0YW1wKCkiKSkgQGRiLlRpbWVzdGFtcHR6KDYpCiAgdGVhbV9uYW1lICBTdHJpbmcgICAgICBAZGIuVmFyQ2hhcigzMikKICByb2xlcyAgICAgIHJvbGVzW10KICB0YXNrcyAgICAgIHRhc2tzW10KICB1c2VyX3JvbGUgIHVzZXJfcm9sZVtdCiAgdXNlcl90ZWFtICB1c2VyX3RlYW1bXQp9Cgptb2RlbCB1c2VyX3RlYW0gewogIGNyZWF0ZWRfYXQgRGF0ZVRpbWUgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImNsb2NrX3RpbWVzdGFtcCgpIikpIEBkYi5UaW1lc3RhbXB0eig2KQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWUgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImNsb2NrX3RpbWVzdGFtcCgpIikpIEBkYi5UaW1lc3RhbXB0eig2KQogIHVzZXJfaWQgICAgU3RyaW5nPyAgQGRiLlV1aWQKICB0ZWFtX2lkICAgIFN0cmluZz8gIEBkYi5VdWlkCiAgaWQgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgdGVhbXMgICAgICB0ZWFtcz8gICBAcmVsYXRpb24oZmllbGRzOiBbdGVhbV9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX3VzZXJfdGVhbV90ZWFtX2lkIikKICB1c2VycyAgICAgIHVzZXJzPyAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfdXNlcl90ZWFtX3VzZXJfaWQiKQp9Cgptb2RlbCB1c2VycyB7CiAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZSAgICBAZGVmYXVsdChkYmdlbmVyYXRlZCgiY2xvY2tfdGltZXN0YW1wKCkiKSkgQGRiLlRpbWVzdGFtcHR6KDYpCiAgdXBkYXRlZF9hdCAgICBEYXRlVGltZSAgICBAZGVmYXVsdChkYmdlbmVyYXRlZCgiY2xvY2tfdGltZXN0YW1wKCkiKSkgQGRiLlRpbWVzdGFtcHR6KDYpCiAgdXNlcl9pZCAgICAgICBTdHJpbmcgICAgICBAdW5pcXVlIEBkYi5WYXJDaGFyKDMyKQogIHVzZXJuYW1lICAgICAgU3RyaW5nPyAgICAgQHVuaXF1ZSBAZGIuVmFyQ2hhcig2NCkKICBmaXJzdF9uYW1lICAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDI1NikKICBsYXN0X25hbWUgICAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDI1NikKICBlbWFpbF9hZGRyZXNzIFN0cmluZwogIGltYWdlX3VybCAgICAgU3RyaW5nCiAgdGFza3MgICAgICAgICB0YXNrc1tdCiAgdXNlcl9yb2xlICAgICB1c2VyX3JvbGVbXQogIHVzZXJfdGVhbSAgICAgdXNlcl90ZWFtW10KfQoKbW9kZWwgdXNlcl9yb2xlIHsKICBpZCAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICBjcmVhdGVkX2F0IERhdGVUaW1lIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJjbG9ja190aW1lc3RhbXAoKSIpKSBAZGIuVGltZXN0YW1wdHooNikKICB1cGRhdGVkX2F0IERhdGVUaW1lIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJjbG9ja190aW1lc3RhbXAoKSIpKSBAZGIuVGltZXN0YW1wdHooNikKICB1c2VyX2lkICAgIFN0cmluZz8gIEBkYi5VdWlkCiAgdGVhbV9pZCAgICBTdHJpbmc/ICBAZGIuVXVpZAogIHJvbGVfaWQgICAgU3RyaW5nPyAgQGRiLlV1aWQKICByb2xlcyAgICAgIHJvbGVzPyAgIEByZWxhdGlvbihmaWVsZHM6IFtyb2xlX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBOb0FjdGlvbikKICB0ZWFtcyAgICAgIHRlYW1zPyAgIEByZWxhdGlvbihmaWVsZHM6IFt0ZWFtX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBOb0FjdGlvbikKICB1c2VycyAgICAgIHVzZXJzPyAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBOb0FjdGlvbikKCiAgQEB1bmlxdWUoW3RlYW1faWQsIHVzZXJfaWRdKQp9Cg==",
  "inlineSchemaHash": "5268b55114e31e4670a104777abbae106309fc9c8073a2515ab4e4f49b01a6db",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"roles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"team_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teams\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teams\",\"relationName\":\"rolesToteams\",\"relationFromFields\":[\"team_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_role\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_role\",\"relationName\":\"rolesTouser_role\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"team_id\",\"role_name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"team_id\",\"role_name\"]}],\"isGenerated\":false},\"tasks\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"task_creator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"team_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"due_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"task_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"task_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teams\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teams\",\"relationName\":\"tasksToteams\",\"relationFromFields\":[\"team_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"tasksTousers\",\"relationFromFields\":[\"task_creator\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"teams\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"team_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"roles\",\"relationName\":\"rolesToteams\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tasks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tasks\",\"relationName\":\"tasksToteams\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_role\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_role\",\"relationName\":\"teamsTouser_role\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_team\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_team\",\"relationName\":\"teamsTouser_team\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_team\":{\"dbName\":null,\"fields\":[{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"team_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teams\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teams\",\"relationName\":\"teamsTouser_team\",\"relationFromFields\":[\"team_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"user_teamTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tasks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tasks\",\"relationName\":\"tasksTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_role\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_role\",\"relationName\":\"user_roleTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_team\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_team\",\"relationName\":\"user_teamTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_role\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"clock_timestamp()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"team_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"roles\",\"relationName\":\"rolesTouser_role\",\"relationFromFields\":[\"role_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teams\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teams\",\"relationName\":\"teamsTouser_role\",\"relationFromFields\":[\"team_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"user_roleTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"team_id\",\"user_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"team_id\",\"user_id\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

