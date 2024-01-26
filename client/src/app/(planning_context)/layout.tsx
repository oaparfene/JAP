'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import { useData } from '@/hooks/useData';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { fetchAssetsFromBackend, fetchCRsFromBackend, fetchPlansFromBackend } = useData()

    React.useEffect(() => {
        fetchAssetsFromBackend()
        fetchCRsFromBackend()
        fetchPlansFromBackend()
    }, [])

    return (
        <>
            {children}
        </>
    )
}
