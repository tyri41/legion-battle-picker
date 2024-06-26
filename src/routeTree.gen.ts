/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PickerImport } from './routes/picker'
import { Route as BuilderImport } from './routes/builder'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const PickerRoute = PickerImport.update({
  path: '/picker',
  getParentRoute: () => rootRoute,
} as any)

const BuilderRoute = BuilderImport.update({
  path: '/builder',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/builder': {
      preLoaderRoute: typeof BuilderImport
      parentRoute: typeof rootRoute
    }
    '/picker': {
      preLoaderRoute: typeof PickerImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  BuilderRoute,
  PickerRoute,
])

/* prettier-ignore-end */
