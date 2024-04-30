import { User } from '@/payload-types'
import { ExpressContext } from '@/server'
import { TRPCError, initTRPC } from '@trpc/server'
import { PayloadRequest } from 'payload/types'

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<ExpressContext>().create();
const middleware = t.middleware

const isAuth = middleware(async ({ ctx, next }) => {
  const req = ctx.req as PayloadRequest

  const { user } = req as { user: User | null }

  if (!user || !user.id) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return next({
    ctx: {
      user,
    },
  })
})
// Base router and procedure helpers
export const router = t.router
export const publicProcedure = t.procedure
export const privateProcedure = t.procedure.use(isAuth)