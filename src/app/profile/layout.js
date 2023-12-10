import React from "react";
import PersonInfoCard from "@/components/features/Profile/PersonInfoCard";

export default function ProfileLayout({children})
{
    return (
        <>
            <PersonInfoCard />
            <main>
                {children}
            </main>
        </>
    )
}
