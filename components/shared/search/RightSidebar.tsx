import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RenderTag from '../RenderTag'


const hotQuestions = [
    { _id:'1', title: 'How do I use express as a custom server in NextJs?'},
    { _id:'2', title: 'How do I use express as a custom server in NextJs?'},
    { _id:'3', title: 'How do I use express as a custom server in NextJs?'},
    { _id:'4', title: 'How do I use express as a custom server in NextJs?'},
    { _id:'5', title: 'How do I use express as a custom server in NextJs?'},
]

const popularTags = [
    { _id:'1', name: 'javascript', totalQuestions: 11},
    { _id:'2', name: 'react', totalQuestions: 5},
    { _id:'3', name: 'python', totalQuestions: 6},
    { _id:'4', name: 'php', totalQuestions: 2},
    { _id:'5', name: 'nextjs', totalQuestions: 13},
    { _id:'6', name: 'tailwindcss', totalQuestions: 8},
]

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
        <div className=''>
            <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
            <div className='mt-7 flex w-full flex-col gap-[30px]'>
                {hotQuestions.map((question) => (
                    <Link
                    href={`/question/${question._id}`}
                    key={question._id}
                    className='flex cursor-pointer items-center justify-between gap-7' 
                    >
                        <p className='body-medium text-dark500_light700'>{question.title}</p>
                        <Image
                        src='/assets/icons/chevron-right.svg'
                        alt='chevron right'
                        width={20}
                        height={20}
                        className='invert-colors'
                        />
                    </Link>
                ))}
            </div>
        </div>
        <div className='mt-16'>
        <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
            {popularTags.map((tag) => (
                    <RenderTag
                        key={tag._id}
                        _id={tag._id}
                        name={tag.name}
                        totalQuestions={tag.totalQuestions}
                        showCount
                    />
            ))}
        </div>
        </div>
    </section>
  )
}

export default RightSidebar