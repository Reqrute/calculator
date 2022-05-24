import React from 'react'

import { PageLayout } from '@/layouts'
import Header from '@/components/Header/ClassHeader'

import {
    Card,
    Title,
    ThemeSelector,
    ThemeSelectorContainer,
    Button,
    SettignsContainer,
} from '../components'

import { changeTheme, clearHistory } from '@/actions'
import { connect } from 'react-redux'

const themes = [
    {
        value: 'light',
        label: 'Light theme',
    },
    {
        value: 'dark',
        label: 'Dark theme',
    },
    {
        value: 'colored',
        label: 'Colored theme',
    },
]

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
      this.state = { error: null, errorInfo: null }
    }
    
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo,
      })
    }
    
    render() {
      if (this.state.errorInfo) {
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        )
      }
      return this.props.children
    }  
  }

class Settigns extends React.Component {
    handleChange = event => {
        this.props.changeTheme(event.target.value)
    }

    handleDeleteAllHistory = () => {
        this.props.clearHistory()
    }

    render() {
        return (
            <PageLayout>
                <ErrorBoundary>
                    <Card>
                        <Header />
                        <SettignsContainer>
                            <Title>Settigns </Title>
                            <p>Switch theme</p>
                            <ThemeSelectorContainer>
                                <ThemeSelector
                                    onChange={this.handleChange}
                                    value={this.props.currentTheme}>
                                    {themes.map(item => (
                                        <option
                                            key={item.value}
                                            value={item.value}
                                            >
                                            {item.label}
                                        </option>
                                    ))}
                                </ThemeSelector>
                            </ThemeSelectorContainer>
                            <Button onClick={this.handleDeleteAllHistory}>
                                Clear All History
                            </Button>
                        </SettignsContainer>
                    </Card>
                </ErrorBoundary>
            </PageLayout>
        )
    }
}

const mapStateToProps = state => ({
    currentTheme: state.theme.currentTheme,
})

export default connect(mapStateToProps, {
    changeTheme,
    clearHistory,
})(Settigns)