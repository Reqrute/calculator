import React from 'react'

import { PageLayout } from '@/layouts'
import Header from '@/components/Header/ClassHeader'
import Calculator from '@/components/Calculator/Control/ClassControl/Control'

import { Card } from '../components'

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

class Home extends React.Component {
    render() {
        return (
            <PageLayout>
                <ErrorBoundary>
                    <Card>
                        <Header />
                        <Calculator />
                    </Card>
                </ErrorBoundary>
            </PageLayout>
        )
    }
}

export default Home
