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

export const TeamParentChildScalarFieldEnumSchema = z.enum(['id','created_at','updated_at','team_a','team_b','parent_team','child_team']);

export const TeamInvitesScalarFieldEnumSchema = z.enum(['id','created_at','updated_at','user_id','team_id']);

export const VisitedTeamScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','user_id','team_id']);

export const TeamActivityTypeScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','activity_type']);

export const TeamActivityScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','user_id','team_id','activity_type']);

export const CookieClickerScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','user_id','cookie_count','employee_level_1','employee_level_2','employee_level_3','employee_level_4','employee_level_5','employee_level_6']);

export const FarmingScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','userId','level','exp','money','parkPoint']);

export const FarmingTileScalarFieldEnumSchema = z.enum(['id','farmingId','x','y','cropId','plantedAt','qualityScore','lastWateredAt']);

export const FarmingParkScalarFieldEnumSchema = z.enum(['id','farmingId','parkType','level']);

export const CropScalarFieldEnumSchema = z.enum(['id','name','displayName','growTime','seedPrice','bSellPrice','aSellPrice','sSellPrice','bHarvestExp','aHarvestExp','sHarvestExp','waterScore']);

export const CropQualityScalarFieldEnumSchema = z.enum(['id','cropId','minScore','bRate','aRate','sRate']);

export const FarmingSeedScalarFieldEnumSchema = z.enum(['id','farmingId','cropId','count']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const ParkTypeSchema = z.enum(['HARVEST','QUALITY']);

export type ParkTypeType = `${z.infer<typeof ParkTypeSchema>}`

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
  due_date: z.coerce.date(),
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
// TEAM PARENT CHILD SCHEMA
/////////////////////////////////////////

export const TeamParentChildSchema = z.object({
  id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  team_a: z.string().nullable(),
  team_b: z.string().nullable(),
  parent_team: z.string().nullable(),
  child_team: z.string().nullable(),
})

export type TeamParentChild = z.infer<typeof TeamParentChildSchema>

/////////////////////////////////////////
// TEAM INVITES SCHEMA
/////////////////////////////////////////

export const TeamInvitesSchema = z.object({
  id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  user_id: z.string().nullable(),
  team_id: z.string().nullable(),
})

export type TeamInvites = z.infer<typeof TeamInvitesSchema>

/////////////////////////////////////////
// VISITED TEAM SCHEMA
/////////////////////////////////////////

export const VisitedTeamSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  user_id: z.string().nullable(),
  team_id: z.string().nullable(),
})

export type VisitedTeam = z.infer<typeof VisitedTeamSchema>

/////////////////////////////////////////
// TEAM ACTIVITY TYPE SCHEMA
/////////////////////////////////////////

export const TeamActivityTypeSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  activity_type: z.string(),
})

export type TeamActivityType = z.infer<typeof TeamActivityTypeSchema>

/////////////////////////////////////////
// TEAM ACTIVITY SCHEMA
/////////////////////////////////////////

export const TeamActivitySchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  user_id: z.string().nullable(),
  team_id: z.string().nullable(),
  activity_type: z.string().nullable(),
})

export type TeamActivity = z.infer<typeof TeamActivitySchema>

/////////////////////////////////////////
// COOKIE CLICKER SCHEMA
/////////////////////////////////////////

export const CookieClickerSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  user_id: z.string(),
  cookie_count: z.bigint(),
  employee_level_1: z.number().int(),
  employee_level_2: z.number().int(),
  employee_level_3: z.number().int(),
  employee_level_4: z.number().int(),
  employee_level_5: z.number().int(),
  employee_level_6: z.number().int(),
})

export type CookieClicker = z.infer<typeof CookieClickerSchema>

/////////////////////////////////////////
// FARMING SCHEMA
/////////////////////////////////////////

export const FarmingSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
  level: z.number().int(),
  exp: z.bigint(),
  money: z.bigint(),
  parkPoint: z.number().int(),
})

export type Farming = z.infer<typeof FarmingSchema>

/////////////////////////////////////////
// FARMING TILE SCHEMA
/////////////////////////////////////////

export const FarmingTileSchema = z.object({
  id: z.string(),
  farmingId: z.string(),
  x: z.number().int(),
  y: z.number().int(),
  cropId: z.string().nullable(),
  plantedAt: z.coerce.date().nullable(),
  qualityScore: z.number().int(),
  lastWateredAt: z.coerce.date().nullable(),
})

export type FarmingTile = z.infer<typeof FarmingTileSchema>

/////////////////////////////////////////
// FARMING PARK SCHEMA
/////////////////////////////////////////

export const FarmingParkSchema = z.object({
  parkType: ParkTypeSchema,
  id: z.string(),
  farmingId: z.string(),
  level: z.number().int(),
})

export type FarmingPark = z.infer<typeof FarmingParkSchema>

/////////////////////////////////////////
// CROP SCHEMA
/////////////////////////////////////////

export const CropSchema = z.object({
  id: z.string(),
  name: z.string(),
  displayName: z.string(),
  growTime: z.number().int(),
  seedPrice: z.number().int(),
  bSellPrice: z.number().int(),
  aSellPrice: z.number().int(),
  sSellPrice: z.number().int(),
  bHarvestExp: z.number().int(),
  aHarvestExp: z.number().int(),
  sHarvestExp: z.number().int(),
  waterScore: z.number().int(),
})

export type Crop = z.infer<typeof CropSchema>

/////////////////////////////////////////
// CROP QUALITY SCHEMA
/////////////////////////////////////////

export const CropQualitySchema = z.object({
  id: z.string(),
  cropId: z.string(),
  minScore: z.number().int(),
  bRate: z.number().int(),
  aRate: z.number().int(),
  sRate: z.number().int(),
})

export type CropQuality = z.infer<typeof CropQualitySchema>

/////////////////////////////////////////
// FARMING SEED SCHEMA
/////////////////////////////////////////

export const FarmingSeedSchema = z.object({
  id: z.string(),
  farmingId: z.string(),
  cropId: z.string(),
  count: z.number().int(),
})

export type FarmingSeed = z.infer<typeof FarmingSeedSchema>

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
  team_parent_child_team_a: z.union([z.boolean(),z.lazy(() => TeamParentChildFindManyArgsSchema)]).optional(),
  team_parent_child_team_b: z.union([z.boolean(),z.lazy(() => TeamParentChildFindManyArgsSchema)]).optional(),
  team_parent_child_parent_team: z.union([z.boolean(),z.lazy(() => TeamParentChildFindManyArgsSchema)]).optional(),
  team_parent_child_child_team: z.union([z.boolean(),z.lazy(() => TeamParentChildFindManyArgsSchema)]).optional(),
  team_invites: z.union([z.boolean(),z.lazy(() => TeamInvitesFindManyArgsSchema)]).optional(),
  visited_team: z.union([z.boolean(),z.lazy(() => VisitedTeamFindManyArgsSchema)]).optional(),
  team_activity: z.union([z.boolean(),z.lazy(() => TeamActivityFindManyArgsSchema)]).optional(),
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
  team_parent_child_team_a: z.boolean().optional(),
  team_parent_child_team_b: z.boolean().optional(),
  team_parent_child_parent_team: z.boolean().optional(),
  team_parent_child_child_team: z.boolean().optional(),
  team_invites: z.boolean().optional(),
  visited_team: z.boolean().optional(),
  team_activity: z.boolean().optional(),
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
  team_parent_child_team_a: z.union([z.boolean(),z.lazy(() => TeamParentChildFindManyArgsSchema)]).optional(),
  team_parent_child_team_b: z.union([z.boolean(),z.lazy(() => TeamParentChildFindManyArgsSchema)]).optional(),
  team_parent_child_parent_team: z.union([z.boolean(),z.lazy(() => TeamParentChildFindManyArgsSchema)]).optional(),
  team_parent_child_child_team: z.union([z.boolean(),z.lazy(() => TeamParentChildFindManyArgsSchema)]).optional(),
  team_invites: z.union([z.boolean(),z.lazy(() => TeamInvitesFindManyArgsSchema)]).optional(),
  visited_team: z.union([z.boolean(),z.lazy(() => VisitedTeamFindManyArgsSchema)]).optional(),
  team_activity: z.union([z.boolean(),z.lazy(() => TeamActivityFindManyArgsSchema)]).optional(),
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
  team_invites: z.union([z.boolean(),z.lazy(() => TeamInvitesFindManyArgsSchema)]).optional(),
  visited_team: z.union([z.boolean(),z.lazy(() => VisitedTeamFindManyArgsSchema)]).optional(),
  team_activity: z.union([z.boolean(),z.lazy(() => TeamActivityFindManyArgsSchema)]).optional(),
  cookie_clicker: z.union([z.boolean(),z.lazy(() => CookieClickerFindManyArgsSchema)]).optional(),
  farming: z.union([z.boolean(),z.lazy(() => FarmingFindManyArgsSchema)]).optional(),
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
  team_invites: z.boolean().optional(),
  visited_team: z.boolean().optional(),
  team_activity: z.boolean().optional(),
  cookie_clicker: z.boolean().optional(),
  farming: z.boolean().optional(),
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
  team_invites: z.union([z.boolean(),z.lazy(() => TeamInvitesFindManyArgsSchema)]).optional(),
  visited_team: z.union([z.boolean(),z.lazy(() => VisitedTeamFindManyArgsSchema)]).optional(),
  team_activity: z.union([z.boolean(),z.lazy(() => TeamActivityFindManyArgsSchema)]).optional(),
  cookie_clicker: z.union([z.boolean(),z.lazy(() => CookieClickerFindManyArgsSchema)]).optional(),
  farming: z.union([z.boolean(),z.lazy(() => FarmingFindManyArgsSchema)]).optional(),
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

// TEAM PARENT CHILD
//------------------------------------------------------

export const TeamParentChildIncludeSchema: z.ZodType<Prisma.TeamParentChildInclude> = z.object({
  team_parent_child_team_a: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  team_parent_child_team_b: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  team_parent_child_parent_team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  team_parent_child_child_team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
}).strict()

export const TeamParentChildArgsSchema: z.ZodType<Prisma.TeamParentChildDefaultArgs> = z.object({
  select: z.lazy(() => TeamParentChildSelectSchema).optional(),
  include: z.lazy(() => TeamParentChildIncludeSchema).optional(),
}).strict();

export const TeamParentChildSelectSchema: z.ZodType<Prisma.TeamParentChildSelect> = z.object({
  id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  team_a: z.boolean().optional(),
  team_b: z.boolean().optional(),
  parent_team: z.boolean().optional(),
  child_team: z.boolean().optional(),
  team_parent_child_team_a: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  team_parent_child_team_b: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  team_parent_child_parent_team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  team_parent_child_child_team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
}).strict()

// TEAM INVITES
//------------------------------------------------------

export const TeamInvitesIncludeSchema: z.ZodType<Prisma.TeamInvitesInclude> = z.object({
  users: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
}).strict()

export const TeamInvitesArgsSchema: z.ZodType<Prisma.TeamInvitesDefaultArgs> = z.object({
  select: z.lazy(() => TeamInvitesSelectSchema).optional(),
  include: z.lazy(() => TeamInvitesIncludeSchema).optional(),
}).strict();

export const TeamInvitesSelectSchema: z.ZodType<Prisma.TeamInvitesSelect> = z.object({
  id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  user_id: z.boolean().optional(),
  team_id: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
}).strict()

// VISITED TEAM
//------------------------------------------------------

export const VisitedTeamIncludeSchema: z.ZodType<Prisma.VisitedTeamInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
}).strict()

export const VisitedTeamArgsSchema: z.ZodType<Prisma.VisitedTeamDefaultArgs> = z.object({
  select: z.lazy(() => VisitedTeamSelectSchema).optional(),
  include: z.lazy(() => VisitedTeamIncludeSchema).optional(),
}).strict();

export const VisitedTeamSelectSchema: z.ZodType<Prisma.VisitedTeamSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user_id: z.boolean().optional(),
  team_id: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
}).strict()

// TEAM ACTIVITY TYPE
//------------------------------------------------------

export const TeamActivityTypeIncludeSchema: z.ZodType<Prisma.TeamActivityTypeInclude> = z.object({
  team_activity: z.union([z.boolean(),z.lazy(() => TeamActivityFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamActivityTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TeamActivityTypeArgsSchema: z.ZodType<Prisma.TeamActivityTypeDefaultArgs> = z.object({
  select: z.lazy(() => TeamActivityTypeSelectSchema).optional(),
  include: z.lazy(() => TeamActivityTypeIncludeSchema).optional(),
}).strict();

export const TeamActivityTypeCountOutputTypeArgsSchema: z.ZodType<Prisma.TeamActivityTypeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TeamActivityTypeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TeamActivityTypeCountOutputTypeSelectSchema: z.ZodType<Prisma.TeamActivityTypeCountOutputTypeSelect> = z.object({
  team_activity: z.boolean().optional(),
}).strict();

export const TeamActivityTypeSelectSchema: z.ZodType<Prisma.TeamActivityTypeSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  activity_type: z.boolean().optional(),
  team_activity: z.union([z.boolean(),z.lazy(() => TeamActivityFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamActivityTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TEAM ACTIVITY
//------------------------------------------------------

export const TeamActivityIncludeSchema: z.ZodType<Prisma.TeamActivityInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  team_activity_type: z.union([z.boolean(),z.lazy(() => TeamActivityTypeArgsSchema)]).optional(),
}).strict()

export const TeamActivityArgsSchema: z.ZodType<Prisma.TeamActivityDefaultArgs> = z.object({
  select: z.lazy(() => TeamActivitySelectSchema).optional(),
  include: z.lazy(() => TeamActivityIncludeSchema).optional(),
}).strict();

export const TeamActivitySelectSchema: z.ZodType<Prisma.TeamActivitySelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user_id: z.boolean().optional(),
  team_id: z.boolean().optional(),
  activity_type: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  team_activity_type: z.union([z.boolean(),z.lazy(() => TeamActivityTypeArgsSchema)]).optional(),
}).strict()

// COOKIE CLICKER
//------------------------------------------------------

export const CookieClickerIncludeSchema: z.ZodType<Prisma.CookieClickerInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const CookieClickerArgsSchema: z.ZodType<Prisma.CookieClickerDefaultArgs> = z.object({
  select: z.lazy(() => CookieClickerSelectSchema).optional(),
  include: z.lazy(() => CookieClickerIncludeSchema).optional(),
}).strict();

export const CookieClickerSelectSchema: z.ZodType<Prisma.CookieClickerSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user_id: z.boolean().optional(),
  cookie_count: z.boolean().optional(),
  employee_level_1: z.boolean().optional(),
  employee_level_2: z.boolean().optional(),
  employee_level_3: z.boolean().optional(),
  employee_level_4: z.boolean().optional(),
  employee_level_5: z.boolean().optional(),
  employee_level_6: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// FARMING
//------------------------------------------------------

export const FarmingIncludeSchema: z.ZodType<Prisma.FarmingInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tiles: z.union([z.boolean(),z.lazy(() => FarmingTileFindManyArgsSchema)]).optional(),
  parks: z.union([z.boolean(),z.lazy(() => FarmingParkFindManyArgsSchema)]).optional(),
  seeds: z.union([z.boolean(),z.lazy(() => FarmingSeedFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FarmingCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FarmingArgsSchema: z.ZodType<Prisma.FarmingDefaultArgs> = z.object({
  select: z.lazy(() => FarmingSelectSchema).optional(),
  include: z.lazy(() => FarmingIncludeSchema).optional(),
}).strict();

export const FarmingCountOutputTypeArgsSchema: z.ZodType<Prisma.FarmingCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => FarmingCountOutputTypeSelectSchema).nullish(),
}).strict();

export const FarmingCountOutputTypeSelectSchema: z.ZodType<Prisma.FarmingCountOutputTypeSelect> = z.object({
  tiles: z.boolean().optional(),
  parks: z.boolean().optional(),
  seeds: z.boolean().optional(),
}).strict();

export const FarmingSelectSchema: z.ZodType<Prisma.FarmingSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  level: z.boolean().optional(),
  exp: z.boolean().optional(),
  money: z.boolean().optional(),
  parkPoint: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tiles: z.union([z.boolean(),z.lazy(() => FarmingTileFindManyArgsSchema)]).optional(),
  parks: z.union([z.boolean(),z.lazy(() => FarmingParkFindManyArgsSchema)]).optional(),
  seeds: z.union([z.boolean(),z.lazy(() => FarmingSeedFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FarmingCountOutputTypeArgsSchema)]).optional(),
}).strict()

// FARMING TILE
//------------------------------------------------------

export const FarmingTileIncludeSchema: z.ZodType<Prisma.FarmingTileInclude> = z.object({
  farming: z.union([z.boolean(),z.lazy(() => FarmingArgsSchema)]).optional(),
  crop: z.union([z.boolean(),z.lazy(() => CropArgsSchema)]).optional(),
}).strict()

export const FarmingTileArgsSchema: z.ZodType<Prisma.FarmingTileDefaultArgs> = z.object({
  select: z.lazy(() => FarmingTileSelectSchema).optional(),
  include: z.lazy(() => FarmingTileIncludeSchema).optional(),
}).strict();

export const FarmingTileSelectSchema: z.ZodType<Prisma.FarmingTileSelect> = z.object({
  id: z.boolean().optional(),
  farmingId: z.boolean().optional(),
  x: z.boolean().optional(),
  y: z.boolean().optional(),
  cropId: z.boolean().optional(),
  plantedAt: z.boolean().optional(),
  qualityScore: z.boolean().optional(),
  lastWateredAt: z.boolean().optional(),
  farming: z.union([z.boolean(),z.lazy(() => FarmingArgsSchema)]).optional(),
  crop: z.union([z.boolean(),z.lazy(() => CropArgsSchema)]).optional(),
}).strict()

// FARMING PARK
//------------------------------------------------------

export const FarmingParkIncludeSchema: z.ZodType<Prisma.FarmingParkInclude> = z.object({
  farming: z.union([z.boolean(),z.lazy(() => FarmingArgsSchema)]).optional(),
}).strict()

export const FarmingParkArgsSchema: z.ZodType<Prisma.FarmingParkDefaultArgs> = z.object({
  select: z.lazy(() => FarmingParkSelectSchema).optional(),
  include: z.lazy(() => FarmingParkIncludeSchema).optional(),
}).strict();

export const FarmingParkSelectSchema: z.ZodType<Prisma.FarmingParkSelect> = z.object({
  id: z.boolean().optional(),
  farmingId: z.boolean().optional(),
  parkType: z.boolean().optional(),
  level: z.boolean().optional(),
  farming: z.union([z.boolean(),z.lazy(() => FarmingArgsSchema)]).optional(),
}).strict()

// CROP
//------------------------------------------------------

export const CropIncludeSchema: z.ZodType<Prisma.CropInclude> = z.object({
  tiles: z.union([z.boolean(),z.lazy(() => FarmingTileFindManyArgsSchema)]).optional(),
  rates: z.union([z.boolean(),z.lazy(() => CropQualityFindManyArgsSchema)]).optional(),
  seeds: z.union([z.boolean(),z.lazy(() => FarmingSeedFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CropCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CropArgsSchema: z.ZodType<Prisma.CropDefaultArgs> = z.object({
  select: z.lazy(() => CropSelectSchema).optional(),
  include: z.lazy(() => CropIncludeSchema).optional(),
}).strict();

export const CropCountOutputTypeArgsSchema: z.ZodType<Prisma.CropCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CropCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CropCountOutputTypeSelectSchema: z.ZodType<Prisma.CropCountOutputTypeSelect> = z.object({
  tiles: z.boolean().optional(),
  rates: z.boolean().optional(),
  seeds: z.boolean().optional(),
}).strict();

export const CropSelectSchema: z.ZodType<Prisma.CropSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  displayName: z.boolean().optional(),
  growTime: z.boolean().optional(),
  seedPrice: z.boolean().optional(),
  bSellPrice: z.boolean().optional(),
  aSellPrice: z.boolean().optional(),
  sSellPrice: z.boolean().optional(),
  bHarvestExp: z.boolean().optional(),
  aHarvestExp: z.boolean().optional(),
  sHarvestExp: z.boolean().optional(),
  waterScore: z.boolean().optional(),
  tiles: z.union([z.boolean(),z.lazy(() => FarmingTileFindManyArgsSchema)]).optional(),
  rates: z.union([z.boolean(),z.lazy(() => CropQualityFindManyArgsSchema)]).optional(),
  seeds: z.union([z.boolean(),z.lazy(() => FarmingSeedFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CropCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CROP QUALITY
//------------------------------------------------------

export const CropQualityIncludeSchema: z.ZodType<Prisma.CropQualityInclude> = z.object({
  crop: z.union([z.boolean(),z.lazy(() => CropArgsSchema)]).optional(),
}).strict()

export const CropQualityArgsSchema: z.ZodType<Prisma.CropQualityDefaultArgs> = z.object({
  select: z.lazy(() => CropQualitySelectSchema).optional(),
  include: z.lazy(() => CropQualityIncludeSchema).optional(),
}).strict();

export const CropQualitySelectSchema: z.ZodType<Prisma.CropQualitySelect> = z.object({
  id: z.boolean().optional(),
  cropId: z.boolean().optional(),
  minScore: z.boolean().optional(),
  bRate: z.boolean().optional(),
  aRate: z.boolean().optional(),
  sRate: z.boolean().optional(),
  crop: z.union([z.boolean(),z.lazy(() => CropArgsSchema)]).optional(),
}).strict()

// FARMING SEED
//------------------------------------------------------

export const FarmingSeedIncludeSchema: z.ZodType<Prisma.FarmingSeedInclude> = z.object({
  farming: z.union([z.boolean(),z.lazy(() => FarmingArgsSchema)]).optional(),
  crop: z.union([z.boolean(),z.lazy(() => CropArgsSchema)]).optional(),
}).strict()

export const FarmingSeedArgsSchema: z.ZodType<Prisma.FarmingSeedDefaultArgs> = z.object({
  select: z.lazy(() => FarmingSeedSelectSchema).optional(),
  include: z.lazy(() => FarmingSeedIncludeSchema).optional(),
}).strict();

export const FarmingSeedSelectSchema: z.ZodType<Prisma.FarmingSeedSelect> = z.object({
  id: z.boolean().optional(),
  farmingId: z.boolean().optional(),
  cropId: z.boolean().optional(),
  count: z.boolean().optional(),
  farming: z.union([z.boolean(),z.lazy(() => FarmingArgsSchema)]).optional(),
  crop: z.union([z.boolean(),z.lazy(() => CropArgsSchema)]).optional(),
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
  due_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
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
  due_date: z.lazy(() => SortOrderSchema).optional(),
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
  due_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
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
  due_date: z.lazy(() => SortOrderSchema).optional(),
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
  due_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
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
  user_team: z.lazy(() => UserTeamListRelationFilterSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildListRelationFilterSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildListRelationFilterSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildListRelationFilterSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildListRelationFilterSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesListRelationFilterSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamListRelationFilterSchema).optional(),
  team_activity: z.lazy(() => TeamActivityListRelationFilterSchema).optional()
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
  user_team: z.lazy(() => UserTeamOrderByRelationAggregateInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildOrderByRelationAggregateInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildOrderByRelationAggregateInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildOrderByRelationAggregateInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildOrderByRelationAggregateInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesOrderByRelationAggregateInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamOrderByRelationAggregateInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityOrderByRelationAggregateInputSchema).optional()
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
  user_team: z.lazy(() => UserTeamListRelationFilterSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildListRelationFilterSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildListRelationFilterSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildListRelationFilterSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildListRelationFilterSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesListRelationFilterSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamListRelationFilterSchema).optional(),
  team_activity: z.lazy(() => TeamActivityListRelationFilterSchema).optional()
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

export const UserTeamWhereUniqueInputSchema: z.ZodType<Prisma.UserTeamWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    user_id_team_id: z.lazy(() => UserTeamUser_idTeam_idCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    user_id_team_id: z.lazy(() => UserTeamUser_idTeam_idCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  user_id_team_id: z.lazy(() => UserTeamUser_idTeam_idCompoundUniqueInputSchema).optional(),
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
  teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesListRelationFilterSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamListRelationFilterSchema).optional(),
  team_activity: z.lazy(() => TeamActivityListRelationFilterSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerListRelationFilterSchema).optional(),
  farming: z.lazy(() => FarmingListRelationFilterSchema).optional()
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
  teams: z.lazy(() => TeamOrderByRelationAggregateInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesOrderByRelationAggregateInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamOrderByRelationAggregateInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityOrderByRelationAggregateInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerOrderByRelationAggregateInputSchema).optional(),
  farming: z.lazy(() => FarmingOrderByRelationAggregateInputSchema).optional()
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
  teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesListRelationFilterSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamListRelationFilterSchema).optional(),
  team_activity: z.lazy(() => TeamActivityListRelationFilterSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerListRelationFilterSchema).optional(),
  farming: z.lazy(() => FarmingListRelationFilterSchema).optional()
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

export const TeamParentChildWhereInputSchema: z.ZodType<Prisma.TeamParentChildWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamParentChildWhereInputSchema),z.lazy(() => TeamParentChildWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamParentChildWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamParentChildWhereInputSchema),z.lazy(() => TeamParentChildWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  team_a: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_b: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  parent_team: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  child_team: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_parent_child_team_a: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  team_parent_child_team_b: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  team_parent_child_parent_team: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  team_parent_child_child_team: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
}).strict();

export const TeamParentChildOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamParentChildOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_a: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_b: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parent_team: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  child_team: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_parent_child_team_a: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional()
}).strict();

export const TeamParentChildWhereUniqueInputSchema: z.ZodType<Prisma.TeamParentChildWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    team_a_team_b: z.lazy(() => TeamParentChildTeam_aTeam_bCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    team_a_team_b: z.lazy(() => TeamParentChildTeam_aTeam_bCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  team_a_team_b: z.lazy(() => TeamParentChildTeam_aTeam_bCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TeamParentChildWhereInputSchema),z.lazy(() => TeamParentChildWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamParentChildWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamParentChildWhereInputSchema),z.lazy(() => TeamParentChildWhereInputSchema).array() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  team_a: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_b: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  parent_team: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  child_team: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_parent_child_team_a: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  team_parent_child_team_b: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  team_parent_child_parent_team: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  team_parent_child_child_team: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
}).strict());

export const TeamParentChildOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamParentChildOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_a: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_b: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parent_team: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  child_team: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => TeamParentChildCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamParentChildMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamParentChildMinOrderByAggregateInputSchema).optional()
}).strict();

export const TeamParentChildScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamParentChildScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TeamParentChildScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamParentChildScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamParentChildScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamParentChildScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamParentChildScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  team_a: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  team_b: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  parent_team: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  child_team: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TeamInvitesWhereInputSchema: z.ZodType<Prisma.TeamInvitesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamInvitesWhereInputSchema),z.lazy(() => TeamInvitesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamInvitesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamInvitesWhereInputSchema),z.lazy(() => TeamInvitesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  users: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  teams: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
}).strict();

export const TeamInvitesOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamInvitesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  users: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  teams: z.lazy(() => TeamOrderByWithRelationInputSchema).optional()
}).strict();

export const TeamInvitesWhereUniqueInputSchema: z.ZodType<Prisma.TeamInvitesWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    user_id_team_id: z.lazy(() => TeamInvitesUser_idTeam_idCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    user_id_team_id: z.lazy(() => TeamInvitesUser_idTeam_idCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  user_id_team_id: z.lazy(() => TeamInvitesUser_idTeam_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TeamInvitesWhereInputSchema),z.lazy(() => TeamInvitesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamInvitesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamInvitesWhereInputSchema),z.lazy(() => TeamInvitesWhereInputSchema).array() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  users: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  teams: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
}).strict());

export const TeamInvitesOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamInvitesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => TeamInvitesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamInvitesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamInvitesMinOrderByAggregateInputSchema).optional()
}).strict();

export const TeamInvitesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamInvitesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TeamInvitesScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamInvitesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamInvitesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamInvitesScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamInvitesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const VisitedTeamWhereInputSchema: z.ZodType<Prisma.VisitedTeamWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VisitedTeamWhereInputSchema),z.lazy(() => VisitedTeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisitedTeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisitedTeamWhereInputSchema),z.lazy(() => VisitedTeamWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  team: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
}).strict();

export const VisitedTeamOrderByWithRelationInputSchema: z.ZodType<Prisma.VisitedTeamOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional()
}).strict();

export const VisitedTeamWhereUniqueInputSchema: z.ZodType<Prisma.VisitedTeamWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    user_id_team_id: z.lazy(() => VisitedTeamUser_idTeam_idCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    user_id_team_id: z.lazy(() => VisitedTeamUser_idTeam_idCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  user_id_team_id: z.lazy(() => VisitedTeamUser_idTeam_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VisitedTeamWhereInputSchema),z.lazy(() => VisitedTeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisitedTeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisitedTeamWhereInputSchema),z.lazy(() => VisitedTeamWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  team: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
}).strict());

export const VisitedTeamOrderByWithAggregationInputSchema: z.ZodType<Prisma.VisitedTeamOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => VisitedTeamCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VisitedTeamMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VisitedTeamMinOrderByAggregateInputSchema).optional()
}).strict();

export const VisitedTeamScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VisitedTeamScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VisitedTeamScalarWhereWithAggregatesInputSchema),z.lazy(() => VisitedTeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisitedTeamScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisitedTeamScalarWhereWithAggregatesInputSchema),z.lazy(() => VisitedTeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TeamActivityTypeWhereInputSchema: z.ZodType<Prisma.TeamActivityTypeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamActivityTypeWhereInputSchema),z.lazy(() => TeamActivityTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamActivityTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamActivityTypeWhereInputSchema),z.lazy(() => TeamActivityTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  activity_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  team_activity: z.lazy(() => TeamActivityListRelationFilterSchema).optional()
}).strict();

export const TeamActivityTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamActivityTypeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  activity_type: z.lazy(() => SortOrderSchema).optional(),
  team_activity: z.lazy(() => TeamActivityOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TeamActivityTypeWhereUniqueInputSchema: z.ZodType<Prisma.TeamActivityTypeWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    activity_type: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    activity_type: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  activity_type: z.string().optional(),
  AND: z.union([ z.lazy(() => TeamActivityTypeWhereInputSchema),z.lazy(() => TeamActivityTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamActivityTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamActivityTypeWhereInputSchema),z.lazy(() => TeamActivityTypeWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  team_activity: z.lazy(() => TeamActivityListRelationFilterSchema).optional()
}).strict());

export const TeamActivityTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamActivityTypeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  activity_type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TeamActivityTypeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamActivityTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamActivityTypeMinOrderByAggregateInputSchema).optional()
}).strict();

export const TeamActivityTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamActivityTypeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TeamActivityTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamActivityTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamActivityTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamActivityTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamActivityTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  activity_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const TeamActivityWhereInputSchema: z.ZodType<Prisma.TeamActivityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamActivityWhereInputSchema),z.lazy(() => TeamActivityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamActivityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamActivityWhereInputSchema),z.lazy(() => TeamActivityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  activity_type: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  team: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  team_activity_type: z.union([ z.lazy(() => TeamActivityTypeNullableRelationFilterSchema),z.lazy(() => TeamActivityTypeWhereInputSchema) ]).optional().nullable(),
}).strict();

export const TeamActivityOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamActivityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  activity_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  team_activity_type: z.lazy(() => TeamActivityTypeOrderByWithRelationInputSchema).optional()
}).strict();

export const TeamActivityWhereUniqueInputSchema: z.ZodType<Prisma.TeamActivityWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TeamActivityWhereInputSchema),z.lazy(() => TeamActivityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamActivityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamActivityWhereInputSchema),z.lazy(() => TeamActivityWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  activity_type: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  team: z.union([ z.lazy(() => TeamNullableRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  team_activity_type: z.union([ z.lazy(() => TeamActivityTypeNullableRelationFilterSchema),z.lazy(() => TeamActivityTypeWhereInputSchema) ]).optional().nullable(),
}).strict());

export const TeamActivityOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamActivityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  activity_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => TeamActivityCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamActivityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamActivityMinOrderByAggregateInputSchema).optional()
}).strict();

export const TeamActivityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamActivityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TeamActivityScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamActivityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamActivityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamActivityScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamActivityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  activity_type: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CookieClickerWhereInputSchema: z.ZodType<Prisma.CookieClickerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CookieClickerWhereInputSchema),z.lazy(() => CookieClickerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CookieClickerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CookieClickerWhereInputSchema),z.lazy(() => CookieClickerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  cookie_count: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  employee_level_1: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  employee_level_2: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  employee_level_3: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  employee_level_4: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  employee_level_5: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  employee_level_6: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const CookieClickerOrderByWithRelationInputSchema: z.ZodType<Prisma.CookieClickerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  cookie_count: z.lazy(() => SortOrderSchema).optional(),
  employee_level_1: z.lazy(() => SortOrderSchema).optional(),
  employee_level_2: z.lazy(() => SortOrderSchema).optional(),
  employee_level_3: z.lazy(() => SortOrderSchema).optional(),
  employee_level_4: z.lazy(() => SortOrderSchema).optional(),
  employee_level_5: z.lazy(() => SortOrderSchema).optional(),
  employee_level_6: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const CookieClickerWhereUniqueInputSchema: z.ZodType<Prisma.CookieClickerWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    user_id: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    user_id: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  user_id: z.string().optional(),
  AND: z.union([ z.lazy(() => CookieClickerWhereInputSchema),z.lazy(() => CookieClickerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CookieClickerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CookieClickerWhereInputSchema),z.lazy(() => CookieClickerWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  cookie_count: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  employee_level_1: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  employee_level_2: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  employee_level_3: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  employee_level_4: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  employee_level_5: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  employee_level_6: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export const CookieClickerOrderByWithAggregationInputSchema: z.ZodType<Prisma.CookieClickerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  cookie_count: z.lazy(() => SortOrderSchema).optional(),
  employee_level_1: z.lazy(() => SortOrderSchema).optional(),
  employee_level_2: z.lazy(() => SortOrderSchema).optional(),
  employee_level_3: z.lazy(() => SortOrderSchema).optional(),
  employee_level_4: z.lazy(() => SortOrderSchema).optional(),
  employee_level_5: z.lazy(() => SortOrderSchema).optional(),
  employee_level_6: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CookieClickerCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CookieClickerAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CookieClickerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CookieClickerMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CookieClickerSumOrderByAggregateInputSchema).optional()
}).strict();

export const CookieClickerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CookieClickerScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CookieClickerScalarWhereWithAggregatesInputSchema),z.lazy(() => CookieClickerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CookieClickerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CookieClickerScalarWhereWithAggregatesInputSchema),z.lazy(() => CookieClickerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  cookie_count: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  employee_level_1: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  employee_level_2: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  employee_level_3: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  employee_level_4: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  employee_level_5: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  employee_level_6: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const FarmingWhereInputSchema: z.ZodType<Prisma.FarmingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingWhereInputSchema),z.lazy(() => FarmingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingWhereInputSchema),z.lazy(() => FarmingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  exp: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  money: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  parkPoint: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileListRelationFilterSchema).optional(),
  parks: z.lazy(() => FarmingParkListRelationFilterSchema).optional(),
  seeds: z.lazy(() => FarmingSeedListRelationFilterSchema).optional()
}).strict();

export const FarmingOrderByWithRelationInputSchema: z.ZodType<Prisma.FarmingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  exp: z.lazy(() => SortOrderSchema).optional(),
  money: z.lazy(() => SortOrderSchema).optional(),
  parkPoint: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  tiles: z.lazy(() => FarmingTileOrderByRelationAggregateInputSchema).optional(),
  parks: z.lazy(() => FarmingParkOrderByRelationAggregateInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedOrderByRelationAggregateInputSchema).optional()
}).strict();

export const FarmingWhereUniqueInputSchema: z.ZodType<Prisma.FarmingWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => FarmingWhereInputSchema),z.lazy(() => FarmingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingWhereInputSchema),z.lazy(() => FarmingWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  level: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  exp: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  money: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  parkPoint: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileListRelationFilterSchema).optional(),
  parks: z.lazy(() => FarmingParkListRelationFilterSchema).optional(),
  seeds: z.lazy(() => FarmingSeedListRelationFilterSchema).optional()
}).strict());

export const FarmingOrderByWithAggregationInputSchema: z.ZodType<Prisma.FarmingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  exp: z.lazy(() => SortOrderSchema).optional(),
  money: z.lazy(() => SortOrderSchema).optional(),
  parkPoint: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FarmingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FarmingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FarmingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FarmingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FarmingSumOrderByAggregateInputSchema).optional()
}).strict();

export const FarmingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FarmingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingScalarWhereWithAggregatesInputSchema),z.lazy(() => FarmingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingScalarWhereWithAggregatesInputSchema),z.lazy(() => FarmingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  level: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  exp: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  money: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  parkPoint: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const FarmingTileWhereInputSchema: z.ZodType<Prisma.FarmingTileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingTileWhereInputSchema),z.lazy(() => FarmingTileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingTileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingTileWhereInputSchema),z.lazy(() => FarmingTileWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  x: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  y: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  plantedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  qualityScore: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  lastWateredAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  farming: z.union([ z.lazy(() => FarmingRelationFilterSchema),z.lazy(() => FarmingWhereInputSchema) ]).optional(),
  crop: z.union([ z.lazy(() => CropNullableRelationFilterSchema),z.lazy(() => CropWhereInputSchema) ]).optional().nullable(),
}).strict();

export const FarmingTileOrderByWithRelationInputSchema: z.ZodType<Prisma.FarmingTileOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  x: z.lazy(() => SortOrderSchema).optional(),
  y: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  plantedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  qualityScore: z.lazy(() => SortOrderSchema).optional(),
  lastWateredAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  farming: z.lazy(() => FarmingOrderByWithRelationInputSchema).optional(),
  crop: z.lazy(() => CropOrderByWithRelationInputSchema).optional()
}).strict();

export const FarmingTileWhereUniqueInputSchema: z.ZodType<Prisma.FarmingTileWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    farmingId_x_y: z.lazy(() => FarmingTileFarmingIdXYCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    farmingId_x_y: z.lazy(() => FarmingTileFarmingIdXYCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  farmingId_x_y: z.lazy(() => FarmingTileFarmingIdXYCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => FarmingTileWhereInputSchema),z.lazy(() => FarmingTileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingTileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingTileWhereInputSchema),z.lazy(() => FarmingTileWhereInputSchema).array() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  x: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  y: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  plantedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  qualityScore: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  lastWateredAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  farming: z.union([ z.lazy(() => FarmingRelationFilterSchema),z.lazy(() => FarmingWhereInputSchema) ]).optional(),
  crop: z.union([ z.lazy(() => CropNullableRelationFilterSchema),z.lazy(() => CropWhereInputSchema) ]).optional().nullable(),
}).strict());

export const FarmingTileOrderByWithAggregationInputSchema: z.ZodType<Prisma.FarmingTileOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  x: z.lazy(() => SortOrderSchema).optional(),
  y: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  plantedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  qualityScore: z.lazy(() => SortOrderSchema).optional(),
  lastWateredAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => FarmingTileCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FarmingTileAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FarmingTileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FarmingTileMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FarmingTileSumOrderByAggregateInputSchema).optional()
}).strict();

export const FarmingTileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FarmingTileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingTileScalarWhereWithAggregatesInputSchema),z.lazy(() => FarmingTileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingTileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingTileScalarWhereWithAggregatesInputSchema),z.lazy(() => FarmingTileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  x: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  y: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  plantedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  qualityScore: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  lastWateredAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const FarmingParkWhereInputSchema: z.ZodType<Prisma.FarmingParkWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingParkWhereInputSchema),z.lazy(() => FarmingParkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingParkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingParkWhereInputSchema),z.lazy(() => FarmingParkWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  parkType: z.union([ z.lazy(() => EnumParkTypeFilterSchema),z.lazy(() => ParkTypeSchema) ]).optional(),
  level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  farming: z.union([ z.lazy(() => FarmingRelationFilterSchema),z.lazy(() => FarmingWhereInputSchema) ]).optional(),
}).strict();

export const FarmingParkOrderByWithRelationInputSchema: z.ZodType<Prisma.FarmingParkOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  parkType: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  farming: z.lazy(() => FarmingOrderByWithRelationInputSchema).optional()
}).strict();

export const FarmingParkWhereUniqueInputSchema: z.ZodType<Prisma.FarmingParkWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    farmingId_parkType: z.lazy(() => FarmingParkFarmingIdParkTypeCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    farmingId_parkType: z.lazy(() => FarmingParkFarmingIdParkTypeCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  farmingId_parkType: z.lazy(() => FarmingParkFarmingIdParkTypeCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => FarmingParkWhereInputSchema),z.lazy(() => FarmingParkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingParkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingParkWhereInputSchema),z.lazy(() => FarmingParkWhereInputSchema).array() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  parkType: z.union([ z.lazy(() => EnumParkTypeFilterSchema),z.lazy(() => ParkTypeSchema) ]).optional(),
  level: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  farming: z.union([ z.lazy(() => FarmingRelationFilterSchema),z.lazy(() => FarmingWhereInputSchema) ]).optional(),
}).strict());

export const FarmingParkOrderByWithAggregationInputSchema: z.ZodType<Prisma.FarmingParkOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  parkType: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FarmingParkCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FarmingParkAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FarmingParkMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FarmingParkMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FarmingParkSumOrderByAggregateInputSchema).optional()
}).strict();

export const FarmingParkScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FarmingParkScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingParkScalarWhereWithAggregatesInputSchema),z.lazy(() => FarmingParkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingParkScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingParkScalarWhereWithAggregatesInputSchema),z.lazy(() => FarmingParkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  parkType: z.union([ z.lazy(() => EnumParkTypeWithAggregatesFilterSchema),z.lazy(() => ParkTypeSchema) ]).optional(),
  level: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const CropWhereInputSchema: z.ZodType<Prisma.CropWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CropWhereInputSchema),z.lazy(() => CropWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CropWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CropWhereInputSchema),z.lazy(() => CropWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  displayName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  growTime: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  seedPrice: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bSellPrice: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  aSellPrice: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sSellPrice: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bHarvestExp: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  aHarvestExp: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sHarvestExp: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  waterScore: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tiles: z.lazy(() => FarmingTileListRelationFilterSchema).optional(),
  rates: z.lazy(() => CropQualityListRelationFilterSchema).optional(),
  seeds: z.lazy(() => FarmingSeedListRelationFilterSchema).optional()
}).strict();

export const CropOrderByWithRelationInputSchema: z.ZodType<Prisma.CropOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  displayName: z.lazy(() => SortOrderSchema).optional(),
  growTime: z.lazy(() => SortOrderSchema).optional(),
  seedPrice: z.lazy(() => SortOrderSchema).optional(),
  bSellPrice: z.lazy(() => SortOrderSchema).optional(),
  aSellPrice: z.lazy(() => SortOrderSchema).optional(),
  sSellPrice: z.lazy(() => SortOrderSchema).optional(),
  bHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  aHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  sHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  waterScore: z.lazy(() => SortOrderSchema).optional(),
  tiles: z.lazy(() => FarmingTileOrderByRelationAggregateInputSchema).optional(),
  rates: z.lazy(() => CropQualityOrderByRelationAggregateInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CropWhereUniqueInputSchema: z.ZodType<Prisma.CropWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    name: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => CropWhereInputSchema),z.lazy(() => CropWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CropWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CropWhereInputSchema),z.lazy(() => CropWhereInputSchema).array() ]).optional(),
  displayName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  growTime: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  seedPrice: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  bSellPrice: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  aSellPrice: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  sSellPrice: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  bHarvestExp: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  aHarvestExp: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  sHarvestExp: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  waterScore: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  tiles: z.lazy(() => FarmingTileListRelationFilterSchema).optional(),
  rates: z.lazy(() => CropQualityListRelationFilterSchema).optional(),
  seeds: z.lazy(() => FarmingSeedListRelationFilterSchema).optional()
}).strict());

export const CropOrderByWithAggregationInputSchema: z.ZodType<Prisma.CropOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  displayName: z.lazy(() => SortOrderSchema).optional(),
  growTime: z.lazy(() => SortOrderSchema).optional(),
  seedPrice: z.lazy(() => SortOrderSchema).optional(),
  bSellPrice: z.lazy(() => SortOrderSchema).optional(),
  aSellPrice: z.lazy(() => SortOrderSchema).optional(),
  sSellPrice: z.lazy(() => SortOrderSchema).optional(),
  bHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  aHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  sHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  waterScore: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CropCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CropAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CropMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CropMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CropSumOrderByAggregateInputSchema).optional()
}).strict();

export const CropScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CropScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CropScalarWhereWithAggregatesInputSchema),z.lazy(() => CropScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CropScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CropScalarWhereWithAggregatesInputSchema),z.lazy(() => CropScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  displayName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  growTime: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  seedPrice: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  bSellPrice: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  aSellPrice: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sSellPrice: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  bHarvestExp: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  aHarvestExp: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sHarvestExp: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  waterScore: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const CropQualityWhereInputSchema: z.ZodType<Prisma.CropQualityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CropQualityWhereInputSchema),z.lazy(() => CropQualityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CropQualityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CropQualityWhereInputSchema),z.lazy(() => CropQualityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  minScore: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bRate: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  aRate: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sRate: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  crop: z.union([ z.lazy(() => CropRelationFilterSchema),z.lazy(() => CropWhereInputSchema) ]).optional(),
}).strict();

export const CropQualityOrderByWithRelationInputSchema: z.ZodType<Prisma.CropQualityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  minScore: z.lazy(() => SortOrderSchema).optional(),
  bRate: z.lazy(() => SortOrderSchema).optional(),
  aRate: z.lazy(() => SortOrderSchema).optional(),
  sRate: z.lazy(() => SortOrderSchema).optional(),
  crop: z.lazy(() => CropOrderByWithRelationInputSchema).optional()
}).strict();

export const CropQualityWhereUniqueInputSchema: z.ZodType<Prisma.CropQualityWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    cropId_minScore: z.lazy(() => CropQualityCropIdMinScoreCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    cropId_minScore: z.lazy(() => CropQualityCropIdMinScoreCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  cropId_minScore: z.lazy(() => CropQualityCropIdMinScoreCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => CropQualityWhereInputSchema),z.lazy(() => CropQualityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CropQualityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CropQualityWhereInputSchema),z.lazy(() => CropQualityWhereInputSchema).array() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  minScore: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  bRate: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  aRate: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  sRate: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  crop: z.union([ z.lazy(() => CropRelationFilterSchema),z.lazy(() => CropWhereInputSchema) ]).optional(),
}).strict());

export const CropQualityOrderByWithAggregationInputSchema: z.ZodType<Prisma.CropQualityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  minScore: z.lazy(() => SortOrderSchema).optional(),
  bRate: z.lazy(() => SortOrderSchema).optional(),
  aRate: z.lazy(() => SortOrderSchema).optional(),
  sRate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CropQualityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CropQualityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CropQualityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CropQualityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CropQualitySumOrderByAggregateInputSchema).optional()
}).strict();

export const CropQualityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CropQualityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CropQualityScalarWhereWithAggregatesInputSchema),z.lazy(() => CropQualityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CropQualityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CropQualityScalarWhereWithAggregatesInputSchema),z.lazy(() => CropQualityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  minScore: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  bRate: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  aRate: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sRate: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const FarmingSeedWhereInputSchema: z.ZodType<Prisma.FarmingSeedWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingSeedWhereInputSchema),z.lazy(() => FarmingSeedWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingSeedWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingSeedWhereInputSchema),z.lazy(() => FarmingSeedWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  count: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  farming: z.union([ z.lazy(() => FarmingRelationFilterSchema),z.lazy(() => FarmingWhereInputSchema) ]).optional(),
  crop: z.union([ z.lazy(() => CropRelationFilterSchema),z.lazy(() => CropWhereInputSchema) ]).optional(),
}).strict();

export const FarmingSeedOrderByWithRelationInputSchema: z.ZodType<Prisma.FarmingSeedOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  farming: z.lazy(() => FarmingOrderByWithRelationInputSchema).optional(),
  crop: z.lazy(() => CropOrderByWithRelationInputSchema).optional()
}).strict();

export const FarmingSeedWhereUniqueInputSchema: z.ZodType<Prisma.FarmingSeedWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    farmingId_cropId: z.lazy(() => FarmingSeedFarmingIdCropIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    farmingId_cropId: z.lazy(() => FarmingSeedFarmingIdCropIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  farmingId_cropId: z.lazy(() => FarmingSeedFarmingIdCropIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => FarmingSeedWhereInputSchema),z.lazy(() => FarmingSeedWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingSeedWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingSeedWhereInputSchema),z.lazy(() => FarmingSeedWhereInputSchema).array() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  count: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  farming: z.union([ z.lazy(() => FarmingRelationFilterSchema),z.lazy(() => FarmingWhereInputSchema) ]).optional(),
  crop: z.union([ z.lazy(() => CropRelationFilterSchema),z.lazy(() => CropWhereInputSchema) ]).optional(),
}).strict());

export const FarmingSeedOrderByWithAggregationInputSchema: z.ZodType<Prisma.FarmingSeedOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FarmingSeedCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FarmingSeedAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FarmingSeedMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FarmingSeedMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FarmingSeedSumOrderByAggregateInputSchema).optional()
}).strict();

export const FarmingSeedScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FarmingSeedScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingSeedScalarWhereWithAggregatesInputSchema),z.lazy(() => FarmingSeedScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingSeedScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingSeedScalarWhereWithAggregatesInputSchema),z.lazy(() => FarmingSeedScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  count: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
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
  due_date: z.coerce.date(),
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
  due_date: z.coerce.date(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable()
}).strict();

export const TaskUpdateInputSchema: z.ZodType<Prisma.TaskUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
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
  due_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TaskCreateManyInputSchema: z.ZodType<Prisma.TaskCreateManyInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  task_creator: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  due_date: z.coerce.date(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable()
}).strict();

export const TaskUpdateManyMutationInputSchema: z.ZodType<Prisma.TaskUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TaskUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
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
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
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
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
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
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
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
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
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
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingCreateNestedManyWithoutUserInputSchema).optional()
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
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
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
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUpdateManyWithoutUserNestedInputSchema).optional()
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
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
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

export const TeamParentChildCreateInputSchema: z.ZodType<Prisma.TeamParentChildCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_parent_child_team_a: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_child_teamInputSchema).optional()
}).strict();

export const TeamParentChildUncheckedCreateInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_a: z.string().optional().nullable(),
  team_b: z.string().optional().nullable(),
  parent_team: z.string().optional().nullable(),
  child_team: z.string().optional().nullable()
}).strict();

export const TeamParentChildUpdateInputSchema: z.ZodType<Prisma.TeamParentChildUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_parent_child_team_a: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_child_teamNestedInputSchema).optional()
}).strict();

export const TeamParentChildUncheckedUpdateInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_a: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_b: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  child_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamParentChildCreateManyInputSchema: z.ZodType<Prisma.TeamParentChildCreateManyInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_a: z.string().optional().nullable(),
  team_b: z.string().optional().nullable(),
  parent_team: z.string().optional().nullable(),
  child_team: z.string().optional().nullable()
}).strict();

export const TeamParentChildUpdateManyMutationInputSchema: z.ZodType<Prisma.TeamParentChildUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamParentChildUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_a: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_b: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  child_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamInvitesCreateInputSchema: z.ZodType<Prisma.TeamInvitesCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedOneWithoutTeam_invitesInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutTeam_invitesInputSchema).optional()
}).strict();

export const TeamInvitesUncheckedCreateInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable()
}).strict();

export const TeamInvitesUpdateInputSchema: z.ZodType<Prisma.TeamInvitesUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeam_invitesNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateOneWithoutTeam_invitesNestedInputSchema).optional()
}).strict();

export const TeamInvitesUncheckedUpdateInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamInvitesCreateManyInputSchema: z.ZodType<Prisma.TeamInvitesCreateManyInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable()
}).strict();

export const TeamInvitesUpdateManyMutationInputSchema: z.ZodType<Prisma.TeamInvitesUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamInvitesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VisitedTeamCreateInputSchema: z.ZodType<Prisma.VisitedTeamCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVisited_teamInputSchema).optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutVisited_teamInputSchema).optional()
}).strict();

export const VisitedTeamUncheckedCreateInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable()
}).strict();

export const VisitedTeamUpdateInputSchema: z.ZodType<Prisma.VisitedTeamUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutVisited_teamNestedInputSchema).optional(),
  team: z.lazy(() => TeamUpdateOneWithoutVisited_teamNestedInputSchema).optional()
}).strict();

export const VisitedTeamUncheckedUpdateInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VisitedTeamCreateManyInputSchema: z.ZodType<Prisma.VisitedTeamCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable()
}).strict();

export const VisitedTeamUpdateManyMutationInputSchema: z.ZodType<Prisma.VisitedTeamUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VisitedTeamUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamActivityTypeCreateInputSchema: z.ZodType<Prisma.TeamActivityTypeCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  activity_type: z.string(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeam_activity_typeInputSchema).optional()
}).strict();

export const TeamActivityTypeUncheckedCreateInputSchema: z.ZodType<Prisma.TeamActivityTypeUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  activity_type: z.string(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeam_activity_typeInputSchema).optional()
}).strict();

export const TeamActivityTypeUpdateInputSchema: z.ZodType<Prisma.TeamActivityTypeUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  activity_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeam_activity_typeNestedInputSchema).optional()
}).strict();

export const TeamActivityTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.TeamActivityTypeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  activity_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeam_activity_typeNestedInputSchema).optional()
}).strict();

export const TeamActivityTypeCreateManyInputSchema: z.ZodType<Prisma.TeamActivityTypeCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  activity_type: z.string()
}).strict();

export const TeamActivityTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.TeamActivityTypeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  activity_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamActivityTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TeamActivityTypeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  activity_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamActivityCreateInputSchema: z.ZodType<Prisma.TeamActivityCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTeam_activityInputSchema).optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutTeam_activityInputSchema).optional(),
  team_activity_type: z.lazy(() => TeamActivityTypeCreateNestedOneWithoutTeam_activityInputSchema).optional()
}).strict();

export const TeamActivityUncheckedCreateInputSchema: z.ZodType<Prisma.TeamActivityUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  activity_type: z.string().optional().nullable()
}).strict();

export const TeamActivityUpdateInputSchema: z.ZodType<Prisma.TeamActivityUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutTeam_activityNestedInputSchema).optional(),
  team: z.lazy(() => TeamUpdateOneWithoutTeam_activityNestedInputSchema).optional(),
  team_activity_type: z.lazy(() => TeamActivityTypeUpdateOneWithoutTeam_activityNestedInputSchema).optional()
}).strict();

export const TeamActivityUncheckedUpdateInputSchema: z.ZodType<Prisma.TeamActivityUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activity_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamActivityCreateManyInputSchema: z.ZodType<Prisma.TeamActivityCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  activity_type: z.string().optional().nullable()
}).strict();

export const TeamActivityUpdateManyMutationInputSchema: z.ZodType<Prisma.TeamActivityUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamActivityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TeamActivityUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activity_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CookieClickerCreateInputSchema: z.ZodType<Prisma.CookieClickerCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cookie_count: z.bigint().optional(),
  employee_level_1: z.number().int().optional(),
  employee_level_2: z.number().int().optional(),
  employee_level_3: z.number().int().optional(),
  employee_level_4: z.number().int().optional(),
  employee_level_5: z.number().int().optional(),
  employee_level_6: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCookie_clickerInputSchema).optional()
}).strict();

export const CookieClickerUncheckedCreateInputSchema: z.ZodType<Prisma.CookieClickerUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string(),
  cookie_count: z.bigint().optional(),
  employee_level_1: z.number().int().optional(),
  employee_level_2: z.number().int().optional(),
  employee_level_3: z.number().int().optional(),
  employee_level_4: z.number().int().optional(),
  employee_level_5: z.number().int().optional(),
  employee_level_6: z.number().int().optional()
}).strict();

export const CookieClickerUpdateInputSchema: z.ZodType<Prisma.CookieClickerUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cookie_count: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_1: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_2: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_3: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_4: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_5: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_6: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutCookie_clickerNestedInputSchema).optional()
}).strict();

export const CookieClickerUncheckedUpdateInputSchema: z.ZodType<Prisma.CookieClickerUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cookie_count: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_1: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_2: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_3: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_4: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_5: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_6: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CookieClickerCreateManyInputSchema: z.ZodType<Prisma.CookieClickerCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string(),
  cookie_count: z.bigint().optional(),
  employee_level_1: z.number().int().optional(),
  employee_level_2: z.number().int().optional(),
  employee_level_3: z.number().int().optional(),
  employee_level_4: z.number().int().optional(),
  employee_level_5: z.number().int().optional(),
  employee_level_6: z.number().int().optional()
}).strict();

export const CookieClickerUpdateManyMutationInputSchema: z.ZodType<Prisma.CookieClickerUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cookie_count: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_1: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_2: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_3: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_4: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_5: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_6: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CookieClickerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CookieClickerUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cookie_count: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_1: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_2: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_3: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_4: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_5: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_6: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingCreateInputSchema: z.ZodType<Prisma.FarmingCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFarmingInputSchema),
  tiles: z.lazy(() => FarmingTileCreateNestedManyWithoutFarmingInputSchema).optional(),
  parks: z.lazy(() => FarmingParkCreateNestedManyWithoutFarmingInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedCreateNestedManyWithoutFarmingInputSchema).optional()
}).strict();

export const FarmingUncheckedCreateInputSchema: z.ZodType<Prisma.FarmingUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional(),
  tiles: z.lazy(() => FarmingTileUncheckedCreateNestedManyWithoutFarmingInputSchema).optional(),
  parks: z.lazy(() => FarmingParkUncheckedCreateNestedManyWithoutFarmingInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedCreateNestedManyWithoutFarmingInputSchema).optional()
}).strict();

export const FarmingUpdateInputSchema: z.ZodType<Prisma.FarmingUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutFarmingNestedInputSchema).optional(),
  tiles: z.lazy(() => FarmingTileUpdateManyWithoutFarmingNestedInputSchema).optional(),
  parks: z.lazy(() => FarmingParkUpdateManyWithoutFarmingNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUpdateManyWithoutFarmingNestedInputSchema).optional()
}).strict();

export const FarmingUncheckedUpdateInputSchema: z.ZodType<Prisma.FarmingUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional(),
  parks: z.lazy(() => FarmingParkUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional()
}).strict();

export const FarmingCreateManyInputSchema: z.ZodType<Prisma.FarmingCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional()
}).strict();

export const FarmingUpdateManyMutationInputSchema: z.ZodType<Prisma.FarmingUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FarmingUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingTileCreateInputSchema: z.ZodType<Prisma.FarmingTileCreateInput> = z.object({
  id: z.string().optional(),
  x: z.number().int(),
  y: z.number().int(),
  plantedAt: z.coerce.date().optional().nullable(),
  qualityScore: z.number().int().optional(),
  lastWateredAt: z.coerce.date().optional().nullable(),
  farming: z.lazy(() => FarmingCreateNestedOneWithoutTilesInputSchema),
  crop: z.lazy(() => CropCreateNestedOneWithoutTilesInputSchema).optional()
}).strict();

export const FarmingTileUncheckedCreateInputSchema: z.ZodType<Prisma.FarmingTileUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  farmingId: z.string(),
  x: z.number().int(),
  y: z.number().int(),
  cropId: z.string().optional().nullable(),
  plantedAt: z.coerce.date().optional().nullable(),
  qualityScore: z.number().int().optional(),
  lastWateredAt: z.coerce.date().optional().nullable()
}).strict();

export const FarmingTileUpdateInputSchema: z.ZodType<Prisma.FarmingTileUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  y: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  plantedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualityScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastWateredAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  farming: z.lazy(() => FarmingUpdateOneRequiredWithoutTilesNestedInputSchema).optional(),
  crop: z.lazy(() => CropUpdateOneWithoutTilesNestedInputSchema).optional()
}).strict();

export const FarmingTileUncheckedUpdateInputSchema: z.ZodType<Prisma.FarmingTileUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  farmingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  y: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cropId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  plantedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualityScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastWateredAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const FarmingTileCreateManyInputSchema: z.ZodType<Prisma.FarmingTileCreateManyInput> = z.object({
  id: z.string().optional(),
  farmingId: z.string(),
  x: z.number().int(),
  y: z.number().int(),
  cropId: z.string().optional().nullable(),
  plantedAt: z.coerce.date().optional().nullable(),
  qualityScore: z.number().int().optional(),
  lastWateredAt: z.coerce.date().optional().nullable()
}).strict();

export const FarmingTileUpdateManyMutationInputSchema: z.ZodType<Prisma.FarmingTileUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  y: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  plantedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualityScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastWateredAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const FarmingTileUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FarmingTileUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  farmingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  y: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cropId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  plantedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualityScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastWateredAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const FarmingParkCreateInputSchema: z.ZodType<Prisma.FarmingParkCreateInput> = z.object({
  id: z.string().optional(),
  parkType: z.lazy(() => ParkTypeSchema),
  level: z.number().int().optional(),
  farming: z.lazy(() => FarmingCreateNestedOneWithoutParksInputSchema)
}).strict();

export const FarmingParkUncheckedCreateInputSchema: z.ZodType<Prisma.FarmingParkUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  farmingId: z.string(),
  parkType: z.lazy(() => ParkTypeSchema),
  level: z.number().int().optional()
}).strict();

export const FarmingParkUpdateInputSchema: z.ZodType<Prisma.FarmingParkUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parkType: z.union([ z.lazy(() => ParkTypeSchema),z.lazy(() => EnumParkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  farming: z.lazy(() => FarmingUpdateOneRequiredWithoutParksNestedInputSchema).optional()
}).strict();

export const FarmingParkUncheckedUpdateInputSchema: z.ZodType<Prisma.FarmingParkUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  farmingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parkType: z.union([ z.lazy(() => ParkTypeSchema),z.lazy(() => EnumParkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingParkCreateManyInputSchema: z.ZodType<Prisma.FarmingParkCreateManyInput> = z.object({
  id: z.string().optional(),
  farmingId: z.string(),
  parkType: z.lazy(() => ParkTypeSchema),
  level: z.number().int().optional()
}).strict();

export const FarmingParkUpdateManyMutationInputSchema: z.ZodType<Prisma.FarmingParkUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parkType: z.union([ z.lazy(() => ParkTypeSchema),z.lazy(() => EnumParkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingParkUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FarmingParkUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  farmingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parkType: z.union([ z.lazy(() => ParkTypeSchema),z.lazy(() => EnumParkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CropCreateInputSchema: z.ZodType<Prisma.CropCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  displayName: z.string(),
  growTime: z.number().int(),
  seedPrice: z.number().int(),
  bSellPrice: z.number().int(),
  aSellPrice: z.number().int(),
  sSellPrice: z.number().int(),
  bHarvestExp: z.number().int(),
  aHarvestExp: z.number().int(),
  sHarvestExp: z.number().int(),
  waterScore: z.number().int(),
  tiles: z.lazy(() => FarmingTileCreateNestedManyWithoutCropInputSchema).optional(),
  rates: z.lazy(() => CropQualityCreateNestedManyWithoutCropInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedCreateNestedManyWithoutCropInputSchema).optional()
}).strict();

export const CropUncheckedCreateInputSchema: z.ZodType<Prisma.CropUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  displayName: z.string(),
  growTime: z.number().int(),
  seedPrice: z.number().int(),
  bSellPrice: z.number().int(),
  aSellPrice: z.number().int(),
  sSellPrice: z.number().int(),
  bHarvestExp: z.number().int(),
  aHarvestExp: z.number().int(),
  sHarvestExp: z.number().int(),
  waterScore: z.number().int(),
  tiles: z.lazy(() => FarmingTileUncheckedCreateNestedManyWithoutCropInputSchema).optional(),
  rates: z.lazy(() => CropQualityUncheckedCreateNestedManyWithoutCropInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedCreateNestedManyWithoutCropInputSchema).optional()
}).strict();

export const CropUpdateInputSchema: z.ZodType<Prisma.CropUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  growTime: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seedPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileUpdateManyWithoutCropNestedInputSchema).optional(),
  rates: z.lazy(() => CropQualityUpdateManyWithoutCropNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUpdateManyWithoutCropNestedInputSchema).optional()
}).strict();

export const CropUncheckedUpdateInputSchema: z.ZodType<Prisma.CropUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  growTime: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seedPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileUncheckedUpdateManyWithoutCropNestedInputSchema).optional(),
  rates: z.lazy(() => CropQualityUncheckedUpdateManyWithoutCropNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedUpdateManyWithoutCropNestedInputSchema).optional()
}).strict();

export const CropCreateManyInputSchema: z.ZodType<Prisma.CropCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  displayName: z.string(),
  growTime: z.number().int(),
  seedPrice: z.number().int(),
  bSellPrice: z.number().int(),
  aSellPrice: z.number().int(),
  sSellPrice: z.number().int(),
  bHarvestExp: z.number().int(),
  aHarvestExp: z.number().int(),
  sHarvestExp: z.number().int(),
  waterScore: z.number().int()
}).strict();

export const CropUpdateManyMutationInputSchema: z.ZodType<Prisma.CropUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  growTime: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seedPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CropUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CropUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  growTime: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seedPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CropQualityCreateInputSchema: z.ZodType<Prisma.CropQualityCreateInput> = z.object({
  id: z.string().optional(),
  minScore: z.number().int(),
  bRate: z.number().int(),
  aRate: z.number().int(),
  sRate: z.number().int(),
  crop: z.lazy(() => CropCreateNestedOneWithoutRatesInputSchema)
}).strict();

export const CropQualityUncheckedCreateInputSchema: z.ZodType<Prisma.CropQualityUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  cropId: z.string(),
  minScore: z.number().int(),
  bRate: z.number().int(),
  aRate: z.number().int(),
  sRate: z.number().int()
}).strict();

export const CropQualityUpdateInputSchema: z.ZodType<Prisma.CropQualityUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  crop: z.lazy(() => CropUpdateOneRequiredWithoutRatesNestedInputSchema).optional()
}).strict();

export const CropQualityUncheckedUpdateInputSchema: z.ZodType<Prisma.CropQualityUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cropId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CropQualityCreateManyInputSchema: z.ZodType<Prisma.CropQualityCreateManyInput> = z.object({
  id: z.string().optional(),
  cropId: z.string(),
  minScore: z.number().int(),
  bRate: z.number().int(),
  aRate: z.number().int(),
  sRate: z.number().int()
}).strict();

export const CropQualityUpdateManyMutationInputSchema: z.ZodType<Prisma.CropQualityUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CropQualityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CropQualityUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cropId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingSeedCreateInputSchema: z.ZodType<Prisma.FarmingSeedCreateInput> = z.object({
  id: z.string().optional(),
  count: z.number().int().optional(),
  farming: z.lazy(() => FarmingCreateNestedOneWithoutSeedsInputSchema),
  crop: z.lazy(() => CropCreateNestedOneWithoutSeedsInputSchema)
}).strict();

export const FarmingSeedUncheckedCreateInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  farmingId: z.string(),
  cropId: z.string(),
  count: z.number().int().optional()
}).strict();

export const FarmingSeedUpdateInputSchema: z.ZodType<Prisma.FarmingSeedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  farming: z.lazy(() => FarmingUpdateOneRequiredWithoutSeedsNestedInputSchema).optional(),
  crop: z.lazy(() => CropUpdateOneRequiredWithoutSeedsNestedInputSchema).optional()
}).strict();

export const FarmingSeedUncheckedUpdateInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  farmingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cropId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingSeedCreateManyInputSchema: z.ZodType<Prisma.FarmingSeedCreateManyInput> = z.object({
  id: z.string().optional(),
  farmingId: z.string(),
  cropId: z.string(),
  count: z.number().int().optional()
}).strict();

export const FarmingSeedUpdateManyMutationInputSchema: z.ZodType<Prisma.FarmingSeedUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingSeedUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  farmingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cropId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
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

export const TeamParentChildListRelationFilterSchema: z.ZodType<Prisma.TeamParentChildListRelationFilter> = z.object({
  every: z.lazy(() => TeamParentChildWhereInputSchema).optional(),
  some: z.lazy(() => TeamParentChildWhereInputSchema).optional(),
  none: z.lazy(() => TeamParentChildWhereInputSchema).optional()
}).strict();

export const TeamInvitesListRelationFilterSchema: z.ZodType<Prisma.TeamInvitesListRelationFilter> = z.object({
  every: z.lazy(() => TeamInvitesWhereInputSchema).optional(),
  some: z.lazy(() => TeamInvitesWhereInputSchema).optional(),
  none: z.lazy(() => TeamInvitesWhereInputSchema).optional()
}).strict();

export const VisitedTeamListRelationFilterSchema: z.ZodType<Prisma.VisitedTeamListRelationFilter> = z.object({
  every: z.lazy(() => VisitedTeamWhereInputSchema).optional(),
  some: z.lazy(() => VisitedTeamWhereInputSchema).optional(),
  none: z.lazy(() => VisitedTeamWhereInputSchema).optional()
}).strict();

export const TeamActivityListRelationFilterSchema: z.ZodType<Prisma.TeamActivityListRelationFilter> = z.object({
  every: z.lazy(() => TeamActivityWhereInputSchema).optional(),
  some: z.lazy(() => TeamActivityWhereInputSchema).optional(),
  none: z.lazy(() => TeamActivityWhereInputSchema).optional()
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

export const TeamParentChildOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TeamParentChildOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamInvitesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TeamInvitesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VisitedTeamOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VisitedTeamOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamActivityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TeamActivityOrderByRelationAggregateInput> = z.object({
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

export const UserTeamUser_idTeam_idCompoundUniqueInputSchema: z.ZodType<Prisma.UserTeamUser_idTeam_idCompoundUniqueInput> = z.object({
  user_id: z.string(),
  team_id: z.string()
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

export const CookieClickerListRelationFilterSchema: z.ZodType<Prisma.CookieClickerListRelationFilter> = z.object({
  every: z.lazy(() => CookieClickerWhereInputSchema).optional(),
  some: z.lazy(() => CookieClickerWhereInputSchema).optional(),
  none: z.lazy(() => CookieClickerWhereInputSchema).optional()
}).strict();

export const FarmingListRelationFilterSchema: z.ZodType<Prisma.FarmingListRelationFilter> = z.object({
  every: z.lazy(() => FarmingWhereInputSchema).optional(),
  some: z.lazy(() => FarmingWhereInputSchema).optional(),
  none: z.lazy(() => FarmingWhereInputSchema).optional()
}).strict();

export const TeamOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TeamOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CookieClickerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CookieClickerOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FarmingOrderByRelationAggregateInput> = z.object({
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

export const TeamParentChildTeam_aTeam_bCompoundUniqueInputSchema: z.ZodType<Prisma.TeamParentChildTeam_aTeam_bCompoundUniqueInput> = z.object({
  team_a: z.string(),
  team_b: z.string()
}).strict();

export const TeamParentChildCountOrderByAggregateInputSchema: z.ZodType<Prisma.TeamParentChildCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_a: z.lazy(() => SortOrderSchema).optional(),
  team_b: z.lazy(() => SortOrderSchema).optional(),
  parent_team: z.lazy(() => SortOrderSchema).optional(),
  child_team: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamParentChildMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TeamParentChildMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_a: z.lazy(() => SortOrderSchema).optional(),
  team_b: z.lazy(() => SortOrderSchema).optional(),
  parent_team: z.lazy(() => SortOrderSchema).optional(),
  child_team: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamParentChildMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeamParentChildMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  team_a: z.lazy(() => SortOrderSchema).optional(),
  team_b: z.lazy(() => SortOrderSchema).optional(),
  parent_team: z.lazy(() => SortOrderSchema).optional(),
  child_team: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamInvitesUser_idTeam_idCompoundUniqueInputSchema: z.ZodType<Prisma.TeamInvitesUser_idTeam_idCompoundUniqueInput> = z.object({
  user_id: z.string(),
  team_id: z.string()
}).strict();

export const TeamInvitesCountOrderByAggregateInputSchema: z.ZodType<Prisma.TeamInvitesCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamInvitesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TeamInvitesMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamInvitesMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeamInvitesMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VisitedTeamUser_idTeam_idCompoundUniqueInputSchema: z.ZodType<Prisma.VisitedTeamUser_idTeam_idCompoundUniqueInput> = z.object({
  user_id: z.string(),
  team_id: z.string()
}).strict();

export const VisitedTeamCountOrderByAggregateInputSchema: z.ZodType<Prisma.VisitedTeamCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VisitedTeamMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VisitedTeamMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VisitedTeamMinOrderByAggregateInputSchema: z.ZodType<Prisma.VisitedTeamMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamActivityTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.TeamActivityTypeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  activity_type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamActivityTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TeamActivityTypeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  activity_type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamActivityTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeamActivityTypeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  activity_type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamActivityTypeNullableRelationFilterSchema: z.ZodType<Prisma.TeamActivityTypeNullableRelationFilter> = z.object({
  is: z.lazy(() => TeamActivityTypeWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TeamActivityTypeWhereInputSchema).optional().nullable()
}).strict();

export const TeamActivityCountOrderByAggregateInputSchema: z.ZodType<Prisma.TeamActivityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  activity_type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamActivityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TeamActivityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  activity_type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamActivityMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeamActivityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  activity_type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const CookieClickerCountOrderByAggregateInputSchema: z.ZodType<Prisma.CookieClickerCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  cookie_count: z.lazy(() => SortOrderSchema).optional(),
  employee_level_1: z.lazy(() => SortOrderSchema).optional(),
  employee_level_2: z.lazy(() => SortOrderSchema).optional(),
  employee_level_3: z.lazy(() => SortOrderSchema).optional(),
  employee_level_4: z.lazy(() => SortOrderSchema).optional(),
  employee_level_5: z.lazy(() => SortOrderSchema).optional(),
  employee_level_6: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CookieClickerAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CookieClickerAvgOrderByAggregateInput> = z.object({
  cookie_count: z.lazy(() => SortOrderSchema).optional(),
  employee_level_1: z.lazy(() => SortOrderSchema).optional(),
  employee_level_2: z.lazy(() => SortOrderSchema).optional(),
  employee_level_3: z.lazy(() => SortOrderSchema).optional(),
  employee_level_4: z.lazy(() => SortOrderSchema).optional(),
  employee_level_5: z.lazy(() => SortOrderSchema).optional(),
  employee_level_6: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CookieClickerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CookieClickerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  cookie_count: z.lazy(() => SortOrderSchema).optional(),
  employee_level_1: z.lazy(() => SortOrderSchema).optional(),
  employee_level_2: z.lazy(() => SortOrderSchema).optional(),
  employee_level_3: z.lazy(() => SortOrderSchema).optional(),
  employee_level_4: z.lazy(() => SortOrderSchema).optional(),
  employee_level_5: z.lazy(() => SortOrderSchema).optional(),
  employee_level_6: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CookieClickerMinOrderByAggregateInputSchema: z.ZodType<Prisma.CookieClickerMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  cookie_count: z.lazy(() => SortOrderSchema).optional(),
  employee_level_1: z.lazy(() => SortOrderSchema).optional(),
  employee_level_2: z.lazy(() => SortOrderSchema).optional(),
  employee_level_3: z.lazy(() => SortOrderSchema).optional(),
  employee_level_4: z.lazy(() => SortOrderSchema).optional(),
  employee_level_5: z.lazy(() => SortOrderSchema).optional(),
  employee_level_6: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CookieClickerSumOrderByAggregateInputSchema: z.ZodType<Prisma.CookieClickerSumOrderByAggregateInput> = z.object({
  cookie_count: z.lazy(() => SortOrderSchema).optional(),
  employee_level_1: z.lazy(() => SortOrderSchema).optional(),
  employee_level_2: z.lazy(() => SortOrderSchema).optional(),
  employee_level_3: z.lazy(() => SortOrderSchema).optional(),
  employee_level_4: z.lazy(() => SortOrderSchema).optional(),
  employee_level_5: z.lazy(() => SortOrderSchema).optional(),
  employee_level_6: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const FarmingTileListRelationFilterSchema: z.ZodType<Prisma.FarmingTileListRelationFilter> = z.object({
  every: z.lazy(() => FarmingTileWhereInputSchema).optional(),
  some: z.lazy(() => FarmingTileWhereInputSchema).optional(),
  none: z.lazy(() => FarmingTileWhereInputSchema).optional()
}).strict();

export const FarmingParkListRelationFilterSchema: z.ZodType<Prisma.FarmingParkListRelationFilter> = z.object({
  every: z.lazy(() => FarmingParkWhereInputSchema).optional(),
  some: z.lazy(() => FarmingParkWhereInputSchema).optional(),
  none: z.lazy(() => FarmingParkWhereInputSchema).optional()
}).strict();

export const FarmingSeedListRelationFilterSchema: z.ZodType<Prisma.FarmingSeedListRelationFilter> = z.object({
  every: z.lazy(() => FarmingSeedWhereInputSchema).optional(),
  some: z.lazy(() => FarmingSeedWhereInputSchema).optional(),
  none: z.lazy(() => FarmingSeedWhereInputSchema).optional()
}).strict();

export const FarmingTileOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FarmingTileOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingParkOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FarmingParkOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingSeedOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FarmingSeedOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingCountOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  exp: z.lazy(() => SortOrderSchema).optional(),
  money: z.lazy(() => SortOrderSchema).optional(),
  parkPoint: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingAvgOrderByAggregateInput> = z.object({
  level: z.lazy(() => SortOrderSchema).optional(),
  exp: z.lazy(() => SortOrderSchema).optional(),
  money: z.lazy(() => SortOrderSchema).optional(),
  parkPoint: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  exp: z.lazy(() => SortOrderSchema).optional(),
  money: z.lazy(() => SortOrderSchema).optional(),
  parkPoint: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingMinOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  exp: z.lazy(() => SortOrderSchema).optional(),
  money: z.lazy(() => SortOrderSchema).optional(),
  parkPoint: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingSumOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingSumOrderByAggregateInput> = z.object({
  level: z.lazy(() => SortOrderSchema).optional(),
  exp: z.lazy(() => SortOrderSchema).optional(),
  money: z.lazy(() => SortOrderSchema).optional(),
  parkPoint: z.lazy(() => SortOrderSchema).optional()
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

export const FarmingRelationFilterSchema: z.ZodType<Prisma.FarmingRelationFilter> = z.object({
  is: z.lazy(() => FarmingWhereInputSchema).optional(),
  isNot: z.lazy(() => FarmingWhereInputSchema).optional()
}).strict();

export const CropNullableRelationFilterSchema: z.ZodType<Prisma.CropNullableRelationFilter> = z.object({
  is: z.lazy(() => CropWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CropWhereInputSchema).optional().nullable()
}).strict();

export const FarmingTileFarmingIdXYCompoundUniqueInputSchema: z.ZodType<Prisma.FarmingTileFarmingIdXYCompoundUniqueInput> = z.object({
  farmingId: z.string(),
  x: z.number(),
  y: z.number()
}).strict();

export const FarmingTileCountOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingTileCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  x: z.lazy(() => SortOrderSchema).optional(),
  y: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  plantedAt: z.lazy(() => SortOrderSchema).optional(),
  qualityScore: z.lazy(() => SortOrderSchema).optional(),
  lastWateredAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingTileAvgOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingTileAvgOrderByAggregateInput> = z.object({
  x: z.lazy(() => SortOrderSchema).optional(),
  y: z.lazy(() => SortOrderSchema).optional(),
  qualityScore: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingTileMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingTileMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  x: z.lazy(() => SortOrderSchema).optional(),
  y: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  plantedAt: z.lazy(() => SortOrderSchema).optional(),
  qualityScore: z.lazy(() => SortOrderSchema).optional(),
  lastWateredAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingTileMinOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingTileMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  x: z.lazy(() => SortOrderSchema).optional(),
  y: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  plantedAt: z.lazy(() => SortOrderSchema).optional(),
  qualityScore: z.lazy(() => SortOrderSchema).optional(),
  lastWateredAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingTileSumOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingTileSumOrderByAggregateInput> = z.object({
  x: z.lazy(() => SortOrderSchema).optional(),
  y: z.lazy(() => SortOrderSchema).optional(),
  qualityScore: z.lazy(() => SortOrderSchema).optional()
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

export const EnumParkTypeFilterSchema: z.ZodType<Prisma.EnumParkTypeFilter> = z.object({
  equals: z.lazy(() => ParkTypeSchema).optional(),
  in: z.lazy(() => ParkTypeSchema).array().optional(),
  notIn: z.lazy(() => ParkTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ParkTypeSchema),z.lazy(() => NestedEnumParkTypeFilterSchema) ]).optional(),
}).strict();

export const FarmingParkFarmingIdParkTypeCompoundUniqueInputSchema: z.ZodType<Prisma.FarmingParkFarmingIdParkTypeCompoundUniqueInput> = z.object({
  farmingId: z.string(),
  parkType: z.lazy(() => ParkTypeSchema)
}).strict();

export const FarmingParkCountOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingParkCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  parkType: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingParkAvgOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingParkAvgOrderByAggregateInput> = z.object({
  level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingParkMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingParkMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  parkType: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingParkMinOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingParkMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  parkType: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingParkSumOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingParkSumOrderByAggregateInput> = z.object({
  level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumParkTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumParkTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ParkTypeSchema).optional(),
  in: z.lazy(() => ParkTypeSchema).array().optional(),
  notIn: z.lazy(() => ParkTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ParkTypeSchema),z.lazy(() => NestedEnumParkTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumParkTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumParkTypeFilterSchema).optional()
}).strict();

export const CropQualityListRelationFilterSchema: z.ZodType<Prisma.CropQualityListRelationFilter> = z.object({
  every: z.lazy(() => CropQualityWhereInputSchema).optional(),
  some: z.lazy(() => CropQualityWhereInputSchema).optional(),
  none: z.lazy(() => CropQualityWhereInputSchema).optional()
}).strict();

export const CropQualityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CropQualityOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CropCountOrderByAggregateInputSchema: z.ZodType<Prisma.CropCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  displayName: z.lazy(() => SortOrderSchema).optional(),
  growTime: z.lazy(() => SortOrderSchema).optional(),
  seedPrice: z.lazy(() => SortOrderSchema).optional(),
  bSellPrice: z.lazy(() => SortOrderSchema).optional(),
  aSellPrice: z.lazy(() => SortOrderSchema).optional(),
  sSellPrice: z.lazy(() => SortOrderSchema).optional(),
  bHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  aHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  sHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  waterScore: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CropAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CropAvgOrderByAggregateInput> = z.object({
  growTime: z.lazy(() => SortOrderSchema).optional(),
  seedPrice: z.lazy(() => SortOrderSchema).optional(),
  bSellPrice: z.lazy(() => SortOrderSchema).optional(),
  aSellPrice: z.lazy(() => SortOrderSchema).optional(),
  sSellPrice: z.lazy(() => SortOrderSchema).optional(),
  bHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  aHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  sHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  waterScore: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CropMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CropMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  displayName: z.lazy(() => SortOrderSchema).optional(),
  growTime: z.lazy(() => SortOrderSchema).optional(),
  seedPrice: z.lazy(() => SortOrderSchema).optional(),
  bSellPrice: z.lazy(() => SortOrderSchema).optional(),
  aSellPrice: z.lazy(() => SortOrderSchema).optional(),
  sSellPrice: z.lazy(() => SortOrderSchema).optional(),
  bHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  aHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  sHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  waterScore: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CropMinOrderByAggregateInputSchema: z.ZodType<Prisma.CropMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  displayName: z.lazy(() => SortOrderSchema).optional(),
  growTime: z.lazy(() => SortOrderSchema).optional(),
  seedPrice: z.lazy(() => SortOrderSchema).optional(),
  bSellPrice: z.lazy(() => SortOrderSchema).optional(),
  aSellPrice: z.lazy(() => SortOrderSchema).optional(),
  sSellPrice: z.lazy(() => SortOrderSchema).optional(),
  bHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  aHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  sHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  waterScore: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CropSumOrderByAggregateInputSchema: z.ZodType<Prisma.CropSumOrderByAggregateInput> = z.object({
  growTime: z.lazy(() => SortOrderSchema).optional(),
  seedPrice: z.lazy(() => SortOrderSchema).optional(),
  bSellPrice: z.lazy(() => SortOrderSchema).optional(),
  aSellPrice: z.lazy(() => SortOrderSchema).optional(),
  sSellPrice: z.lazy(() => SortOrderSchema).optional(),
  bHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  aHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  sHarvestExp: z.lazy(() => SortOrderSchema).optional(),
  waterScore: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CropRelationFilterSchema: z.ZodType<Prisma.CropRelationFilter> = z.object({
  is: z.lazy(() => CropWhereInputSchema).optional(),
  isNot: z.lazy(() => CropWhereInputSchema).optional()
}).strict();

export const CropQualityCropIdMinScoreCompoundUniqueInputSchema: z.ZodType<Prisma.CropQualityCropIdMinScoreCompoundUniqueInput> = z.object({
  cropId: z.string(),
  minScore: z.number()
}).strict();

export const CropQualityCountOrderByAggregateInputSchema: z.ZodType<Prisma.CropQualityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  minScore: z.lazy(() => SortOrderSchema).optional(),
  bRate: z.lazy(() => SortOrderSchema).optional(),
  aRate: z.lazy(() => SortOrderSchema).optional(),
  sRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CropQualityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CropQualityAvgOrderByAggregateInput> = z.object({
  minScore: z.lazy(() => SortOrderSchema).optional(),
  bRate: z.lazy(() => SortOrderSchema).optional(),
  aRate: z.lazy(() => SortOrderSchema).optional(),
  sRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CropQualityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CropQualityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  minScore: z.lazy(() => SortOrderSchema).optional(),
  bRate: z.lazy(() => SortOrderSchema).optional(),
  aRate: z.lazy(() => SortOrderSchema).optional(),
  sRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CropQualityMinOrderByAggregateInputSchema: z.ZodType<Prisma.CropQualityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  minScore: z.lazy(() => SortOrderSchema).optional(),
  bRate: z.lazy(() => SortOrderSchema).optional(),
  aRate: z.lazy(() => SortOrderSchema).optional(),
  sRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CropQualitySumOrderByAggregateInputSchema: z.ZodType<Prisma.CropQualitySumOrderByAggregateInput> = z.object({
  minScore: z.lazy(() => SortOrderSchema).optional(),
  bRate: z.lazy(() => SortOrderSchema).optional(),
  aRate: z.lazy(() => SortOrderSchema).optional(),
  sRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingSeedFarmingIdCropIdCompoundUniqueInputSchema: z.ZodType<Prisma.FarmingSeedFarmingIdCropIdCompoundUniqueInput> = z.object({
  farmingId: z.string(),
  cropId: z.string()
}).strict();

export const FarmingSeedCountOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingSeedCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingSeedAvgOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingSeedAvgOrderByAggregateInput> = z.object({
  count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingSeedMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingSeedMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingSeedMinOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingSeedMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  farmingId: z.lazy(() => SortOrderSchema).optional(),
  cropId: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FarmingSeedSumOrderByAggregateInputSchema: z.ZodType<Prisma.FarmingSeedSumOrderByAggregateInput> = z.object({
  count: z.lazy(() => SortOrderSchema).optional()
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

export const TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_aInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_aInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_bInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_bInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_parent_teamInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_parent_teamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_child_teamInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_child_teamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamInvitesCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.TeamInvitesCreateNestedManyWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesCreateWithoutTeamsInputSchema).array(),z.lazy(() => TeamInvitesUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamInvitesCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => TeamInvitesCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamInvitesCreateManyTeamsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VisitedTeamCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.VisitedTeamCreateNestedManyWithoutTeamInput> = z.object({
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutTeamInputSchema),z.lazy(() => VisitedTeamCreateWithoutTeamInputSchema).array(),z.lazy(() => VisitedTeamUncheckedCreateWithoutTeamInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitedTeamCreateOrConnectWithoutTeamInputSchema),z.lazy(() => VisitedTeamCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitedTeamCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamActivityCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.TeamActivityCreateNestedManyWithoutTeamInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeamInputSchema),z.lazy(() => TeamActivityCreateWithoutTeamInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutTeamInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutTeamInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
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

export const TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_aInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_aInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_bInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_bInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_parent_teamInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_parent_teamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_child_teamInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_child_teamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedCreateNestedManyWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesCreateWithoutTeamsInputSchema).array(),z.lazy(() => TeamInvitesUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamInvitesCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => TeamInvitesCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamInvitesCreateManyTeamsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedCreateNestedManyWithoutTeamInput> = z.object({
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutTeamInputSchema),z.lazy(() => VisitedTeamCreateWithoutTeamInputSchema).array(),z.lazy(() => VisitedTeamUncheckedCreateWithoutTeamInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitedTeamCreateOrConnectWithoutTeamInputSchema),z.lazy(() => VisitedTeamCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitedTeamCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.TeamActivityUncheckedCreateNestedManyWithoutTeamInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeamInputSchema),z.lazy(() => TeamActivityCreateWithoutTeamInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutTeamInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutTeamInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
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

export const TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema: z.ZodType<Prisma.TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_aInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_aInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamParentChildScalarWhereInputSchema),z.lazy(() => TeamParentChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema: z.ZodType<Prisma.TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_bInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_bInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamParentChildScalarWhereInputSchema),z.lazy(() => TeamParentChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema: z.ZodType<Prisma.TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_parent_teamInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_parent_teamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamParentChildScalarWhereInputSchema),z.lazy(() => TeamParentChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema: z.ZodType<Prisma.TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_child_teamInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_child_teamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamParentChildScalarWhereInputSchema),z.lazy(() => TeamParentChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamInvitesUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.TeamInvitesUpdateManyWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesCreateWithoutTeamsInputSchema).array(),z.lazy(() => TeamInvitesUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamInvitesCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => TeamInvitesCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamInvitesUpsertWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUpsertWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamInvitesCreateManyTeamsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamInvitesUpdateWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUpdateWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamInvitesUpdateManyWithWhereWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUpdateManyWithWhereWithoutTeamsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamInvitesScalarWhereInputSchema),z.lazy(() => TeamInvitesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VisitedTeamUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.VisitedTeamUpdateManyWithoutTeamNestedInput> = z.object({
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutTeamInputSchema),z.lazy(() => VisitedTeamCreateWithoutTeamInputSchema).array(),z.lazy(() => VisitedTeamUncheckedCreateWithoutTeamInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitedTeamCreateOrConnectWithoutTeamInputSchema),z.lazy(() => VisitedTeamCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VisitedTeamUpsertWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => VisitedTeamUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitedTeamCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VisitedTeamUpdateWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => VisitedTeamUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VisitedTeamUpdateManyWithWhereWithoutTeamInputSchema),z.lazy(() => VisitedTeamUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VisitedTeamScalarWhereInputSchema),z.lazy(() => VisitedTeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamActivityUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.TeamActivityUpdateManyWithoutTeamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeamInputSchema),z.lazy(() => TeamActivityCreateWithoutTeamInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutTeamInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutTeamInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamActivityUpdateManyWithWhereWithoutTeamInputSchema),z.lazy(() => TeamActivityUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamActivityScalarWhereInputSchema),z.lazy(() => TeamActivityScalarWhereInputSchema).array() ]).optional(),
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

export const TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_aInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_aInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_aInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamParentChildScalarWhereInputSchema),z.lazy(() => TeamParentChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_bInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_bInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_bInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamParentChildScalarWhereInputSchema),z.lazy(() => TeamParentChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_parent_teamInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_parent_teamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_parent_teamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamParentChildScalarWhereInputSchema),z.lazy(() => TeamParentChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_child_teamInputSchema).array(),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamParentChildCreateManyTeam_parent_child_child_teamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamParentChildWhereUniqueInputSchema),z.lazy(() => TeamParentChildWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_child_teamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamParentChildScalarWhereInputSchema),z.lazy(() => TeamParentChildScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesCreateWithoutTeamsInputSchema).array(),z.lazy(() => TeamInvitesUncheckedCreateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutTeamsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamInvitesCreateOrConnectWithoutTeamsInputSchema),z.lazy(() => TeamInvitesCreateOrConnectWithoutTeamsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamInvitesUpsertWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUpsertWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamInvitesCreateManyTeamsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamInvitesUpdateWithWhereUniqueWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUpdateWithWhereUniqueWithoutTeamsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamInvitesUpdateManyWithWhereWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUpdateManyWithWhereWithoutTeamsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamInvitesScalarWhereInputSchema),z.lazy(() => TeamInvitesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedUpdateManyWithoutTeamNestedInput> = z.object({
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutTeamInputSchema),z.lazy(() => VisitedTeamCreateWithoutTeamInputSchema).array(),z.lazy(() => VisitedTeamUncheckedCreateWithoutTeamInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitedTeamCreateOrConnectWithoutTeamInputSchema),z.lazy(() => VisitedTeamCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VisitedTeamUpsertWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => VisitedTeamUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitedTeamCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VisitedTeamUpdateWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => VisitedTeamUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VisitedTeamUpdateManyWithWhereWithoutTeamInputSchema),z.lazy(() => VisitedTeamUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VisitedTeamScalarWhereInputSchema),z.lazy(() => VisitedTeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.TeamActivityUncheckedUpdateManyWithoutTeamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeamInputSchema),z.lazy(() => TeamActivityCreateWithoutTeamInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutTeamInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutTeamInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamActivityUpdateManyWithWhereWithoutTeamInputSchema),z.lazy(() => TeamActivityUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamActivityScalarWhereInputSchema),z.lazy(() => TeamActivityScalarWhereInputSchema).array() ]).optional(),
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

export const TeamInvitesCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.TeamInvitesCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutUsersInputSchema),z.lazy(() => TeamInvitesCreateWithoutUsersInputSchema).array(),z.lazy(() => TeamInvitesUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamInvitesCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TeamInvitesCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamInvitesCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VisitedTeamCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.VisitedTeamCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutUserInputSchema),z.lazy(() => VisitedTeamCreateWithoutUserInputSchema).array(),z.lazy(() => VisitedTeamUncheckedCreateWithoutUserInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitedTeamCreateOrConnectWithoutUserInputSchema),z.lazy(() => VisitedTeamCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitedTeamCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamActivityCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TeamActivityCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutUserInputSchema),z.lazy(() => TeamActivityCreateWithoutUserInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutUserInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutUserInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CookieClickerCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CookieClickerCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CookieClickerCreateWithoutUserInputSchema),z.lazy(() => CookieClickerCreateWithoutUserInputSchema).array(),z.lazy(() => CookieClickerUncheckedCreateWithoutUserInputSchema),z.lazy(() => CookieClickerUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CookieClickerCreateOrConnectWithoutUserInputSchema),z.lazy(() => CookieClickerCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CookieClickerCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CookieClickerWhereUniqueInputSchema),z.lazy(() => CookieClickerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FarmingCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.FarmingCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => FarmingCreateWithoutUserInputSchema),z.lazy(() => FarmingCreateWithoutUserInputSchema).array(),z.lazy(() => FarmingUncheckedCreateWithoutUserInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingCreateOrConnectWithoutUserInputSchema),z.lazy(() => FarmingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingWhereUniqueInputSchema),z.lazy(() => FarmingWhereUniqueInputSchema).array() ]).optional(),
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

export const TeamInvitesUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutUsersInputSchema),z.lazy(() => TeamInvitesCreateWithoutUsersInputSchema).array(),z.lazy(() => TeamInvitesUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamInvitesCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TeamInvitesCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamInvitesCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VisitedTeamUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutUserInputSchema),z.lazy(() => VisitedTeamCreateWithoutUserInputSchema).array(),z.lazy(() => VisitedTeamUncheckedCreateWithoutUserInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitedTeamCreateOrConnectWithoutUserInputSchema),z.lazy(() => VisitedTeamCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitedTeamCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamActivityUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TeamActivityUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutUserInputSchema),z.lazy(() => TeamActivityCreateWithoutUserInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutUserInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutUserInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CookieClickerUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CookieClickerUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CookieClickerCreateWithoutUserInputSchema),z.lazy(() => CookieClickerCreateWithoutUserInputSchema).array(),z.lazy(() => CookieClickerUncheckedCreateWithoutUserInputSchema),z.lazy(() => CookieClickerUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CookieClickerCreateOrConnectWithoutUserInputSchema),z.lazy(() => CookieClickerCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CookieClickerCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CookieClickerWhereUniqueInputSchema),z.lazy(() => CookieClickerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FarmingUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.FarmingUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => FarmingCreateWithoutUserInputSchema),z.lazy(() => FarmingCreateWithoutUserInputSchema).array(),z.lazy(() => FarmingUncheckedCreateWithoutUserInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingCreateOrConnectWithoutUserInputSchema),z.lazy(() => FarmingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingWhereUniqueInputSchema),z.lazy(() => FarmingWhereUniqueInputSchema).array() ]).optional(),
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

export const TeamInvitesUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.TeamInvitesUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutUsersInputSchema),z.lazy(() => TeamInvitesCreateWithoutUsersInputSchema).array(),z.lazy(() => TeamInvitesUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamInvitesCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TeamInvitesCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamInvitesUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TeamInvitesUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamInvitesCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamInvitesUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TeamInvitesUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamInvitesUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => TeamInvitesUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamInvitesScalarWhereInputSchema),z.lazy(() => TeamInvitesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VisitedTeamUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.VisitedTeamUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutUserInputSchema),z.lazy(() => VisitedTeamCreateWithoutUserInputSchema).array(),z.lazy(() => VisitedTeamUncheckedCreateWithoutUserInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitedTeamCreateOrConnectWithoutUserInputSchema),z.lazy(() => VisitedTeamCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VisitedTeamUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VisitedTeamUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitedTeamCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VisitedTeamUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VisitedTeamUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VisitedTeamUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => VisitedTeamUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VisitedTeamScalarWhereInputSchema),z.lazy(() => VisitedTeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamActivityUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TeamActivityUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutUserInputSchema),z.lazy(() => TeamActivityCreateWithoutUserInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutUserInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutUserInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamActivityUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TeamActivityUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamActivityScalarWhereInputSchema),z.lazy(() => TeamActivityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CookieClickerUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CookieClickerUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CookieClickerCreateWithoutUserInputSchema),z.lazy(() => CookieClickerCreateWithoutUserInputSchema).array(),z.lazy(() => CookieClickerUncheckedCreateWithoutUserInputSchema),z.lazy(() => CookieClickerUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CookieClickerCreateOrConnectWithoutUserInputSchema),z.lazy(() => CookieClickerCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CookieClickerUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CookieClickerUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CookieClickerCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CookieClickerWhereUniqueInputSchema),z.lazy(() => CookieClickerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CookieClickerWhereUniqueInputSchema),z.lazy(() => CookieClickerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CookieClickerWhereUniqueInputSchema),z.lazy(() => CookieClickerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CookieClickerWhereUniqueInputSchema),z.lazy(() => CookieClickerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CookieClickerUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CookieClickerUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CookieClickerUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CookieClickerUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CookieClickerScalarWhereInputSchema),z.lazy(() => CookieClickerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FarmingUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.FarmingUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingCreateWithoutUserInputSchema),z.lazy(() => FarmingCreateWithoutUserInputSchema).array(),z.lazy(() => FarmingUncheckedCreateWithoutUserInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingCreateOrConnectWithoutUserInputSchema),z.lazy(() => FarmingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => FarmingUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingWhereUniqueInputSchema),z.lazy(() => FarmingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingWhereUniqueInputSchema),z.lazy(() => FarmingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingWhereUniqueInputSchema),z.lazy(() => FarmingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingWhereUniqueInputSchema),z.lazy(() => FarmingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => FarmingUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => FarmingUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingScalarWhereInputSchema),z.lazy(() => FarmingScalarWhereInputSchema).array() ]).optional(),
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

export const TeamInvitesUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutUsersInputSchema),z.lazy(() => TeamInvitesCreateWithoutUsersInputSchema).array(),z.lazy(() => TeamInvitesUncheckedCreateWithoutUsersInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamInvitesCreateOrConnectWithoutUsersInputSchema),z.lazy(() => TeamInvitesCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamInvitesUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TeamInvitesUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamInvitesCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamInvitesWhereUniqueInputSchema),z.lazy(() => TeamInvitesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamInvitesUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => TeamInvitesUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamInvitesUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => TeamInvitesUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamInvitesScalarWhereInputSchema),z.lazy(() => TeamInvitesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VisitedTeamUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutUserInputSchema),z.lazy(() => VisitedTeamCreateWithoutUserInputSchema).array(),z.lazy(() => VisitedTeamUncheckedCreateWithoutUserInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitedTeamCreateOrConnectWithoutUserInputSchema),z.lazy(() => VisitedTeamCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VisitedTeamUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VisitedTeamUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitedTeamCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VisitedTeamWhereUniqueInputSchema),z.lazy(() => VisitedTeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VisitedTeamUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VisitedTeamUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VisitedTeamUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => VisitedTeamUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VisitedTeamScalarWhereInputSchema),z.lazy(() => VisitedTeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamActivityUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TeamActivityUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutUserInputSchema),z.lazy(() => TeamActivityCreateWithoutUserInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutUserInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutUserInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamActivityUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TeamActivityUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamActivityScalarWhereInputSchema),z.lazy(() => TeamActivityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CookieClickerUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CookieClickerUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CookieClickerCreateWithoutUserInputSchema),z.lazy(() => CookieClickerCreateWithoutUserInputSchema).array(),z.lazy(() => CookieClickerUncheckedCreateWithoutUserInputSchema),z.lazy(() => CookieClickerUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CookieClickerCreateOrConnectWithoutUserInputSchema),z.lazy(() => CookieClickerCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CookieClickerUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CookieClickerUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CookieClickerCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CookieClickerWhereUniqueInputSchema),z.lazy(() => CookieClickerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CookieClickerWhereUniqueInputSchema),z.lazy(() => CookieClickerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CookieClickerWhereUniqueInputSchema),z.lazy(() => CookieClickerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CookieClickerWhereUniqueInputSchema),z.lazy(() => CookieClickerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CookieClickerUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CookieClickerUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CookieClickerUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CookieClickerUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CookieClickerScalarWhereInputSchema),z.lazy(() => CookieClickerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FarmingUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.FarmingUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingCreateWithoutUserInputSchema),z.lazy(() => FarmingCreateWithoutUserInputSchema).array(),z.lazy(() => FarmingUncheckedCreateWithoutUserInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingCreateOrConnectWithoutUserInputSchema),z.lazy(() => FarmingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => FarmingUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingWhereUniqueInputSchema),z.lazy(() => FarmingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingWhereUniqueInputSchema),z.lazy(() => FarmingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingWhereUniqueInputSchema),z.lazy(() => FarmingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingWhereUniqueInputSchema),z.lazy(() => FarmingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => FarmingUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => FarmingUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingScalarWhereInputSchema),z.lazy(() => FarmingScalarWhereInputSchema).array() ]).optional(),
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

export const TeamCreateNestedOneWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutTeam_parent_child_team_aInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_team_aInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_parent_child_team_aInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const TeamCreateNestedOneWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutTeam_parent_child_team_bInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_team_bInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_parent_child_team_bInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const TeamCreateNestedOneWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutTeam_parent_child_parent_teamInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const TeamCreateNestedOneWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutTeam_parent_child_child_teamInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const TeamUpdateOneWithoutTeam_parent_child_team_aNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutTeam_parent_child_team_aNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_team_aInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_parent_child_team_aInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutTeam_parent_child_team_aInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamUpdateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_team_aInputSchema) ]).optional(),
}).strict();

export const TeamUpdateOneWithoutTeam_parent_child_team_bNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutTeam_parent_child_team_bNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_team_bInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_parent_child_team_bInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutTeam_parent_child_team_bInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamUpdateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_team_bInputSchema) ]).optional(),
}).strict();

export const TeamUpdateOneWithoutTeam_parent_child_parent_teamNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutTeam_parent_child_parent_teamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamUpdateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_parent_teamInputSchema) ]).optional(),
}).strict();

export const TeamUpdateOneWithoutTeam_parent_child_child_teamNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutTeam_parent_child_child_teamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutTeam_parent_child_child_teamInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamUpdateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_child_teamInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutTeam_invitesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTeam_invitesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTeam_invitesInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeam_invitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTeam_invitesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const TeamCreateNestedOneWithoutTeam_invitesInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutTeam_invitesInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_invitesInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_invitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_invitesInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneWithoutTeam_invitesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutTeam_invitesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTeam_invitesInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeam_invitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTeam_invitesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTeam_invitesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTeam_invitesInputSchema),z.lazy(() => UserUpdateWithoutTeam_invitesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeam_invitesInputSchema) ]).optional(),
}).strict();

export const TeamUpdateOneWithoutTeam_invitesNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutTeam_invitesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_invitesInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_invitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_invitesInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutTeam_invitesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutTeam_invitesInputSchema),z.lazy(() => TeamUpdateWithoutTeam_invitesInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_invitesInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutVisited_teamInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutVisited_teamInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutVisited_teamInputSchema),z.lazy(() => UserUncheckedCreateWithoutVisited_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVisited_teamInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const TeamCreateNestedOneWithoutVisited_teamInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutVisited_teamInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutVisited_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutVisited_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutVisited_teamInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneWithoutVisited_teamNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutVisited_teamNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutVisited_teamInputSchema),z.lazy(() => UserUncheckedCreateWithoutVisited_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVisited_teamInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutVisited_teamInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutVisited_teamInputSchema),z.lazy(() => UserUpdateWithoutVisited_teamInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVisited_teamInputSchema) ]).optional(),
}).strict();

export const TeamUpdateOneWithoutVisited_teamNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutVisited_teamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutVisited_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutVisited_teamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutVisited_teamInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutVisited_teamInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutVisited_teamInputSchema),z.lazy(() => TeamUpdateWithoutVisited_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutVisited_teamInputSchema) ]).optional(),
}).strict();

export const TeamActivityCreateNestedManyWithoutTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityCreateNestedManyWithoutTeam_activity_typeInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityCreateWithoutTeam_activity_typeInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyTeam_activity_typeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamActivityUncheckedCreateNestedManyWithoutTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityUncheckedCreateNestedManyWithoutTeam_activity_typeInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityCreateWithoutTeam_activity_typeInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyTeam_activity_typeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamActivityUpdateManyWithoutTeam_activity_typeNestedInputSchema: z.ZodType<Prisma.TeamActivityUpdateManyWithoutTeam_activity_typeNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityCreateWithoutTeam_activity_typeInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyTeam_activity_typeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamActivityUpdateManyWithWhereWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUpdateManyWithWhereWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamActivityScalarWhereInputSchema),z.lazy(() => TeamActivityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamActivityUncheckedUpdateManyWithoutTeam_activity_typeNestedInputSchema: z.ZodType<Prisma.TeamActivityUncheckedUpdateManyWithoutTeam_activity_typeNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityCreateWithoutTeam_activity_typeInputSchema).array(),z.lazy(() => TeamActivityUncheckedCreateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamActivityCreateOrConnectWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityCreateOrConnectWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUpsertWithWhereUniqueWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamActivityCreateManyTeam_activity_typeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamActivityWhereUniqueInputSchema),z.lazy(() => TeamActivityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUpdateWithWhereUniqueWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamActivityUpdateManyWithWhereWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUpdateManyWithWhereWithoutTeam_activity_typeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamActivityScalarWhereInputSchema),z.lazy(() => TeamActivityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutTeam_activityInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTeam_activityInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTeam_activityInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeam_activityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTeam_activityInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const TeamCreateNestedOneWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutTeam_activityInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_activityInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_activityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_activityInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const TeamActivityTypeCreateNestedOneWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamActivityTypeCreateNestedOneWithoutTeam_activityInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityTypeCreateWithoutTeam_activityInputSchema),z.lazy(() => TeamActivityTypeUncheckedCreateWithoutTeam_activityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamActivityTypeCreateOrConnectWithoutTeam_activityInputSchema).optional(),
  connect: z.lazy(() => TeamActivityTypeWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneWithoutTeam_activityNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutTeam_activityNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTeam_activityInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeam_activityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTeam_activityInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTeam_activityInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTeam_activityInputSchema),z.lazy(() => UserUpdateWithoutTeam_activityInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeam_activityInputSchema) ]).optional(),
}).strict();

export const TeamUpdateOneWithoutTeam_activityNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutTeam_activityNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_activityInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_activityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeam_activityInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutTeam_activityInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutTeam_activityInputSchema),z.lazy(() => TeamUpdateWithoutTeam_activityInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_activityInputSchema) ]).optional(),
}).strict();

export const TeamActivityTypeUpdateOneWithoutTeam_activityNestedInputSchema: z.ZodType<Prisma.TeamActivityTypeUpdateOneWithoutTeam_activityNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamActivityTypeCreateWithoutTeam_activityInputSchema),z.lazy(() => TeamActivityTypeUncheckedCreateWithoutTeam_activityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamActivityTypeCreateOrConnectWithoutTeam_activityInputSchema).optional(),
  upsert: z.lazy(() => TeamActivityTypeUpsertWithoutTeam_activityInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamActivityTypeWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamActivityTypeWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamActivityTypeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamActivityTypeUpdateToOneWithWhereWithoutTeam_activityInputSchema),z.lazy(() => TeamActivityTypeUpdateWithoutTeam_activityInputSchema),z.lazy(() => TeamActivityTypeUncheckedUpdateWithoutTeam_activityInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutCookie_clickerInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCookie_clickerInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCookie_clickerInputSchema),z.lazy(() => UserUncheckedCreateWithoutCookie_clickerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCookie_clickerInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneWithoutCookie_clickerNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutCookie_clickerNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCookie_clickerInputSchema),z.lazy(() => UserUncheckedCreateWithoutCookie_clickerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCookie_clickerInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCookie_clickerInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCookie_clickerInputSchema),z.lazy(() => UserUpdateWithoutCookie_clickerInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCookie_clickerInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutFarmingInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFarmingInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutFarmingInputSchema),z.lazy(() => UserUncheckedCreateWithoutFarmingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFarmingInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const FarmingTileCreateNestedManyWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingTileCreateNestedManyWithoutFarmingInput> = z.object({
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutFarmingInputSchema),z.lazy(() => FarmingTileCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingTileUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingTileCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingTileCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingTileCreateManyFarmingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FarmingParkCreateNestedManyWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingParkCreateNestedManyWithoutFarmingInput> = z.object({
  create: z.union([ z.lazy(() => FarmingParkCreateWithoutFarmingInputSchema),z.lazy(() => FarmingParkCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingParkUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingParkUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingParkCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingParkCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingParkCreateManyFarmingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingParkWhereUniqueInputSchema),z.lazy(() => FarmingParkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FarmingSeedCreateNestedManyWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingSeedCreateNestedManyWithoutFarmingInput> = z.object({
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingSeedUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingSeedCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingSeedCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingSeedCreateManyFarmingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FarmingTileUncheckedCreateNestedManyWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingTileUncheckedCreateNestedManyWithoutFarmingInput> = z.object({
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutFarmingInputSchema),z.lazy(() => FarmingTileCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingTileUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingTileCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingTileCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingTileCreateManyFarmingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FarmingParkUncheckedCreateNestedManyWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingParkUncheckedCreateNestedManyWithoutFarmingInput> = z.object({
  create: z.union([ z.lazy(() => FarmingParkCreateWithoutFarmingInputSchema),z.lazy(() => FarmingParkCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingParkUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingParkUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingParkCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingParkCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingParkCreateManyFarmingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingParkWhereUniqueInputSchema),z.lazy(() => FarmingParkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FarmingSeedUncheckedCreateNestedManyWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedCreateNestedManyWithoutFarmingInput> = z.object({
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingSeedUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingSeedCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingSeedCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingSeedCreateManyFarmingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutFarmingNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFarmingNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutFarmingInputSchema),z.lazy(() => UserUncheckedCreateWithoutFarmingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFarmingInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutFarmingInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutFarmingInputSchema),z.lazy(() => UserUpdateWithoutFarmingInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFarmingInputSchema) ]).optional(),
}).strict();

export const FarmingTileUpdateManyWithoutFarmingNestedInputSchema: z.ZodType<Prisma.FarmingTileUpdateManyWithoutFarmingNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutFarmingInputSchema),z.lazy(() => FarmingTileCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingTileUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingTileCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingTileCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingTileUpsertWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingTileUpsertWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingTileCreateManyFarmingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingTileUpdateWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingTileUpdateWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingTileUpdateManyWithWhereWithoutFarmingInputSchema),z.lazy(() => FarmingTileUpdateManyWithWhereWithoutFarmingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingTileScalarWhereInputSchema),z.lazy(() => FarmingTileScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FarmingParkUpdateManyWithoutFarmingNestedInputSchema: z.ZodType<Prisma.FarmingParkUpdateManyWithoutFarmingNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingParkCreateWithoutFarmingInputSchema),z.lazy(() => FarmingParkCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingParkUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingParkUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingParkCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingParkCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingParkUpsertWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingParkUpsertWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingParkCreateManyFarmingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingParkWhereUniqueInputSchema),z.lazy(() => FarmingParkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingParkWhereUniqueInputSchema),z.lazy(() => FarmingParkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingParkWhereUniqueInputSchema),z.lazy(() => FarmingParkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingParkWhereUniqueInputSchema),z.lazy(() => FarmingParkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingParkUpdateWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingParkUpdateWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingParkUpdateManyWithWhereWithoutFarmingInputSchema),z.lazy(() => FarmingParkUpdateManyWithWhereWithoutFarmingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingParkScalarWhereInputSchema),z.lazy(() => FarmingParkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FarmingSeedUpdateManyWithoutFarmingNestedInputSchema: z.ZodType<Prisma.FarmingSeedUpdateManyWithoutFarmingNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingSeedUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingSeedCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingSeedCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingSeedUpsertWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUpsertWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingSeedCreateManyFarmingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingSeedUpdateWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUpdateWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingSeedUpdateManyWithWhereWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUpdateManyWithWhereWithoutFarmingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingSeedScalarWhereInputSchema),z.lazy(() => FarmingSeedScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FarmingTileUncheckedUpdateManyWithoutFarmingNestedInputSchema: z.ZodType<Prisma.FarmingTileUncheckedUpdateManyWithoutFarmingNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutFarmingInputSchema),z.lazy(() => FarmingTileCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingTileUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingTileCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingTileCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingTileUpsertWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingTileUpsertWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingTileCreateManyFarmingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingTileUpdateWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingTileUpdateWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingTileUpdateManyWithWhereWithoutFarmingInputSchema),z.lazy(() => FarmingTileUpdateManyWithWhereWithoutFarmingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingTileScalarWhereInputSchema),z.lazy(() => FarmingTileScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FarmingParkUncheckedUpdateManyWithoutFarmingNestedInputSchema: z.ZodType<Prisma.FarmingParkUncheckedUpdateManyWithoutFarmingNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingParkCreateWithoutFarmingInputSchema),z.lazy(() => FarmingParkCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingParkUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingParkUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingParkCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingParkCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingParkUpsertWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingParkUpsertWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingParkCreateManyFarmingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingParkWhereUniqueInputSchema),z.lazy(() => FarmingParkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingParkWhereUniqueInputSchema),z.lazy(() => FarmingParkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingParkWhereUniqueInputSchema),z.lazy(() => FarmingParkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingParkWhereUniqueInputSchema),z.lazy(() => FarmingParkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingParkUpdateWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingParkUpdateWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingParkUpdateManyWithWhereWithoutFarmingInputSchema),z.lazy(() => FarmingParkUpdateManyWithWhereWithoutFarmingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingParkScalarWhereInputSchema),z.lazy(() => FarmingParkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FarmingSeedUncheckedUpdateManyWithoutFarmingNestedInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedUpdateManyWithoutFarmingNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedCreateWithoutFarmingInputSchema).array(),z.lazy(() => FarmingSeedUncheckedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutFarmingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingSeedCreateOrConnectWithoutFarmingInputSchema),z.lazy(() => FarmingSeedCreateOrConnectWithoutFarmingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingSeedUpsertWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUpsertWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingSeedCreateManyFarmingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingSeedUpdateWithWhereUniqueWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUpdateWithWhereUniqueWithoutFarmingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingSeedUpdateManyWithWhereWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUpdateManyWithWhereWithoutFarmingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingSeedScalarWhereInputSchema),z.lazy(() => FarmingSeedScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FarmingCreateNestedOneWithoutTilesInputSchema: z.ZodType<Prisma.FarmingCreateNestedOneWithoutTilesInput> = z.object({
  create: z.union([ z.lazy(() => FarmingCreateWithoutTilesInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutTilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FarmingCreateOrConnectWithoutTilesInputSchema).optional(),
  connect: z.lazy(() => FarmingWhereUniqueInputSchema).optional()
}).strict();

export const CropCreateNestedOneWithoutTilesInputSchema: z.ZodType<Prisma.CropCreateNestedOneWithoutTilesInput> = z.object({
  create: z.union([ z.lazy(() => CropCreateWithoutTilesInputSchema),z.lazy(() => CropUncheckedCreateWithoutTilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CropCreateOrConnectWithoutTilesInputSchema).optional(),
  connect: z.lazy(() => CropWhereUniqueInputSchema).optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const FarmingUpdateOneRequiredWithoutTilesNestedInputSchema: z.ZodType<Prisma.FarmingUpdateOneRequiredWithoutTilesNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingCreateWithoutTilesInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutTilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FarmingCreateOrConnectWithoutTilesInputSchema).optional(),
  upsert: z.lazy(() => FarmingUpsertWithoutTilesInputSchema).optional(),
  connect: z.lazy(() => FarmingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FarmingUpdateToOneWithWhereWithoutTilesInputSchema),z.lazy(() => FarmingUpdateWithoutTilesInputSchema),z.lazy(() => FarmingUncheckedUpdateWithoutTilesInputSchema) ]).optional(),
}).strict();

export const CropUpdateOneWithoutTilesNestedInputSchema: z.ZodType<Prisma.CropUpdateOneWithoutTilesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CropCreateWithoutTilesInputSchema),z.lazy(() => CropUncheckedCreateWithoutTilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CropCreateOrConnectWithoutTilesInputSchema).optional(),
  upsert: z.lazy(() => CropUpsertWithoutTilesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CropWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CropWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CropWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CropUpdateToOneWithWhereWithoutTilesInputSchema),z.lazy(() => CropUpdateWithoutTilesInputSchema),z.lazy(() => CropUncheckedUpdateWithoutTilesInputSchema) ]).optional(),
}).strict();

export const FarmingCreateNestedOneWithoutParksInputSchema: z.ZodType<Prisma.FarmingCreateNestedOneWithoutParksInput> = z.object({
  create: z.union([ z.lazy(() => FarmingCreateWithoutParksInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutParksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FarmingCreateOrConnectWithoutParksInputSchema).optional(),
  connect: z.lazy(() => FarmingWhereUniqueInputSchema).optional()
}).strict();

export const EnumParkTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumParkTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ParkTypeSchema).optional()
}).strict();

export const FarmingUpdateOneRequiredWithoutParksNestedInputSchema: z.ZodType<Prisma.FarmingUpdateOneRequiredWithoutParksNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingCreateWithoutParksInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutParksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FarmingCreateOrConnectWithoutParksInputSchema).optional(),
  upsert: z.lazy(() => FarmingUpsertWithoutParksInputSchema).optional(),
  connect: z.lazy(() => FarmingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FarmingUpdateToOneWithWhereWithoutParksInputSchema),z.lazy(() => FarmingUpdateWithoutParksInputSchema),z.lazy(() => FarmingUncheckedUpdateWithoutParksInputSchema) ]).optional(),
}).strict();

export const FarmingTileCreateNestedManyWithoutCropInputSchema: z.ZodType<Prisma.FarmingTileCreateNestedManyWithoutCropInput> = z.object({
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutCropInputSchema),z.lazy(() => FarmingTileCreateWithoutCropInputSchema).array(),z.lazy(() => FarmingTileUncheckedCreateWithoutCropInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingTileCreateOrConnectWithoutCropInputSchema),z.lazy(() => FarmingTileCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingTileCreateManyCropInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CropQualityCreateNestedManyWithoutCropInputSchema: z.ZodType<Prisma.CropQualityCreateNestedManyWithoutCropInput> = z.object({
  create: z.union([ z.lazy(() => CropQualityCreateWithoutCropInputSchema),z.lazy(() => CropQualityCreateWithoutCropInputSchema).array(),z.lazy(() => CropQualityUncheckedCreateWithoutCropInputSchema),z.lazy(() => CropQualityUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CropQualityCreateOrConnectWithoutCropInputSchema),z.lazy(() => CropQualityCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CropQualityCreateManyCropInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CropQualityWhereUniqueInputSchema),z.lazy(() => CropQualityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FarmingSeedCreateNestedManyWithoutCropInputSchema: z.ZodType<Prisma.FarmingSeedCreateNestedManyWithoutCropInput> = z.object({
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutCropInputSchema),z.lazy(() => FarmingSeedCreateWithoutCropInputSchema).array(),z.lazy(() => FarmingSeedUncheckedCreateWithoutCropInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingSeedCreateOrConnectWithoutCropInputSchema),z.lazy(() => FarmingSeedCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingSeedCreateManyCropInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FarmingTileUncheckedCreateNestedManyWithoutCropInputSchema: z.ZodType<Prisma.FarmingTileUncheckedCreateNestedManyWithoutCropInput> = z.object({
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutCropInputSchema),z.lazy(() => FarmingTileCreateWithoutCropInputSchema).array(),z.lazy(() => FarmingTileUncheckedCreateWithoutCropInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingTileCreateOrConnectWithoutCropInputSchema),z.lazy(() => FarmingTileCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingTileCreateManyCropInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CropQualityUncheckedCreateNestedManyWithoutCropInputSchema: z.ZodType<Prisma.CropQualityUncheckedCreateNestedManyWithoutCropInput> = z.object({
  create: z.union([ z.lazy(() => CropQualityCreateWithoutCropInputSchema),z.lazy(() => CropQualityCreateWithoutCropInputSchema).array(),z.lazy(() => CropQualityUncheckedCreateWithoutCropInputSchema),z.lazy(() => CropQualityUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CropQualityCreateOrConnectWithoutCropInputSchema),z.lazy(() => CropQualityCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CropQualityCreateManyCropInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CropQualityWhereUniqueInputSchema),z.lazy(() => CropQualityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FarmingSeedUncheckedCreateNestedManyWithoutCropInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedCreateNestedManyWithoutCropInput> = z.object({
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutCropInputSchema),z.lazy(() => FarmingSeedCreateWithoutCropInputSchema).array(),z.lazy(() => FarmingSeedUncheckedCreateWithoutCropInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingSeedCreateOrConnectWithoutCropInputSchema),z.lazy(() => FarmingSeedCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingSeedCreateManyCropInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FarmingTileUpdateManyWithoutCropNestedInputSchema: z.ZodType<Prisma.FarmingTileUpdateManyWithoutCropNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutCropInputSchema),z.lazy(() => FarmingTileCreateWithoutCropInputSchema).array(),z.lazy(() => FarmingTileUncheckedCreateWithoutCropInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingTileCreateOrConnectWithoutCropInputSchema),z.lazy(() => FarmingTileCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingTileUpsertWithWhereUniqueWithoutCropInputSchema),z.lazy(() => FarmingTileUpsertWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingTileCreateManyCropInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingTileUpdateWithWhereUniqueWithoutCropInputSchema),z.lazy(() => FarmingTileUpdateWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingTileUpdateManyWithWhereWithoutCropInputSchema),z.lazy(() => FarmingTileUpdateManyWithWhereWithoutCropInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingTileScalarWhereInputSchema),z.lazy(() => FarmingTileScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CropQualityUpdateManyWithoutCropNestedInputSchema: z.ZodType<Prisma.CropQualityUpdateManyWithoutCropNestedInput> = z.object({
  create: z.union([ z.lazy(() => CropQualityCreateWithoutCropInputSchema),z.lazy(() => CropQualityCreateWithoutCropInputSchema).array(),z.lazy(() => CropQualityUncheckedCreateWithoutCropInputSchema),z.lazy(() => CropQualityUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CropQualityCreateOrConnectWithoutCropInputSchema),z.lazy(() => CropQualityCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CropQualityUpsertWithWhereUniqueWithoutCropInputSchema),z.lazy(() => CropQualityUpsertWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CropQualityCreateManyCropInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CropQualityWhereUniqueInputSchema),z.lazy(() => CropQualityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CropQualityWhereUniqueInputSchema),z.lazy(() => CropQualityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CropQualityWhereUniqueInputSchema),z.lazy(() => CropQualityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CropQualityWhereUniqueInputSchema),z.lazy(() => CropQualityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CropQualityUpdateWithWhereUniqueWithoutCropInputSchema),z.lazy(() => CropQualityUpdateWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CropQualityUpdateManyWithWhereWithoutCropInputSchema),z.lazy(() => CropQualityUpdateManyWithWhereWithoutCropInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CropQualityScalarWhereInputSchema),z.lazy(() => CropQualityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FarmingSeedUpdateManyWithoutCropNestedInputSchema: z.ZodType<Prisma.FarmingSeedUpdateManyWithoutCropNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutCropInputSchema),z.lazy(() => FarmingSeedCreateWithoutCropInputSchema).array(),z.lazy(() => FarmingSeedUncheckedCreateWithoutCropInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingSeedCreateOrConnectWithoutCropInputSchema),z.lazy(() => FarmingSeedCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingSeedUpsertWithWhereUniqueWithoutCropInputSchema),z.lazy(() => FarmingSeedUpsertWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingSeedCreateManyCropInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingSeedUpdateWithWhereUniqueWithoutCropInputSchema),z.lazy(() => FarmingSeedUpdateWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingSeedUpdateManyWithWhereWithoutCropInputSchema),z.lazy(() => FarmingSeedUpdateManyWithWhereWithoutCropInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingSeedScalarWhereInputSchema),z.lazy(() => FarmingSeedScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FarmingTileUncheckedUpdateManyWithoutCropNestedInputSchema: z.ZodType<Prisma.FarmingTileUncheckedUpdateManyWithoutCropNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutCropInputSchema),z.lazy(() => FarmingTileCreateWithoutCropInputSchema).array(),z.lazy(() => FarmingTileUncheckedCreateWithoutCropInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingTileCreateOrConnectWithoutCropInputSchema),z.lazy(() => FarmingTileCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingTileUpsertWithWhereUniqueWithoutCropInputSchema),z.lazy(() => FarmingTileUpsertWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingTileCreateManyCropInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingTileWhereUniqueInputSchema),z.lazy(() => FarmingTileWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingTileUpdateWithWhereUniqueWithoutCropInputSchema),z.lazy(() => FarmingTileUpdateWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingTileUpdateManyWithWhereWithoutCropInputSchema),z.lazy(() => FarmingTileUpdateManyWithWhereWithoutCropInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingTileScalarWhereInputSchema),z.lazy(() => FarmingTileScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CropQualityUncheckedUpdateManyWithoutCropNestedInputSchema: z.ZodType<Prisma.CropQualityUncheckedUpdateManyWithoutCropNestedInput> = z.object({
  create: z.union([ z.lazy(() => CropQualityCreateWithoutCropInputSchema),z.lazy(() => CropQualityCreateWithoutCropInputSchema).array(),z.lazy(() => CropQualityUncheckedCreateWithoutCropInputSchema),z.lazy(() => CropQualityUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CropQualityCreateOrConnectWithoutCropInputSchema),z.lazy(() => CropQualityCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CropQualityUpsertWithWhereUniqueWithoutCropInputSchema),z.lazy(() => CropQualityUpsertWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CropQualityCreateManyCropInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CropQualityWhereUniqueInputSchema),z.lazy(() => CropQualityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CropQualityWhereUniqueInputSchema),z.lazy(() => CropQualityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CropQualityWhereUniqueInputSchema),z.lazy(() => CropQualityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CropQualityWhereUniqueInputSchema),z.lazy(() => CropQualityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CropQualityUpdateWithWhereUniqueWithoutCropInputSchema),z.lazy(() => CropQualityUpdateWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CropQualityUpdateManyWithWhereWithoutCropInputSchema),z.lazy(() => CropQualityUpdateManyWithWhereWithoutCropInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CropQualityScalarWhereInputSchema),z.lazy(() => CropQualityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FarmingSeedUncheckedUpdateManyWithoutCropNestedInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedUpdateManyWithoutCropNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutCropInputSchema),z.lazy(() => FarmingSeedCreateWithoutCropInputSchema).array(),z.lazy(() => FarmingSeedUncheckedCreateWithoutCropInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutCropInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FarmingSeedCreateOrConnectWithoutCropInputSchema),z.lazy(() => FarmingSeedCreateOrConnectWithoutCropInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FarmingSeedUpsertWithWhereUniqueWithoutCropInputSchema),z.lazy(() => FarmingSeedUpsertWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FarmingSeedCreateManyCropInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FarmingSeedWhereUniqueInputSchema),z.lazy(() => FarmingSeedWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FarmingSeedUpdateWithWhereUniqueWithoutCropInputSchema),z.lazy(() => FarmingSeedUpdateWithWhereUniqueWithoutCropInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FarmingSeedUpdateManyWithWhereWithoutCropInputSchema),z.lazy(() => FarmingSeedUpdateManyWithWhereWithoutCropInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FarmingSeedScalarWhereInputSchema),z.lazy(() => FarmingSeedScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CropCreateNestedOneWithoutRatesInputSchema: z.ZodType<Prisma.CropCreateNestedOneWithoutRatesInput> = z.object({
  create: z.union([ z.lazy(() => CropCreateWithoutRatesInputSchema),z.lazy(() => CropUncheckedCreateWithoutRatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CropCreateOrConnectWithoutRatesInputSchema).optional(),
  connect: z.lazy(() => CropWhereUniqueInputSchema).optional()
}).strict();

export const CropUpdateOneRequiredWithoutRatesNestedInputSchema: z.ZodType<Prisma.CropUpdateOneRequiredWithoutRatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CropCreateWithoutRatesInputSchema),z.lazy(() => CropUncheckedCreateWithoutRatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CropCreateOrConnectWithoutRatesInputSchema).optional(),
  upsert: z.lazy(() => CropUpsertWithoutRatesInputSchema).optional(),
  connect: z.lazy(() => CropWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CropUpdateToOneWithWhereWithoutRatesInputSchema),z.lazy(() => CropUpdateWithoutRatesInputSchema),z.lazy(() => CropUncheckedUpdateWithoutRatesInputSchema) ]).optional(),
}).strict();

export const FarmingCreateNestedOneWithoutSeedsInputSchema: z.ZodType<Prisma.FarmingCreateNestedOneWithoutSeedsInput> = z.object({
  create: z.union([ z.lazy(() => FarmingCreateWithoutSeedsInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutSeedsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FarmingCreateOrConnectWithoutSeedsInputSchema).optional(),
  connect: z.lazy(() => FarmingWhereUniqueInputSchema).optional()
}).strict();

export const CropCreateNestedOneWithoutSeedsInputSchema: z.ZodType<Prisma.CropCreateNestedOneWithoutSeedsInput> = z.object({
  create: z.union([ z.lazy(() => CropCreateWithoutSeedsInputSchema),z.lazy(() => CropUncheckedCreateWithoutSeedsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CropCreateOrConnectWithoutSeedsInputSchema).optional(),
  connect: z.lazy(() => CropWhereUniqueInputSchema).optional()
}).strict();

export const FarmingUpdateOneRequiredWithoutSeedsNestedInputSchema: z.ZodType<Prisma.FarmingUpdateOneRequiredWithoutSeedsNestedInput> = z.object({
  create: z.union([ z.lazy(() => FarmingCreateWithoutSeedsInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutSeedsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FarmingCreateOrConnectWithoutSeedsInputSchema).optional(),
  upsert: z.lazy(() => FarmingUpsertWithoutSeedsInputSchema).optional(),
  connect: z.lazy(() => FarmingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FarmingUpdateToOneWithWhereWithoutSeedsInputSchema),z.lazy(() => FarmingUpdateWithoutSeedsInputSchema),z.lazy(() => FarmingUncheckedUpdateWithoutSeedsInputSchema) ]).optional(),
}).strict();

export const CropUpdateOneRequiredWithoutSeedsNestedInputSchema: z.ZodType<Prisma.CropUpdateOneRequiredWithoutSeedsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CropCreateWithoutSeedsInputSchema),z.lazy(() => CropUncheckedCreateWithoutSeedsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CropCreateOrConnectWithoutSeedsInputSchema).optional(),
  upsert: z.lazy(() => CropUpsertWithoutSeedsInputSchema).optional(),
  connect: z.lazy(() => CropWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CropUpdateToOneWithWhereWithoutSeedsInputSchema),z.lazy(() => CropUpdateWithoutSeedsInputSchema),z.lazy(() => CropUncheckedUpdateWithoutSeedsInputSchema) ]).optional(),
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

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
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

export const NestedEnumParkTypeFilterSchema: z.ZodType<Prisma.NestedEnumParkTypeFilter> = z.object({
  equals: z.lazy(() => ParkTypeSchema).optional(),
  in: z.lazy(() => ParkTypeSchema).array().optional(),
  notIn: z.lazy(() => ParkTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ParkTypeSchema),z.lazy(() => NestedEnumParkTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumParkTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumParkTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ParkTypeSchema).optional(),
  in: z.lazy(() => ParkTypeSchema).array().optional(),
  notIn: z.lazy(() => ParkTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ParkTypeSchema),z.lazy(() => NestedEnumParkTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumParkTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumParkTypeFilterSchema).optional()
}).strict();

export const TeamCreateWithoutRolesInputSchema: z.ZodType<Prisma.TeamCreateWithoutRolesInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutRolesInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
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
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
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
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutTasksInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutTasksInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
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
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingCreateNestedManyWithoutUserInputSchema).optional()
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
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
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
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutTasksInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
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
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUpdateManyWithoutUserNestedInputSchema).optional()
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
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
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
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingCreateNestedManyWithoutUserInputSchema).optional()
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
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
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
  due_date: z.coerce.date(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable(),
  users: z.lazy(() => UserCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();

export const TaskUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  task_creator: z.string().optional().nullable(),
  due_date: z.coerce.date(),
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

export const TeamParentChildCreateWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildCreateWithoutTeam_parent_child_team_aInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_parent_child_team_b: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_child_teamInputSchema).optional()
}).strict();

export const TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_b: z.string().optional().nullable(),
  parent_team: z.string().optional().nullable(),
  child_team: z.string().optional().nullable()
}).strict();

export const TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_aInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInputSchema) ]),
}).strict();

export const TeamParentChildCreateManyTeam_parent_child_team_aInputEnvelopeSchema: z.ZodType<Prisma.TeamParentChildCreateManyTeam_parent_child_team_aInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_aInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeamParentChildCreateWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildCreateWithoutTeam_parent_child_team_bInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_parent_child_team_a: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_child_teamInputSchema).optional()
}).strict();

export const TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_a: z.string().optional().nullable(),
  parent_team: z.string().optional().nullable(),
  child_team: z.string().optional().nullable()
}).strict();

export const TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildCreateOrConnectWithoutTeam_parent_child_team_bInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInputSchema) ]),
}).strict();

export const TeamParentChildCreateManyTeam_parent_child_team_bInputEnvelopeSchema: z.ZodType<Prisma.TeamParentChildCreateManyTeam_parent_child_team_bInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildCreateManyTeam_parent_child_team_bInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeamParentChildCreateWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildCreateWithoutTeam_parent_child_parent_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_parent_child_team_a: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_child_teamInputSchema).optional()
}).strict();

export const TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_a: z.string().optional().nullable(),
  team_b: z.string().optional().nullable(),
  child_team: z.string().optional().nullable()
}).strict();

export const TeamParentChildCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildCreateOrConnectWithoutTeam_parent_child_parent_teamInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema) ]),
}).strict();

export const TeamParentChildCreateManyTeam_parent_child_parent_teamInputEnvelopeSchema: z.ZodType<Prisma.TeamParentChildCreateManyTeam_parent_child_parent_teamInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamParentChildCreateManyTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildCreateManyTeam_parent_child_parent_teamInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeamParentChildCreateWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildCreateWithoutTeam_parent_child_child_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_parent_child_team_a: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamCreateNestedOneWithoutTeam_parent_child_parent_teamInputSchema).optional()
}).strict();

export const TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_a: z.string().optional().nullable(),
  team_b: z.string().optional().nullable(),
  parent_team: z.string().optional().nullable()
}).strict();

export const TeamParentChildCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildCreateOrConnectWithoutTeam_parent_child_child_teamInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema) ]),
}).strict();

export const TeamParentChildCreateManyTeam_parent_child_child_teamInputEnvelopeSchema: z.ZodType<Prisma.TeamParentChildCreateManyTeam_parent_child_child_teamInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamParentChildCreateManyTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildCreateManyTeam_parent_child_child_teamInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeamInvitesCreateWithoutTeamsInputSchema: z.ZodType<Prisma.TeamInvitesCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedOneWithoutTeam_invitesInputSchema).optional()
}).strict();

export const TeamInvitesUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable()
}).strict();

export const TeamInvitesCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.TeamInvitesCreateOrConnectWithoutTeamsInput> = z.object({
  where: z.lazy(() => TeamInvitesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const TeamInvitesCreateManyTeamsInputEnvelopeSchema: z.ZodType<Prisma.TeamInvitesCreateManyTeamsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamInvitesCreateManyTeamsInputSchema),z.lazy(() => TeamInvitesCreateManyTeamsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const VisitedTeamCreateWithoutTeamInputSchema: z.ZodType<Prisma.VisitedTeamCreateWithoutTeamInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVisited_teamInputSchema).optional()
}).strict();

export const VisitedTeamUncheckedCreateWithoutTeamInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedCreateWithoutTeamInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string().optional().nullable()
}).strict();

export const VisitedTeamCreateOrConnectWithoutTeamInputSchema: z.ZodType<Prisma.VisitedTeamCreateOrConnectWithoutTeamInput> = z.object({
  where: z.lazy(() => VisitedTeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutTeamInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutTeamInputSchema) ]),
}).strict();

export const VisitedTeamCreateManyTeamInputEnvelopeSchema: z.ZodType<Prisma.VisitedTeamCreateManyTeamInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VisitedTeamCreateManyTeamInputSchema),z.lazy(() => VisitedTeamCreateManyTeamInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeamActivityCreateWithoutTeamInputSchema: z.ZodType<Prisma.TeamActivityCreateWithoutTeamInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTeam_activityInputSchema).optional(),
  team_activity_type: z.lazy(() => TeamActivityTypeCreateNestedOneWithoutTeam_activityInputSchema).optional()
}).strict();

export const TeamActivityUncheckedCreateWithoutTeamInputSchema: z.ZodType<Prisma.TeamActivityUncheckedCreateWithoutTeamInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  activity_type: z.string().optional().nullable()
}).strict();

export const TeamActivityCreateOrConnectWithoutTeamInputSchema: z.ZodType<Prisma.TeamActivityCreateOrConnectWithoutTeamInput> = z.object({
  where: z.lazy(() => TeamActivityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeamInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeamInputSchema) ]),
}).strict();

export const TeamActivityCreateManyTeamInputEnvelopeSchema: z.ZodType<Prisma.TeamActivityCreateManyTeamInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamActivityCreateManyTeamInputSchema),z.lazy(() => TeamActivityCreateManyTeamInputSchema).array() ]),
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
  user_team: z.lazy(() => UserTeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUpdateManyWithoutUserNestedInputSchema).optional()
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
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
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
  due_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
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

export const TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_aInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateWithoutTeam_parent_child_team_aInputSchema) ]),
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_aInputSchema) ]),
}).strict();

export const TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_aInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamParentChildUpdateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateWithoutTeam_parent_child_team_aInputSchema) ]),
}).strict();

export const TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_aInput> = z.object({
  where: z.lazy(() => TeamParentChildScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamParentChildUpdateManyMutationInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aInputSchema) ]),
}).strict();

export const TeamParentChildScalarWhereInputSchema: z.ZodType<Prisma.TeamParentChildScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamParentChildScalarWhereInputSchema),z.lazy(() => TeamParentChildScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamParentChildScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamParentChildScalarWhereInputSchema),z.lazy(() => TeamParentChildScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  team_a: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_b: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  parent_team: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  child_team: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_team_bInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateWithoutTeam_parent_child_team_bInputSchema) ]),
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_team_bInputSchema) ]),
}).strict();

export const TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_team_bInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamParentChildUpdateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateWithoutTeam_parent_child_team_bInputSchema) ]),
}).strict();

export const TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_team_bInput> = z.object({
  where: z.lazy(() => TeamParentChildScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamParentChildUpdateManyMutationInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bInputSchema) ]),
}).strict();

export const TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_parent_teamInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateWithoutTeam_parent_child_parent_teamInputSchema) ]),
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema) ]),
}).strict();

export const TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_parent_teamInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamParentChildUpdateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateWithoutTeam_parent_child_parent_teamInputSchema) ]),
}).strict();

export const TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_parent_teamInput> = z.object({
  where: z.lazy(() => TeamParentChildScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamParentChildUpdateManyMutationInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamInputSchema) ]),
}).strict();

export const TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildUpsertWithWhereUniqueWithoutTeam_parent_child_child_teamInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamParentChildUpdateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateWithoutTeam_parent_child_child_teamInputSchema) ]),
  create: z.union([ z.lazy(() => TeamParentChildCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema) ]),
}).strict();

export const TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildUpdateWithWhereUniqueWithoutTeam_parent_child_child_teamInput> = z.object({
  where: z.lazy(() => TeamParentChildWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamParentChildUpdateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateWithoutTeam_parent_child_child_teamInputSchema) ]),
}).strict();

export const TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildUpdateManyWithWhereWithoutTeam_parent_child_child_teamInput> = z.object({
  where: z.lazy(() => TeamParentChildScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamParentChildUpdateManyMutationInputSchema),z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamInputSchema) ]),
}).strict();

export const TeamInvitesUpsertWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.TeamInvitesUpsertWithWhereUniqueWithoutTeamsInput> = z.object({
  where: z.lazy(() => TeamInvitesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamInvitesUpdateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const TeamInvitesUpdateWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.TeamInvitesUpdateWithWhereUniqueWithoutTeamsInput> = z.object({
  where: z.lazy(() => TeamInvitesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamInvitesUpdateWithoutTeamsInputSchema),z.lazy(() => TeamInvitesUncheckedUpdateWithoutTeamsInputSchema) ]),
}).strict();

export const TeamInvitesUpdateManyWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.TeamInvitesUpdateManyWithWhereWithoutTeamsInput> = z.object({
  where: z.lazy(() => TeamInvitesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamInvitesUpdateManyMutationInputSchema),z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsInputSchema) ]),
}).strict();

export const TeamInvitesScalarWhereInputSchema: z.ZodType<Prisma.TeamInvitesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamInvitesScalarWhereInputSchema),z.lazy(() => TeamInvitesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamInvitesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamInvitesScalarWhereInputSchema),z.lazy(() => TeamInvitesScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const VisitedTeamUpsertWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.VisitedTeamUpsertWithWhereUniqueWithoutTeamInput> = z.object({
  where: z.lazy(() => VisitedTeamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VisitedTeamUpdateWithoutTeamInputSchema),z.lazy(() => VisitedTeamUncheckedUpdateWithoutTeamInputSchema) ]),
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutTeamInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutTeamInputSchema) ]),
}).strict();

export const VisitedTeamUpdateWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.VisitedTeamUpdateWithWhereUniqueWithoutTeamInput> = z.object({
  where: z.lazy(() => VisitedTeamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VisitedTeamUpdateWithoutTeamInputSchema),z.lazy(() => VisitedTeamUncheckedUpdateWithoutTeamInputSchema) ]),
}).strict();

export const VisitedTeamUpdateManyWithWhereWithoutTeamInputSchema: z.ZodType<Prisma.VisitedTeamUpdateManyWithWhereWithoutTeamInput> = z.object({
  where: z.lazy(() => VisitedTeamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VisitedTeamUpdateManyMutationInputSchema),z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamInputSchema) ]),
}).strict();

export const VisitedTeamScalarWhereInputSchema: z.ZodType<Prisma.VisitedTeamScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VisitedTeamScalarWhereInputSchema),z.lazy(() => VisitedTeamScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisitedTeamScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisitedTeamScalarWhereInputSchema),z.lazy(() => VisitedTeamScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TeamActivityUpsertWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.TeamActivityUpsertWithWhereUniqueWithoutTeamInput> = z.object({
  where: z.lazy(() => TeamActivityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamActivityUpdateWithoutTeamInputSchema),z.lazy(() => TeamActivityUncheckedUpdateWithoutTeamInputSchema) ]),
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeamInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeamInputSchema) ]),
}).strict();

export const TeamActivityUpdateWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.TeamActivityUpdateWithWhereUniqueWithoutTeamInput> = z.object({
  where: z.lazy(() => TeamActivityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamActivityUpdateWithoutTeamInputSchema),z.lazy(() => TeamActivityUncheckedUpdateWithoutTeamInputSchema) ]),
}).strict();

export const TeamActivityUpdateManyWithWhereWithoutTeamInputSchema: z.ZodType<Prisma.TeamActivityUpdateManyWithWhereWithoutTeamInput> = z.object({
  where: z.lazy(() => TeamActivityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamActivityUpdateManyMutationInputSchema),z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamInputSchema) ]),
}).strict();

export const TeamActivityScalarWhereInputSchema: z.ZodType<Prisma.TeamActivityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamActivityScalarWhereInputSchema),z.lazy(() => TeamActivityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamActivityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamActivityScalarWhereInputSchema),z.lazy(() => TeamActivityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  activity_type: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TeamCreateWithoutUser_teamInputSchema: z.ZodType<Prisma.TeamCreateWithoutUser_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutUser_teamInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutUser_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
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
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingCreateNestedManyWithoutUserInputSchema).optional()
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
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
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
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutUser_teamInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutUser_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
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
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUpdateManyWithoutUserNestedInputSchema).optional()
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
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const TaskCreateWithoutUsersInputSchema: z.ZodType<Prisma.TaskCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  due_date: z.coerce.date(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).optional().nullable(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();

export const TaskUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  due_date: z.coerce.date(),
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
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutUsersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const TeamCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.TeamCreateManyUsersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamCreateManyUsersInputSchema),z.lazy(() => TeamCreateManyUsersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeamInvitesCreateWithoutUsersInputSchema: z.ZodType<Prisma.TeamInvitesCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  teams: z.lazy(() => TeamCreateNestedOneWithoutTeam_invitesInputSchema).optional()
}).strict();

export const TeamInvitesUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable()
}).strict();

export const TeamInvitesCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.TeamInvitesCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => TeamInvitesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutUsersInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const TeamInvitesCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.TeamInvitesCreateManyUsersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamInvitesCreateManyUsersInputSchema),z.lazy(() => TeamInvitesCreateManyUsersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const VisitedTeamCreateWithoutUserInputSchema: z.ZodType<Prisma.VisitedTeamCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutVisited_teamInputSchema).optional()
}).strict();

export const VisitedTeamUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  team_id: z.string().optional().nullable()
}).strict();

export const VisitedTeamCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.VisitedTeamCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => VisitedTeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutUserInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const VisitedTeamCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.VisitedTeamCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VisitedTeamCreateManyUserInputSchema),z.lazy(() => VisitedTeamCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeamActivityCreateWithoutUserInputSchema: z.ZodType<Prisma.TeamActivityCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutTeam_activityInputSchema).optional(),
  team_activity_type: z.lazy(() => TeamActivityTypeCreateNestedOneWithoutTeam_activityInputSchema).optional()
}).strict();

export const TeamActivityUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TeamActivityUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  activity_type: z.string().optional().nullable()
}).strict();

export const TeamActivityCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TeamActivityCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => TeamActivityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutUserInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TeamActivityCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TeamActivityCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamActivityCreateManyUserInputSchema),z.lazy(() => TeamActivityCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CookieClickerCreateWithoutUserInputSchema: z.ZodType<Prisma.CookieClickerCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cookie_count: z.bigint().optional(),
  employee_level_1: z.number().int().optional(),
  employee_level_2: z.number().int().optional(),
  employee_level_3: z.number().int().optional(),
  employee_level_4: z.number().int().optional(),
  employee_level_5: z.number().int().optional(),
  employee_level_6: z.number().int().optional()
}).strict();

export const CookieClickerUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CookieClickerUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cookie_count: z.bigint().optional(),
  employee_level_1: z.number().int().optional(),
  employee_level_2: z.number().int().optional(),
  employee_level_3: z.number().int().optional(),
  employee_level_4: z.number().int().optional(),
  employee_level_5: z.number().int().optional(),
  employee_level_6: z.number().int().optional()
}).strict();

export const CookieClickerCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CookieClickerCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => CookieClickerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CookieClickerCreateWithoutUserInputSchema),z.lazy(() => CookieClickerUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CookieClickerCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CookieClickerCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CookieClickerCreateManyUserInputSchema),z.lazy(() => CookieClickerCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const FarmingCreateWithoutUserInputSchema: z.ZodType<Prisma.FarmingCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional(),
  tiles: z.lazy(() => FarmingTileCreateNestedManyWithoutFarmingInputSchema).optional(),
  parks: z.lazy(() => FarmingParkCreateNestedManyWithoutFarmingInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedCreateNestedManyWithoutFarmingInputSchema).optional()
}).strict();

export const FarmingUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.FarmingUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional(),
  tiles: z.lazy(() => FarmingTileUncheckedCreateNestedManyWithoutFarmingInputSchema).optional(),
  parks: z.lazy(() => FarmingParkUncheckedCreateNestedManyWithoutFarmingInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedCreateNestedManyWithoutFarmingInputSchema).optional()
}).strict();

export const FarmingCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.FarmingCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => FarmingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FarmingCreateWithoutUserInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const FarmingCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.FarmingCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FarmingCreateManyUserInputSchema),z.lazy(() => FarmingCreateManyUserInputSchema).array() ]),
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

export const TeamInvitesUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.TeamInvitesUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => TeamInvitesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamInvitesUpdateWithoutUsersInputSchema),z.lazy(() => TeamInvitesUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => TeamInvitesCreateWithoutUsersInputSchema),z.lazy(() => TeamInvitesUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const TeamInvitesUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.TeamInvitesUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => TeamInvitesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamInvitesUpdateWithoutUsersInputSchema),z.lazy(() => TeamInvitesUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const TeamInvitesUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.TeamInvitesUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => TeamInvitesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamInvitesUpdateManyMutationInputSchema),z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export const VisitedTeamUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.VisitedTeamUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => VisitedTeamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VisitedTeamUpdateWithoutUserInputSchema),z.lazy(() => VisitedTeamUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => VisitedTeamCreateWithoutUserInputSchema),z.lazy(() => VisitedTeamUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const VisitedTeamUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.VisitedTeamUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => VisitedTeamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VisitedTeamUpdateWithoutUserInputSchema),z.lazy(() => VisitedTeamUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const VisitedTeamUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.VisitedTeamUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => VisitedTeamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VisitedTeamUpdateManyMutationInputSchema),z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const TeamActivityUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TeamActivityUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TeamActivityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamActivityUpdateWithoutUserInputSchema),z.lazy(() => TeamActivityUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutUserInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TeamActivityUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TeamActivityUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TeamActivityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamActivityUpdateWithoutUserInputSchema),z.lazy(() => TeamActivityUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const TeamActivityUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TeamActivityUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => TeamActivityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamActivityUpdateManyMutationInputSchema),z.lazy(() => TeamActivityUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const CookieClickerUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CookieClickerUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CookieClickerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CookieClickerUpdateWithoutUserInputSchema),z.lazy(() => CookieClickerUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => CookieClickerCreateWithoutUserInputSchema),z.lazy(() => CookieClickerUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CookieClickerUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CookieClickerUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CookieClickerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CookieClickerUpdateWithoutUserInputSchema),z.lazy(() => CookieClickerUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const CookieClickerUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CookieClickerUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => CookieClickerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CookieClickerUpdateManyMutationInputSchema),z.lazy(() => CookieClickerUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const CookieClickerScalarWhereInputSchema: z.ZodType<Prisma.CookieClickerScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CookieClickerScalarWhereInputSchema),z.lazy(() => CookieClickerScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CookieClickerScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CookieClickerScalarWhereInputSchema),z.lazy(() => CookieClickerScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  cookie_count: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  employee_level_1: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  employee_level_2: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  employee_level_3: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  employee_level_4: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  employee_level_5: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  employee_level_6: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const FarmingUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.FarmingUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => FarmingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FarmingUpdateWithoutUserInputSchema),z.lazy(() => FarmingUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => FarmingCreateWithoutUserInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const FarmingUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.FarmingUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => FarmingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FarmingUpdateWithoutUserInputSchema),z.lazy(() => FarmingUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const FarmingUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.FarmingUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => FarmingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FarmingUpdateManyMutationInputSchema),z.lazy(() => FarmingUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const FarmingScalarWhereInputSchema: z.ZodType<Prisma.FarmingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingScalarWhereInputSchema),z.lazy(() => FarmingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingScalarWhereInputSchema),z.lazy(() => FarmingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  exp: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  money: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  parkPoint: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
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
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutUser_roleInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutUser_roleInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
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
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingCreateNestedManyWithoutUserInputSchema).optional()
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
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
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
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutUser_roleInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutUser_roleInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
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
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUpdateManyWithoutUserNestedInputSchema).optional()
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
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const TeamCreateWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamCreateWithoutTeam_parent_child_team_aInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutTeam_parent_child_team_aInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutTeam_parent_child_team_aInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_team_aInputSchema) ]),
}).strict();

export const TeamCreateWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamCreateWithoutTeam_parent_child_team_bInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutTeam_parent_child_team_bInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutTeam_parent_child_team_bInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_team_bInputSchema) ]),
}).strict();

export const TeamCreateWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamCreateWithoutTeam_parent_child_parent_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutTeam_parent_child_parent_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutTeam_parent_child_parent_teamInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema) ]),
}).strict();

export const TeamCreateWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamCreateWithoutTeam_parent_child_child_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutTeam_parent_child_child_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutTeam_parent_child_child_teamInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema) ]),
}).strict();

export const TeamUpsertWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamUpsertWithoutTeam_parent_child_team_aInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_team_aInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_team_aInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutTeam_parent_child_team_aInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutTeam_parent_child_team_aInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_team_aInputSchema) ]),
}).strict();

export const TeamUpdateWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamUpdateWithoutTeam_parent_child_team_aInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutTeam_parent_child_team_aInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUpsertWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamUpsertWithoutTeam_parent_child_team_bInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_team_bInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_team_bInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutTeam_parent_child_team_bInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutTeam_parent_child_team_bInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_team_bInputSchema) ]),
}).strict();

export const TeamUpdateWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamUpdateWithoutTeam_parent_child_team_bInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutTeam_parent_child_team_bInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUpsertWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamUpsertWithoutTeam_parent_child_parent_teamInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_parent_teamInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_parent_teamInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutTeam_parent_child_parent_teamInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutTeam_parent_child_parent_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_parent_teamInputSchema) ]),
}).strict();

export const TeamUpdateWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamUpdateWithoutTeam_parent_child_parent_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutTeam_parent_child_parent_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUpsertWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamUpsertWithoutTeam_parent_child_child_teamInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_child_teamInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_parent_child_child_teamInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutTeam_parent_child_child_teamInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutTeam_parent_child_child_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_parent_child_child_teamInputSchema) ]),
}).strict();

export const TeamUpdateWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamUpdateWithoutTeam_parent_child_child_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutTeam_parent_child_child_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutTeam_invitesInputSchema: z.ZodType<Prisma.UserCreateWithoutTeam_invitesInput> = z.object({
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
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutTeam_invitesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTeam_invitesInput> = z.object({
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
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutTeam_invitesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTeam_invitesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTeam_invitesInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeam_invitesInputSchema) ]),
}).strict();

export const TeamCreateWithoutTeam_invitesInputSchema: z.ZodType<Prisma.TeamCreateWithoutTeam_invitesInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutTeam_invitesInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutTeam_invitesInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutTeam_invitesInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutTeam_invitesInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_invitesInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_invitesInputSchema) ]),
}).strict();

export const UserUpsertWithoutTeam_invitesInputSchema: z.ZodType<Prisma.UserUpsertWithoutTeam_invitesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTeam_invitesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeam_invitesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTeam_invitesInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeam_invitesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutTeam_invitesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTeam_invitesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTeam_invitesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeam_invitesInputSchema) ]),
}).strict();

export const UserUpdateWithoutTeam_invitesInputSchema: z.ZodType<Prisma.UserUpdateWithoutTeam_invitesInput> = z.object({
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
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutTeam_invitesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTeam_invitesInput> = z.object({
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
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const TeamUpsertWithoutTeam_invitesInputSchema: z.ZodType<Prisma.TeamUpsertWithoutTeam_invitesInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutTeam_invitesInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_invitesInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_invitesInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_invitesInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutTeam_invitesInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutTeam_invitesInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutTeam_invitesInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_invitesInputSchema) ]),
}).strict();

export const TeamUpdateWithoutTeam_invitesInputSchema: z.ZodType<Prisma.TeamUpdateWithoutTeam_invitesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutTeam_invitesInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutTeam_invitesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutVisited_teamInputSchema: z.ZodType<Prisma.UserCreateWithoutVisited_teamInput> = z.object({
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
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutUsersInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutVisited_teamInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutVisited_teamInput> = z.object({
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
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutVisited_teamInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutVisited_teamInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutVisited_teamInputSchema),z.lazy(() => UserUncheckedCreateWithoutVisited_teamInputSchema) ]),
}).strict();

export const TeamCreateWithoutVisited_teamInputSchema: z.ZodType<Prisma.TeamCreateWithoutVisited_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutVisited_teamInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutVisited_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutVisited_teamInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutVisited_teamInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutVisited_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutVisited_teamInputSchema) ]),
}).strict();

export const UserUpsertWithoutVisited_teamInputSchema: z.ZodType<Prisma.UserUpsertWithoutVisited_teamInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutVisited_teamInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVisited_teamInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutVisited_teamInputSchema),z.lazy(() => UserUncheckedCreateWithoutVisited_teamInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutVisited_teamInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutVisited_teamInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutVisited_teamInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVisited_teamInputSchema) ]),
}).strict();

export const UserUpdateWithoutVisited_teamInputSchema: z.ZodType<Prisma.UserUpdateWithoutVisited_teamInput> = z.object({
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
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutVisited_teamInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutVisited_teamInput> = z.object({
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
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const TeamUpsertWithoutVisited_teamInputSchema: z.ZodType<Prisma.TeamUpsertWithoutVisited_teamInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutVisited_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutVisited_teamInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutVisited_teamInputSchema),z.lazy(() => TeamUncheckedCreateWithoutVisited_teamInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutVisited_teamInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutVisited_teamInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutVisited_teamInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutVisited_teamInputSchema) ]),
}).strict();

export const TeamUpdateWithoutVisited_teamInputSchema: z.ZodType<Prisma.TeamUpdateWithoutVisited_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutVisited_teamInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutVisited_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamActivityCreateWithoutTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityCreateWithoutTeam_activity_typeInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTeam_activityInputSchema).optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutTeam_activityInputSchema).optional()
}).strict();

export const TeamActivityUncheckedCreateWithoutTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityUncheckedCreateWithoutTeam_activity_typeInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable()
}).strict();

export const TeamActivityCreateOrConnectWithoutTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityCreateOrConnectWithoutTeam_activity_typeInput> = z.object({
  where: z.lazy(() => TeamActivityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeam_activity_typeInputSchema) ]),
}).strict();

export const TeamActivityCreateManyTeam_activity_typeInputEnvelopeSchema: z.ZodType<Prisma.TeamActivityCreateManyTeam_activity_typeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamActivityCreateManyTeam_activity_typeInputSchema),z.lazy(() => TeamActivityCreateManyTeam_activity_typeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeamActivityUpsertWithWhereUniqueWithoutTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityUpsertWithWhereUniqueWithoutTeam_activity_typeInput> = z.object({
  where: z.lazy(() => TeamActivityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamActivityUpdateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUncheckedUpdateWithoutTeam_activity_typeInputSchema) ]),
  create: z.union([ z.lazy(() => TeamActivityCreateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUncheckedCreateWithoutTeam_activity_typeInputSchema) ]),
}).strict();

export const TeamActivityUpdateWithWhereUniqueWithoutTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityUpdateWithWhereUniqueWithoutTeam_activity_typeInput> = z.object({
  where: z.lazy(() => TeamActivityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamActivityUpdateWithoutTeam_activity_typeInputSchema),z.lazy(() => TeamActivityUncheckedUpdateWithoutTeam_activity_typeInputSchema) ]),
}).strict();

export const TeamActivityUpdateManyWithWhereWithoutTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityUpdateManyWithWhereWithoutTeam_activity_typeInput> = z.object({
  where: z.lazy(() => TeamActivityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamActivityUpdateManyMutationInputSchema),z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeam_activity_typeInputSchema) ]),
}).strict();

export const UserCreateWithoutTeam_activityInputSchema: z.ZodType<Prisma.UserCreateWithoutTeam_activityInput> = z.object({
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
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutTeam_activityInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTeam_activityInput> = z.object({
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
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutTeam_activityInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTeam_activityInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTeam_activityInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeam_activityInputSchema) ]),
}).strict();

export const TeamCreateWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamCreateWithoutTeam_activityInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  users: z.lazy(() => UserCreateNestedOneWithoutTeamsInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutTeam_activityInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_name: z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),
  creator: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_aInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_team_bInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_parent_teamInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedCreateNestedManyWithoutTeam_parent_child_child_teamInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutTeamsInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutTeam_activityInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_activityInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_activityInputSchema) ]),
}).strict();

export const TeamActivityTypeCreateWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamActivityTypeCreateWithoutTeam_activityInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  activity_type: z.string()
}).strict();

export const TeamActivityTypeUncheckedCreateWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamActivityTypeUncheckedCreateWithoutTeam_activityInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  activity_type: z.string()
}).strict();

export const TeamActivityTypeCreateOrConnectWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamActivityTypeCreateOrConnectWithoutTeam_activityInput> = z.object({
  where: z.lazy(() => TeamActivityTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamActivityTypeCreateWithoutTeam_activityInputSchema),z.lazy(() => TeamActivityTypeUncheckedCreateWithoutTeam_activityInputSchema) ]),
}).strict();

export const UserUpsertWithoutTeam_activityInputSchema: z.ZodType<Prisma.UserUpsertWithoutTeam_activityInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTeam_activityInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeam_activityInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTeam_activityInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeam_activityInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutTeam_activityInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTeam_activityInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTeam_activityInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeam_activityInputSchema) ]),
}).strict();

export const UserUpdateWithoutTeam_activityInputSchema: z.ZodType<Prisma.UserUpdateWithoutTeam_activityInput> = z.object({
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
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutTeam_activityInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTeam_activityInput> = z.object({
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
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const TeamUpsertWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamUpsertWithoutTeam_activityInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutTeam_activityInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_activityInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeam_activityInputSchema),z.lazy(() => TeamUncheckedCreateWithoutTeam_activityInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutTeam_activityInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutTeam_activityInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutTeam_activityInputSchema) ]),
}).strict();

export const TeamUpdateWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamUpdateWithoutTeam_activityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeamsNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutTeam_activityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamActivityTypeUpsertWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamActivityTypeUpsertWithoutTeam_activityInput> = z.object({
  update: z.union([ z.lazy(() => TeamActivityTypeUpdateWithoutTeam_activityInputSchema),z.lazy(() => TeamActivityTypeUncheckedUpdateWithoutTeam_activityInputSchema) ]),
  create: z.union([ z.lazy(() => TeamActivityTypeCreateWithoutTeam_activityInputSchema),z.lazy(() => TeamActivityTypeUncheckedCreateWithoutTeam_activityInputSchema) ]),
  where: z.lazy(() => TeamActivityTypeWhereInputSchema).optional()
}).strict();

export const TeamActivityTypeUpdateToOneWithWhereWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamActivityTypeUpdateToOneWithWhereWithoutTeam_activityInput> = z.object({
  where: z.lazy(() => TeamActivityTypeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamActivityTypeUpdateWithoutTeam_activityInputSchema),z.lazy(() => TeamActivityTypeUncheckedUpdateWithoutTeam_activityInputSchema) ]),
}).strict();

export const TeamActivityTypeUpdateWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamActivityTypeUpdateWithoutTeam_activityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  activity_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamActivityTypeUncheckedUpdateWithoutTeam_activityInputSchema: z.ZodType<Prisma.TeamActivityTypeUncheckedUpdateWithoutTeam_activityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  activity_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateWithoutCookie_clickerInputSchema: z.ZodType<Prisma.UserCreateWithoutCookie_clickerInput> = z.object({
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
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutCookie_clickerInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCookie_clickerInput> = z.object({
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
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutCookie_clickerInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCookie_clickerInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCookie_clickerInputSchema),z.lazy(() => UserUncheckedCreateWithoutCookie_clickerInputSchema) ]),
}).strict();

export const UserUpsertWithoutCookie_clickerInputSchema: z.ZodType<Prisma.UserUpsertWithoutCookie_clickerInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCookie_clickerInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCookie_clickerInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCookie_clickerInputSchema),z.lazy(() => UserUncheckedCreateWithoutCookie_clickerInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutCookie_clickerInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCookie_clickerInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCookie_clickerInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCookie_clickerInputSchema) ]),
}).strict();

export const UserUpdateWithoutCookie_clickerInputSchema: z.ZodType<Prisma.UserUpdateWithoutCookie_clickerInput> = z.object({
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
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutCookie_clickerInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCookie_clickerInput> = z.object({
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
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  farming: z.lazy(() => FarmingUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutFarmingInputSchema: z.ZodType<Prisma.UserCreateWithoutFarmingInput> = z.object({
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
  teams: z.lazy(() => TeamCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutFarmingInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutFarmingInput> = z.object({
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
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutFarmingInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFarmingInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutFarmingInputSchema),z.lazy(() => UserUncheckedCreateWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingTileCreateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingTileCreateWithoutFarmingInput> = z.object({
  id: z.string().optional(),
  x: z.number().int(),
  y: z.number().int(),
  plantedAt: z.coerce.date().optional().nullable(),
  qualityScore: z.number().int().optional(),
  lastWateredAt: z.coerce.date().optional().nullable(),
  crop: z.lazy(() => CropCreateNestedOneWithoutTilesInputSchema).optional()
}).strict();

export const FarmingTileUncheckedCreateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingTileUncheckedCreateWithoutFarmingInput> = z.object({
  id: z.string().optional(),
  x: z.number().int(),
  y: z.number().int(),
  cropId: z.string().optional().nullable(),
  plantedAt: z.coerce.date().optional().nullable(),
  qualityScore: z.number().int().optional(),
  lastWateredAt: z.coerce.date().optional().nullable()
}).strict();

export const FarmingTileCreateOrConnectWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingTileCreateOrConnectWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingTileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutFarmingInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingTileCreateManyFarmingInputEnvelopeSchema: z.ZodType<Prisma.FarmingTileCreateManyFarmingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FarmingTileCreateManyFarmingInputSchema),z.lazy(() => FarmingTileCreateManyFarmingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const FarmingParkCreateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingParkCreateWithoutFarmingInput> = z.object({
  id: z.string().optional(),
  parkType: z.lazy(() => ParkTypeSchema),
  level: z.number().int().optional()
}).strict();

export const FarmingParkUncheckedCreateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingParkUncheckedCreateWithoutFarmingInput> = z.object({
  id: z.string().optional(),
  parkType: z.lazy(() => ParkTypeSchema),
  level: z.number().int().optional()
}).strict();

export const FarmingParkCreateOrConnectWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingParkCreateOrConnectWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingParkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FarmingParkCreateWithoutFarmingInputSchema),z.lazy(() => FarmingParkUncheckedCreateWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingParkCreateManyFarmingInputEnvelopeSchema: z.ZodType<Prisma.FarmingParkCreateManyFarmingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FarmingParkCreateManyFarmingInputSchema),z.lazy(() => FarmingParkCreateManyFarmingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const FarmingSeedCreateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingSeedCreateWithoutFarmingInput> = z.object({
  id: z.string().optional(),
  count: z.number().int().optional(),
  crop: z.lazy(() => CropCreateNestedOneWithoutSeedsInputSchema)
}).strict();

export const FarmingSeedUncheckedCreateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedCreateWithoutFarmingInput> = z.object({
  id: z.string().optional(),
  cropId: z.string(),
  count: z.number().int().optional()
}).strict();

export const FarmingSeedCreateOrConnectWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingSeedCreateOrConnectWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingSeedWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingSeedCreateManyFarmingInputEnvelopeSchema: z.ZodType<Prisma.FarmingSeedCreateManyFarmingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FarmingSeedCreateManyFarmingInputSchema),z.lazy(() => FarmingSeedCreateManyFarmingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutFarmingInputSchema: z.ZodType<Prisma.UserUpsertWithoutFarmingInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutFarmingInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFarmingInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutFarmingInputSchema),z.lazy(() => UserUncheckedCreateWithoutFarmingInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutFarmingInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFarmingInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutFarmingInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFarmingInputSchema) ]),
}).strict();

export const UserUpdateWithoutFarmingInputSchema: z.ZodType<Prisma.UserUpdateWithoutFarmingInput> = z.object({
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
  teams: z.lazy(() => TeamUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutFarmingInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutFarmingInput> = z.object({
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
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  cookie_clicker: z.lazy(() => CookieClickerUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const FarmingTileUpsertWithWhereUniqueWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingTileUpsertWithWhereUniqueWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingTileWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FarmingTileUpdateWithoutFarmingInputSchema),z.lazy(() => FarmingTileUncheckedUpdateWithoutFarmingInputSchema) ]),
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutFarmingInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingTileUpdateWithWhereUniqueWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingTileUpdateWithWhereUniqueWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingTileWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FarmingTileUpdateWithoutFarmingInputSchema),z.lazy(() => FarmingTileUncheckedUpdateWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingTileUpdateManyWithWhereWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingTileUpdateManyWithWhereWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingTileScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FarmingTileUpdateManyMutationInputSchema),z.lazy(() => FarmingTileUncheckedUpdateManyWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingTileScalarWhereInputSchema: z.ZodType<Prisma.FarmingTileScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingTileScalarWhereInputSchema),z.lazy(() => FarmingTileScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingTileScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingTileScalarWhereInputSchema),z.lazy(() => FarmingTileScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  x: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  y: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  plantedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  qualityScore: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  lastWateredAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const FarmingParkUpsertWithWhereUniqueWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingParkUpsertWithWhereUniqueWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingParkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FarmingParkUpdateWithoutFarmingInputSchema),z.lazy(() => FarmingParkUncheckedUpdateWithoutFarmingInputSchema) ]),
  create: z.union([ z.lazy(() => FarmingParkCreateWithoutFarmingInputSchema),z.lazy(() => FarmingParkUncheckedCreateWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingParkUpdateWithWhereUniqueWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingParkUpdateWithWhereUniqueWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingParkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FarmingParkUpdateWithoutFarmingInputSchema),z.lazy(() => FarmingParkUncheckedUpdateWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingParkUpdateManyWithWhereWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingParkUpdateManyWithWhereWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingParkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FarmingParkUpdateManyMutationInputSchema),z.lazy(() => FarmingParkUncheckedUpdateManyWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingParkScalarWhereInputSchema: z.ZodType<Prisma.FarmingParkScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingParkScalarWhereInputSchema),z.lazy(() => FarmingParkScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingParkScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingParkScalarWhereInputSchema),z.lazy(() => FarmingParkScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  parkType: z.union([ z.lazy(() => EnumParkTypeFilterSchema),z.lazy(() => ParkTypeSchema) ]).optional(),
  level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const FarmingSeedUpsertWithWhereUniqueWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingSeedUpsertWithWhereUniqueWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingSeedWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FarmingSeedUpdateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUncheckedUpdateWithoutFarmingInputSchema) ]),
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingSeedUpdateWithWhereUniqueWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingSeedUpdateWithWhereUniqueWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingSeedWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FarmingSeedUpdateWithoutFarmingInputSchema),z.lazy(() => FarmingSeedUncheckedUpdateWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingSeedUpdateManyWithWhereWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingSeedUpdateManyWithWhereWithoutFarmingInput> = z.object({
  where: z.lazy(() => FarmingSeedScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FarmingSeedUpdateManyMutationInputSchema),z.lazy(() => FarmingSeedUncheckedUpdateManyWithoutFarmingInputSchema) ]),
}).strict();

export const FarmingSeedScalarWhereInputSchema: z.ZodType<Prisma.FarmingSeedScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FarmingSeedScalarWhereInputSchema),z.lazy(() => FarmingSeedScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FarmingSeedScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FarmingSeedScalarWhereInputSchema),z.lazy(() => FarmingSeedScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  farmingId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  count: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const FarmingCreateWithoutTilesInputSchema: z.ZodType<Prisma.FarmingCreateWithoutTilesInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFarmingInputSchema),
  parks: z.lazy(() => FarmingParkCreateNestedManyWithoutFarmingInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedCreateNestedManyWithoutFarmingInputSchema).optional()
}).strict();

export const FarmingUncheckedCreateWithoutTilesInputSchema: z.ZodType<Prisma.FarmingUncheckedCreateWithoutTilesInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional(),
  parks: z.lazy(() => FarmingParkUncheckedCreateNestedManyWithoutFarmingInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedCreateNestedManyWithoutFarmingInputSchema).optional()
}).strict();

export const FarmingCreateOrConnectWithoutTilesInputSchema: z.ZodType<Prisma.FarmingCreateOrConnectWithoutTilesInput> = z.object({
  where: z.lazy(() => FarmingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FarmingCreateWithoutTilesInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutTilesInputSchema) ]),
}).strict();

export const CropCreateWithoutTilesInputSchema: z.ZodType<Prisma.CropCreateWithoutTilesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  displayName: z.string(),
  growTime: z.number().int(),
  seedPrice: z.number().int(),
  bSellPrice: z.number().int(),
  aSellPrice: z.number().int(),
  sSellPrice: z.number().int(),
  bHarvestExp: z.number().int(),
  aHarvestExp: z.number().int(),
  sHarvestExp: z.number().int(),
  waterScore: z.number().int(),
  rates: z.lazy(() => CropQualityCreateNestedManyWithoutCropInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedCreateNestedManyWithoutCropInputSchema).optional()
}).strict();

export const CropUncheckedCreateWithoutTilesInputSchema: z.ZodType<Prisma.CropUncheckedCreateWithoutTilesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  displayName: z.string(),
  growTime: z.number().int(),
  seedPrice: z.number().int(),
  bSellPrice: z.number().int(),
  aSellPrice: z.number().int(),
  sSellPrice: z.number().int(),
  bHarvestExp: z.number().int(),
  aHarvestExp: z.number().int(),
  sHarvestExp: z.number().int(),
  waterScore: z.number().int(),
  rates: z.lazy(() => CropQualityUncheckedCreateNestedManyWithoutCropInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedCreateNestedManyWithoutCropInputSchema).optional()
}).strict();

export const CropCreateOrConnectWithoutTilesInputSchema: z.ZodType<Prisma.CropCreateOrConnectWithoutTilesInput> = z.object({
  where: z.lazy(() => CropWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CropCreateWithoutTilesInputSchema),z.lazy(() => CropUncheckedCreateWithoutTilesInputSchema) ]),
}).strict();

export const FarmingUpsertWithoutTilesInputSchema: z.ZodType<Prisma.FarmingUpsertWithoutTilesInput> = z.object({
  update: z.union([ z.lazy(() => FarmingUpdateWithoutTilesInputSchema),z.lazy(() => FarmingUncheckedUpdateWithoutTilesInputSchema) ]),
  create: z.union([ z.lazy(() => FarmingCreateWithoutTilesInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutTilesInputSchema) ]),
  where: z.lazy(() => FarmingWhereInputSchema).optional()
}).strict();

export const FarmingUpdateToOneWithWhereWithoutTilesInputSchema: z.ZodType<Prisma.FarmingUpdateToOneWithWhereWithoutTilesInput> = z.object({
  where: z.lazy(() => FarmingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FarmingUpdateWithoutTilesInputSchema),z.lazy(() => FarmingUncheckedUpdateWithoutTilesInputSchema) ]),
}).strict();

export const FarmingUpdateWithoutTilesInputSchema: z.ZodType<Prisma.FarmingUpdateWithoutTilesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutFarmingNestedInputSchema).optional(),
  parks: z.lazy(() => FarmingParkUpdateManyWithoutFarmingNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUpdateManyWithoutFarmingNestedInputSchema).optional()
}).strict();

export const FarmingUncheckedUpdateWithoutTilesInputSchema: z.ZodType<Prisma.FarmingUncheckedUpdateWithoutTilesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parks: z.lazy(() => FarmingParkUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional()
}).strict();

export const CropUpsertWithoutTilesInputSchema: z.ZodType<Prisma.CropUpsertWithoutTilesInput> = z.object({
  update: z.union([ z.lazy(() => CropUpdateWithoutTilesInputSchema),z.lazy(() => CropUncheckedUpdateWithoutTilesInputSchema) ]),
  create: z.union([ z.lazy(() => CropCreateWithoutTilesInputSchema),z.lazy(() => CropUncheckedCreateWithoutTilesInputSchema) ]),
  where: z.lazy(() => CropWhereInputSchema).optional()
}).strict();

export const CropUpdateToOneWithWhereWithoutTilesInputSchema: z.ZodType<Prisma.CropUpdateToOneWithWhereWithoutTilesInput> = z.object({
  where: z.lazy(() => CropWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CropUpdateWithoutTilesInputSchema),z.lazy(() => CropUncheckedUpdateWithoutTilesInputSchema) ]),
}).strict();

export const CropUpdateWithoutTilesInputSchema: z.ZodType<Prisma.CropUpdateWithoutTilesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  growTime: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seedPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rates: z.lazy(() => CropQualityUpdateManyWithoutCropNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUpdateManyWithoutCropNestedInputSchema).optional()
}).strict();

export const CropUncheckedUpdateWithoutTilesInputSchema: z.ZodType<Prisma.CropUncheckedUpdateWithoutTilesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  growTime: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seedPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rates: z.lazy(() => CropQualityUncheckedUpdateManyWithoutCropNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedUpdateManyWithoutCropNestedInputSchema).optional()
}).strict();

export const FarmingCreateWithoutParksInputSchema: z.ZodType<Prisma.FarmingCreateWithoutParksInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFarmingInputSchema),
  tiles: z.lazy(() => FarmingTileCreateNestedManyWithoutFarmingInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedCreateNestedManyWithoutFarmingInputSchema).optional()
}).strict();

export const FarmingUncheckedCreateWithoutParksInputSchema: z.ZodType<Prisma.FarmingUncheckedCreateWithoutParksInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional(),
  tiles: z.lazy(() => FarmingTileUncheckedCreateNestedManyWithoutFarmingInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedCreateNestedManyWithoutFarmingInputSchema).optional()
}).strict();

export const FarmingCreateOrConnectWithoutParksInputSchema: z.ZodType<Prisma.FarmingCreateOrConnectWithoutParksInput> = z.object({
  where: z.lazy(() => FarmingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FarmingCreateWithoutParksInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutParksInputSchema) ]),
}).strict();

export const FarmingUpsertWithoutParksInputSchema: z.ZodType<Prisma.FarmingUpsertWithoutParksInput> = z.object({
  update: z.union([ z.lazy(() => FarmingUpdateWithoutParksInputSchema),z.lazy(() => FarmingUncheckedUpdateWithoutParksInputSchema) ]),
  create: z.union([ z.lazy(() => FarmingCreateWithoutParksInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutParksInputSchema) ]),
  where: z.lazy(() => FarmingWhereInputSchema).optional()
}).strict();

export const FarmingUpdateToOneWithWhereWithoutParksInputSchema: z.ZodType<Prisma.FarmingUpdateToOneWithWhereWithoutParksInput> = z.object({
  where: z.lazy(() => FarmingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FarmingUpdateWithoutParksInputSchema),z.lazy(() => FarmingUncheckedUpdateWithoutParksInputSchema) ]),
}).strict();

export const FarmingUpdateWithoutParksInputSchema: z.ZodType<Prisma.FarmingUpdateWithoutParksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutFarmingNestedInputSchema).optional(),
  tiles: z.lazy(() => FarmingTileUpdateManyWithoutFarmingNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUpdateManyWithoutFarmingNestedInputSchema).optional()
}).strict();

export const FarmingUncheckedUpdateWithoutParksInputSchema: z.ZodType<Prisma.FarmingUncheckedUpdateWithoutParksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional()
}).strict();

export const FarmingTileCreateWithoutCropInputSchema: z.ZodType<Prisma.FarmingTileCreateWithoutCropInput> = z.object({
  id: z.string().optional(),
  x: z.number().int(),
  y: z.number().int(),
  plantedAt: z.coerce.date().optional().nullable(),
  qualityScore: z.number().int().optional(),
  lastWateredAt: z.coerce.date().optional().nullable(),
  farming: z.lazy(() => FarmingCreateNestedOneWithoutTilesInputSchema)
}).strict();

export const FarmingTileUncheckedCreateWithoutCropInputSchema: z.ZodType<Prisma.FarmingTileUncheckedCreateWithoutCropInput> = z.object({
  id: z.string().optional(),
  farmingId: z.string(),
  x: z.number().int(),
  y: z.number().int(),
  plantedAt: z.coerce.date().optional().nullable(),
  qualityScore: z.number().int().optional(),
  lastWateredAt: z.coerce.date().optional().nullable()
}).strict();

export const FarmingTileCreateOrConnectWithoutCropInputSchema: z.ZodType<Prisma.FarmingTileCreateOrConnectWithoutCropInput> = z.object({
  where: z.lazy(() => FarmingTileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutCropInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutCropInputSchema) ]),
}).strict();

export const FarmingTileCreateManyCropInputEnvelopeSchema: z.ZodType<Prisma.FarmingTileCreateManyCropInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FarmingTileCreateManyCropInputSchema),z.lazy(() => FarmingTileCreateManyCropInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CropQualityCreateWithoutCropInputSchema: z.ZodType<Prisma.CropQualityCreateWithoutCropInput> = z.object({
  id: z.string().optional(),
  minScore: z.number().int(),
  bRate: z.number().int(),
  aRate: z.number().int(),
  sRate: z.number().int()
}).strict();

export const CropQualityUncheckedCreateWithoutCropInputSchema: z.ZodType<Prisma.CropQualityUncheckedCreateWithoutCropInput> = z.object({
  id: z.string().optional(),
  minScore: z.number().int(),
  bRate: z.number().int(),
  aRate: z.number().int(),
  sRate: z.number().int()
}).strict();

export const CropQualityCreateOrConnectWithoutCropInputSchema: z.ZodType<Prisma.CropQualityCreateOrConnectWithoutCropInput> = z.object({
  where: z.lazy(() => CropQualityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CropQualityCreateWithoutCropInputSchema),z.lazy(() => CropQualityUncheckedCreateWithoutCropInputSchema) ]),
}).strict();

export const CropQualityCreateManyCropInputEnvelopeSchema: z.ZodType<Prisma.CropQualityCreateManyCropInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CropQualityCreateManyCropInputSchema),z.lazy(() => CropQualityCreateManyCropInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const FarmingSeedCreateWithoutCropInputSchema: z.ZodType<Prisma.FarmingSeedCreateWithoutCropInput> = z.object({
  id: z.string().optional(),
  count: z.number().int().optional(),
  farming: z.lazy(() => FarmingCreateNestedOneWithoutSeedsInputSchema)
}).strict();

export const FarmingSeedUncheckedCreateWithoutCropInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedCreateWithoutCropInput> = z.object({
  id: z.string().optional(),
  farmingId: z.string(),
  count: z.number().int().optional()
}).strict();

export const FarmingSeedCreateOrConnectWithoutCropInputSchema: z.ZodType<Prisma.FarmingSeedCreateOrConnectWithoutCropInput> = z.object({
  where: z.lazy(() => FarmingSeedWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutCropInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutCropInputSchema) ]),
}).strict();

export const FarmingSeedCreateManyCropInputEnvelopeSchema: z.ZodType<Prisma.FarmingSeedCreateManyCropInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FarmingSeedCreateManyCropInputSchema),z.lazy(() => FarmingSeedCreateManyCropInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const FarmingTileUpsertWithWhereUniqueWithoutCropInputSchema: z.ZodType<Prisma.FarmingTileUpsertWithWhereUniqueWithoutCropInput> = z.object({
  where: z.lazy(() => FarmingTileWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FarmingTileUpdateWithoutCropInputSchema),z.lazy(() => FarmingTileUncheckedUpdateWithoutCropInputSchema) ]),
  create: z.union([ z.lazy(() => FarmingTileCreateWithoutCropInputSchema),z.lazy(() => FarmingTileUncheckedCreateWithoutCropInputSchema) ]),
}).strict();

export const FarmingTileUpdateWithWhereUniqueWithoutCropInputSchema: z.ZodType<Prisma.FarmingTileUpdateWithWhereUniqueWithoutCropInput> = z.object({
  where: z.lazy(() => FarmingTileWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FarmingTileUpdateWithoutCropInputSchema),z.lazy(() => FarmingTileUncheckedUpdateWithoutCropInputSchema) ]),
}).strict();

export const FarmingTileUpdateManyWithWhereWithoutCropInputSchema: z.ZodType<Prisma.FarmingTileUpdateManyWithWhereWithoutCropInput> = z.object({
  where: z.lazy(() => FarmingTileScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FarmingTileUpdateManyMutationInputSchema),z.lazy(() => FarmingTileUncheckedUpdateManyWithoutCropInputSchema) ]),
}).strict();

export const CropQualityUpsertWithWhereUniqueWithoutCropInputSchema: z.ZodType<Prisma.CropQualityUpsertWithWhereUniqueWithoutCropInput> = z.object({
  where: z.lazy(() => CropQualityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CropQualityUpdateWithoutCropInputSchema),z.lazy(() => CropQualityUncheckedUpdateWithoutCropInputSchema) ]),
  create: z.union([ z.lazy(() => CropQualityCreateWithoutCropInputSchema),z.lazy(() => CropQualityUncheckedCreateWithoutCropInputSchema) ]),
}).strict();

export const CropQualityUpdateWithWhereUniqueWithoutCropInputSchema: z.ZodType<Prisma.CropQualityUpdateWithWhereUniqueWithoutCropInput> = z.object({
  where: z.lazy(() => CropQualityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CropQualityUpdateWithoutCropInputSchema),z.lazy(() => CropQualityUncheckedUpdateWithoutCropInputSchema) ]),
}).strict();

export const CropQualityUpdateManyWithWhereWithoutCropInputSchema: z.ZodType<Prisma.CropQualityUpdateManyWithWhereWithoutCropInput> = z.object({
  where: z.lazy(() => CropQualityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CropQualityUpdateManyMutationInputSchema),z.lazy(() => CropQualityUncheckedUpdateManyWithoutCropInputSchema) ]),
}).strict();

export const CropQualityScalarWhereInputSchema: z.ZodType<Prisma.CropQualityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CropQualityScalarWhereInputSchema),z.lazy(() => CropQualityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CropQualityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CropQualityScalarWhereInputSchema),z.lazy(() => CropQualityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  cropId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  minScore: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bRate: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  aRate: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sRate: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const FarmingSeedUpsertWithWhereUniqueWithoutCropInputSchema: z.ZodType<Prisma.FarmingSeedUpsertWithWhereUniqueWithoutCropInput> = z.object({
  where: z.lazy(() => FarmingSeedWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FarmingSeedUpdateWithoutCropInputSchema),z.lazy(() => FarmingSeedUncheckedUpdateWithoutCropInputSchema) ]),
  create: z.union([ z.lazy(() => FarmingSeedCreateWithoutCropInputSchema),z.lazy(() => FarmingSeedUncheckedCreateWithoutCropInputSchema) ]),
}).strict();

export const FarmingSeedUpdateWithWhereUniqueWithoutCropInputSchema: z.ZodType<Prisma.FarmingSeedUpdateWithWhereUniqueWithoutCropInput> = z.object({
  where: z.lazy(() => FarmingSeedWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FarmingSeedUpdateWithoutCropInputSchema),z.lazy(() => FarmingSeedUncheckedUpdateWithoutCropInputSchema) ]),
}).strict();

export const FarmingSeedUpdateManyWithWhereWithoutCropInputSchema: z.ZodType<Prisma.FarmingSeedUpdateManyWithWhereWithoutCropInput> = z.object({
  where: z.lazy(() => FarmingSeedScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FarmingSeedUpdateManyMutationInputSchema),z.lazy(() => FarmingSeedUncheckedUpdateManyWithoutCropInputSchema) ]),
}).strict();

export const CropCreateWithoutRatesInputSchema: z.ZodType<Prisma.CropCreateWithoutRatesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  displayName: z.string(),
  growTime: z.number().int(),
  seedPrice: z.number().int(),
  bSellPrice: z.number().int(),
  aSellPrice: z.number().int(),
  sSellPrice: z.number().int(),
  bHarvestExp: z.number().int(),
  aHarvestExp: z.number().int(),
  sHarvestExp: z.number().int(),
  waterScore: z.number().int(),
  tiles: z.lazy(() => FarmingTileCreateNestedManyWithoutCropInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedCreateNestedManyWithoutCropInputSchema).optional()
}).strict();

export const CropUncheckedCreateWithoutRatesInputSchema: z.ZodType<Prisma.CropUncheckedCreateWithoutRatesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  displayName: z.string(),
  growTime: z.number().int(),
  seedPrice: z.number().int(),
  bSellPrice: z.number().int(),
  aSellPrice: z.number().int(),
  sSellPrice: z.number().int(),
  bHarvestExp: z.number().int(),
  aHarvestExp: z.number().int(),
  sHarvestExp: z.number().int(),
  waterScore: z.number().int(),
  tiles: z.lazy(() => FarmingTileUncheckedCreateNestedManyWithoutCropInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedCreateNestedManyWithoutCropInputSchema).optional()
}).strict();

export const CropCreateOrConnectWithoutRatesInputSchema: z.ZodType<Prisma.CropCreateOrConnectWithoutRatesInput> = z.object({
  where: z.lazy(() => CropWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CropCreateWithoutRatesInputSchema),z.lazy(() => CropUncheckedCreateWithoutRatesInputSchema) ]),
}).strict();

export const CropUpsertWithoutRatesInputSchema: z.ZodType<Prisma.CropUpsertWithoutRatesInput> = z.object({
  update: z.union([ z.lazy(() => CropUpdateWithoutRatesInputSchema),z.lazy(() => CropUncheckedUpdateWithoutRatesInputSchema) ]),
  create: z.union([ z.lazy(() => CropCreateWithoutRatesInputSchema),z.lazy(() => CropUncheckedCreateWithoutRatesInputSchema) ]),
  where: z.lazy(() => CropWhereInputSchema).optional()
}).strict();

export const CropUpdateToOneWithWhereWithoutRatesInputSchema: z.ZodType<Prisma.CropUpdateToOneWithWhereWithoutRatesInput> = z.object({
  where: z.lazy(() => CropWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CropUpdateWithoutRatesInputSchema),z.lazy(() => CropUncheckedUpdateWithoutRatesInputSchema) ]),
}).strict();

export const CropUpdateWithoutRatesInputSchema: z.ZodType<Prisma.CropUpdateWithoutRatesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  growTime: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seedPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileUpdateManyWithoutCropNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUpdateManyWithoutCropNestedInputSchema).optional()
}).strict();

export const CropUncheckedUpdateWithoutRatesInputSchema: z.ZodType<Prisma.CropUncheckedUpdateWithoutRatesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  growTime: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seedPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileUncheckedUpdateManyWithoutCropNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedUpdateManyWithoutCropNestedInputSchema).optional()
}).strict();

export const FarmingCreateWithoutSeedsInputSchema: z.ZodType<Prisma.FarmingCreateWithoutSeedsInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFarmingInputSchema),
  tiles: z.lazy(() => FarmingTileCreateNestedManyWithoutFarmingInputSchema).optional(),
  parks: z.lazy(() => FarmingParkCreateNestedManyWithoutFarmingInputSchema).optional()
}).strict();

export const FarmingUncheckedCreateWithoutSeedsInputSchema: z.ZodType<Prisma.FarmingUncheckedCreateWithoutSeedsInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional(),
  tiles: z.lazy(() => FarmingTileUncheckedCreateNestedManyWithoutFarmingInputSchema).optional(),
  parks: z.lazy(() => FarmingParkUncheckedCreateNestedManyWithoutFarmingInputSchema).optional()
}).strict();

export const FarmingCreateOrConnectWithoutSeedsInputSchema: z.ZodType<Prisma.FarmingCreateOrConnectWithoutSeedsInput> = z.object({
  where: z.lazy(() => FarmingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FarmingCreateWithoutSeedsInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutSeedsInputSchema) ]),
}).strict();

export const CropCreateWithoutSeedsInputSchema: z.ZodType<Prisma.CropCreateWithoutSeedsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  displayName: z.string(),
  growTime: z.number().int(),
  seedPrice: z.number().int(),
  bSellPrice: z.number().int(),
  aSellPrice: z.number().int(),
  sSellPrice: z.number().int(),
  bHarvestExp: z.number().int(),
  aHarvestExp: z.number().int(),
  sHarvestExp: z.number().int(),
  waterScore: z.number().int(),
  tiles: z.lazy(() => FarmingTileCreateNestedManyWithoutCropInputSchema).optional(),
  rates: z.lazy(() => CropQualityCreateNestedManyWithoutCropInputSchema).optional()
}).strict();

export const CropUncheckedCreateWithoutSeedsInputSchema: z.ZodType<Prisma.CropUncheckedCreateWithoutSeedsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  displayName: z.string(),
  growTime: z.number().int(),
  seedPrice: z.number().int(),
  bSellPrice: z.number().int(),
  aSellPrice: z.number().int(),
  sSellPrice: z.number().int(),
  bHarvestExp: z.number().int(),
  aHarvestExp: z.number().int(),
  sHarvestExp: z.number().int(),
  waterScore: z.number().int(),
  tiles: z.lazy(() => FarmingTileUncheckedCreateNestedManyWithoutCropInputSchema).optional(),
  rates: z.lazy(() => CropQualityUncheckedCreateNestedManyWithoutCropInputSchema).optional()
}).strict();

export const CropCreateOrConnectWithoutSeedsInputSchema: z.ZodType<Prisma.CropCreateOrConnectWithoutSeedsInput> = z.object({
  where: z.lazy(() => CropWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CropCreateWithoutSeedsInputSchema),z.lazy(() => CropUncheckedCreateWithoutSeedsInputSchema) ]),
}).strict();

export const FarmingUpsertWithoutSeedsInputSchema: z.ZodType<Prisma.FarmingUpsertWithoutSeedsInput> = z.object({
  update: z.union([ z.lazy(() => FarmingUpdateWithoutSeedsInputSchema),z.lazy(() => FarmingUncheckedUpdateWithoutSeedsInputSchema) ]),
  create: z.union([ z.lazy(() => FarmingCreateWithoutSeedsInputSchema),z.lazy(() => FarmingUncheckedCreateWithoutSeedsInputSchema) ]),
  where: z.lazy(() => FarmingWhereInputSchema).optional()
}).strict();

export const FarmingUpdateToOneWithWhereWithoutSeedsInputSchema: z.ZodType<Prisma.FarmingUpdateToOneWithWhereWithoutSeedsInput> = z.object({
  where: z.lazy(() => FarmingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FarmingUpdateWithoutSeedsInputSchema),z.lazy(() => FarmingUncheckedUpdateWithoutSeedsInputSchema) ]),
}).strict();

export const FarmingUpdateWithoutSeedsInputSchema: z.ZodType<Prisma.FarmingUpdateWithoutSeedsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutFarmingNestedInputSchema).optional(),
  tiles: z.lazy(() => FarmingTileUpdateManyWithoutFarmingNestedInputSchema).optional(),
  parks: z.lazy(() => FarmingParkUpdateManyWithoutFarmingNestedInputSchema).optional()
}).strict();

export const FarmingUncheckedUpdateWithoutSeedsInputSchema: z.ZodType<Prisma.FarmingUncheckedUpdateWithoutSeedsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional(),
  parks: z.lazy(() => FarmingParkUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional()
}).strict();

export const CropUpsertWithoutSeedsInputSchema: z.ZodType<Prisma.CropUpsertWithoutSeedsInput> = z.object({
  update: z.union([ z.lazy(() => CropUpdateWithoutSeedsInputSchema),z.lazy(() => CropUncheckedUpdateWithoutSeedsInputSchema) ]),
  create: z.union([ z.lazy(() => CropCreateWithoutSeedsInputSchema),z.lazy(() => CropUncheckedCreateWithoutSeedsInputSchema) ]),
  where: z.lazy(() => CropWhereInputSchema).optional()
}).strict();

export const CropUpdateToOneWithWhereWithoutSeedsInputSchema: z.ZodType<Prisma.CropUpdateToOneWithWhereWithoutSeedsInput> = z.object({
  where: z.lazy(() => CropWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CropUpdateWithoutSeedsInputSchema),z.lazy(() => CropUncheckedUpdateWithoutSeedsInputSchema) ]),
}).strict();

export const CropUpdateWithoutSeedsInputSchema: z.ZodType<Prisma.CropUpdateWithoutSeedsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  growTime: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seedPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileUpdateManyWithoutCropNestedInputSchema).optional(),
  rates: z.lazy(() => CropQualityUpdateManyWithoutCropNestedInputSchema).optional()
}).strict();

export const CropUncheckedUpdateWithoutSeedsInputSchema: z.ZodType<Prisma.CropUncheckedUpdateWithoutSeedsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  growTime: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seedPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sSellPrice: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sHarvestExp: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileUncheckedUpdateManyWithoutCropNestedInputSchema).optional(),
  rates: z.lazy(() => CropQualityUncheckedUpdateManyWithoutCropNestedInputSchema).optional()
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
  due_date: z.coerce.date(),
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

export const TeamParentChildCreateManyTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildCreateManyTeam_parent_child_team_aInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_b: z.string().optional().nullable(),
  parent_team: z.string().optional().nullable(),
  child_team: z.string().optional().nullable()
}).strict();

export const TeamParentChildCreateManyTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildCreateManyTeam_parent_child_team_bInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_a: z.string().optional().nullable(),
  parent_team: z.string().optional().nullable(),
  child_team: z.string().optional().nullable()
}).strict();

export const TeamParentChildCreateManyTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildCreateManyTeam_parent_child_parent_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_a: z.string().optional().nullable(),
  team_b: z.string().optional().nullable(),
  child_team: z.string().optional().nullable()
}).strict();

export const TeamParentChildCreateManyTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildCreateManyTeam_parent_child_child_teamInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_a: z.string().optional().nullable(),
  team_b: z.string().optional().nullable(),
  parent_team: z.string().optional().nullable()
}).strict();

export const TeamInvitesCreateManyTeamsInputSchema: z.ZodType<Prisma.TeamInvitesCreateManyTeamsInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string().optional().nullable()
}).strict();

export const VisitedTeamCreateManyTeamInputSchema: z.ZodType<Prisma.VisitedTeamCreateManyTeamInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string().optional().nullable()
}).strict();

export const TeamActivityCreateManyTeamInputSchema: z.ZodType<Prisma.TeamActivityCreateManyTeamInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  activity_type: z.string().optional().nullable()
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
  due_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  users: z.lazy(() => UserUpdateOneWithoutTasksNestedInputSchema).optional()
}).strict();

export const TaskUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TaskUncheckedUpdateManyWithoutTeamsInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_creator: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
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

export const TeamParentChildUpdateWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildUpdateWithoutTeam_parent_child_team_aInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_parent_child_team_b: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_child_teamNestedInputSchema).optional()
}).strict();

export const TeamParentChildUncheckedUpdateWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateWithoutTeam_parent_child_team_aInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_b: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  child_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_b: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  child_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamParentChildUpdateWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildUpdateWithoutTeam_parent_child_team_bInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_parent_child_team_a: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_child_teamNestedInputSchema).optional()
}).strict();

export const TeamParentChildUncheckedUpdateWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateWithoutTeam_parent_child_team_bInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_a: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  child_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_a: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  child_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamParentChildUpdateWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildUpdateWithoutTeam_parent_child_parent_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_parent_child_team_a: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_child_teamNestedInputSchema).optional()
}).strict();

export const TeamParentChildUncheckedUpdateWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateWithoutTeam_parent_child_parent_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_a: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_b: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  child_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_a: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_b: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  child_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamParentChildUpdateWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildUpdateWithoutTeam_parent_child_child_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_parent_child_team_a: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamUpdateOneWithoutTeam_parent_child_parent_teamNestedInputSchema).optional()
}).strict();

export const TeamParentChildUncheckedUpdateWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateWithoutTeam_parent_child_child_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_a: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_b: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamInputSchema: z.ZodType<Prisma.TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_a: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_b: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_team: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamInvitesUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.TeamInvitesUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateOneWithoutTeam_invitesNestedInputSchema).optional()
}).strict();

export const TeamInvitesUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamInvitesUncheckedUpdateManyWithoutTeamsInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedUpdateManyWithoutTeamsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VisitedTeamUpdateWithoutTeamInputSchema: z.ZodType<Prisma.VisitedTeamUpdateWithoutTeamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutVisited_teamNestedInputSchema).optional()
}).strict();

export const VisitedTeamUncheckedUpdateWithoutTeamInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedUpdateWithoutTeamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VisitedTeamUncheckedUpdateManyWithoutTeamInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedUpdateManyWithoutTeamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamActivityUpdateWithoutTeamInputSchema: z.ZodType<Prisma.TeamActivityUpdateWithoutTeamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutTeam_activityNestedInputSchema).optional(),
  team_activity_type: z.lazy(() => TeamActivityTypeUpdateOneWithoutTeam_activityNestedInputSchema).optional()
}).strict();

export const TeamActivityUncheckedUpdateWithoutTeamInputSchema: z.ZodType<Prisma.TeamActivityUncheckedUpdateWithoutTeamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activity_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamActivityUncheckedUpdateManyWithoutTeamInputSchema: z.ZodType<Prisma.TeamActivityUncheckedUpdateManyWithoutTeamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activity_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TaskCreateManyUsersInputSchema: z.ZodType<Prisma.TaskCreateManyUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  due_date: z.coerce.date(),
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

export const TeamInvitesCreateManyUsersInputSchema: z.ZodType<Prisma.TeamInvitesCreateManyUsersInput> = z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  team_id: z.string().optional().nullable()
}).strict();

export const VisitedTeamCreateManyUserInputSchema: z.ZodType<Prisma.VisitedTeamCreateManyUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  team_id: z.string().optional().nullable()
}).strict();

export const TeamActivityCreateManyUserInputSchema: z.ZodType<Prisma.TeamActivityCreateManyUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  team_id: z.string().optional().nullable(),
  activity_type: z.string().optional().nullable()
}).strict();

export const CookieClickerCreateManyUserInputSchema: z.ZodType<Prisma.CookieClickerCreateManyUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cookie_count: z.bigint().optional(),
  employee_level_1: z.number().int().optional(),
  employee_level_2: z.number().int().optional(),
  employee_level_3: z.number().int().optional(),
  employee_level_4: z.number().int().optional(),
  employee_level_5: z.number().int().optional(),
  employee_level_6: z.number().int().optional()
}).strict();

export const FarmingCreateManyUserInputSchema: z.ZodType<Prisma.FarmingCreateManyUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  level: z.number().int().optional(),
  exp: z.bigint().optional(),
  money: z.bigint().optional(),
  parkPoint: z.number().int().optional()
}).strict();

export const TaskUpdateWithoutUsersInputSchema: z.ZodType<Prisma.TaskUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  teams: z.lazy(() => TeamUpdateOneWithoutTasksNestedInputSchema).optional()
}).strict();

export const TaskUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task_title: z.union([ z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  task_description: z.union([ z.string().max(2048, { message: "please keep it  under 2048 characters." }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TaskUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  due_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
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
  user_team: z.lazy(() => UserTeamUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_role: z.lazy(() => UserRoleUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  user_team: z.lazy(() => UserTeamUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  team_parent_child_team_a: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_aNestedInputSchema).optional(),
  team_parent_child_team_b: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_team_bNestedInputSchema).optional(),
  team_parent_child_parent_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_parent_teamNestedInputSchema).optional(),
  team_parent_child_child_team: z.lazy(() => TeamParentChildUncheckedUpdateManyWithoutTeam_parent_child_child_teamNestedInputSchema).optional(),
  team_invites: z.lazy(() => TeamInvitesUncheckedUpdateManyWithoutTeamsNestedInputSchema).optional(),
  visited_team: z.lazy(() => VisitedTeamUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
  team_activity: z.lazy(() => TeamActivityUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_name: z.union([ z.string().min(2, { message: "please use at least 2 characters." }).max(32, { message: "please keep it under 32 characters." }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamInvitesUpdateWithoutUsersInputSchema: z.ZodType<Prisma.TeamInvitesUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUpdateOneWithoutTeam_invitesNestedInputSchema).optional()
}).strict();

export const TeamInvitesUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamInvitesUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.TeamInvitesUncheckedUpdateManyWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VisitedTeamUpdateWithoutUserInputSchema: z.ZodType<Prisma.VisitedTeamUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team: z.lazy(() => TeamUpdateOneWithoutVisited_teamNestedInputSchema).optional()
}).strict();

export const VisitedTeamUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VisitedTeamUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.VisitedTeamUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamActivityUpdateWithoutUserInputSchema: z.ZodType<Prisma.TeamActivityUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team: z.lazy(() => TeamUpdateOneWithoutTeam_activityNestedInputSchema).optional(),
  team_activity_type: z.lazy(() => TeamActivityTypeUpdateOneWithoutTeam_activityNestedInputSchema).optional()
}).strict();

export const TeamActivityUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.TeamActivityUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activity_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamActivityUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.TeamActivityUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activity_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CookieClickerUpdateWithoutUserInputSchema: z.ZodType<Prisma.CookieClickerUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cookie_count: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_1: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_2: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_3: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_4: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_5: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_6: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CookieClickerUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.CookieClickerUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cookie_count: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_1: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_2: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_3: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_4: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_5: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_6: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CookieClickerUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.CookieClickerUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cookie_count: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_1: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_2: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_3: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_4: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_5: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  employee_level_6: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingUpdateWithoutUserInputSchema: z.ZodType<Prisma.FarmingUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileUpdateManyWithoutFarmingNestedInputSchema).optional(),
  parks: z.lazy(() => FarmingParkUpdateManyWithoutFarmingNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUpdateManyWithoutFarmingNestedInputSchema).optional()
}).strict();

export const FarmingUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.FarmingUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tiles: z.lazy(() => FarmingTileUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional(),
  parks: z.lazy(() => FarmingParkUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional(),
  seeds: z.lazy(() => FarmingSeedUncheckedUpdateManyWithoutFarmingNestedInputSchema).optional()
}).strict();

export const FarmingUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.FarmingUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  exp: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  money: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  parkPoint: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamActivityCreateManyTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityCreateManyTeam_activity_typeInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable()
}).strict();

export const TeamActivityUpdateWithoutTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityUpdateWithoutTeam_activity_typeInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutTeam_activityNestedInputSchema).optional(),
  team: z.lazy(() => TeamUpdateOneWithoutTeam_activityNestedInputSchema).optional()
}).strict();

export const TeamActivityUncheckedUpdateWithoutTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityUncheckedUpdateWithoutTeam_activity_typeInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TeamActivityUncheckedUpdateManyWithoutTeam_activity_typeInputSchema: z.ZodType<Prisma.TeamActivityUncheckedUpdateManyWithoutTeam_activity_typeInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const FarmingTileCreateManyFarmingInputSchema: z.ZodType<Prisma.FarmingTileCreateManyFarmingInput> = z.object({
  id: z.string().optional(),
  x: z.number().int(),
  y: z.number().int(),
  cropId: z.string().optional().nullable(),
  plantedAt: z.coerce.date().optional().nullable(),
  qualityScore: z.number().int().optional(),
  lastWateredAt: z.coerce.date().optional().nullable()
}).strict();

export const FarmingParkCreateManyFarmingInputSchema: z.ZodType<Prisma.FarmingParkCreateManyFarmingInput> = z.object({
  id: z.string().optional(),
  parkType: z.lazy(() => ParkTypeSchema),
  level: z.number().int().optional()
}).strict();

export const FarmingSeedCreateManyFarmingInputSchema: z.ZodType<Prisma.FarmingSeedCreateManyFarmingInput> = z.object({
  id: z.string().optional(),
  cropId: z.string(),
  count: z.number().int().optional()
}).strict();

export const FarmingTileUpdateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingTileUpdateWithoutFarmingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  y: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  plantedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualityScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastWateredAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  crop: z.lazy(() => CropUpdateOneWithoutTilesNestedInputSchema).optional()
}).strict();

export const FarmingTileUncheckedUpdateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingTileUncheckedUpdateWithoutFarmingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  y: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cropId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  plantedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualityScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastWateredAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const FarmingTileUncheckedUpdateManyWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingTileUncheckedUpdateManyWithoutFarmingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  y: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cropId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  plantedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualityScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastWateredAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const FarmingParkUpdateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingParkUpdateWithoutFarmingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parkType: z.union([ z.lazy(() => ParkTypeSchema),z.lazy(() => EnumParkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingParkUncheckedUpdateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingParkUncheckedUpdateWithoutFarmingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parkType: z.union([ z.lazy(() => ParkTypeSchema),z.lazy(() => EnumParkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingParkUncheckedUpdateManyWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingParkUncheckedUpdateManyWithoutFarmingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parkType: z.union([ z.lazy(() => ParkTypeSchema),z.lazy(() => EnumParkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingSeedUpdateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingSeedUpdateWithoutFarmingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  crop: z.lazy(() => CropUpdateOneRequiredWithoutSeedsNestedInputSchema).optional()
}).strict();

export const FarmingSeedUncheckedUpdateWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedUpdateWithoutFarmingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cropId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingSeedUncheckedUpdateManyWithoutFarmingInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedUpdateManyWithoutFarmingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cropId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingTileCreateManyCropInputSchema: z.ZodType<Prisma.FarmingTileCreateManyCropInput> = z.object({
  id: z.string().optional(),
  farmingId: z.string(),
  x: z.number().int(),
  y: z.number().int(),
  plantedAt: z.coerce.date().optional().nullable(),
  qualityScore: z.number().int().optional(),
  lastWateredAt: z.coerce.date().optional().nullable()
}).strict();

export const CropQualityCreateManyCropInputSchema: z.ZodType<Prisma.CropQualityCreateManyCropInput> = z.object({
  id: z.string().optional(),
  minScore: z.number().int(),
  bRate: z.number().int(),
  aRate: z.number().int(),
  sRate: z.number().int()
}).strict();

export const FarmingSeedCreateManyCropInputSchema: z.ZodType<Prisma.FarmingSeedCreateManyCropInput> = z.object({
  id: z.string().optional(),
  farmingId: z.string(),
  count: z.number().int().optional()
}).strict();

export const FarmingTileUpdateWithoutCropInputSchema: z.ZodType<Prisma.FarmingTileUpdateWithoutCropInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  y: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  plantedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualityScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastWateredAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  farming: z.lazy(() => FarmingUpdateOneRequiredWithoutTilesNestedInputSchema).optional()
}).strict();

export const FarmingTileUncheckedUpdateWithoutCropInputSchema: z.ZodType<Prisma.FarmingTileUncheckedUpdateWithoutCropInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  farmingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  y: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  plantedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualityScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastWateredAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const FarmingTileUncheckedUpdateManyWithoutCropInputSchema: z.ZodType<Prisma.FarmingTileUncheckedUpdateManyWithoutCropInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  farmingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  y: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  plantedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualityScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastWateredAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CropQualityUpdateWithoutCropInputSchema: z.ZodType<Prisma.CropQualityUpdateWithoutCropInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CropQualityUncheckedUpdateWithoutCropInputSchema: z.ZodType<Prisma.CropQualityUncheckedUpdateWithoutCropInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CropQualityUncheckedUpdateManyWithoutCropInputSchema: z.ZodType<Prisma.CropQualityUncheckedUpdateManyWithoutCropInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  minScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sRate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingSeedUpdateWithoutCropInputSchema: z.ZodType<Prisma.FarmingSeedUpdateWithoutCropInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  farming: z.lazy(() => FarmingUpdateOneRequiredWithoutSeedsNestedInputSchema).optional()
}).strict();

export const FarmingSeedUncheckedUpdateWithoutCropInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedUpdateWithoutCropInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  farmingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FarmingSeedUncheckedUpdateManyWithoutCropInputSchema: z.ZodType<Prisma.FarmingSeedUncheckedUpdateManyWithoutCropInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  farmingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
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

export const TeamParentChildFindFirstArgsSchema: z.ZodType<Prisma.TeamParentChildFindFirstArgs> = z.object({
  select: TeamParentChildSelectSchema.optional(),
  include: TeamParentChildIncludeSchema.optional(),
  where: TeamParentChildWhereInputSchema.optional(),
  orderBy: z.union([ TeamParentChildOrderByWithRelationInputSchema.array(),TeamParentChildOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamParentChildWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamParentChildScalarFieldEnumSchema,TeamParentChildScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamParentChildFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TeamParentChildFindFirstOrThrowArgs> = z.object({
  select: TeamParentChildSelectSchema.optional(),
  include: TeamParentChildIncludeSchema.optional(),
  where: TeamParentChildWhereInputSchema.optional(),
  orderBy: z.union([ TeamParentChildOrderByWithRelationInputSchema.array(),TeamParentChildOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamParentChildWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamParentChildScalarFieldEnumSchema,TeamParentChildScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamParentChildFindManyArgsSchema: z.ZodType<Prisma.TeamParentChildFindManyArgs> = z.object({
  select: TeamParentChildSelectSchema.optional(),
  include: TeamParentChildIncludeSchema.optional(),
  where: TeamParentChildWhereInputSchema.optional(),
  orderBy: z.union([ TeamParentChildOrderByWithRelationInputSchema.array(),TeamParentChildOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamParentChildWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamParentChildScalarFieldEnumSchema,TeamParentChildScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamParentChildAggregateArgsSchema: z.ZodType<Prisma.TeamParentChildAggregateArgs> = z.object({
  where: TeamParentChildWhereInputSchema.optional(),
  orderBy: z.union([ TeamParentChildOrderByWithRelationInputSchema.array(),TeamParentChildOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamParentChildWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamParentChildGroupByArgsSchema: z.ZodType<Prisma.TeamParentChildGroupByArgs> = z.object({
  where: TeamParentChildWhereInputSchema.optional(),
  orderBy: z.union([ TeamParentChildOrderByWithAggregationInputSchema.array(),TeamParentChildOrderByWithAggregationInputSchema ]).optional(),
  by: TeamParentChildScalarFieldEnumSchema.array(),
  having: TeamParentChildScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamParentChildFindUniqueArgsSchema: z.ZodType<Prisma.TeamParentChildFindUniqueArgs> = z.object({
  select: TeamParentChildSelectSchema.optional(),
  include: TeamParentChildIncludeSchema.optional(),
  where: TeamParentChildWhereUniqueInputSchema,
}).strict() ;

export const TeamParentChildFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TeamParentChildFindUniqueOrThrowArgs> = z.object({
  select: TeamParentChildSelectSchema.optional(),
  include: TeamParentChildIncludeSchema.optional(),
  where: TeamParentChildWhereUniqueInputSchema,
}).strict() ;

export const TeamInvitesFindFirstArgsSchema: z.ZodType<Prisma.TeamInvitesFindFirstArgs> = z.object({
  select: TeamInvitesSelectSchema.optional(),
  include: TeamInvitesIncludeSchema.optional(),
  where: TeamInvitesWhereInputSchema.optional(),
  orderBy: z.union([ TeamInvitesOrderByWithRelationInputSchema.array(),TeamInvitesOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamInvitesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamInvitesScalarFieldEnumSchema,TeamInvitesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamInvitesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TeamInvitesFindFirstOrThrowArgs> = z.object({
  select: TeamInvitesSelectSchema.optional(),
  include: TeamInvitesIncludeSchema.optional(),
  where: TeamInvitesWhereInputSchema.optional(),
  orderBy: z.union([ TeamInvitesOrderByWithRelationInputSchema.array(),TeamInvitesOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamInvitesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamInvitesScalarFieldEnumSchema,TeamInvitesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamInvitesFindManyArgsSchema: z.ZodType<Prisma.TeamInvitesFindManyArgs> = z.object({
  select: TeamInvitesSelectSchema.optional(),
  include: TeamInvitesIncludeSchema.optional(),
  where: TeamInvitesWhereInputSchema.optional(),
  orderBy: z.union([ TeamInvitesOrderByWithRelationInputSchema.array(),TeamInvitesOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamInvitesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamInvitesScalarFieldEnumSchema,TeamInvitesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamInvitesAggregateArgsSchema: z.ZodType<Prisma.TeamInvitesAggregateArgs> = z.object({
  where: TeamInvitesWhereInputSchema.optional(),
  orderBy: z.union([ TeamInvitesOrderByWithRelationInputSchema.array(),TeamInvitesOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamInvitesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamInvitesGroupByArgsSchema: z.ZodType<Prisma.TeamInvitesGroupByArgs> = z.object({
  where: TeamInvitesWhereInputSchema.optional(),
  orderBy: z.union([ TeamInvitesOrderByWithAggregationInputSchema.array(),TeamInvitesOrderByWithAggregationInputSchema ]).optional(),
  by: TeamInvitesScalarFieldEnumSchema.array(),
  having: TeamInvitesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamInvitesFindUniqueArgsSchema: z.ZodType<Prisma.TeamInvitesFindUniqueArgs> = z.object({
  select: TeamInvitesSelectSchema.optional(),
  include: TeamInvitesIncludeSchema.optional(),
  where: TeamInvitesWhereUniqueInputSchema,
}).strict() ;

export const TeamInvitesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TeamInvitesFindUniqueOrThrowArgs> = z.object({
  select: TeamInvitesSelectSchema.optional(),
  include: TeamInvitesIncludeSchema.optional(),
  where: TeamInvitesWhereUniqueInputSchema,
}).strict() ;

export const VisitedTeamFindFirstArgsSchema: z.ZodType<Prisma.VisitedTeamFindFirstArgs> = z.object({
  select: VisitedTeamSelectSchema.optional(),
  include: VisitedTeamIncludeSchema.optional(),
  where: VisitedTeamWhereInputSchema.optional(),
  orderBy: z.union([ VisitedTeamOrderByWithRelationInputSchema.array(),VisitedTeamOrderByWithRelationInputSchema ]).optional(),
  cursor: VisitedTeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VisitedTeamScalarFieldEnumSchema,VisitedTeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VisitedTeamFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VisitedTeamFindFirstOrThrowArgs> = z.object({
  select: VisitedTeamSelectSchema.optional(),
  include: VisitedTeamIncludeSchema.optional(),
  where: VisitedTeamWhereInputSchema.optional(),
  orderBy: z.union([ VisitedTeamOrderByWithRelationInputSchema.array(),VisitedTeamOrderByWithRelationInputSchema ]).optional(),
  cursor: VisitedTeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VisitedTeamScalarFieldEnumSchema,VisitedTeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VisitedTeamFindManyArgsSchema: z.ZodType<Prisma.VisitedTeamFindManyArgs> = z.object({
  select: VisitedTeamSelectSchema.optional(),
  include: VisitedTeamIncludeSchema.optional(),
  where: VisitedTeamWhereInputSchema.optional(),
  orderBy: z.union([ VisitedTeamOrderByWithRelationInputSchema.array(),VisitedTeamOrderByWithRelationInputSchema ]).optional(),
  cursor: VisitedTeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VisitedTeamScalarFieldEnumSchema,VisitedTeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VisitedTeamAggregateArgsSchema: z.ZodType<Prisma.VisitedTeamAggregateArgs> = z.object({
  where: VisitedTeamWhereInputSchema.optional(),
  orderBy: z.union([ VisitedTeamOrderByWithRelationInputSchema.array(),VisitedTeamOrderByWithRelationInputSchema ]).optional(),
  cursor: VisitedTeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VisitedTeamGroupByArgsSchema: z.ZodType<Prisma.VisitedTeamGroupByArgs> = z.object({
  where: VisitedTeamWhereInputSchema.optional(),
  orderBy: z.union([ VisitedTeamOrderByWithAggregationInputSchema.array(),VisitedTeamOrderByWithAggregationInputSchema ]).optional(),
  by: VisitedTeamScalarFieldEnumSchema.array(),
  having: VisitedTeamScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VisitedTeamFindUniqueArgsSchema: z.ZodType<Prisma.VisitedTeamFindUniqueArgs> = z.object({
  select: VisitedTeamSelectSchema.optional(),
  include: VisitedTeamIncludeSchema.optional(),
  where: VisitedTeamWhereUniqueInputSchema,
}).strict() ;

export const VisitedTeamFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VisitedTeamFindUniqueOrThrowArgs> = z.object({
  select: VisitedTeamSelectSchema.optional(),
  include: VisitedTeamIncludeSchema.optional(),
  where: VisitedTeamWhereUniqueInputSchema,
}).strict() ;

export const TeamActivityTypeFindFirstArgsSchema: z.ZodType<Prisma.TeamActivityTypeFindFirstArgs> = z.object({
  select: TeamActivityTypeSelectSchema.optional(),
  include: TeamActivityTypeIncludeSchema.optional(),
  where: TeamActivityTypeWhereInputSchema.optional(),
  orderBy: z.union([ TeamActivityTypeOrderByWithRelationInputSchema.array(),TeamActivityTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamActivityTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamActivityTypeScalarFieldEnumSchema,TeamActivityTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamActivityTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TeamActivityTypeFindFirstOrThrowArgs> = z.object({
  select: TeamActivityTypeSelectSchema.optional(),
  include: TeamActivityTypeIncludeSchema.optional(),
  where: TeamActivityTypeWhereInputSchema.optional(),
  orderBy: z.union([ TeamActivityTypeOrderByWithRelationInputSchema.array(),TeamActivityTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamActivityTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamActivityTypeScalarFieldEnumSchema,TeamActivityTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamActivityTypeFindManyArgsSchema: z.ZodType<Prisma.TeamActivityTypeFindManyArgs> = z.object({
  select: TeamActivityTypeSelectSchema.optional(),
  include: TeamActivityTypeIncludeSchema.optional(),
  where: TeamActivityTypeWhereInputSchema.optional(),
  orderBy: z.union([ TeamActivityTypeOrderByWithRelationInputSchema.array(),TeamActivityTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamActivityTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamActivityTypeScalarFieldEnumSchema,TeamActivityTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamActivityTypeAggregateArgsSchema: z.ZodType<Prisma.TeamActivityTypeAggregateArgs> = z.object({
  where: TeamActivityTypeWhereInputSchema.optional(),
  orderBy: z.union([ TeamActivityTypeOrderByWithRelationInputSchema.array(),TeamActivityTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamActivityTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamActivityTypeGroupByArgsSchema: z.ZodType<Prisma.TeamActivityTypeGroupByArgs> = z.object({
  where: TeamActivityTypeWhereInputSchema.optional(),
  orderBy: z.union([ TeamActivityTypeOrderByWithAggregationInputSchema.array(),TeamActivityTypeOrderByWithAggregationInputSchema ]).optional(),
  by: TeamActivityTypeScalarFieldEnumSchema.array(),
  having: TeamActivityTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamActivityTypeFindUniqueArgsSchema: z.ZodType<Prisma.TeamActivityTypeFindUniqueArgs> = z.object({
  select: TeamActivityTypeSelectSchema.optional(),
  include: TeamActivityTypeIncludeSchema.optional(),
  where: TeamActivityTypeWhereUniqueInputSchema,
}).strict() ;

export const TeamActivityTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TeamActivityTypeFindUniqueOrThrowArgs> = z.object({
  select: TeamActivityTypeSelectSchema.optional(),
  include: TeamActivityTypeIncludeSchema.optional(),
  where: TeamActivityTypeWhereUniqueInputSchema,
}).strict() ;

export const TeamActivityFindFirstArgsSchema: z.ZodType<Prisma.TeamActivityFindFirstArgs> = z.object({
  select: TeamActivitySelectSchema.optional(),
  include: TeamActivityIncludeSchema.optional(),
  where: TeamActivityWhereInputSchema.optional(),
  orderBy: z.union([ TeamActivityOrderByWithRelationInputSchema.array(),TeamActivityOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamActivityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamActivityScalarFieldEnumSchema,TeamActivityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamActivityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TeamActivityFindFirstOrThrowArgs> = z.object({
  select: TeamActivitySelectSchema.optional(),
  include: TeamActivityIncludeSchema.optional(),
  where: TeamActivityWhereInputSchema.optional(),
  orderBy: z.union([ TeamActivityOrderByWithRelationInputSchema.array(),TeamActivityOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamActivityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamActivityScalarFieldEnumSchema,TeamActivityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamActivityFindManyArgsSchema: z.ZodType<Prisma.TeamActivityFindManyArgs> = z.object({
  select: TeamActivitySelectSchema.optional(),
  include: TeamActivityIncludeSchema.optional(),
  where: TeamActivityWhereInputSchema.optional(),
  orderBy: z.union([ TeamActivityOrderByWithRelationInputSchema.array(),TeamActivityOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamActivityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamActivityScalarFieldEnumSchema,TeamActivityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamActivityAggregateArgsSchema: z.ZodType<Prisma.TeamActivityAggregateArgs> = z.object({
  where: TeamActivityWhereInputSchema.optional(),
  orderBy: z.union([ TeamActivityOrderByWithRelationInputSchema.array(),TeamActivityOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamActivityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamActivityGroupByArgsSchema: z.ZodType<Prisma.TeamActivityGroupByArgs> = z.object({
  where: TeamActivityWhereInputSchema.optional(),
  orderBy: z.union([ TeamActivityOrderByWithAggregationInputSchema.array(),TeamActivityOrderByWithAggregationInputSchema ]).optional(),
  by: TeamActivityScalarFieldEnumSchema.array(),
  having: TeamActivityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamActivityFindUniqueArgsSchema: z.ZodType<Prisma.TeamActivityFindUniqueArgs> = z.object({
  select: TeamActivitySelectSchema.optional(),
  include: TeamActivityIncludeSchema.optional(),
  where: TeamActivityWhereUniqueInputSchema,
}).strict() ;

export const TeamActivityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TeamActivityFindUniqueOrThrowArgs> = z.object({
  select: TeamActivitySelectSchema.optional(),
  include: TeamActivityIncludeSchema.optional(),
  where: TeamActivityWhereUniqueInputSchema,
}).strict() ;

export const CookieClickerFindFirstArgsSchema: z.ZodType<Prisma.CookieClickerFindFirstArgs> = z.object({
  select: CookieClickerSelectSchema.optional(),
  include: CookieClickerIncludeSchema.optional(),
  where: CookieClickerWhereInputSchema.optional(),
  orderBy: z.union([ CookieClickerOrderByWithRelationInputSchema.array(),CookieClickerOrderByWithRelationInputSchema ]).optional(),
  cursor: CookieClickerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CookieClickerScalarFieldEnumSchema,CookieClickerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CookieClickerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CookieClickerFindFirstOrThrowArgs> = z.object({
  select: CookieClickerSelectSchema.optional(),
  include: CookieClickerIncludeSchema.optional(),
  where: CookieClickerWhereInputSchema.optional(),
  orderBy: z.union([ CookieClickerOrderByWithRelationInputSchema.array(),CookieClickerOrderByWithRelationInputSchema ]).optional(),
  cursor: CookieClickerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CookieClickerScalarFieldEnumSchema,CookieClickerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CookieClickerFindManyArgsSchema: z.ZodType<Prisma.CookieClickerFindManyArgs> = z.object({
  select: CookieClickerSelectSchema.optional(),
  include: CookieClickerIncludeSchema.optional(),
  where: CookieClickerWhereInputSchema.optional(),
  orderBy: z.union([ CookieClickerOrderByWithRelationInputSchema.array(),CookieClickerOrderByWithRelationInputSchema ]).optional(),
  cursor: CookieClickerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CookieClickerScalarFieldEnumSchema,CookieClickerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CookieClickerAggregateArgsSchema: z.ZodType<Prisma.CookieClickerAggregateArgs> = z.object({
  where: CookieClickerWhereInputSchema.optional(),
  orderBy: z.union([ CookieClickerOrderByWithRelationInputSchema.array(),CookieClickerOrderByWithRelationInputSchema ]).optional(),
  cursor: CookieClickerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CookieClickerGroupByArgsSchema: z.ZodType<Prisma.CookieClickerGroupByArgs> = z.object({
  where: CookieClickerWhereInputSchema.optional(),
  orderBy: z.union([ CookieClickerOrderByWithAggregationInputSchema.array(),CookieClickerOrderByWithAggregationInputSchema ]).optional(),
  by: CookieClickerScalarFieldEnumSchema.array(),
  having: CookieClickerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CookieClickerFindUniqueArgsSchema: z.ZodType<Prisma.CookieClickerFindUniqueArgs> = z.object({
  select: CookieClickerSelectSchema.optional(),
  include: CookieClickerIncludeSchema.optional(),
  where: CookieClickerWhereUniqueInputSchema,
}).strict() ;

export const CookieClickerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CookieClickerFindUniqueOrThrowArgs> = z.object({
  select: CookieClickerSelectSchema.optional(),
  include: CookieClickerIncludeSchema.optional(),
  where: CookieClickerWhereUniqueInputSchema,
}).strict() ;

export const FarmingFindFirstArgsSchema: z.ZodType<Prisma.FarmingFindFirstArgs> = z.object({
  select: FarmingSelectSchema.optional(),
  include: FarmingIncludeSchema.optional(),
  where: FarmingWhereInputSchema.optional(),
  orderBy: z.union([ FarmingOrderByWithRelationInputSchema.array(),FarmingOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingScalarFieldEnumSchema,FarmingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FarmingFindFirstOrThrowArgs> = z.object({
  select: FarmingSelectSchema.optional(),
  include: FarmingIncludeSchema.optional(),
  where: FarmingWhereInputSchema.optional(),
  orderBy: z.union([ FarmingOrderByWithRelationInputSchema.array(),FarmingOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingScalarFieldEnumSchema,FarmingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingFindManyArgsSchema: z.ZodType<Prisma.FarmingFindManyArgs> = z.object({
  select: FarmingSelectSchema.optional(),
  include: FarmingIncludeSchema.optional(),
  where: FarmingWhereInputSchema.optional(),
  orderBy: z.union([ FarmingOrderByWithRelationInputSchema.array(),FarmingOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingScalarFieldEnumSchema,FarmingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingAggregateArgsSchema: z.ZodType<Prisma.FarmingAggregateArgs> = z.object({
  where: FarmingWhereInputSchema.optional(),
  orderBy: z.union([ FarmingOrderByWithRelationInputSchema.array(),FarmingOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FarmingGroupByArgsSchema: z.ZodType<Prisma.FarmingGroupByArgs> = z.object({
  where: FarmingWhereInputSchema.optional(),
  orderBy: z.union([ FarmingOrderByWithAggregationInputSchema.array(),FarmingOrderByWithAggregationInputSchema ]).optional(),
  by: FarmingScalarFieldEnumSchema.array(),
  having: FarmingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FarmingFindUniqueArgsSchema: z.ZodType<Prisma.FarmingFindUniqueArgs> = z.object({
  select: FarmingSelectSchema.optional(),
  include: FarmingIncludeSchema.optional(),
  where: FarmingWhereUniqueInputSchema,
}).strict() ;

export const FarmingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FarmingFindUniqueOrThrowArgs> = z.object({
  select: FarmingSelectSchema.optional(),
  include: FarmingIncludeSchema.optional(),
  where: FarmingWhereUniqueInputSchema,
}).strict() ;

export const FarmingTileFindFirstArgsSchema: z.ZodType<Prisma.FarmingTileFindFirstArgs> = z.object({
  select: FarmingTileSelectSchema.optional(),
  include: FarmingTileIncludeSchema.optional(),
  where: FarmingTileWhereInputSchema.optional(),
  orderBy: z.union([ FarmingTileOrderByWithRelationInputSchema.array(),FarmingTileOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingTileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingTileScalarFieldEnumSchema,FarmingTileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingTileFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FarmingTileFindFirstOrThrowArgs> = z.object({
  select: FarmingTileSelectSchema.optional(),
  include: FarmingTileIncludeSchema.optional(),
  where: FarmingTileWhereInputSchema.optional(),
  orderBy: z.union([ FarmingTileOrderByWithRelationInputSchema.array(),FarmingTileOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingTileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingTileScalarFieldEnumSchema,FarmingTileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingTileFindManyArgsSchema: z.ZodType<Prisma.FarmingTileFindManyArgs> = z.object({
  select: FarmingTileSelectSchema.optional(),
  include: FarmingTileIncludeSchema.optional(),
  where: FarmingTileWhereInputSchema.optional(),
  orderBy: z.union([ FarmingTileOrderByWithRelationInputSchema.array(),FarmingTileOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingTileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingTileScalarFieldEnumSchema,FarmingTileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingTileAggregateArgsSchema: z.ZodType<Prisma.FarmingTileAggregateArgs> = z.object({
  where: FarmingTileWhereInputSchema.optional(),
  orderBy: z.union([ FarmingTileOrderByWithRelationInputSchema.array(),FarmingTileOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingTileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FarmingTileGroupByArgsSchema: z.ZodType<Prisma.FarmingTileGroupByArgs> = z.object({
  where: FarmingTileWhereInputSchema.optional(),
  orderBy: z.union([ FarmingTileOrderByWithAggregationInputSchema.array(),FarmingTileOrderByWithAggregationInputSchema ]).optional(),
  by: FarmingTileScalarFieldEnumSchema.array(),
  having: FarmingTileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FarmingTileFindUniqueArgsSchema: z.ZodType<Prisma.FarmingTileFindUniqueArgs> = z.object({
  select: FarmingTileSelectSchema.optional(),
  include: FarmingTileIncludeSchema.optional(),
  where: FarmingTileWhereUniqueInputSchema,
}).strict() ;

export const FarmingTileFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FarmingTileFindUniqueOrThrowArgs> = z.object({
  select: FarmingTileSelectSchema.optional(),
  include: FarmingTileIncludeSchema.optional(),
  where: FarmingTileWhereUniqueInputSchema,
}).strict() ;

export const FarmingParkFindFirstArgsSchema: z.ZodType<Prisma.FarmingParkFindFirstArgs> = z.object({
  select: FarmingParkSelectSchema.optional(),
  include: FarmingParkIncludeSchema.optional(),
  where: FarmingParkWhereInputSchema.optional(),
  orderBy: z.union([ FarmingParkOrderByWithRelationInputSchema.array(),FarmingParkOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingParkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingParkScalarFieldEnumSchema,FarmingParkScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingParkFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FarmingParkFindFirstOrThrowArgs> = z.object({
  select: FarmingParkSelectSchema.optional(),
  include: FarmingParkIncludeSchema.optional(),
  where: FarmingParkWhereInputSchema.optional(),
  orderBy: z.union([ FarmingParkOrderByWithRelationInputSchema.array(),FarmingParkOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingParkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingParkScalarFieldEnumSchema,FarmingParkScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingParkFindManyArgsSchema: z.ZodType<Prisma.FarmingParkFindManyArgs> = z.object({
  select: FarmingParkSelectSchema.optional(),
  include: FarmingParkIncludeSchema.optional(),
  where: FarmingParkWhereInputSchema.optional(),
  orderBy: z.union([ FarmingParkOrderByWithRelationInputSchema.array(),FarmingParkOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingParkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingParkScalarFieldEnumSchema,FarmingParkScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingParkAggregateArgsSchema: z.ZodType<Prisma.FarmingParkAggregateArgs> = z.object({
  where: FarmingParkWhereInputSchema.optional(),
  orderBy: z.union([ FarmingParkOrderByWithRelationInputSchema.array(),FarmingParkOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingParkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FarmingParkGroupByArgsSchema: z.ZodType<Prisma.FarmingParkGroupByArgs> = z.object({
  where: FarmingParkWhereInputSchema.optional(),
  orderBy: z.union([ FarmingParkOrderByWithAggregationInputSchema.array(),FarmingParkOrderByWithAggregationInputSchema ]).optional(),
  by: FarmingParkScalarFieldEnumSchema.array(),
  having: FarmingParkScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FarmingParkFindUniqueArgsSchema: z.ZodType<Prisma.FarmingParkFindUniqueArgs> = z.object({
  select: FarmingParkSelectSchema.optional(),
  include: FarmingParkIncludeSchema.optional(),
  where: FarmingParkWhereUniqueInputSchema,
}).strict() ;

export const FarmingParkFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FarmingParkFindUniqueOrThrowArgs> = z.object({
  select: FarmingParkSelectSchema.optional(),
  include: FarmingParkIncludeSchema.optional(),
  where: FarmingParkWhereUniqueInputSchema,
}).strict() ;

export const CropFindFirstArgsSchema: z.ZodType<Prisma.CropFindFirstArgs> = z.object({
  select: CropSelectSchema.optional(),
  include: CropIncludeSchema.optional(),
  where: CropWhereInputSchema.optional(),
  orderBy: z.union([ CropOrderByWithRelationInputSchema.array(),CropOrderByWithRelationInputSchema ]).optional(),
  cursor: CropWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CropScalarFieldEnumSchema,CropScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CropFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CropFindFirstOrThrowArgs> = z.object({
  select: CropSelectSchema.optional(),
  include: CropIncludeSchema.optional(),
  where: CropWhereInputSchema.optional(),
  orderBy: z.union([ CropOrderByWithRelationInputSchema.array(),CropOrderByWithRelationInputSchema ]).optional(),
  cursor: CropWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CropScalarFieldEnumSchema,CropScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CropFindManyArgsSchema: z.ZodType<Prisma.CropFindManyArgs> = z.object({
  select: CropSelectSchema.optional(),
  include: CropIncludeSchema.optional(),
  where: CropWhereInputSchema.optional(),
  orderBy: z.union([ CropOrderByWithRelationInputSchema.array(),CropOrderByWithRelationInputSchema ]).optional(),
  cursor: CropWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CropScalarFieldEnumSchema,CropScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CropAggregateArgsSchema: z.ZodType<Prisma.CropAggregateArgs> = z.object({
  where: CropWhereInputSchema.optional(),
  orderBy: z.union([ CropOrderByWithRelationInputSchema.array(),CropOrderByWithRelationInputSchema ]).optional(),
  cursor: CropWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CropGroupByArgsSchema: z.ZodType<Prisma.CropGroupByArgs> = z.object({
  where: CropWhereInputSchema.optional(),
  orderBy: z.union([ CropOrderByWithAggregationInputSchema.array(),CropOrderByWithAggregationInputSchema ]).optional(),
  by: CropScalarFieldEnumSchema.array(),
  having: CropScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CropFindUniqueArgsSchema: z.ZodType<Prisma.CropFindUniqueArgs> = z.object({
  select: CropSelectSchema.optional(),
  include: CropIncludeSchema.optional(),
  where: CropWhereUniqueInputSchema,
}).strict() ;

export const CropFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CropFindUniqueOrThrowArgs> = z.object({
  select: CropSelectSchema.optional(),
  include: CropIncludeSchema.optional(),
  where: CropWhereUniqueInputSchema,
}).strict() ;

export const CropQualityFindFirstArgsSchema: z.ZodType<Prisma.CropQualityFindFirstArgs> = z.object({
  select: CropQualitySelectSchema.optional(),
  include: CropQualityIncludeSchema.optional(),
  where: CropQualityWhereInputSchema.optional(),
  orderBy: z.union([ CropQualityOrderByWithRelationInputSchema.array(),CropQualityOrderByWithRelationInputSchema ]).optional(),
  cursor: CropQualityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CropQualityScalarFieldEnumSchema,CropQualityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CropQualityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CropQualityFindFirstOrThrowArgs> = z.object({
  select: CropQualitySelectSchema.optional(),
  include: CropQualityIncludeSchema.optional(),
  where: CropQualityWhereInputSchema.optional(),
  orderBy: z.union([ CropQualityOrderByWithRelationInputSchema.array(),CropQualityOrderByWithRelationInputSchema ]).optional(),
  cursor: CropQualityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CropQualityScalarFieldEnumSchema,CropQualityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CropQualityFindManyArgsSchema: z.ZodType<Prisma.CropQualityFindManyArgs> = z.object({
  select: CropQualitySelectSchema.optional(),
  include: CropQualityIncludeSchema.optional(),
  where: CropQualityWhereInputSchema.optional(),
  orderBy: z.union([ CropQualityOrderByWithRelationInputSchema.array(),CropQualityOrderByWithRelationInputSchema ]).optional(),
  cursor: CropQualityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CropQualityScalarFieldEnumSchema,CropQualityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CropQualityAggregateArgsSchema: z.ZodType<Prisma.CropQualityAggregateArgs> = z.object({
  where: CropQualityWhereInputSchema.optional(),
  orderBy: z.union([ CropQualityOrderByWithRelationInputSchema.array(),CropQualityOrderByWithRelationInputSchema ]).optional(),
  cursor: CropQualityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CropQualityGroupByArgsSchema: z.ZodType<Prisma.CropQualityGroupByArgs> = z.object({
  where: CropQualityWhereInputSchema.optional(),
  orderBy: z.union([ CropQualityOrderByWithAggregationInputSchema.array(),CropQualityOrderByWithAggregationInputSchema ]).optional(),
  by: CropQualityScalarFieldEnumSchema.array(),
  having: CropQualityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CropQualityFindUniqueArgsSchema: z.ZodType<Prisma.CropQualityFindUniqueArgs> = z.object({
  select: CropQualitySelectSchema.optional(),
  include: CropQualityIncludeSchema.optional(),
  where: CropQualityWhereUniqueInputSchema,
}).strict() ;

export const CropQualityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CropQualityFindUniqueOrThrowArgs> = z.object({
  select: CropQualitySelectSchema.optional(),
  include: CropQualityIncludeSchema.optional(),
  where: CropQualityWhereUniqueInputSchema,
}).strict() ;

export const FarmingSeedFindFirstArgsSchema: z.ZodType<Prisma.FarmingSeedFindFirstArgs> = z.object({
  select: FarmingSeedSelectSchema.optional(),
  include: FarmingSeedIncludeSchema.optional(),
  where: FarmingSeedWhereInputSchema.optional(),
  orderBy: z.union([ FarmingSeedOrderByWithRelationInputSchema.array(),FarmingSeedOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingSeedWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingSeedScalarFieldEnumSchema,FarmingSeedScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingSeedFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FarmingSeedFindFirstOrThrowArgs> = z.object({
  select: FarmingSeedSelectSchema.optional(),
  include: FarmingSeedIncludeSchema.optional(),
  where: FarmingSeedWhereInputSchema.optional(),
  orderBy: z.union([ FarmingSeedOrderByWithRelationInputSchema.array(),FarmingSeedOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingSeedWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingSeedScalarFieldEnumSchema,FarmingSeedScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingSeedFindManyArgsSchema: z.ZodType<Prisma.FarmingSeedFindManyArgs> = z.object({
  select: FarmingSeedSelectSchema.optional(),
  include: FarmingSeedIncludeSchema.optional(),
  where: FarmingSeedWhereInputSchema.optional(),
  orderBy: z.union([ FarmingSeedOrderByWithRelationInputSchema.array(),FarmingSeedOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingSeedWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FarmingSeedScalarFieldEnumSchema,FarmingSeedScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FarmingSeedAggregateArgsSchema: z.ZodType<Prisma.FarmingSeedAggregateArgs> = z.object({
  where: FarmingSeedWhereInputSchema.optional(),
  orderBy: z.union([ FarmingSeedOrderByWithRelationInputSchema.array(),FarmingSeedOrderByWithRelationInputSchema ]).optional(),
  cursor: FarmingSeedWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FarmingSeedGroupByArgsSchema: z.ZodType<Prisma.FarmingSeedGroupByArgs> = z.object({
  where: FarmingSeedWhereInputSchema.optional(),
  orderBy: z.union([ FarmingSeedOrderByWithAggregationInputSchema.array(),FarmingSeedOrderByWithAggregationInputSchema ]).optional(),
  by: FarmingSeedScalarFieldEnumSchema.array(),
  having: FarmingSeedScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FarmingSeedFindUniqueArgsSchema: z.ZodType<Prisma.FarmingSeedFindUniqueArgs> = z.object({
  select: FarmingSeedSelectSchema.optional(),
  include: FarmingSeedIncludeSchema.optional(),
  where: FarmingSeedWhereUniqueInputSchema,
}).strict() ;

export const FarmingSeedFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FarmingSeedFindUniqueOrThrowArgs> = z.object({
  select: FarmingSeedSelectSchema.optional(),
  include: FarmingSeedIncludeSchema.optional(),
  where: FarmingSeedWhereUniqueInputSchema,
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

export const RoleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoleCreateManyAndReturnArgs> = z.object({
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

export const TaskCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TaskCreateManyAndReturnArgs> = z.object({
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

export const TeamCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TeamCreateManyAndReturnArgs> = z.object({
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

export const UserTeamCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserTeamCreateManyAndReturnArgs> = z.object({
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

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
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

export const UserRoleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserRoleCreateManyAndReturnArgs> = z.object({
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

export const TeamParentChildCreateArgsSchema: z.ZodType<Prisma.TeamParentChildCreateArgs> = z.object({
  select: TeamParentChildSelectSchema.optional(),
  include: TeamParentChildIncludeSchema.optional(),
  data: z.union([ TeamParentChildCreateInputSchema,TeamParentChildUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const TeamParentChildUpsertArgsSchema: z.ZodType<Prisma.TeamParentChildUpsertArgs> = z.object({
  select: TeamParentChildSelectSchema.optional(),
  include: TeamParentChildIncludeSchema.optional(),
  where: TeamParentChildWhereUniqueInputSchema,
  create: z.union([ TeamParentChildCreateInputSchema,TeamParentChildUncheckedCreateInputSchema ]),
  update: z.union([ TeamParentChildUpdateInputSchema,TeamParentChildUncheckedUpdateInputSchema ]),
}).strict() ;

export const TeamParentChildCreateManyArgsSchema: z.ZodType<Prisma.TeamParentChildCreateManyArgs> = z.object({
  data: z.union([ TeamParentChildCreateManyInputSchema,TeamParentChildCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeamParentChildCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TeamParentChildCreateManyAndReturnArgs> = z.object({
  data: z.union([ TeamParentChildCreateManyInputSchema,TeamParentChildCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeamParentChildDeleteArgsSchema: z.ZodType<Prisma.TeamParentChildDeleteArgs> = z.object({
  select: TeamParentChildSelectSchema.optional(),
  include: TeamParentChildIncludeSchema.optional(),
  where: TeamParentChildWhereUniqueInputSchema,
}).strict() ;

export const TeamParentChildUpdateArgsSchema: z.ZodType<Prisma.TeamParentChildUpdateArgs> = z.object({
  select: TeamParentChildSelectSchema.optional(),
  include: TeamParentChildIncludeSchema.optional(),
  data: z.union([ TeamParentChildUpdateInputSchema,TeamParentChildUncheckedUpdateInputSchema ]),
  where: TeamParentChildWhereUniqueInputSchema,
}).strict() ;

export const TeamParentChildUpdateManyArgsSchema: z.ZodType<Prisma.TeamParentChildUpdateManyArgs> = z.object({
  data: z.union([ TeamParentChildUpdateManyMutationInputSchema,TeamParentChildUncheckedUpdateManyInputSchema ]),
  where: TeamParentChildWhereInputSchema.optional(),
}).strict() ;

export const TeamParentChildDeleteManyArgsSchema: z.ZodType<Prisma.TeamParentChildDeleteManyArgs> = z.object({
  where: TeamParentChildWhereInputSchema.optional(),
}).strict() ;

export const TeamInvitesCreateArgsSchema: z.ZodType<Prisma.TeamInvitesCreateArgs> = z.object({
  select: TeamInvitesSelectSchema.optional(),
  include: TeamInvitesIncludeSchema.optional(),
  data: z.union([ TeamInvitesCreateInputSchema,TeamInvitesUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const TeamInvitesUpsertArgsSchema: z.ZodType<Prisma.TeamInvitesUpsertArgs> = z.object({
  select: TeamInvitesSelectSchema.optional(),
  include: TeamInvitesIncludeSchema.optional(),
  where: TeamInvitesWhereUniqueInputSchema,
  create: z.union([ TeamInvitesCreateInputSchema,TeamInvitesUncheckedCreateInputSchema ]),
  update: z.union([ TeamInvitesUpdateInputSchema,TeamInvitesUncheckedUpdateInputSchema ]),
}).strict() ;

export const TeamInvitesCreateManyArgsSchema: z.ZodType<Prisma.TeamInvitesCreateManyArgs> = z.object({
  data: z.union([ TeamInvitesCreateManyInputSchema,TeamInvitesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeamInvitesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TeamInvitesCreateManyAndReturnArgs> = z.object({
  data: z.union([ TeamInvitesCreateManyInputSchema,TeamInvitesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeamInvitesDeleteArgsSchema: z.ZodType<Prisma.TeamInvitesDeleteArgs> = z.object({
  select: TeamInvitesSelectSchema.optional(),
  include: TeamInvitesIncludeSchema.optional(),
  where: TeamInvitesWhereUniqueInputSchema,
}).strict() ;

export const TeamInvitesUpdateArgsSchema: z.ZodType<Prisma.TeamInvitesUpdateArgs> = z.object({
  select: TeamInvitesSelectSchema.optional(),
  include: TeamInvitesIncludeSchema.optional(),
  data: z.union([ TeamInvitesUpdateInputSchema,TeamInvitesUncheckedUpdateInputSchema ]),
  where: TeamInvitesWhereUniqueInputSchema,
}).strict() ;

export const TeamInvitesUpdateManyArgsSchema: z.ZodType<Prisma.TeamInvitesUpdateManyArgs> = z.object({
  data: z.union([ TeamInvitesUpdateManyMutationInputSchema,TeamInvitesUncheckedUpdateManyInputSchema ]),
  where: TeamInvitesWhereInputSchema.optional(),
}).strict() ;

export const TeamInvitesDeleteManyArgsSchema: z.ZodType<Prisma.TeamInvitesDeleteManyArgs> = z.object({
  where: TeamInvitesWhereInputSchema.optional(),
}).strict() ;

export const VisitedTeamCreateArgsSchema: z.ZodType<Prisma.VisitedTeamCreateArgs> = z.object({
  select: VisitedTeamSelectSchema.optional(),
  include: VisitedTeamIncludeSchema.optional(),
  data: z.union([ VisitedTeamCreateInputSchema,VisitedTeamUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const VisitedTeamUpsertArgsSchema: z.ZodType<Prisma.VisitedTeamUpsertArgs> = z.object({
  select: VisitedTeamSelectSchema.optional(),
  include: VisitedTeamIncludeSchema.optional(),
  where: VisitedTeamWhereUniqueInputSchema,
  create: z.union([ VisitedTeamCreateInputSchema,VisitedTeamUncheckedCreateInputSchema ]),
  update: z.union([ VisitedTeamUpdateInputSchema,VisitedTeamUncheckedUpdateInputSchema ]),
}).strict() ;

export const VisitedTeamCreateManyArgsSchema: z.ZodType<Prisma.VisitedTeamCreateManyArgs> = z.object({
  data: z.union([ VisitedTeamCreateManyInputSchema,VisitedTeamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VisitedTeamCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VisitedTeamCreateManyAndReturnArgs> = z.object({
  data: z.union([ VisitedTeamCreateManyInputSchema,VisitedTeamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VisitedTeamDeleteArgsSchema: z.ZodType<Prisma.VisitedTeamDeleteArgs> = z.object({
  select: VisitedTeamSelectSchema.optional(),
  include: VisitedTeamIncludeSchema.optional(),
  where: VisitedTeamWhereUniqueInputSchema,
}).strict() ;

export const VisitedTeamUpdateArgsSchema: z.ZodType<Prisma.VisitedTeamUpdateArgs> = z.object({
  select: VisitedTeamSelectSchema.optional(),
  include: VisitedTeamIncludeSchema.optional(),
  data: z.union([ VisitedTeamUpdateInputSchema,VisitedTeamUncheckedUpdateInputSchema ]),
  where: VisitedTeamWhereUniqueInputSchema,
}).strict() ;

export const VisitedTeamUpdateManyArgsSchema: z.ZodType<Prisma.VisitedTeamUpdateManyArgs> = z.object({
  data: z.union([ VisitedTeamUpdateManyMutationInputSchema,VisitedTeamUncheckedUpdateManyInputSchema ]),
  where: VisitedTeamWhereInputSchema.optional(),
}).strict() ;

export const VisitedTeamDeleteManyArgsSchema: z.ZodType<Prisma.VisitedTeamDeleteManyArgs> = z.object({
  where: VisitedTeamWhereInputSchema.optional(),
}).strict() ;

export const TeamActivityTypeCreateArgsSchema: z.ZodType<Prisma.TeamActivityTypeCreateArgs> = z.object({
  select: TeamActivityTypeSelectSchema.optional(),
  include: TeamActivityTypeIncludeSchema.optional(),
  data: z.union([ TeamActivityTypeCreateInputSchema,TeamActivityTypeUncheckedCreateInputSchema ]),
}).strict() ;

export const TeamActivityTypeUpsertArgsSchema: z.ZodType<Prisma.TeamActivityTypeUpsertArgs> = z.object({
  select: TeamActivityTypeSelectSchema.optional(),
  include: TeamActivityTypeIncludeSchema.optional(),
  where: TeamActivityTypeWhereUniqueInputSchema,
  create: z.union([ TeamActivityTypeCreateInputSchema,TeamActivityTypeUncheckedCreateInputSchema ]),
  update: z.union([ TeamActivityTypeUpdateInputSchema,TeamActivityTypeUncheckedUpdateInputSchema ]),
}).strict() ;

export const TeamActivityTypeCreateManyArgsSchema: z.ZodType<Prisma.TeamActivityTypeCreateManyArgs> = z.object({
  data: z.union([ TeamActivityTypeCreateManyInputSchema,TeamActivityTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeamActivityTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TeamActivityTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ TeamActivityTypeCreateManyInputSchema,TeamActivityTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeamActivityTypeDeleteArgsSchema: z.ZodType<Prisma.TeamActivityTypeDeleteArgs> = z.object({
  select: TeamActivityTypeSelectSchema.optional(),
  include: TeamActivityTypeIncludeSchema.optional(),
  where: TeamActivityTypeWhereUniqueInputSchema,
}).strict() ;

export const TeamActivityTypeUpdateArgsSchema: z.ZodType<Prisma.TeamActivityTypeUpdateArgs> = z.object({
  select: TeamActivityTypeSelectSchema.optional(),
  include: TeamActivityTypeIncludeSchema.optional(),
  data: z.union([ TeamActivityTypeUpdateInputSchema,TeamActivityTypeUncheckedUpdateInputSchema ]),
  where: TeamActivityTypeWhereUniqueInputSchema,
}).strict() ;

export const TeamActivityTypeUpdateManyArgsSchema: z.ZodType<Prisma.TeamActivityTypeUpdateManyArgs> = z.object({
  data: z.union([ TeamActivityTypeUpdateManyMutationInputSchema,TeamActivityTypeUncheckedUpdateManyInputSchema ]),
  where: TeamActivityTypeWhereInputSchema.optional(),
}).strict() ;

export const TeamActivityTypeDeleteManyArgsSchema: z.ZodType<Prisma.TeamActivityTypeDeleteManyArgs> = z.object({
  where: TeamActivityTypeWhereInputSchema.optional(),
}).strict() ;

export const TeamActivityCreateArgsSchema: z.ZodType<Prisma.TeamActivityCreateArgs> = z.object({
  select: TeamActivitySelectSchema.optional(),
  include: TeamActivityIncludeSchema.optional(),
  data: z.union([ TeamActivityCreateInputSchema,TeamActivityUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const TeamActivityUpsertArgsSchema: z.ZodType<Prisma.TeamActivityUpsertArgs> = z.object({
  select: TeamActivitySelectSchema.optional(),
  include: TeamActivityIncludeSchema.optional(),
  where: TeamActivityWhereUniqueInputSchema,
  create: z.union([ TeamActivityCreateInputSchema,TeamActivityUncheckedCreateInputSchema ]),
  update: z.union([ TeamActivityUpdateInputSchema,TeamActivityUncheckedUpdateInputSchema ]),
}).strict() ;

export const TeamActivityCreateManyArgsSchema: z.ZodType<Prisma.TeamActivityCreateManyArgs> = z.object({
  data: z.union([ TeamActivityCreateManyInputSchema,TeamActivityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeamActivityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TeamActivityCreateManyAndReturnArgs> = z.object({
  data: z.union([ TeamActivityCreateManyInputSchema,TeamActivityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeamActivityDeleteArgsSchema: z.ZodType<Prisma.TeamActivityDeleteArgs> = z.object({
  select: TeamActivitySelectSchema.optional(),
  include: TeamActivityIncludeSchema.optional(),
  where: TeamActivityWhereUniqueInputSchema,
}).strict() ;

export const TeamActivityUpdateArgsSchema: z.ZodType<Prisma.TeamActivityUpdateArgs> = z.object({
  select: TeamActivitySelectSchema.optional(),
  include: TeamActivityIncludeSchema.optional(),
  data: z.union([ TeamActivityUpdateInputSchema,TeamActivityUncheckedUpdateInputSchema ]),
  where: TeamActivityWhereUniqueInputSchema,
}).strict() ;

export const TeamActivityUpdateManyArgsSchema: z.ZodType<Prisma.TeamActivityUpdateManyArgs> = z.object({
  data: z.union([ TeamActivityUpdateManyMutationInputSchema,TeamActivityUncheckedUpdateManyInputSchema ]),
  where: TeamActivityWhereInputSchema.optional(),
}).strict() ;

export const TeamActivityDeleteManyArgsSchema: z.ZodType<Prisma.TeamActivityDeleteManyArgs> = z.object({
  where: TeamActivityWhereInputSchema.optional(),
}).strict() ;

export const CookieClickerCreateArgsSchema: z.ZodType<Prisma.CookieClickerCreateArgs> = z.object({
  select: CookieClickerSelectSchema.optional(),
  include: CookieClickerIncludeSchema.optional(),
  data: z.union([ CookieClickerCreateInputSchema,CookieClickerUncheckedCreateInputSchema ]),
}).strict() ;

export const CookieClickerUpsertArgsSchema: z.ZodType<Prisma.CookieClickerUpsertArgs> = z.object({
  select: CookieClickerSelectSchema.optional(),
  include: CookieClickerIncludeSchema.optional(),
  where: CookieClickerWhereUniqueInputSchema,
  create: z.union([ CookieClickerCreateInputSchema,CookieClickerUncheckedCreateInputSchema ]),
  update: z.union([ CookieClickerUpdateInputSchema,CookieClickerUncheckedUpdateInputSchema ]),
}).strict() ;

export const CookieClickerCreateManyArgsSchema: z.ZodType<Prisma.CookieClickerCreateManyArgs> = z.object({
  data: z.union([ CookieClickerCreateManyInputSchema,CookieClickerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CookieClickerCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CookieClickerCreateManyAndReturnArgs> = z.object({
  data: z.union([ CookieClickerCreateManyInputSchema,CookieClickerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CookieClickerDeleteArgsSchema: z.ZodType<Prisma.CookieClickerDeleteArgs> = z.object({
  select: CookieClickerSelectSchema.optional(),
  include: CookieClickerIncludeSchema.optional(),
  where: CookieClickerWhereUniqueInputSchema,
}).strict() ;

export const CookieClickerUpdateArgsSchema: z.ZodType<Prisma.CookieClickerUpdateArgs> = z.object({
  select: CookieClickerSelectSchema.optional(),
  include: CookieClickerIncludeSchema.optional(),
  data: z.union([ CookieClickerUpdateInputSchema,CookieClickerUncheckedUpdateInputSchema ]),
  where: CookieClickerWhereUniqueInputSchema,
}).strict() ;

export const CookieClickerUpdateManyArgsSchema: z.ZodType<Prisma.CookieClickerUpdateManyArgs> = z.object({
  data: z.union([ CookieClickerUpdateManyMutationInputSchema,CookieClickerUncheckedUpdateManyInputSchema ]),
  where: CookieClickerWhereInputSchema.optional(),
}).strict() ;

export const CookieClickerDeleteManyArgsSchema: z.ZodType<Prisma.CookieClickerDeleteManyArgs> = z.object({
  where: CookieClickerWhereInputSchema.optional(),
}).strict() ;

export const FarmingCreateArgsSchema: z.ZodType<Prisma.FarmingCreateArgs> = z.object({
  select: FarmingSelectSchema.optional(),
  include: FarmingIncludeSchema.optional(),
  data: z.union([ FarmingCreateInputSchema,FarmingUncheckedCreateInputSchema ]),
}).strict() ;

export const FarmingUpsertArgsSchema: z.ZodType<Prisma.FarmingUpsertArgs> = z.object({
  select: FarmingSelectSchema.optional(),
  include: FarmingIncludeSchema.optional(),
  where: FarmingWhereUniqueInputSchema,
  create: z.union([ FarmingCreateInputSchema,FarmingUncheckedCreateInputSchema ]),
  update: z.union([ FarmingUpdateInputSchema,FarmingUncheckedUpdateInputSchema ]),
}).strict() ;

export const FarmingCreateManyArgsSchema: z.ZodType<Prisma.FarmingCreateManyArgs> = z.object({
  data: z.union([ FarmingCreateManyInputSchema,FarmingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FarmingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FarmingCreateManyAndReturnArgs> = z.object({
  data: z.union([ FarmingCreateManyInputSchema,FarmingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FarmingDeleteArgsSchema: z.ZodType<Prisma.FarmingDeleteArgs> = z.object({
  select: FarmingSelectSchema.optional(),
  include: FarmingIncludeSchema.optional(),
  where: FarmingWhereUniqueInputSchema,
}).strict() ;

export const FarmingUpdateArgsSchema: z.ZodType<Prisma.FarmingUpdateArgs> = z.object({
  select: FarmingSelectSchema.optional(),
  include: FarmingIncludeSchema.optional(),
  data: z.union([ FarmingUpdateInputSchema,FarmingUncheckedUpdateInputSchema ]),
  where: FarmingWhereUniqueInputSchema,
}).strict() ;

export const FarmingUpdateManyArgsSchema: z.ZodType<Prisma.FarmingUpdateManyArgs> = z.object({
  data: z.union([ FarmingUpdateManyMutationInputSchema,FarmingUncheckedUpdateManyInputSchema ]),
  where: FarmingWhereInputSchema.optional(),
}).strict() ;

export const FarmingDeleteManyArgsSchema: z.ZodType<Prisma.FarmingDeleteManyArgs> = z.object({
  where: FarmingWhereInputSchema.optional(),
}).strict() ;

export const FarmingTileCreateArgsSchema: z.ZodType<Prisma.FarmingTileCreateArgs> = z.object({
  select: FarmingTileSelectSchema.optional(),
  include: FarmingTileIncludeSchema.optional(),
  data: z.union([ FarmingTileCreateInputSchema,FarmingTileUncheckedCreateInputSchema ]),
}).strict() ;

export const FarmingTileUpsertArgsSchema: z.ZodType<Prisma.FarmingTileUpsertArgs> = z.object({
  select: FarmingTileSelectSchema.optional(),
  include: FarmingTileIncludeSchema.optional(),
  where: FarmingTileWhereUniqueInputSchema,
  create: z.union([ FarmingTileCreateInputSchema,FarmingTileUncheckedCreateInputSchema ]),
  update: z.union([ FarmingTileUpdateInputSchema,FarmingTileUncheckedUpdateInputSchema ]),
}).strict() ;

export const FarmingTileCreateManyArgsSchema: z.ZodType<Prisma.FarmingTileCreateManyArgs> = z.object({
  data: z.union([ FarmingTileCreateManyInputSchema,FarmingTileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FarmingTileCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FarmingTileCreateManyAndReturnArgs> = z.object({
  data: z.union([ FarmingTileCreateManyInputSchema,FarmingTileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FarmingTileDeleteArgsSchema: z.ZodType<Prisma.FarmingTileDeleteArgs> = z.object({
  select: FarmingTileSelectSchema.optional(),
  include: FarmingTileIncludeSchema.optional(),
  where: FarmingTileWhereUniqueInputSchema,
}).strict() ;

export const FarmingTileUpdateArgsSchema: z.ZodType<Prisma.FarmingTileUpdateArgs> = z.object({
  select: FarmingTileSelectSchema.optional(),
  include: FarmingTileIncludeSchema.optional(),
  data: z.union([ FarmingTileUpdateInputSchema,FarmingTileUncheckedUpdateInputSchema ]),
  where: FarmingTileWhereUniqueInputSchema,
}).strict() ;

export const FarmingTileUpdateManyArgsSchema: z.ZodType<Prisma.FarmingTileUpdateManyArgs> = z.object({
  data: z.union([ FarmingTileUpdateManyMutationInputSchema,FarmingTileUncheckedUpdateManyInputSchema ]),
  where: FarmingTileWhereInputSchema.optional(),
}).strict() ;

export const FarmingTileDeleteManyArgsSchema: z.ZodType<Prisma.FarmingTileDeleteManyArgs> = z.object({
  where: FarmingTileWhereInputSchema.optional(),
}).strict() ;

export const FarmingParkCreateArgsSchema: z.ZodType<Prisma.FarmingParkCreateArgs> = z.object({
  select: FarmingParkSelectSchema.optional(),
  include: FarmingParkIncludeSchema.optional(),
  data: z.union([ FarmingParkCreateInputSchema,FarmingParkUncheckedCreateInputSchema ]),
}).strict() ;

export const FarmingParkUpsertArgsSchema: z.ZodType<Prisma.FarmingParkUpsertArgs> = z.object({
  select: FarmingParkSelectSchema.optional(),
  include: FarmingParkIncludeSchema.optional(),
  where: FarmingParkWhereUniqueInputSchema,
  create: z.union([ FarmingParkCreateInputSchema,FarmingParkUncheckedCreateInputSchema ]),
  update: z.union([ FarmingParkUpdateInputSchema,FarmingParkUncheckedUpdateInputSchema ]),
}).strict() ;

export const FarmingParkCreateManyArgsSchema: z.ZodType<Prisma.FarmingParkCreateManyArgs> = z.object({
  data: z.union([ FarmingParkCreateManyInputSchema,FarmingParkCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FarmingParkCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FarmingParkCreateManyAndReturnArgs> = z.object({
  data: z.union([ FarmingParkCreateManyInputSchema,FarmingParkCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FarmingParkDeleteArgsSchema: z.ZodType<Prisma.FarmingParkDeleteArgs> = z.object({
  select: FarmingParkSelectSchema.optional(),
  include: FarmingParkIncludeSchema.optional(),
  where: FarmingParkWhereUniqueInputSchema,
}).strict() ;

export const FarmingParkUpdateArgsSchema: z.ZodType<Prisma.FarmingParkUpdateArgs> = z.object({
  select: FarmingParkSelectSchema.optional(),
  include: FarmingParkIncludeSchema.optional(),
  data: z.union([ FarmingParkUpdateInputSchema,FarmingParkUncheckedUpdateInputSchema ]),
  where: FarmingParkWhereUniqueInputSchema,
}).strict() ;

export const FarmingParkUpdateManyArgsSchema: z.ZodType<Prisma.FarmingParkUpdateManyArgs> = z.object({
  data: z.union([ FarmingParkUpdateManyMutationInputSchema,FarmingParkUncheckedUpdateManyInputSchema ]),
  where: FarmingParkWhereInputSchema.optional(),
}).strict() ;

export const FarmingParkDeleteManyArgsSchema: z.ZodType<Prisma.FarmingParkDeleteManyArgs> = z.object({
  where: FarmingParkWhereInputSchema.optional(),
}).strict() ;

export const CropCreateArgsSchema: z.ZodType<Prisma.CropCreateArgs> = z.object({
  select: CropSelectSchema.optional(),
  include: CropIncludeSchema.optional(),
  data: z.union([ CropCreateInputSchema,CropUncheckedCreateInputSchema ]),
}).strict() ;

export const CropUpsertArgsSchema: z.ZodType<Prisma.CropUpsertArgs> = z.object({
  select: CropSelectSchema.optional(),
  include: CropIncludeSchema.optional(),
  where: CropWhereUniqueInputSchema,
  create: z.union([ CropCreateInputSchema,CropUncheckedCreateInputSchema ]),
  update: z.union([ CropUpdateInputSchema,CropUncheckedUpdateInputSchema ]),
}).strict() ;

export const CropCreateManyArgsSchema: z.ZodType<Prisma.CropCreateManyArgs> = z.object({
  data: z.union([ CropCreateManyInputSchema,CropCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CropCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CropCreateManyAndReturnArgs> = z.object({
  data: z.union([ CropCreateManyInputSchema,CropCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CropDeleteArgsSchema: z.ZodType<Prisma.CropDeleteArgs> = z.object({
  select: CropSelectSchema.optional(),
  include: CropIncludeSchema.optional(),
  where: CropWhereUniqueInputSchema,
}).strict() ;

export const CropUpdateArgsSchema: z.ZodType<Prisma.CropUpdateArgs> = z.object({
  select: CropSelectSchema.optional(),
  include: CropIncludeSchema.optional(),
  data: z.union([ CropUpdateInputSchema,CropUncheckedUpdateInputSchema ]),
  where: CropWhereUniqueInputSchema,
}).strict() ;

export const CropUpdateManyArgsSchema: z.ZodType<Prisma.CropUpdateManyArgs> = z.object({
  data: z.union([ CropUpdateManyMutationInputSchema,CropUncheckedUpdateManyInputSchema ]),
  where: CropWhereInputSchema.optional(),
}).strict() ;

export const CropDeleteManyArgsSchema: z.ZodType<Prisma.CropDeleteManyArgs> = z.object({
  where: CropWhereInputSchema.optional(),
}).strict() ;

export const CropQualityCreateArgsSchema: z.ZodType<Prisma.CropQualityCreateArgs> = z.object({
  select: CropQualitySelectSchema.optional(),
  include: CropQualityIncludeSchema.optional(),
  data: z.union([ CropQualityCreateInputSchema,CropQualityUncheckedCreateInputSchema ]),
}).strict() ;

export const CropQualityUpsertArgsSchema: z.ZodType<Prisma.CropQualityUpsertArgs> = z.object({
  select: CropQualitySelectSchema.optional(),
  include: CropQualityIncludeSchema.optional(),
  where: CropQualityWhereUniqueInputSchema,
  create: z.union([ CropQualityCreateInputSchema,CropQualityUncheckedCreateInputSchema ]),
  update: z.union([ CropQualityUpdateInputSchema,CropQualityUncheckedUpdateInputSchema ]),
}).strict() ;

export const CropQualityCreateManyArgsSchema: z.ZodType<Prisma.CropQualityCreateManyArgs> = z.object({
  data: z.union([ CropQualityCreateManyInputSchema,CropQualityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CropQualityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CropQualityCreateManyAndReturnArgs> = z.object({
  data: z.union([ CropQualityCreateManyInputSchema,CropQualityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CropQualityDeleteArgsSchema: z.ZodType<Prisma.CropQualityDeleteArgs> = z.object({
  select: CropQualitySelectSchema.optional(),
  include: CropQualityIncludeSchema.optional(),
  where: CropQualityWhereUniqueInputSchema,
}).strict() ;

export const CropQualityUpdateArgsSchema: z.ZodType<Prisma.CropQualityUpdateArgs> = z.object({
  select: CropQualitySelectSchema.optional(),
  include: CropQualityIncludeSchema.optional(),
  data: z.union([ CropQualityUpdateInputSchema,CropQualityUncheckedUpdateInputSchema ]),
  where: CropQualityWhereUniqueInputSchema,
}).strict() ;

export const CropQualityUpdateManyArgsSchema: z.ZodType<Prisma.CropQualityUpdateManyArgs> = z.object({
  data: z.union([ CropQualityUpdateManyMutationInputSchema,CropQualityUncheckedUpdateManyInputSchema ]),
  where: CropQualityWhereInputSchema.optional(),
}).strict() ;

export const CropQualityDeleteManyArgsSchema: z.ZodType<Prisma.CropQualityDeleteManyArgs> = z.object({
  where: CropQualityWhereInputSchema.optional(),
}).strict() ;

export const FarmingSeedCreateArgsSchema: z.ZodType<Prisma.FarmingSeedCreateArgs> = z.object({
  select: FarmingSeedSelectSchema.optional(),
  include: FarmingSeedIncludeSchema.optional(),
  data: z.union([ FarmingSeedCreateInputSchema,FarmingSeedUncheckedCreateInputSchema ]),
}).strict() ;

export const FarmingSeedUpsertArgsSchema: z.ZodType<Prisma.FarmingSeedUpsertArgs> = z.object({
  select: FarmingSeedSelectSchema.optional(),
  include: FarmingSeedIncludeSchema.optional(),
  where: FarmingSeedWhereUniqueInputSchema,
  create: z.union([ FarmingSeedCreateInputSchema,FarmingSeedUncheckedCreateInputSchema ]),
  update: z.union([ FarmingSeedUpdateInputSchema,FarmingSeedUncheckedUpdateInputSchema ]),
}).strict() ;

export const FarmingSeedCreateManyArgsSchema: z.ZodType<Prisma.FarmingSeedCreateManyArgs> = z.object({
  data: z.union([ FarmingSeedCreateManyInputSchema,FarmingSeedCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FarmingSeedCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FarmingSeedCreateManyAndReturnArgs> = z.object({
  data: z.union([ FarmingSeedCreateManyInputSchema,FarmingSeedCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FarmingSeedDeleteArgsSchema: z.ZodType<Prisma.FarmingSeedDeleteArgs> = z.object({
  select: FarmingSeedSelectSchema.optional(),
  include: FarmingSeedIncludeSchema.optional(),
  where: FarmingSeedWhereUniqueInputSchema,
}).strict() ;

export const FarmingSeedUpdateArgsSchema: z.ZodType<Prisma.FarmingSeedUpdateArgs> = z.object({
  select: FarmingSeedSelectSchema.optional(),
  include: FarmingSeedIncludeSchema.optional(),
  data: z.union([ FarmingSeedUpdateInputSchema,FarmingSeedUncheckedUpdateInputSchema ]),
  where: FarmingSeedWhereUniqueInputSchema,
}).strict() ;

export const FarmingSeedUpdateManyArgsSchema: z.ZodType<Prisma.FarmingSeedUpdateManyArgs> = z.object({
  data: z.union([ FarmingSeedUpdateManyMutationInputSchema,FarmingSeedUncheckedUpdateManyInputSchema ]),
  where: FarmingSeedWhereInputSchema.optional(),
}).strict() ;

export const FarmingSeedDeleteManyArgsSchema: z.ZodType<Prisma.FarmingSeedDeleteManyArgs> = z.object({
  where: FarmingSeedWhereInputSchema.optional(),
}).strict() ;