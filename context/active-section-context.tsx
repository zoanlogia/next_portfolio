"use client"

import React, { useState, createContext, useContext } from "react"
import type { ActiveSectionContextProviderProps, ActiveSectionContextType, SectionName } from "@/lib/types"


export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>{children}</ActiveSectionContext.Provider>
    )
}

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext)

    if (!context || context === null) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
    }

    return context
}