import React from 'react'

import { PageLayout } from '@/layouts'

import Header from '@/components/Header/FunctionalHeader/Header'
import Calculator from '@/components/Calculator/Control/FunctionalControl/Control'
import { Card } from '../components'

const Home = () => {
    return (
        <PageLayout>
            <Card>
              <Header /> 
              <Calculator /> 
            </Card>
        </PageLayout>
    )
}

export default Home
 
 