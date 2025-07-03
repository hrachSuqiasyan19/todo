"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Home from "./page";

export default function RootLayout({
    children,
}:{
    children:React.ReactNode;
}){
    return(
        <html lang='en'>
           <body>
            <Home/>
           </body>
        </html>
    );
}