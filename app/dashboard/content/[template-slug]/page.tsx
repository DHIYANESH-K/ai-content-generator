"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection.tsx'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import {use} from "react"
import { GenerateContent } from '@/utils/AIModal'

interface PROPS{
    params:{
        'template-slug':string
    }
}
const CreateNewContent = (props:PROPS) => {

    const [loading,setLoading]=useState(false);
    const [aiOutput,setAiOutput]=useState<string>('');
    const unwrappedParams = use(props.params); 
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === unwrappedParams["template-slug"]
  );
    
    const GenerateAIContent=async(formData:any)=>{
      setLoading(true)
      const SelectedPrompt=selectedTemplate?.aiPrompt;
      const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;
      const result:any=await GenerateContent(FinalAIPrompt);
      setAiOutput(result);
      setLoading(false);
    }
  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button><ArrowLeft/>Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>GenerateAIContent(v)} loading={loading}/>

        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent