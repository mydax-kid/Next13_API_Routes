import React from 'react'
import Link from 'next/link'
import { Suspense } from 'react';
import Repo from '@/app/components/repo'
import RepoDirs from '@/app/components/RepoDirs';

const Repopage = ({ params }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  )
}

export default Repopage