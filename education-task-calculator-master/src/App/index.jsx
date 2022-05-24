import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { HOME_PAGE_ROUTE_FUNCTIONAL,
  SETTIGNS_PAGE_ROUTE_FUNCTIONAL,
  HOME_PAGE_ROUTE_CLASSES,
  SETTIGNS_PAGE_ROUTE_CLASSES,
} from '@/constants'

import Loader from '@/components/Loader'
import { useSelector } from 'react-redux'

import {
  lightTheme,
  darkTheme,
  coloredTheme,
} from '@/theme'

import { ThemeProvider } from 'styled-components'

const HomeFunctionalPage = lazy(() => import('@/pages/Home/FunctionalPage/Home'))
const SettignsFunctionalPage = lazy(() => import('@/pages/Settings/FunctionalSettings'))
const HomeCLassPage = lazy(() => import('@/pages/Home/ClassPage'))
const SettignsClassPage = lazy(() => import('@/pages/Settings/ClassSettings/index'))

export default () => {

  const { currentTheme } = useSelector(state => state.theme)

  const handleThemeChange = selectedTheme => {
    switch (selectedTheme) {
      case 'light':
        return lightTheme
      case 'dark':
        return darkTheme
      case 'colored':
        return coloredTheme
      default:
        return lightTheme
    }
  }

  return (
  <Suspense fallback={<Loader />}>
    <ThemeProvider
          theme={handleThemeChange(currentTheme)}>
        <Switch>
          <Route
            exact
            path={HOME_PAGE_ROUTE_FUNCTIONAL}
            component={HomeFunctionalPage}
          />
          <Route
            path={SETTIGNS_PAGE_ROUTE_FUNCTIONAL}
            component={SettignsFunctionalPage}
          />
          <Route
            path={HOME_PAGE_ROUTE_CLASSES}
            component={HomeCLassPage}
          />
          <Route
            path={SETTIGNS_PAGE_ROUTE_CLASSES}
            component={SettignsClassPage}
          />
        </Switch>
    </ThemeProvider>
  </Suspense>
)}
