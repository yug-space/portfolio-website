import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import wif from '@/images/wif.png'
import buildnbeyond from '@/images/bnb.png'
import xeonic from '@/images/xeonic.png'
import buildpost from '@/images/buildpost.png'
import pro from '@/images/pro.png'
import Link from 'next/link'
const projects = [
  {
    "name": "Buildpost",
    "description": "Effortlessly share your journey while building your product and schedule posts with ease.",
    "link": { "href": "https://buildpost.co", "label": "buildpost.co" },
    "logo": "logoCosmos",
    "image": buildpost
  },
  {
    "name": "Buildnbeyond",
    "description": "SaaS design and development agency with 50+ clients and 4.9 ⭐️ rating.",
    "link": { "href": "https://buildnbeyond.com", "label": "buildnbeyond.com" },
    "logo": "logoAnimaginary",
    "image": buildnbeyond
  },
  {
    "name": "Whatiffounders",
    "description": "Discover podcasts, products, news, and events for founders.",
    "link": { "href": "https://x.com/whatiffounder", "label": "whatiffounders.com" },
    "logo": "logoPlanetaria",
    "image": wif,
    "closed": true
  },
  {
    "name": "Xeonic",
    "description": "AI-powered product search tool for e-commerce.",
    "link": { "href": "https://xeonic.ai", "label": "xeonic.ai" },
    "logo": "logoHelioStream",
    "image": xeonic
  },
  {
    "name": "ProScreenshots",
    "description": "Enhance Your Screenshots Like Never Before – Trusted by Nearly 2,000 Users",
    "link": { "href": "https://proscreenshots.com", "label": "proscreenshots.com" },
    "logo": "logoHelioStream",
    "image": pro
  },
  
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout title="My Projects">
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16">
        {projects.map((project) => (
          <div
            as="li"
            key={project.name}
            className="grid md:grid-cols-2 gap-x-12 gap-y-4 flex-row justify-between"
          >
            <div className=''>
              {project.closed ? <div className='bg-red-500 text-white rounded-full px-2 py-1 text-sm inline'>Closed</div> : null}
              <h2 className="mt-6 text-4xl text-zinc-800 dark:text-zinc-100">
                <Link target='_blank' href={project.link.href}>
                <p className='text-4xl'>{project.name}</p>
                </Link>
              </h2>
              <div className='text-xl'>
              <Card.Description className=''>{project.description}</Card.Description>
              </div>
              <Link href={project.link.href}>
              <p className="relative z-10 mt-6 flex text-md font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
              </Link>
            </div>
            <Image src={project.image} alt="" className='rounded-xl' srcset="" />
          </div>
        ))}
      </ul>
    </SimpleLayout>
  )
}
