import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import NewsletterForm from '@/components/NewsletterForm'
import projectsData from '@/data/projectsData'
// import { gsap, DrawSVGPlugin } from 'gsap-trial/all'
import { useRef, useLayoutEffect, useEffect } from 'react'

const MAX_DISPLAY = 2

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  // const root = useRef()
  // const line1 = useRef() // create a ref for the root level element (for scoping)
  // const line2 = useRef()
  // const line3 = useRef()

  // useEffect(() => {
  //   // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)

  //   gsap.registerPlugin(DrawSVGPlugin)
  //   let ctx = gsap.context(() => {
  //     let i = 0

  //     gsap.set(line1.current, {
  //       attr: { stroke: 'hsl(1,100%, 50%)', 'stroke-width': 4, 'stroke-linecap': 'round' },
  //     })
  //     gsap.set(line2.current, { attr: { 'stroke-width': 6 }, opacity: 0.4 })
  //     gsap.set(line3.current, { attr: { 'stroke-width': 9 }, opacity: 0.15 })
  //     // const allWithClass = Array.from(document.querySelectorAll('h2.example'))
  //     ;[].forEach.call(document.getElementsByClassName('line'), (el) => {
  //       gsap
  //         .timeline({ defaults: { duration: 1 }, repeat: -1, repeatDelay: (27 - i) / 50 })
  //         .to(el, { duration: 2, attr: { stroke: 'hsl(360, 100%, 50%)', ease: 'power2.inOut' } }, 0)
  //         .fromTo(el, { drawSVG: 0 }, { drawSVG: '35% 70%', ease: 'sine.in' }, i / 50)
  //         .to(el, { drawSVG: '100% 100%', ease: 'sine.out' }, 1 + i / 50)
  //         .progress(i / 20)
  //       i++
  //     })
  //   }, root) // <- IMPORTANT! Scopes selector text

  //   return () => ctx.revert() // cleanup
  // }, [])

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <section className="relative">
        {/* <div>
          <svg viewBox="0 0 1200 900" fill="none">
            <path
              className="line line3"
              useRef={line3}
              d="M-10,348c15,17,24,43,68,47s97-43,183-12s165,73,283,49 s290-98,472-87c131.22,7.93,225.6,51.07,304,38"
            />
            <path
              className="line line2"
              useRef={line2}
              d="M-10,348c15,17,24,43,68,47s97-43,183-12s165,73,283,49 s290-98,472-87c131.22,7.93,225.6,51.07,304,38"
            />
            <path
              className="line line1"
              useRef={line1}
              d="M-10,348c15,17,24,43,68,47s97-43,183-12s165,73,283,49 s290-98,472-87c131.22,7.93,225.6,51.07,304,38"
            />

            <path
              className="line line3"
              useRef={line3}
              d="M-10,319c28-9,68.84,25.02,116,26c48,1,83.41-12.8,124-7 c42,6,84,45,161,59s144,12,263-36s234-86,371-62s216,52,279,62"
            />
            <path
              className="line line2"
              useRef={line2}
              d="M-10,319c28-9,68.84,25.02,116,26c48,1,83.41-12.8,124-7 c42,6,84,45,161,59s144,12,263-36s234-86,371-62s216,52,279,62"
            />
            <path
              className="line line1"
              useRef={line1}
              d="M-10,319c28-9,68.84,25.02,116,26c48,1,83.41-12.8,124-7 c42,6,84,45,161,59s144,12,263-36s234-86,371-62s216,52,279,62"
            />

            <path
              className="line line3"
              useRef={line3}
              d="M-10,296c27-13,59-22,107,0c71.61,32.82,113,14,175,22 s117,50,223,45s165-45,277-73s210-56,532,43"
            />
            <path
              className="line line2"
              useRef={line2}
              d="M-10,296c27-13,59-22,107,0c71.61,32.82,113,14,175,22 s117,50,223,45s165-45,277-73s210-56,532,43"
            />
            <path
              className="line line1"
              useRef={line1}
              d="M-10,296c27-13,59-22,107,0c71.61,32.82,113,14,175,22 s117,50,223,45s165-45,277-73s210-56,532,43"
            />

            <path
              className="line line3"
              useRef={line3}
              d="M-10,263c15-6,85-39,117-13c52.68,42.81,124,38,182,35 s123,63,275,32s235-75,349-72s242,13,391,64"
            />
            <path
              className="line line2"
              useRef={line2}
              d="M-10,263c15-6,85-39,117-13c52.68,42.81,124,38,182,35 s123,63,275,32s235-75,349-72s242,13,391,64"
            />
            <path
              className="line line1"
              useRef={line1}
              d="M-10,263c15-6,85-39,117-13c52.68,42.81,124,38,182,35 s123,63,275,32s235-75,349-72s242,13,391,64"
            />

            <path
              className="line line3"
              useRef={line3}
              d="M-10,225c0,0,39-33,79-38s61,24,100,44s101-7,159,19 s81,48,221,37s245-55,311-68s160-16,240-1s137,39,208,55"
            />
            <path
              className="line line2"
              useRef={line2}
              d="M-10,225c0,0,39-33,79-38s61,24,100,44s101-7,159,19 s81,48,221,37s245-55,311-68s160-16,240-1s137,39,208,55"
            />
            <path
              className="line line1"
              useRef={line1}
              d="M-10,225c0,0,39-33,79-38s61,24,100,44s101-7,159,19 s81,48,221,37s245-55,311-68s160-16,240-1s137,39,208,55"
            />

            <path
              className="line line3"
              useRef={line3}
              d="M-10,192c0,0,51-54,91-59s60,8,99,28s83,24,141,50 s152,48,292,37s203-51,269-64s142-15,222,0s136,37,207,53"
            />
            <path
              className="line line2"
              useRef={line2}
              d="M-10,192c0,0,51-54,91-59s60,8,99,28s83,24,141,50 s152,48,292,37s203-51,269-64s142-15,222,0s136,37,207,53"
            />
            <path
              className="line line1"
              useRef={line1}
              d="M-10,192c0,0,51-54,91-59s60,8,99,28s83,24,141,50 s152,48,292,37s203-51,269-64s142-15,222,0s136,37,207,53"
            />

            <path
              className="line line3"
              useRef={line3}
              d="M-10,144c0,0,54-39,94-44s85,7,124,27s59,25,117,51 s153,52,293,41s188-53,254-66s148-13,228,2s181,38,211,38"
            />
            <path
              className="line line2"
              useRef={line2}
              d="M-10,144c0,0,54-39,94-44s85,7,124,27s59,25,117,51 s153,52,293,41s188-53,254-66s148-13,228,2s181,38,211,38"
            />
            <path
              className="line line1"
              useRef={line1}
              d="M-10,144c0,0,54-39,94-44s85,7,124,27s59,25,117,51 s153,52,293,41s188-53,254-66s148-13,228,2s181,38,211,38"
            />

            <path
              className="line line3"
              useRef={line3}
              d="M-10,115c0,0,66-50,145-47s176.71,58.34,234,75 c86,25,187,47,352,7s150.3-93.53,404-31c142,35,190,26,190,26"
            />
            <path
              className="line line2"
              useRef={line2}
              d="M-10,115c0,0,66-50,145-47s176.71,58.34,234,75 c86,25,187,47,352,7s150.3-93.53,404-31c142,35,190,26,190,26"
            />
            <path
              className="line line1"
              useRef={line1}
              d="M-10,115c0,0,66-50,145-47s176.71,58.34,234,75 c86,25,187,47,352,7s150.3-93.53,404-31c142,35,190,26,190,26"
            />

            <path
              className="line line3"
              useRef={line3}
              d="M-10,88c0,0,100-71,231-36s199,100,373,85s187-94,320-94 s301,87,418,60"
            />
            <path
              className="line line2"
              useRef={line2}
              d="M-10,88c0,0,100-71,231-36s199,100,373,85s187-94,320-94 s301,87,418,60"
            />
            <path
              className="line line1"
              useRef={line1}
              d="M-10,88c0,0,100-71,231-36s199,100,373,85s187-94,320-94 s301,87,418,60"
            />
          </svg>
        </div> */}
        <div className="z-5 absolute left-1/3 -translate-x-1/2  scale-150 stroke-primary-700 [mask-image:linear-gradient(to_top,white_20%,transparent_75%)]">
          <svg
            viewBox="0 0 1026 1026"
            fill="none"
            aria-hidden="true"
            className="animate-spin-forward-slow inset-0 h-full w-full"
          >
            <path
              d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
              stroke="#d4d4d8"
              strokeOpacity="0.7"
            ></path>
            <path
              d="M513 1025C230.23 1025 1 795.77 1 513"
              stroke="url(#:R9dj6qja:-gradient-1)"
              strokeLinecap="round"
            ></path>
            <defs>
              <linearGradient
                id=":R9dj6qja:-gradient-1"
                x1="1"
                y1="513"
                x2="1"
                y2="1025"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0000aa"></stop>
                <stop offset="1" stopColor="#121212" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg
            viewBox="0 0 1026 1026"
            fill="none"
            aria-hidden="true"
            className="animate-spin-reverse-slower absolute inset-0 h-full w-full"
          >
            <path
              d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
              stroke="#d4d4d8"
              strokeOpacity="0.7"
            ></path>
            <path
              d="M913 513c0 220.914-179.086 400-400 400"
              stroke="url(#:R9dj6qja:-gradient-2)"
              strokeLinecap="round"
            ></path>
            <defs>
              <linearGradient
                id=":R9dj6qja:-gradient-2"
                x1="913"
                y1="513"
                x2="913"
                y2="913"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0000aa"></stop>
                <stop offset="1" stopColor="#121212" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="item-center z-7 relative flex w-full flex-col py-8">
          <h1 className="mb-2 mt-8 text-xl font-bold leading-none tracking-tight text-gray-600 dark:text-white md:text-5xl lg:text-xl">
            Hi <span className="wave text-black">👋</span>, I'm Naveen Kumar
          </h1>
          <h1 className="animate-text bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text pt-2 pb-8 text-left text-5xl font-extrabold tracking-[-.072em] text-transparent sm:text-6xl md:text-8xl ">
            Full-Stack <br /> Web Developer
          </h1>

          <ul className="items-left mb-6 flex flex-wrap justify-start text-gray-900 dark:text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                React
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Next.js
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                PHP
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Laravel
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                October CMS
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Hosting
              </a>
            </li>
            <li>
              <Link
                href={'mailto:naveenkumar3273@gmail.com'}
                className="font-extrabold text-primary-500  hover:text-primary-600 hover:underline dark:hover:text-primary-400"
                aria-label={`get in touch`}
              >
                Get in touch &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="">
        <div className="mt-10 mb-10 flex hidden w-full flex-col items-start gap-2">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
            Hi <span className="wave text-black">👋</span>, I'm Naveen Kumar
          </h1>
          <p className="mb-0 mt-0 max-w-[700px] text-lg text-gray-600 sm:text-xl">
            I am a full-stack web developer with over 10 years of experience.
          </p>
          <Link
            href={'mailto:naveenkumar3273@gmail.com'}
            className="font-bold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`get in touch`}
          >
            Get in touch &rarr;
          </Link>
        </div>

        <div className="pt-6 pb-8">
          <h1 className="mb-0 text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-10">
            Latest blog posts
          </h1>
          <p className="text-md text-gray-500 dark:text-gray-400">{siteMetadata.description}</p>
        </div>

        <div className="-m-4 flex flex-wrap">
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <div key={slug} className="md max-w-[34rem] items-center p-4 md:w-1/2">
                <div className="h-full overflow-hidden rounded-md border-2 border-gray-200 p-5 hover:border-primary-600 dark:border-gray-800 dark:hover:border-primary-400">
                  <Link href={`/blog/${slug}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {title}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 hover:cursor-pointer dark:text-gray-400">
                    {summary}
                  </p>
                </div>
              </div>
            )
          })}

          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-start pl-4 text-base font-medium leading-6">
              <Link
                href="/projects"
                className="font-extrabold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="all posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
        </div>

        <div className="pt-10 pb-8">
          <h1 className="mb-0 text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-10">
            Projects
          </h1>
          <p className="text-md text-gray-500 dark:text-gray-400">{siteMetadata.description}</p>
        </div>

        <div className="-m-4 flex flex-wrap">
          {projectsData.slice(0, MAX_DISPLAY).map((project) => {
            const { title, description, imgSrc, href } = project
            return (
              <div key={title} className="md max-w-[34rem] items-center p-4 md:w-1/2">
                <div className="h-full overflow-hidden rounded-md border-2 border-gray-200 p-5 hover:border-primary-600 dark:border-gray-800 dark:hover:border-primary-400">
                  <Link href={href}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {title}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 hover:cursor-pointer dark:text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
            )
          })}

          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-start pl-4 text-base font-medium leading-6">
              <Link
                href="/blog"
                className="font-extrabold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="all posts"
              >
                All Projects &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
