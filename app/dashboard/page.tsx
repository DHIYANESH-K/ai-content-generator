"use client"
import React from 'react';
import SearchSection from './_components/SearchSection.tsx';
import TemplateListSection from  "./_components/TemplateListSection.tsx"
import { useState } from 'react';

const Dashboard = () => {
    let [userSearchInput,setUserSearchInput]=useState<string>();
  return (
    <div>
       <SearchSection onSearchInput={(value:string)=>{
        setUserSearchInput(value);
       }}></SearchSection>

       <TemplateListSection userSearchInput={userSearchInput}></TemplateListSection>
    </div>
  )
}

export default Dashboard