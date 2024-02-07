import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const RoleScalarFieldEnumSchema = z.enum(['id','created_at','updated_at','team_id','role_name','role_description']);

export const TaskScalarFieldEnumSchema = z.enum(['id','created_at','updated_at','task_creator','team_id','due_date','task_title','task_description']);

export const TeamScalarFieldEnumSchema = z.enum(['id','created_at','updated_at','team_name','creator']);

export const UserTeamScalarFieldEnumSchema = z.enum(['created_at','updated_at','user_id','team_id','id']);

export const UserScalarFieldEnumSchema = z.enum(['id','created_at','updated_at','user_id','username','first_name','last_name','email_address','image_url']);

export const UserRoleScalarFieldEnumSchema = z.enum(['id','created_at','updated_at','user_id','team_id','role_id']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ROLE SCHEMA
/////////////////////////////////////////

export const RoleSchema = z.object({
  id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  team_id: z.string().nullable(),
  role_name: z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),
  role_description: z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }).nullable(),
})

export type Role = z.infer<typeof RoleSchema>

/////////////////////////////////////////
// TASK SCHEMA
/////////////////////////////////////////

export const TaskSchema = z.object({
  id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  task_creator: z.string().nullable(),
  team_id: z.string().nullable(),
  due_date: z.coerce.date().nullable(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).nullable(),
})

export type Task = z.infer<typeof TaskSchema>

/////////////////////////////////////////
// TEAM SCHEMA
/////////////////////////////////////////

export const TeamSchema = z.object({
  id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().nullable(),
})

export type Team = z.infer<typeof TeamSchema>

/////////////////////////////////////////
// USER TEAM SCHEMA
/////////////////////////////////////////

export const UserTeamSchema = z.object({
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  user_id: z.string().nullable(),
  team_id: z.string().nullable(),
  id: z.string(),
})

export type UserTeam = z.infer<typeof UserTeamSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  user_id: z.string(),
  username: z.string().nullable(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  email_address: z.string(),
  image_url: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER ROLE SCHEMA
/////////////////////////////////////////

export const UserRoleSchema = z.object({
  id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  user_id: z.string().nullable(),
  team_id: z.string().nullable(),
  role_id: z.string().nullable(),
})

export type UserRole = z.infer<typeof UserRoleSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ROLE
//------------------------------------------------------

export const RoleIncludeSchema: z.ZodType<Prisma.RoleInclude> = z.object({
  teams: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  user_role: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RoleArgsSchema: z.ZodType<Prisma.RoleDefaultArgs> = z.object({
  select: z.lazy(() => RoleSelectSchema).optional(),
  include: z.lazy(() => RoleIncludeSchema).optional(),
}).strict();

export const RoleCountOutputTypeArgsSchema: z.ZodType<Prisma.RoleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RoleCountOutputTypeSelectSchema).nullish(),
}).strict();

export const RoleCountOutputTypeSelectSchema: z.ZodType<Prisma.RoleCountOutputTypeSelect> = z.object({
  user_role: z.boolean().optional(),
}).strict();

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z.object({
  id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  team_id: z.boolean().optional(),
  role_name: z.boolean().optional(),
  role_description: z.boolean().optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  user_role: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoleCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TASK
//------------------------------------------------------

export const TaskIncludeSchema: z.ZodType<Prisma.TaskInclude> = z.object({
  teams: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const TaskArgsSchema: z.ZodType<Prisma.TaskDefaultArgs> = z.object({
  select: z.lazy(() => TaskSelectSchema).optional(),
  include: z.lazy(() => TaskIncludeSchema).optional(),
}).strict();

export const TaskSelectSchema: z.ZodType<Prisma.TaskSelect> = z.object({
  id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  task_creator: z.boolean().optional(),
  team_id: z.boolean().optional(),
  due_date: z.boolean().optional(),
  task_title: z.boolean().optional(),
  task_description: z.boolean().optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// TEAM
//------------------------------------------------------

export const TeamIncludeSchema: z.ZodType<Prisma.TeamInclude> = z.object({
  users: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  user_role: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  user_team: z.union([z.boolean(),z.lazy(() => UserTeamFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TeamArgsSchema: z.ZodType<Prisma.TeamDefaultArgs> = z.object({
  select: z.lazy(() => TeamSelectSchema).optional(),
  include: z.lazy(() => TeamIncludeSchema).optional(),
}).strict();

export const TeamCountOutputTypeArgsSchema: z.ZodType<Prisma.TeamCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TeamCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TeamCountOutputTypeSelectSchema: z.ZodType<Prisma.TeamCountOutputTypeSelect> = z.object({
  roles: z.boolean().optional(),
  tasks: z.boolean().optional(),
  user_role: z.boolean().optional(),
  user_team: z.boolean().optional(),
}).strict();

export const TeamSelectSchema: z.ZodType<Prisma.TeamSelect> = z.object({
  id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  team_name: z.boolean().optional(),
  creator: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  user_role: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  user_team: z.union([z.boolean(),z.lazy(() => UserTeamFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER TEAM
//------------------------------------------------------

export const UserTeamIncludeSchema: z.ZodType<Prisma.UserTeamInclude> = z.object({
  teams: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const UserTeamArgsSchema: z.ZodType<Prisma.UserTeamDefaultArgs> = z.object({
  select: z.lazy(() => UserTeamSelectSchema).optional(),
  include: z.lazy(() => UserTeamIncludeSchema).optional(),
}).strict();

export const UserTeamSelectSchema: z.ZodType<Prisma.UserTeamSelect> = z.object({
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  user_id: z.boolean().optional(),
  team_id: z.boolean().optional(),
  id: z.boolean().optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  tasks: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  user_role: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  user_team: z.union([z.boolean(),z.lazy(() => UserTeamFindManyArgsSchema)]).optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  tasks: z.boolean().optional(),
  user_role: z.boolean().optional(),
  user_team: z.boolean().optional(),
  teams: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  user_id: z.boolean().optional(),
  username: z.boolean().optional(),
  first_name: z.boolean().optional(),
  last_name: z.boolean().optional(),
  email_address: z.boolean().optional(),
  image_url: z.boolean().optional(),
  tasks: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  user_role: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  user_team: z.union([z.boolean(),z.lazy(() => UserTeamFindManyArgsSchema)]).optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER ROLE
//------------------------------------------------------

export const UserRoleIncludeSchema: z.ZodType<Prisma.UserRoleInclude> = z.object({
  roles: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const UserRoleArgsSchema: z.ZodType<Prisma.UserRoleDefaultArgs> = z.object({
  select: z.lazy(() => UserRoleSelectSchema).optional(),
  include: z.lazy(() => UserRoleIncludeSchema).optional(),
}).strict();

export const UserRoleSelectSchema: z.ZodType<Prisma.UserRoleSelect> = z.object({
  id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  user_id: z.boolean().optional(),
  team_id: z.boolean().optional(),
  role_id: z.boolean().optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const RoleWhereInputSchema: z.ZodType<Prisma.RoleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  role_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role_description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  teams: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  user_role: z.lazy(() => UserRoleListRelationFilterSchema).optional()
}).strict();

export const RoleOrderByWithRelationInputSchema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  role_description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  teams: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  user_role: z.lazy(() => UserRoleOrderByRelationAggregateInputSchema).optional()
}).strict();

export const RoleWhereUniqueInputSchema: z.ZodType<Prisma.RoleWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    team_id_role_name: z.lazy(() => RoleTeam_idRole_nameCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    team_id_role_name: z.lazy(() => RoleTeam_idRole_nameCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  team_id_role_name: z.lazy(() => RoleTeam_idRole_nameCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  role_name: z.union([ z.lazy(() => StringFilterSchema),z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }) ]).optional(),
  role_description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }) ]).optional().nullable(),
  teams: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  user_role: z.lazy(() => UserRoleListRelationFilterSchema).optional()
}).strict());

export const RoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  role_description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => RoleCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoleMinOrderByAggregateInputSchema).optional()
}).strict();

export const RoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RoleScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  team_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  role_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role_description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TaskWhereInputSchema: z.ZodType<Prisma.TaskWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  task_creator: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  due_date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  task_title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  task_description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  teams: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  users: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const TaskOrderByWithRelationInputSchema: z.ZodType<Prisma.TaskOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  task_creator: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  due_date: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  task_title: z.lazy(() => SortOrderSchema).optional(),
  task_description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  teams: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  users: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const TaskWhereUniqueInputSchema: z.ZodType<Prisma.TaskWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  task_creator: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  due_date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  task_title: z.union([ z.lazy(() => StringFilterSchema),z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }) ]).optional(),
  task_description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string().max(2048, { message: "please keep it  under 2048 characters." }) ]).optional().nullable(),
  teams: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  users: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export const TaskOrderByWithAggregationInputSchema: z.ZodType<Prisma.TaskOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  task_creator: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  due_date: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  task_title: z.lazy(() => SortOrderSchema).optional(),
  task_description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => TaskCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TaskMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TaskMinOrderByAggregateInputSchema).optional()
}).strict();

export const TaskScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TaskScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TaskScalarWhereWithAggregatesInputSchema),z.lazy(() => TaskScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskScalarWhereWithAggregatesInputSchema),z.lazy(() => TaskScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  task_creator: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  due_date: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  task_title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  task_description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TeamWhereInputSchema: z.ZodType<Prisma.TeamWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  team_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  creator: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  users: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleListRelationFilterSchema).optional(),
  tasks: z.lazy(() => TaskListRelationFilterSchema).optional(),
  user_role: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
  user_team: z.lazy(() => UserTeamListRelationFilterSchema).optional()
}).strict();

export const TeamOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_name: z.lazy(() => SortOrderSchema).optional(),
  creator: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  users: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  roles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional(),
  tasks: z.lazy(() => TaskOrderByRelationAggregateInputSchema).optional(),
  user_role: z.lazy(() => UserRoleOrderByRelationAggregateInputSchema).optional(),
  user_team: z.lazy(() => UserTeamOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TeamWhereUniqueInputSchema: z.ZodType<Prisma.TeamWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  team_name: z.union([ z.lazy(() => StringFilterSchema),z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }) ]).optional(),
  creator: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  users: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleListRelationFilterSchema).optional(),
  tasks: z.lazy(() => TaskListRelationFilterSchema).optional(),
  user_role: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
  user_team: z.lazy(() => UserTeamListRelationFilterSchema).optional()
}).strict());

export const TeamOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_name: z.lazy(() => SortOrderSchema).optional(),
  creator: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => TeamCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamMinOrderByAggregateInputSchema).optional()
}).strict();

export const TeamScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TeamScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  team_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  creator: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserTeamWhereInputSchema: z.ZodType<Prisma.UserTeamWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserTeamWhereInputSchema),z.lazy(() => UserTeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserTeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserTeamWhereInputSchema),z.lazy(() => UserTeamWhereInputSchema).array() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  teams: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  users: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UserTeamOrderByWithRelationInputSchema: z.ZodType<Prisma.UserTeamOrderByWithRelationInput> = z.object({
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  teams: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  users: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const UserTeamWhereUniqueInputSchema: z.ZodType<Prisma.UserTeamWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => UserTeamWhereInputSchema),z.lazy(() => UserTeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserTeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserTeamWhereInputSchema),z.lazy(() => UserTeamWhereInputSchema).array() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  teams: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  users: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export const UserTeamOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserTeamOrderByWithAggregationInput> = z.object({
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserTeamCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserTeamMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserTeamMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserTeamScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserTeamScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserTeamScalarWhereWithAggregatesInputSchema),z.lazy(() => UserTeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserTeamScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserTeamScalarWhereWithAggregatesInputSchema),z.lazy(() => UserTeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  first_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  last_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image_url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tasks: z.lazy(() => TaskListRelationFilterSchema).optional(),
  user_role: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
  user_team: z.lazy(() => UserTeamListRelationFilterSchema).optional(),
  teams: z.lazy(() => TeamListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  first_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email_address: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  tasks: z.lazy(() => TaskOrderByRelationAggregateInputSchema).optional(),
  user_role: z.lazy(() => UserRoleOrderByRelationAggregateInputSchema).optional(),
  user_team: z.lazy(() => UserTeamOrderByRelationAggregateInputSchema).optional(),
  teams: z.lazy(() => TeamOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    user_id: z.string(),
    username: z.string()
  }),
  z.object({
    id: z.string(),
    user_id: z.string(),
  }),
  z.object({
    id: z.string(),
    username: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    user_id: z.string(),
    username: z.string(),
  }),
  z.object({
    user_id: z.string(),
  }),
  z.object({
    username: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  user_id: z.string().optional(),
  username: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  first_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  last_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image_url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tasks: z.lazy(() => TaskListRelationFilterSchema).optional(),
  user_role: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
  user_team: z.lazy(() => UserTeamListRelationFilterSchema).optional(),
  teams: z.lazy(() => TeamListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  first_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email_address: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  first_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  last_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email_address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  image_url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserRoleWhereInputSchema: z.ZodType<Prisma.UserRoleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  role_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  roles: z.union([ z.lazy(() => RoleNullableRelationFilterSchema),z.lazy(() => RoleWhereInputSchema) ]).optional().nullable(),
  teams: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  users: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleOrderByWithRelationInputSchema: z.ZodType<Prisma.UserRoleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  roles: z.lazy(() => RoleOrderByWithRelationInputSchema).optional(),
  teams: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  users: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const UserRoleWhereUniqueInputSchema: z.ZodType<Prisma.UserRoleWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    team_id_user_id: z.lazy(() => UserRoleTeam_idUser_idCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    team_id_user_id: z.lazy(() => UserRoleTeam_idUser_idCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  team_id_user_id: z.lazy(() => UserRoleTeam_idUser_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  role_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  roles: z.union([ z.lazy(() => RoleNullableRelationFilterSchema),z.lazy(() => RoleWhereInputSchema) ]).optional().nullable(),
  teams: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  users: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export const UserRoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserRoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => UserRoleCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserRoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserRoleMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserRoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserRoleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema),z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema),z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  role_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const RoleCreateInputSchema: z.ZodType<Prisma.RoleCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  role_name: z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),
  role_description: z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }).optional().nullable(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutRolesInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutRolesInputSchema).optional()
}).strict();

export const RoleUncheckedCreateInputSchema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  role_name: z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),
  role_description: z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }).optional().nullable(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutRolesInputSchema).optional()
}).strict();

export const RoleUpdateInputSchema: z.ZodType<Prisma.RoleUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role_name: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role_description: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  teams: z.lazy(() => TeamUpdateOneWithoutRolesNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role_name: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role_description: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleCreateManyInputSchema: z.ZodType<Prisma.RoleCreateManyInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  role_name: z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),
  role_description: z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }).optional().nullable()
}).strict();

export const RoleUpdateManyMutationInputSchema: z.ZodType<Prisma.RoleUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role_name: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role_description: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role_name: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role_description: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TaskCreateInputSchema: z.ZodType<Prisma.TaskCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  due_date: z.coerce.date().optional().nullable(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutTasksInputSchema).optional(),
  users: z.lazy(() => UserCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();

export const TaskUncheckedCreateInputSchema: z.ZodType<Prisma.TaskUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  task_creator: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable()
}).strict();

export const TaskUpdateInputSchema: z.ZodType<Prisma.TaskUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  teams: z.lazy(() => TeamUpdateOneWithoutTasksNestedInputSchema).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTasksNestedInputSchema).optional()
}).strict();

export const TaskUncheckedUpdateInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TaskCreateManyInputSchema: z.ZodType<Prisma.TaskCreateManyInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  task_creator: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable()
}).strict();

export const TaskUpdateManyMutationInputSchema: z.ZodType<Prisma.TaskUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TaskUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamCreateInputSchema: z.ZodType<Prisma.TeamCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamUncheckedCreateInputSchema: z.ZodType<Prisma.TeamUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamUpdateInputSchema: z.ZodType<Prisma.TeamUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const TeamCreateManyInputSchema: z.ZodType<Prisma.TeamCreateManyInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable()
}).strict();

export const TeamUpdateManyMutationInputSchema: z.ZodType<Prisma.TeamUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserTeamCreateInputSchema: z.ZodType<Prisma.UserTeamCreateInput> = z.object({
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  id: z.string().optional(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutUser_teamInputSchema).optional(),
  users: z.lazy(() => UserCreateNestedOneWithoutUser_teamInputSchema).optional()
}).strict();

export const UserTeamUncheckedCreateInputSchema: z.ZodType<Prisma.UserTeamUncheckedCreateInput> = z.object({
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  id: z.string().optional()
}).strict();

export const UserTeamUpdateInputSchema: z.ZodType<Prisma.UserTeamUpdateInput> = z.object({
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUpdateOneWithoutUser_teamNestedInputSchema).optional(),
  users: z.lazy(() => UserUpdateOneWithoutUser_teamNestedInputSchema).optional()
}).strict();

export const UserTeamUncheckedUpdateInputSchema: z.ZodType<Prisma.UserTeamUncheckedUpdateInput> = z.object({
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserTeamCreateManyInputSchema: z.ZodType<Prisma.UserTeamCreateManyInput> = z.object({
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  id: z.string().optional()
}).strict();

export const UserTeamUpdateManyMutationInputSchema: z.ZodType<Prisma.UserTeamUpdateManyMutationInput> = z.object({
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserTeamUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserTeamUncheckedUpdateManyInput> = z.object({
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  username: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email_address: z.string(),
  image_url: z.string(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutUsersInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutUsersInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutUsersInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  username: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email_address: z.string(),
  image_url: z.string(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  username: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email_address: z.string(),
  image_url: z.string()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserRoleCreateInputSchema: z.ZodType<Prisma.UserRoleCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  roles: z.lazy(() => RoleCreateNestedOneWithoutUser_roleInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutUser_roleInputSchema).optional(),
  users: z.lazy(() => UserCreateNestedOneWithoutUser_roleInputSchema).optional()
}).strict();

export const UserRoleUncheckedCreateInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  role_id: z.string().optional().nullable()
}).strict();

export const UserRoleUpdateInputSchema: z.ZodType<Prisma.UserRoleUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUpdateOneWithoutUser_roleNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateOneWithoutUser_roleNestedInputSchema).optional(),
  users: z.lazy(() => UserUpdateOneWithoutUser_roleNestedInputSchema).optional()
}).strict();

export const UserRoleUncheckedUpdateInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleCreateManyInputSchema: z.ZodType<Prisma.UserRoleCreateManyInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  role_id: z.string().optional().nullable()
}).strict();

export const UserRoleUpdateManyMutationInputSchema: z.ZodType<Prisma.UserRoleUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserRoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const UuidNullableFilterSchema: z.ZodType<Prisma.UuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const TeamNullableRelationFilterSchema: z.ZodType<Prisma.TeamNullableRelationFilter> = z.object({
  is: z.lazy(() => TeamWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TeamWhereInputSchema).optional().nullable()
}).strict();

export const UserRoleListRelationFilterSchema: z.ZodType<Prisma.UserRoleListRelationFilter> = z.object({
  every: z.lazy(() => UserRoleWhereInputSchema).optional(),
  some: z.lazy(() => UserRoleWhereInputSchema).optional(),
  none: z.lazy(() => UserRoleWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const UserRoleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserRoleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleTeam_idRole_nameCompoundUniqueInputSchema: z.ZodType<Prisma.RoleTeam_idRole_nameCompoundUniqueInput> = z.object({
  team_id: z.string(),
  role_name: z.string()
}).strict();

export const RoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  role_description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  role_description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  role_description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const UuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.UuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UserNullableRelationFilterSchema: z.ZodType<Prisma.UserNullableRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserWhereInputSchema).optional().nullable()
}).strict();

export const TaskCountOrderByAggregateInputSchema: z.ZodType<Prisma.TaskCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  task_creator: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  due_date: z.lazy(() => SortOrderSchema).optional(),
  task_title: z.lazy(() => SortOrderSchema).optional(),
  task_description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TaskMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TaskMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  task_creator: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  due_date: z.lazy(() => SortOrderSchema).optional(),
  task_title: z.lazy(() => SortOrderSchema).optional(),
  task_description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TaskMinOrderByAggregateInputSchema: z.ZodType<Prisma.TaskMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  task_creator: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  due_date: z.lazy(() => SortOrderSchema).optional(),
  task_title: z.lazy(() => SortOrderSchema).optional(),
  task_description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const RoleListRelationFilterSchema: z.ZodType<Prisma.RoleListRelationFilter> = z.object({
  every: z.lazy(() => RoleWhereInputSchema).optional(),
  some: z.lazy(() => RoleWhereInputSchema).optional(),
  none: z.lazy(() => RoleWhereInputSchema).optional()
}).strict();

export const TaskListRelationFilterSchema: z.ZodType<Prisma.TaskListRelationFilter> = z.object({
  every: z.lazy(() => TaskWhereInputSchema).optional(),
  some: z.lazy(() => TaskWhereInputSchema).optional(),
  none: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export const UserTeamListRelationFilterSchema: z.ZodType<Prisma.UserTeamListRelationFilter> = z.object({
  every: z.lazy(() => UserTeamWhereInputSchema).optional(),
  some: z.lazy(() => UserTeamWhereInputSchema).optional(),
  none: z.lazy(() => UserTeamWhereInputSchema).optional()
}).strict();

export const RoleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TaskOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TaskOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserTeamOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserTeamOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamCountOrderByAggregateInputSchema: z.ZodType<Prisma.TeamCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_name: z.lazy(() => SortOrderSchema).optional(),
  creator: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TeamMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_name: z.lazy(() => SortOrderSchema).optional(),
  creator: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeamMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_name: z.lazy(() => SortOrderSchema).optional(),
  creator: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserTeamCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserTeamCountOrderByAggregateInput> = z.object({
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserTeamMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserTeamMaxOrderByAggregateInput> = z.object({
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserTeamMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserTeamMinOrderByAggregateInput> = z.object({
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamListRelationFilterSchema: z.ZodType<Prisma.TeamListRelationFilter> = z.object({
  every: z.lazy(() => TeamWhereInputSchema).optional(),
  some: z.lazy(() => TeamWhereInputSchema).optional(),
  none: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TeamOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  email_address: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  email_address: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  email_address: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleNullableRelationFilterSchema: z.ZodType<Prisma.RoleNullableRelationFilter> = z.object({
  is: z.lazy(() => RoleWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => RoleWhereInputSchema).optional().nullable()
}).strict();

export const UserRoleTeam_idUser_idCompoundUniqueInputSchema: z.ZodType<Prisma.UserRoleTeam_idUser_idCompoundUniqueInput> = z.object({
  team_id: z.string(),
  user_id: z.string()
}).strict();

export const UserRoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamCreateNestedOneWithoutRolesInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutRolesInputSchema),z.lazy(() => TeamUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const UserRoleCreateNestedManyWithoutRolesInputSchema: z.ZodType<Prisma.UserRoleCreateNestedManyWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRolesInputSchema),z.lazy(() => UserRoleCreateWithoutRolesInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutRolesInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutRolesInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyRolesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserRoleUncheckedCreateNestedManyWithoutRolesInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateNestedManyWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRolesInputSchema),z.lazy(() => UserRoleCreateWithoutRolesInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutRolesInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutRolesInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyRolesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const TeamUpdateOneWithoutRolesNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutRolesInputSchema),z.lazy(() => TeamUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutRolesInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutRolesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutRolesInputSchema),z.lazy(() => TeamUpdateWithoutRolesInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutRolesInputSchema) ]).optional(),
}).strict();

export const UserRoleUpdateManyWithoutRolesNestedInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRolesInputSchema),z.lazy(() => UserRoleCreateWithoutRolesInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutRolesInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutRolesInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyRolesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutRolesInputSchema),z.lazy(() => UserRoleUpdateManyWithWhereWithoutRolesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema),z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserRoleUncheckedUpdateManyWithoutRolesNestedInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRolesInputSchema),z.lazy(() => UserRoleCreateWithoutRolesInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutRolesInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutRolesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutRolesInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutRolesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyRolesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutRolesInputSchema),z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutRolesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutRolesInputSchema),z.lazy(() => UserRoleUpdateManyWithWhereWithoutRolesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema),z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTasksInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTasksInputSchema),z.lazy(() => UserUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const TeamUpdateOneWithoutTasksNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTasksInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutTasksInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => TeamUpdateWithoutTasksInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneWithoutTasksNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTasksInputSchema),z.lazy(() => UserUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTasksInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => UserUpdateWithoutTasksInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutTeamsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTeamsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const RoleCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.RoleCreateNestedManyWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutTeamsInputSchema),z.lazy(() => RoleCreateWithoutTeamsInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => RoleCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyTeamsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TaskCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.TaskCreateNestedManyWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutTeamsInputSchema),z.lazy(() => TaskCreateWithoutTeamsInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => TaskCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyTeamsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserRoleCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.UserRoleCreateNestedManyWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutTeamsInputSchema),z.lazy(() => UserRoleCreateWithoutTeamsInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyTeamsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserTeamCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.UserTeamCreateNestedManyWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => UserTeamCreateWithoutTeamsInputSchema),z.lazy(() => UserTeamCreateWithoutTeamsInputSchema).array(),z.lazy(() => UserTeamUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserTeamCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => UserTeamCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserTeamCreateManyTeamsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutTeamsInputSchema),z.lazy(() => RoleCreateWithoutTeamsInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => RoleCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyTeamsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TaskUncheckedCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutTeamsInputSchema),z.lazy(() => TaskCreateWithoutTeamsInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => TaskCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyTeamsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateNestedManyWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutTeamsInputSchema),z.lazy(() => UserRoleCreateWithoutTeamsInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyTeamsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.UserTeamUncheckedCreateNestedManyWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => UserTeamCreateWithoutTeamsInputSchema),z.lazy(() => UserTeamCreateWithoutTeamsInputSchema).array(),z.lazy(() => UserTeamUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserTeamCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => UserTeamCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserTeamCreateManyTeamsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneWithoutTeamsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTeamsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTeamsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTeamsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTeamsInputSchema),z.lazy(() => UserUpdateWithoutTeamsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeamsInputSchema) ]).optional(),
}).strict();

export const RoleUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.RoleUpdateManyWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutTeamsInputSchema),z.lazy(() => RoleCreateWithoutTeamsInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => RoleCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyTeamsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutTeamsInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutTeamsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TaskUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.TaskUpdateManyWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutTeamsInputSchema),z.lazy(() => TaskCreateWithoutTeamsInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => TaskCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyTeamsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutTeamsInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutTeamsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserRoleUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutTeamsInputSchema),z.lazy(() => UserRoleCreateWithoutTeamsInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyTeamsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutTeamsInputSchema),z.lazy(() => UserRoleUpdateManyWithWhereWithoutTeamsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema),z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserTeamUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.UserTeamUpdateManyWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserTeamCreateWithoutTeamsInputSchema),z.lazy(() => UserTeamCreateWithoutTeamsInputSchema).array(),z.lazy(() => UserTeamUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserTeamCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => UserTeamCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserTeamUpsertWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => UserTeamUpsertWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserTeamCreateManyTeamsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserTeamUpdateWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => UserTeamUpdateWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserTeamUpdateManyWithWhereWithoutTeamsInputSchema),z.lazy(() => UserTeamUpdateManyWithWhereWithoutTeamsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserTeamScalarWhereInputSchema),z.lazy(() => UserTeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutTeamsInputSchema),z.lazy(() => RoleCreateWithoutTeamsInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => RoleCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyTeamsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutTeamsInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutTeamsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutTeamsInputSchema),z.lazy(() => TaskCreateWithoutTeamsInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => TaskCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyTeamsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutTeamsInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutTeamsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutTeamsInputSchema),z.lazy(() => UserRoleCreateWithoutTeamsInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyTeamsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutTeamsInputSchema),z.lazy(() => UserRoleUpdateManyWithWhereWithoutTeamsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema),z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.UserTeamUncheckedUpdateManyWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserTeamCreateWithoutTeamsInputSchema),z.lazy(() => UserTeamCreateWithoutTeamsInputSchema).array(),z.lazy(() => UserTeamUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserTeamCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => UserTeamCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserTeamUpsertWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => UserTeamUpsertWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserTeamCreateManyTeamsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserTeamUpdateWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => UserTeamUpdateWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserTeamUpdateManyWithWhereWithoutTeamsInputSchema),z.lazy(() => UserTeamUpdateManyWithWhereWithoutTeamsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserTeamScalarWhereInputSchema),z.lazy(() => UserTeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamCreateNestedOneWithoutUser_teamInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutUser_teamInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutUser_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUser_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutUser_teamInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutUser_teamInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUser_teamInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUser_teamInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUser_teamInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const TeamUpdateOneWithoutUser_teamNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutUser_teamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutUser_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUser_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutUser_teamInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutUser_teamInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutUser_teamInputSchema),z.lazy(() => TeamUpdateWithoutUser_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutUser_teamInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneWithoutUser_teamNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutUser_teamNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUser_teamInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUser_teamInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUser_teamInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUser_teamInputSchema),z.lazy(() => UserUpdateWithoutUser_teamInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUser_teamInputSchema) ]).optional(),
}).strict();

export const TaskCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.TaskCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutUsersInputSchema),z.lazy(() => TaskCreateWithoutUsersInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TaskUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TaskCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserRoleCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.UserRoleCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUsersInputSchema),z.lazy(() => UserRoleCreateWithoutUsersInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutUsersInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutUsersInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserTeamCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.UserTeamCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => UserTeamCreateWithoutUsersInputSchema),z.lazy(() => UserTeamCreateWithoutUsersInputSchema).array(),z.lazy(() => UserTeamUncheckedCreateWithoutUsersInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserTeamCreateOrConnectWithoutUsersInputSchema),z.lazy(() => UserTeamCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserTeamCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.TeamCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutUsersInputSchema),z.lazy(() => TeamCreateWithoutUsersInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TeamCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TaskUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutUsersInputSchema),z.lazy(() => TaskCreateWithoutUsersInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TaskUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TaskCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserRoleUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUsersInputSchema),z.lazy(() => UserRoleCreateWithoutUsersInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutUsersInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutUsersInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserTeamUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.UserTeamUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => UserTeamCreateWithoutUsersInputSchema),z.lazy(() => UserTeamCreateWithoutUsersInputSchema).array(),z.lazy(() => UserTeamUncheckedCreateWithoutUsersInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserTeamCreateOrConnectWithoutUsersInputSchema),z.lazy(() => UserTeamCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserTeamCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.TeamUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutUsersInputSchema),z.lazy(() => TeamCreateWithoutUsersInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TeamCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TaskUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.TaskUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutUsersInputSchema),z.lazy(() => TaskCreateWithoutUsersInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TaskUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TaskCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserRoleUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUsersInputSchema),z.lazy(() => UserRoleCreateWithoutUsersInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutUsersInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutUsersInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => UserRoleUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema),z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserTeamUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.UserTeamUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserTeamCreateWithoutUsersInputSchema),z.lazy(() => UserTeamCreateWithoutUsersInputSchema).array(),z.lazy(() => UserTeamUncheckedCreateWithoutUsersInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserTeamCreateOrConnectWithoutUsersInputSchema),z.lazy(() => UserTeamCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserTeamUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => UserTeamUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserTeamCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserTeamUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => UserTeamUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserTeamUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => UserTeamUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserTeamScalarWhereInputSchema),z.lazy(() => UserTeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.TeamUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutUsersInputSchema),z.lazy(() => TeamCreateWithoutUsersInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TeamCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TeamUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TeamUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => TeamUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TaskUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutUsersInputSchema),z.lazy(() => TaskCreateWithoutUsersInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TaskUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TaskCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserRoleUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUsersInputSchema),z.lazy(() => UserRoleCreateWithoutUsersInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutUsersInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutUsersInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => UserRoleUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema),z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserTeamUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.UserTeamUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserTeamCreateWithoutUsersInputSchema),z.lazy(() => UserTeamCreateWithoutUsersInputSchema).array(),z.lazy(() => UserTeamUncheckedCreateWithoutUsersInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserTeamCreateOrConnectWithoutUsersInputSchema),z.lazy(() => UserTeamCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserTeamUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => UserTeamUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserTeamCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserTeamWhereUniqueInputSchema),z.lazy(() => UserTeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserTeamUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => UserTeamUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserTeamUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => UserTeamUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserTeamScalarWhereInputSchema),z.lazy(() => UserTeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutUsersInputSchema),z.lazy(() => TeamCreateWithoutUsersInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TeamCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TeamUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TeamUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => TeamUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoleCreateNestedOneWithoutUser_roleInputSchema: z.ZodType<Prisma.RoleCreateNestedOneWithoutUser_roleInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUser_roleInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUser_roleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutUser_roleInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional()
}).strict();

export const TeamCreateNestedOneWithoutUser_roleInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutUser_roleInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutUser_roleInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUser_roleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutUser_roleInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutUser_roleInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUser_roleInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUser_roleInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_roleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUser_roleInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const RoleUpdateOneWithoutUser_roleNestedInputSchema: z.ZodType<Prisma.RoleUpdateOneWithoutUser_roleNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUser_roleInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUser_roleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutUser_roleInputSchema).optional(),
  upsert: z.lazy(() => RoleUpsertWithoutUser_roleInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RoleWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RoleWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoleUpdateToOneWithWhereWithoutUser_roleInputSchema),z.lazy(() => RoleUpdateWithoutUser_roleInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUser_roleInputSchema) ]).optional(),
}).strict();

export const TeamUpdateOneWithoutUser_roleNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutUser_roleNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutUser_roleInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUser_roleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutUser_roleInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutUser_roleInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutUser_roleInputSchema),z.lazy(() => TeamUpdateWithoutUser_roleInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutUser_roleInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneWithoutUser_roleNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutUser_roleNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUser_roleInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_roleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUser_roleInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUser_roleInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUser_roleInputSchema),z.lazy(() => UserUpdateWithoutUser_roleInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUser_roleInputSchema) ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedUuidNullableFilterSchema: z.ZodType<Prisma.NestedUuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedUuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const TeamCreateWithoutRolesInputSchema: z.ZodType<Prisma.TeamCreateWithoutRolesInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutRolesInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutRolesInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutRolesInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutRolesInputSchema),z.lazy(() => TeamUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const UserRoleCreateWithoutRolesInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutRolesInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutUser_roleInputSchema).optional(),
  users: z.lazy(() => UserCreateNestedOneWithoutUser_roleInputSchema).optional()
}).strict();

export const UserRoleUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutRolesInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable()
}).strict();

export const UserRoleCreateOrConnectWithoutRolesInputSchema: z.ZodType<Prisma.UserRoleCreateOrConnectWithoutRolesInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRolesInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const UserRoleCreateManyRolesInputEnvelopeSchema: z.ZodType<Prisma.UserRoleCreateManyRolesInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserRoleCreateManyRolesInputSchema),z.lazy(() => UserRoleCreateManyRolesInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeamUpsertWithoutRolesInputSchema: z.ZodType<Prisma.TeamUpsertWithoutRolesInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutRolesInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutRolesInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutRolesInputSchema),z.lazy(() => TeamUncheckedCreateWithoutRolesInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutRolesInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutRolesInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutRolesInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutRolesInputSchema) ]),
}).strict();

export const TeamUpdateWithoutRolesInputSchema: z.ZodType<Prisma.TeamUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const UserRoleUpsertWithWhereUniqueWithoutRolesInputSchema: z.ZodType<Prisma.UserRoleUpsertWithWhereUniqueWithoutRolesInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserRoleUpdateWithoutRolesInputSchema),z.lazy(() => UserRoleUncheckedUpdateWithoutRolesInputSchema) ]),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRolesInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const UserRoleUpdateWithWhereUniqueWithoutRolesInputSchema: z.ZodType<Prisma.UserRoleUpdateWithWhereUniqueWithoutRolesInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateWithoutRolesInputSchema),z.lazy(() => UserRoleUncheckedUpdateWithoutRolesInputSchema) ]),
}).strict();

export const UserRoleUpdateManyWithWhereWithoutRolesInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutRolesInput> = z.object({
  where: z.lazy(() => UserRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateManyMutationInputSchema),z.lazy(() => UserRoleUncheckedUpdateManyWithoutRolesInputSchema) ]),
}).strict();

export const UserRoleScalarWhereInputSchema: z.ZodType<Prisma.UserRoleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema),z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema),z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  role_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TeamCreateWithoutTasksInputSchema: z.ZodType<Prisma.TeamCreateWithoutTasksInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutTasksInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutTasksInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutTasksInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export const UserCreateWithoutTasksInputSchema: z.ZodType<Prisma.UserCreateWithoutTasksInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  username: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email_address: z.string(),
  image_url: z.string(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutUsersInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutUsersInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutTasksInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTasksInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  username: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email_address: z.string(),
  image_url: z.string(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTasksInputSchema),z.lazy(() => UserUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export const TeamUpsertWithoutTasksInputSchema: z.ZodType<Prisma.TeamUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutTasksInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutTasksInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutTasksInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export const TeamUpdateWithoutTasksInputSchema: z.ZodType<Prisma.TeamUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutTasksInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutTasksInputSchema: z.ZodType<Prisma.UserUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTasksInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTasksInputSchema),z.lazy(() => UserUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTasksInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export const UserUpdateWithoutTasksInputSchema: z.ZodType<Prisma.UserUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutTasksInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutTeamsInputSchema: z.ZodType<Prisma.UserCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  username: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email_address: z.string(),
  image_url: z.string(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutUsersInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutUsersInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  username: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email_address: z.string(),
  image_url: z.string(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTeamsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTeamsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const RoleCreateWithoutTeamsInputSchema: z.ZodType<Prisma.RoleCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  role_name: z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),
  role_description: z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }).optional().nullable(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutRolesInputSchema).optional()
}).strict();

export const RoleUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  role_name: z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),
  role_description: z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }).optional().nullable(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutRolesInputSchema).optional()
}).strict();

export const RoleCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutTeamsInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutTeamsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const RoleCreateManyTeamsInputEnvelopeSchema: z.ZodType<Prisma.RoleCreateManyTeamsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleCreateManyTeamsInputSchema),z.lazy(() => RoleCreateManyTeamsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TaskCreateWithoutTeamsInputSchema: z.ZodType<Prisma.TaskCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  due_date: z.coerce.date().optional().nullable(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable(),
  users: z.lazy(() => UserCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();

export const TaskUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  task_creator: z.string().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable()
}).strict();

export const TaskCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutTeamsInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutTeamsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const TaskCreateManyTeamsInputEnvelopeSchema: z.ZodType<Prisma.TaskCreateManyTeamsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TaskCreateManyTeamsInputSchema),z.lazy(() => TaskCreateManyTeamsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserRoleCreateWithoutTeamsInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  roles: z.lazy(() => RoleCreateNestedOneWithoutUser_roleInputSchema).optional(),
  users: z.lazy(() => UserCreateNestedOneWithoutUser_roleInputSchema).optional()
}).strict();

export const UserRoleUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  role_id: z.string().optional().nullable()
}).strict();

export const UserRoleCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.UserRoleCreateOrConnectWithoutTeamsInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutTeamsInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const UserRoleCreateManyTeamsInputEnvelopeSchema: z.ZodType<Prisma.UserRoleCreateManyTeamsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserRoleCreateManyTeamsInputSchema),z.lazy(() => UserRoleCreateManyTeamsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserTeamCreateWithoutTeamsInputSchema: z.ZodType<Prisma.UserTeamCreateWithoutTeamsInput> = z.object({
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  id: z.string().optional(),
  users: z.lazy(() => UserCreateNestedOneWithoutUser_teamInputSchema).optional()
}).strict();

export const UserTeamUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.UserTeamUncheckedCreateWithoutTeamsInput> = z.object({
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  id: z.string().optional()
}).strict();

export const UserTeamCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.UserTeamCreateOrConnectWithoutTeamsInput> = z.object({
  where: z.lazy(() => UserTeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserTeamCreateWithoutTeamsInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const UserTeamCreateManyTeamsInputEnvelopeSchema: z.ZodType<Prisma.UserTeamCreateManyTeamsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserTeamCreateManyTeamsInputSchema),z.lazy(() => UserTeamCreateManyTeamsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutTeamsInputSchema: z.ZodType<Prisma.UserUpsertWithoutTeamsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTeamsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTeamsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeamsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTeamsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTeamsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeamsInputSchema) ]),
}).strict();

export const UserUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.UserUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const RoleUpsertWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutTeamsInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleUpdateWithoutTeamsInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutTeamsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const RoleUpdateWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutTeamsInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateWithoutTeamsInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutTeamsInputSchema) ]),
}).strict();

export const RoleUpdateManyWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutTeamsInput> = z.object({
  where: z.lazy(() => RoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateManyMutationInputSchema),z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsInputSchema) ]),
}).strict();

export const RoleScalarWhereInputSchema: z.ZodType<Prisma.RoleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  role_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role_description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TaskUpsertWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutTeamsInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskUpdateWithoutTeamsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutTeamsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const TaskUpdateWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutTeamsInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateWithoutTeamsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutTeamsInputSchema) ]),
}).strict();

export const TaskUpdateManyWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutTeamsInput> = z.object({
  where: z.lazy(() => TaskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateManyMutationInputSchema),z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsInputSchema) ]),
}).strict();

export const TaskScalarWhereInputSchema: z.ZodType<Prisma.TaskScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  task_creator: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  due_date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  task_title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  task_description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserRoleUpsertWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.UserRoleUpsertWithWhereUniqueWithoutTeamsInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserRoleUpdateWithoutTeamsInputSchema),z.lazy(() => UserRoleUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutTeamsInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const UserRoleUpdateWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.UserRoleUpdateWithWhereUniqueWithoutTeamsInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateWithoutTeamsInputSchema),z.lazy(() => UserRoleUncheckedUpdateWithoutTeamsInputSchema) ]),
}).strict();

export const UserRoleUpdateManyWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutTeamsInput> = z.object({
  where: z.lazy(() => UserRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateManyMutationInputSchema),z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsInputSchema) ]),
}).strict();

export const UserTeamUpsertWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.UserTeamUpsertWithWhereUniqueWithoutTeamsInput> = z.object({
  where: z.lazy(() => UserTeamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserTeamUpdateWithoutTeamsInputSchema),z.lazy(() => UserTeamUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => UserTeamCreateWithoutTeamsInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const UserTeamUpdateWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.UserTeamUpdateWithWhereUniqueWithoutTeamsInput> = z.object({
  where: z.lazy(() => UserTeamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserTeamUpdateWithoutTeamsInputSchema),z.lazy(() => UserTeamUncheckedUpdateWithoutTeamsInputSchema) ]),
}).strict();

export const UserTeamUpdateManyWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.UserTeamUpdateManyWithWhereWithoutTeamsInput> = z.object({
  where: z.lazy(() => UserTeamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserTeamUpdateManyMutationInputSchema),z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsInputSchema) ]),
}).strict();

export const UserTeamScalarWhereInputSchema: z.ZodType<Prisma.UserTeamScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserTeamScalarWhereInputSchema),z.lazy(() => UserTeamScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserTeamScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserTeamScalarWhereInputSchema),z.lazy(() => UserTeamScalarWhereInputSchema).array() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export const TeamCreateWithoutUser_teamInputSchema: z.ZodType<Prisma.TeamCreateWithoutUser_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutUser_teamInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutUser_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutUser_teamInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutUser_teamInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutUser_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUser_teamInputSchema) ]),
}).strict();

export const UserCreateWithoutUser_teamInputSchema: z.ZodType<Prisma.UserCreateWithoutUser_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  username: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email_address: z.string(),
  image_url: z.string(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutUsersInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutUsersInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutUser_teamInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUser_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  username: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email_address: z.string(),
  image_url: z.string(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutUser_teamInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUser_teamInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUser_teamInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_teamInputSchema) ]),
}).strict();

export const TeamUpsertWithoutUser_teamInputSchema: z.ZodType<Prisma.TeamUpsertWithoutUser_teamInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutUser_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutUser_teamInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutUser_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUser_teamInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutUser_teamInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutUser_teamInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutUser_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutUser_teamInputSchema) ]),
}).strict();

export const TeamUpdateWithoutUser_teamInputSchema: z.ZodType<Prisma.TeamUpdateWithoutUser_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutUser_teamInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutUser_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutUser_teamInputSchema: z.ZodType<Prisma.UserUpsertWithoutUser_teamInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUser_teamInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUser_teamInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUser_teamInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_teamInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutUser_teamInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUser_teamInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUser_teamInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUser_teamInputSchema) ]),
}).strict();

export const UserUpdateWithoutUser_teamInputSchema: z.ZodType<Prisma.UserUpdateWithoutUser_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutUsersNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutUser_teamInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutUser_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const TaskCreateWithoutUsersInputSchema: z.ZodType<Prisma.TaskCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  due_date: z.coerce.date().optional().nullable(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();

export const TaskUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable()
}).strict();

export const TaskCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutUsersInputSchema),z.lazy(() => TaskUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const TaskCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.TaskCreateManyUsersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TaskCreateManyUsersInputSchema),z.lazy(() => TaskCreateManyUsersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserRoleCreateWithoutUsersInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  roles: z.lazy(() => RoleCreateNestedOneWithoutUser_roleInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutUser_roleInputSchema).optional()
}).strict();

export const UserRoleUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  role_id: z.string().optional().nullable()
}).strict();

export const UserRoleCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.UserRoleCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUsersInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const UserRoleCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.UserRoleCreateManyUsersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserRoleCreateManyUsersInputSchema),z.lazy(() => UserRoleCreateManyUsersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserTeamCreateWithoutUsersInputSchema: z.ZodType<Prisma.UserTeamCreateWithoutUsersInput> = z.object({
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  id: z.string().optional(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutUser_teamInputSchema).optional()
}).strict();

export const UserTeamUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.UserTeamUncheckedCreateWithoutUsersInput> = z.object({
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  id: z.string().optional()
}).strict();

export const UserTeamCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.UserTeamCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => UserTeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserTeamCreateWithoutUsersInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const UserTeamCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.UserTeamCreateManyUsersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserTeamCreateManyUsersInputSchema),z.lazy(() => UserTeamCreateManyUsersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeamCreateWithoutUsersInputSchema: z.ZodType<Prisma.TeamCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutUsersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const TeamCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.TeamCreateManyUsersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamCreateManyUsersInputSchema),z.lazy(() => TeamCreateManyUsersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TaskUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskUpdateWithoutUsersInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutUsersInputSchema),z.lazy(() => TaskUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const TaskUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateWithoutUsersInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const TaskUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => TaskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateManyMutationInputSchema),z.lazy(() => TaskUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export const UserRoleUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.UserRoleUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserRoleUpdateWithoutUsersInputSchema),z.lazy(() => UserRoleUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUsersInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const UserRoleUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.UserRoleUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateWithoutUsersInputSchema),z.lazy(() => UserRoleUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const UserRoleUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => UserRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateManyMutationInputSchema),z.lazy(() => UserRoleUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export const UserTeamUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.UserTeamUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => UserTeamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserTeamUpdateWithoutUsersInputSchema),z.lazy(() => UserTeamUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => UserTeamCreateWithoutUsersInputSchema),z.lazy(() => UserTeamUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const UserTeamUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.UserTeamUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => UserTeamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserTeamUpdateWithoutUsersInputSchema),z.lazy(() => UserTeamUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const UserTeamUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.UserTeamUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => UserTeamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserTeamUpdateManyMutationInputSchema),z.lazy(() => UserTeamUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export const TeamUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamUpdateWithoutUsersInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutUsersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const TeamUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateWithoutUsersInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const TeamUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => TeamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateManyMutationInputSchema),z.lazy(() => TeamUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export const TeamScalarWhereInputSchema: z.ZodType<Prisma.TeamScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  team_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  creator: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const RoleCreateWithoutUser_roleInputSchema: z.ZodType<Prisma.RoleCreateWithoutUser_roleInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  role_name: z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),
  role_description: z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }).optional().nullable(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutRolesInputSchema).optional()
}).strict();

export const RoleUncheckedCreateWithoutUser_roleInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutUser_roleInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  role_name: z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),
  role_description: z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }).optional().nullable()
}).strict();

export const RoleCreateOrConnectWithoutUser_roleInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutUser_roleInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutUser_roleInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUser_roleInputSchema) ]),
}).strict();

export const TeamCreateWithoutUser_roleInputSchema: z.ZodType<Prisma.TeamCreateWithoutUser_roleInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutUser_roleInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutUser_roleInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutUser_roleInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutUser_roleInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutUser_roleInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUser_roleInputSchema) ]),
}).strict();

export const UserCreateWithoutUser_roleInputSchema: z.ZodType<Prisma.UserCreateWithoutUser_roleInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  username: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email_address: z.string(),
  image_url: z.string(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutUsersInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutUsersInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutUser_roleInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUser_roleInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  username: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email_address: z.string(),
  image_url: z.string(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutUser_roleInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUser_roleInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUser_roleInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_roleInputSchema) ]),
}).strict();

export const RoleUpsertWithoutUser_roleInputSchema: z.ZodType<Prisma.RoleUpsertWithoutUser_roleInput> = z.object({
  update: z.union([ z.lazy(() => RoleUpdateWithoutUser_roleInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUser_roleInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutUser_roleInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUser_roleInputSchema) ]),
  where: z.lazy(() => RoleWhereInputSchema).optional()
}).strict();

export const RoleUpdateToOneWithWhereWithoutUser_roleInputSchema: z.ZodType<Prisma.RoleUpdateToOneWithWhereWithoutUser_roleInput> = z.object({
  where: z.lazy(() => RoleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoleUpdateWithoutUser_roleInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUser_roleInputSchema) ]),
}).strict();

export const RoleUpdateWithoutUser_roleInputSchema: z.ZodType<Prisma.RoleUpdateWithoutUser_roleInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role_name: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role_description: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  teams: z.lazy(() => TeamUpdateOneWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateWithoutUser_roleInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutUser_roleInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role_name: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role_description: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamUpsertWithoutUser_roleInputSchema: z.ZodType<Prisma.TeamUpsertWithoutUser_roleInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutUser_roleInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutUser_roleInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutUser_roleInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUser_roleInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutUser_roleInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutUser_roleInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutUser_roleInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutUser_roleInputSchema) ]),
}).strict();

export const TeamUpdateWithoutUser_roleInputSchema: z.ZodType<Prisma.TeamUpdateWithoutUser_roleInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutUser_roleInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutUser_roleInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutUser_roleInputSchema: z.ZodType<Prisma.UserUpsertWithoutUser_roleInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUser_roleInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUser_roleInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUser_roleInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_roleInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutUser_roleInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUser_roleInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUser_roleInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUser_roleInputSchema) ]),
}).strict();

export const UserUpdateWithoutUser_roleInputSchema: z.ZodType<Prisma.UserUpdateWithoutUser_roleInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutUser_roleInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutUser_roleInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const UserRoleCreateManyRolesInputSchema: z.ZodType<Prisma.UserRoleCreateManyRolesInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable()
}).strict();

export const UserRoleUpdateWithoutRolesInputSchema: z.ZodType<Prisma.UserRoleUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUpdateOneWithoutUser_roleNestedInputSchema).optional(),
  users: z.lazy(() => UserUpdateOneWithoutUser_roleNestedInputSchema).optional()
}).strict();

export const UserRoleUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleUncheckedUpdateManyWithoutRolesInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutRolesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RoleCreateManyTeamsInputSchema: z.ZodType<Prisma.RoleCreateManyTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  role_name: z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),
  role_description: z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }).optional().nullable()
}).strict();

export const TaskCreateManyTeamsInputSchema: z.ZodType<Prisma.TaskCreateManyTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  task_creator: z.string().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable()
}).strict();

export const UserRoleCreateManyTeamsInputSchema: z.ZodType<Prisma.UserRoleCreateManyTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  role_id: z.string().optional().nullable()
}).strict();

export const UserTeamCreateManyTeamsInputSchema: z.ZodType<Prisma.UserTeamCreateManyTeamsInput> = z.object({
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  id: z.string().optional()
}).strict();

export const RoleUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.RoleUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role_name: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role_description: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role_name: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role_description: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateManyWithoutTeamsInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role_name: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role_description: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(256, { message: "please keep it under 256 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TaskUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.TaskUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  users: z.lazy(() => UserUpdateOneWithoutTasksNestedInputSchema).optional()
}).strict();

export const TaskUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TaskUncheckedUpdateManyWithoutTeamsInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.UserRoleUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUpdateOneWithoutUser_roleNestedInputSchema).optional(),
  users: z.lazy(() => UserUpdateOneWithoutUser_roleNestedInputSchema).optional()
}).strict();

export const UserRoleUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleUncheckedUpdateManyWithoutTeamsInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserTeamUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.UserTeamUpdateWithoutTeamsInput> = z.object({
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutUser_teamNestedInputSchema).optional()
}).strict();

export const UserTeamUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.UserTeamUncheckedUpdateWithoutTeamsInput> = z.object({
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserTeamUncheckedUpdateManyWithoutTeamsInputSchema: z.ZodType<Prisma.UserTeamUncheckedUpdateManyWithoutTeamsInput> = z.object({
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaskCreateManyUsersInputSchema: z.ZodType<Prisma.TaskCreateManyUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable()
}).strict();

export const UserRoleCreateManyUsersInputSchema: z.ZodType<Prisma.UserRoleCreateManyUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  role_id: z.string().optional().nullable()
}).strict();

export const UserTeamCreateManyUsersInputSchema: z.ZodType<Prisma.UserTeamCreateManyUsersInput> = z.object({
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  id: z.string().optional()
}).strict();

export const TeamCreateManyUsersInputSchema: z.ZodType<Prisma.TeamCreateManyUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." })
}).strict();

export const TaskUpdateWithoutUsersInputSchema: z.ZodType<Prisma.TaskUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  teams: z.lazy(() => TeamUpdateOneWithoutTasksNestedInputSchema).optional()
}).strict();

export const TaskUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TaskUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleUpdateWithoutUsersInputSchema: z.ZodType<Prisma.UserRoleUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUpdateOneWithoutUser_roleNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateOneWithoutUser_roleNestedInputSchema).optional()
}).strict();

export const UserRoleUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserTeamUpdateWithoutUsersInputSchema: z.ZodType<Prisma.UserTeamUpdateWithoutUsersInput> = z.object({
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUpdateOneWithoutUser_teamNestedInputSchema).optional()
}).strict();

export const UserTeamUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.UserTeamUncheckedUpdateWithoutUsersInput> = z.object({
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserTeamUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.UserTeamUncheckedUpdateManyWithoutUsersInput> = z.object({
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamUpdateWithoutUsersInputSchema: z.ZodType<Prisma.TeamUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const RoleFindFirstArgsSchema: z.ZodType<Prisma.RoleFindFirstArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema,RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoleFindFirstOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema,RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoleFindManyArgsSchema: z.ZodType<Prisma.RoleFindManyArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema,RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoleAggregateArgsSchema: z.ZodType<Prisma.RoleAggregateArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const RoleGroupByArgsSchema: z.ZodType<Prisma.RoleGroupByArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithAggregationInputSchema.array(),RoleOrderByWithAggregationInputSchema ]).optional(),
  by: RoleScalarFieldEnumSchema.array(),
  having: RoleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const RoleFindUniqueArgsSchema: z.ZodType<Prisma.RoleFindUniqueArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict() ;

export const RoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoleFindUniqueOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict() ;

export const TaskFindFirstArgsSchema: z.ZodType<Prisma.TaskFindFirstArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithRelationInputSchema.array(),TaskOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaskScalarFieldEnumSchema,TaskScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TaskFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TaskFindFirstOrThrowArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithRelationInputSchema.array(),TaskOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaskScalarFieldEnumSchema,TaskScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TaskFindManyArgsSchema: z.ZodType<Prisma.TaskFindManyArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithRelationInputSchema.array(),TaskOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaskScalarFieldEnumSchema,TaskScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TaskAggregateArgsSchema: z.ZodType<Prisma.TaskAggregateArgs> = z.object({
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithRelationInputSchema.array(),TaskOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TaskGroupByArgsSchema: z.ZodType<Prisma.TaskGroupByArgs> = z.object({
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithAggregationInputSchema.array(),TaskOrderByWithAggregationInputSchema ]).optional(),
  by: TaskScalarFieldEnumSchema.array(),
  having: TaskScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TaskFindUniqueArgsSchema: z.ZodType<Prisma.TaskFindUniqueArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereUniqueInputSchema,
}).strict() ;

export const TaskFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TaskFindUniqueOrThrowArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereUniqueInputSchema,
}).strict() ;

export const TeamFindFirstArgsSchema: z.ZodType<Prisma.TeamFindFirstArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereInputSchema.optional(),
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(),TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamScalarFieldEnumSchema,TeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TeamFindFirstOrThrowArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereInputSchema.optional(),
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(),TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamScalarFieldEnumSchema,TeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamFindManyArgsSchema: z.ZodType<Prisma.TeamFindManyArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereInputSchema.optional(),
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(),TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamScalarFieldEnumSchema,TeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamAggregateArgsSchema: z.ZodType<Prisma.TeamAggregateArgs> = z.object({
  where: TeamWhereInputSchema.optional(),
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(),TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamGroupByArgsSchema: z.ZodType<Prisma.TeamGroupByArgs> = z.object({
  where: TeamWhereInputSchema.optional(),
  orderBy: z.union([ TeamOrderByWithAggregationInputSchema.array(),TeamOrderByWithAggregationInputSchema ]).optional(),
  by: TeamScalarFieldEnumSchema.array(),
  having: TeamScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamFindUniqueArgsSchema: z.ZodType<Prisma.TeamFindUniqueArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema,
}).strict() ;

export const TeamFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TeamFindUniqueOrThrowArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema,
}).strict() ;

export const UserTeamFindFirstArgsSchema: z.ZodType<Prisma.UserTeamFindFirstArgs> = z.object({
  select: UserTeamSelectSchema.optional(),
  include: UserTeamIncludeSchema.optional(),
  where: UserTeamWhereInputSchema.optional(),
  orderBy: z.union([ UserTeamOrderByWithRelationInputSchema.array(),UserTeamOrderByWithRelationInputSchema ]).optional(),
  cursor: UserTeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserTeamScalarFieldEnumSchema,UserTeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserTeamFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserTeamFindFirstOrThrowArgs> = z.object({
  select: UserTeamSelectSchema.optional(),
  include: UserTeamIncludeSchema.optional(),
  where: UserTeamWhereInputSchema.optional(),
  orderBy: z.union([ UserTeamOrderByWithRelationInputSchema.array(),UserTeamOrderByWithRelationInputSchema ]).optional(),
  cursor: UserTeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserTeamScalarFieldEnumSchema,UserTeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserTeamFindManyArgsSchema: z.ZodType<Prisma.UserTeamFindManyArgs> = z.object({
  select: UserTeamSelectSchema.optional(),
  include: UserTeamIncludeSchema.optional(),
  where: UserTeamWhereInputSchema.optional(),
  orderBy: z.union([ UserTeamOrderByWithRelationInputSchema.array(),UserTeamOrderByWithRelationInputSchema ]).optional(),
  cursor: UserTeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserTeamScalarFieldEnumSchema,UserTeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserTeamAggregateArgsSchema: z.ZodType<Prisma.UserTeamAggregateArgs> = z.object({
  where: UserTeamWhereInputSchema.optional(),
  orderBy: z.union([ UserTeamOrderByWithRelationInputSchema.array(),UserTeamOrderByWithRelationInputSchema ]).optional(),
  cursor: UserTeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserTeamGroupByArgsSchema: z.ZodType<Prisma.UserTeamGroupByArgs> = z.object({
  where: UserTeamWhereInputSchema.optional(),
  orderBy: z.union([ UserTeamOrderByWithAggregationInputSchema.array(),UserTeamOrderByWithAggregationInputSchema ]).optional(),
  by: UserTeamScalarFieldEnumSchema.array(),
  having: UserTeamScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserTeamFindUniqueArgsSchema: z.ZodType<Prisma.UserTeamFindUniqueArgs> = z.object({
  select: UserTeamSelectSchema.optional(),
  include: UserTeamIncludeSchema.optional(),
  where: UserTeamWhereUniqueInputSchema,
}).strict() ;

export const UserTeamFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserTeamFindUniqueOrThrowArgs> = z.object({
  select: UserTeamSelectSchema.optional(),
  include: UserTeamIncludeSchema.optional(),
  where: UserTeamWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserRoleFindFirstArgsSchema: z.ZodType<Prisma.UserRoleFindFirstArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(),UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserRoleScalarFieldEnumSchema,UserRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserRoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserRoleFindFirstOrThrowArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(),UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserRoleScalarFieldEnumSchema,UserRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserRoleFindManyArgsSchema: z.ZodType<Prisma.UserRoleFindManyArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(),UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserRoleScalarFieldEnumSchema,UserRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserRoleAggregateArgsSchema: z.ZodType<Prisma.UserRoleAggregateArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(),UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserRoleGroupByArgsSchema: z.ZodType<Prisma.UserRoleGroupByArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithAggregationInputSchema.array(),UserRoleOrderByWithAggregationInputSchema ]).optional(),
  by: UserRoleScalarFieldEnumSchema.array(),
  having: UserRoleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserRoleFindUniqueArgsSchema: z.ZodType<Prisma.UserRoleFindUniqueArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereUniqueInputSchema,
}).strict() ;

export const UserRoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserRoleFindUniqueOrThrowArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereUniqueInputSchema,
}).strict() ;

export const RoleCreateArgsSchema: z.ZodType<Prisma.RoleCreateArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  data: z.union([ RoleCreateInputSchema,RoleUncheckedCreateInputSchema ]),
}).strict() ;

export const RoleUpsertArgsSchema: z.ZodType<Prisma.RoleUpsertArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
  create: z.union([ RoleCreateInputSchema,RoleUncheckedCreateInputSchema ]),
  update: z.union([ RoleUpdateInputSchema,RoleUncheckedUpdateInputSchema ]),
}).strict() ;

export const RoleCreateManyArgsSchema: z.ZodType<Prisma.RoleCreateManyArgs> = z.object({
  data: z.union([ RoleCreateManyInputSchema,RoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const RoleDeleteArgsSchema: z.ZodType<Prisma.RoleDeleteArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict() ;

export const RoleUpdateArgsSchema: z.ZodType<Prisma.RoleUpdateArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  data: z.union([ RoleUpdateInputSchema,RoleUncheckedUpdateInputSchema ]),
  where: RoleWhereUniqueInputSchema,
}).strict() ;

export const RoleUpdateManyArgsSchema: z.ZodType<Prisma.RoleUpdateManyArgs> = z.object({
  data: z.union([ RoleUpdateManyMutationInputSchema,RoleUncheckedUpdateManyInputSchema ]),
  where: RoleWhereInputSchema.optional(),
}).strict() ;

export const RoleDeleteManyArgsSchema: z.ZodType<Prisma.RoleDeleteManyArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
}).strict() ;

export const TaskCreateArgsSchema: z.ZodType<Prisma.TaskCreateArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  data: z.union([ TaskCreateInputSchema,TaskUncheckedCreateInputSchema ]),
}).strict() ;

export const TaskUpsertArgsSchema: z.ZodType<Prisma.TaskUpsertArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereUniqueInputSchema,
  create: z.union([ TaskCreateInputSchema,TaskUncheckedCreateInputSchema ]),
  update: z.union([ TaskUpdateInputSchema,TaskUncheckedUpdateInputSchema ]),
}).strict() ;

export const TaskCreateManyArgsSchema: z.ZodType<Prisma.TaskCreateManyArgs> = z.object({
  data: z.union([ TaskCreateManyInputSchema,TaskCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TaskDeleteArgsSchema: z.ZodType<Prisma.TaskDeleteArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereUniqueInputSchema,
}).strict() ;

export const TaskUpdateArgsSchema: z.ZodType<Prisma.TaskUpdateArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  data: z.union([ TaskUpdateInputSchema,TaskUncheckedUpdateInputSchema ]),
  where: TaskWhereUniqueInputSchema,
}).strict() ;

export const TaskUpdateManyArgsSchema: z.ZodType<Prisma.TaskUpdateManyArgs> = z.object({
  data: z.union([ TaskUpdateManyMutationInputSchema,TaskUncheckedUpdateManyInputSchema ]),
  where: TaskWhereInputSchema.optional(),
}).strict() ;

export const TaskDeleteManyArgsSchema: z.ZodType<Prisma.TaskDeleteManyArgs> = z.object({
  where: TaskWhereInputSchema.optional(),
}).strict() ;

export const TeamCreateArgsSchema: z.ZodType<Prisma.TeamCreateArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  data: z.union([ TeamCreateInputSchema,TeamUncheckedCreateInputSchema ]),
}).strict() ;

export const TeamUpsertArgsSchema: z.ZodType<Prisma.TeamUpsertArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema,
  create: z.union([ TeamCreateInputSchema,TeamUncheckedCreateInputSchema ]),
  update: z.union([ TeamUpdateInputSchema,TeamUncheckedUpdateInputSchema ]),
}).strict() ;

export const TeamCreateManyArgsSchema: z.ZodType<Prisma.TeamCreateManyArgs> = z.object({
  data: z.union([ TeamCreateManyInputSchema,TeamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeamDeleteArgsSchema: z.ZodType<Prisma.TeamDeleteArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema,
}).strict() ;

export const TeamUpdateArgsSchema: z.ZodType<Prisma.TeamUpdateArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  data: z.union([ TeamUpdateInputSchema,TeamUncheckedUpdateInputSchema ]),
  where: TeamWhereUniqueInputSchema,
}).strict() ;

export const TeamUpdateManyArgsSchema: z.ZodType<Prisma.TeamUpdateManyArgs> = z.object({
  data: z.union([ TeamUpdateManyMutationInputSchema,TeamUncheckedUpdateManyInputSchema ]),
  where: TeamWhereInputSchema.optional(),
}).strict() ;

export const TeamDeleteManyArgsSchema: z.ZodType<Prisma.TeamDeleteManyArgs> = z.object({
  where: TeamWhereInputSchema.optional(),
}).strict() ;

export const UserTeamCreateArgsSchema: z.ZodType<Prisma.UserTeamCreateArgs> = z.object({
  select: UserTeamSelectSchema.optional(),
  include: UserTeamIncludeSchema.optional(),
  data: z.union([ UserTeamCreateInputSchema,UserTeamUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const UserTeamUpsertArgsSchema: z.ZodType<Prisma.UserTeamUpsertArgs> = z.object({
  select: UserTeamSelectSchema.optional(),
  include: UserTeamIncludeSchema.optional(),
  where: UserTeamWhereUniqueInputSchema,
  create: z.union([ UserTeamCreateInputSchema,UserTeamUncheckedCreateInputSchema ]),
  update: z.union([ UserTeamUpdateInputSchema,UserTeamUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserTeamCreateManyArgsSchema: z.ZodType<Prisma.UserTeamCreateManyArgs> = z.object({
  data: z.union([ UserTeamCreateManyInputSchema,UserTeamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserTeamDeleteArgsSchema: z.ZodType<Prisma.UserTeamDeleteArgs> = z.object({
  select: UserTeamSelectSchema.optional(),
  include: UserTeamIncludeSchema.optional(),
  where: UserTeamWhereUniqueInputSchema,
}).strict() ;

export const UserTeamUpdateArgsSchema: z.ZodType<Prisma.UserTeamUpdateArgs> = z.object({
  select: UserTeamSelectSchema.optional(),
  include: UserTeamIncludeSchema.optional(),
  data: z.union([ UserTeamUpdateInputSchema,UserTeamUncheckedUpdateInputSchema ]),
  where: UserTeamWhereUniqueInputSchema,
}).strict() ;

export const UserTeamUpdateManyArgsSchema: z.ZodType<Prisma.UserTeamUpdateManyArgs> = z.object({
  data: z.union([ UserTeamUpdateManyMutationInputSchema,UserTeamUncheckedUpdateManyInputSchema ]),
  where: UserTeamWhereInputSchema.optional(),
}).strict() ;

export const UserTeamDeleteManyArgsSchema: z.ZodType<Prisma.UserTeamDeleteManyArgs> = z.object({
  where: UserTeamWhereInputSchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserRoleCreateArgsSchema: z.ZodType<Prisma.UserRoleCreateArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  data: z.union([ UserRoleCreateInputSchema,UserRoleUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const UserRoleUpsertArgsSchema: z.ZodType<Prisma.UserRoleUpsertArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereUniqueInputSchema,
  create: z.union([ UserRoleCreateInputSchema,UserRoleUncheckedCreateInputSchema ]),
  update: z.union([ UserRoleUpdateInputSchema,UserRoleUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserRoleCreateManyArgsSchema: z.ZodType<Prisma.UserRoleCreateManyArgs> = z.object({
  data: z.union([ UserRoleCreateManyInputSchema,UserRoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserRoleDeleteArgsSchema: z.ZodType<Prisma.UserRoleDeleteArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereUniqueInputSchema,
}).strict() ;

export const UserRoleUpdateArgsSchema: z.ZodType<Prisma.UserRoleUpdateArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  data: z.union([ UserRoleUpdateInputSchema,UserRoleUncheckedUpdateInputSchema ]),
  where: UserRoleWhereUniqueInputSchema,
}).strict() ;

export const UserRoleUpdateManyArgsSchema: z.ZodType<Prisma.UserRoleUpdateManyArgs> = z.object({
  data: z.union([ UserRoleUpdateManyMutationInputSchema,UserRoleUncheckedUpdateManyInputSchema ]),
  where: UserRoleWhereInputSchema.optional(),
}).strict() ;

export const UserRoleDeleteManyArgsSchema: z.ZodType<Prisma.UserRoleDeleteManyArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(),
}).strict() ;