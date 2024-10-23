"use client"

import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { useState } from 'react'

interface CustomInputProps {
  route: string,
  iconPosition: 'left' | 'right', 
  imgSrc: string,
  placeholder: string,
  otherClasses?: string, 
}

const LocalSearchbar: React.FC<CustomInputProps> = ({ route, iconPosition, imgSrc, placeholder, otherClasses = '' }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className={`background-light800_darkgradient flex min-h-[56px] items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}>
      {iconPosition === 'left' && (
        <Image src={imgSrc} alt='search icon' width={24} height={24} className="cursor-pointer" />
      )}

      <Input 
        type='text'
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        className='paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none'
        aria-label="Search questions" 
      />

      {iconPosition === 'right' && (
        <Image src={imgSrc} alt='search icon' width={24} height={24} className="cursor-pointer" />
      )}
    </div>
  )
}

export default LocalSearchbar
