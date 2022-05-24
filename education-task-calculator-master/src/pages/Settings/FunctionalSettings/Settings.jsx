import React from 'react'

import { PageLayout } from '@/layouts'
import Header from '@/components/Header/FunctionalHeader/Header'

import {
    Card,
    Title,
    ThemeSelector,
    ThemeSelectorContainer,
    Button,
    SettignsContainer,
} from '@/pages/Settings/components'

import { changeTheme, clearHistory } from '@/actions'
import { useDispatch, useSelector } from 'react-redux'

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

const Settigns = () => {
    const { currentTheme } = useSelector(state => state.theme)

    const dispatch = useDispatch()

    const handleChange = event => {
        dispatch(changeTheme(event.target.value))
    }

    const deleteAllHistory = () => {
        dispatch(clearHistory())
    }

    return (
        <PageLayout>
            <Card>
                <Header />
                <SettignsContainer>
                    <Title>Settigns</Title>
                    <p>Switch theme</p>
                    <ThemeSelectorContainer>
                        <ThemeSelector
                            onChange={handleChange}
                            value={currentTheme}>
                            {themes.map(item => (
                                <option 
                                key={item.value} 
                                value={item.value}
                                style={{border: '1px grey solid'}}
                                >
                                    {item.label}
                                </option>
                            ))}
                        </ThemeSelector>
                    </ThemeSelectorContainer>
                    <Button onClick={deleteAllHistory}>
                        Clear All History
                    </Button>
                </SettignsContainer>
            </Card>
        </PageLayout>
    )
}

export default Settigns