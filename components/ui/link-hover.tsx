'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const DefaultImg = 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=400&q=80'

const DefaultItems: Item[] = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&q=80',
    title: 'Home',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&q=80',
    title: 'Blog',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
    title: 'About',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=400&q=80',
    title: 'Projects',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&q=80',
    title: 'Contacts',
  },
]

type Item = {
  imgUrl: string
  title: string
}

interface Props {
  items?: Item[]
}

export default function ImageHover({ items = DefaultItems }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const previewContainerRef = useRef<HTMLDivElement>(null)
  const newImgRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return
      const previewContainer = previewContainerRef.current
      const menuLinkItems =
        sectionRef.current.querySelectorAll('.menu-link-item')

      let lastHoveredIndex: number | null = null

      const handleMouseOver = (index: number) => {
        if (index !== lastHoveredIndex) {
          const imgContainer = document.createElement('div')
          imgContainer.style.position = 'absolute'
          imgContainer.style.transform = 'rotate(-30deg)'
          imgContainer.style.left = '-50%'
          imgContainer.style.top = '125%'
          imgContainer.style.width = '100%'
          imgContainer.style.height = '100%'
          imgContainer.classList.add('temp-image')

          const img = document.createElement('img')
          img.src = items[index].imgUrl
          img.alt = ''
          img.style.width = '100%'
          img.style.height = '100%'
          img.style.objectFit = 'cover'
          imgContainer.appendChild(img)
          previewContainer!.appendChild(imgContainer)

          gsap.to(imgContainer, {
            top: '0%',
            left: '0%',
            rotate: 0,
            duration: 1.25,
            ease: 'power3.out',
            onComplete: () => {
              gsap.delayedCall(2, () => {
                const allImgContainers =
                  previewContainer!.querySelectorAll('.temp-image')

                if (allImgContainers.length > 1) {
                  Array.from(allImgContainers)
                    .slice(0, -1)
                    .forEach((container) => {
                      setTimeout(() => {
                        container.remove()
                      }, 2000)
                    })
                }
              })
            },
          })

          lastHoveredIndex = index
        }
      }

      const handlers: Array<() => void> = []
      menuLinkItems.forEach((item, index) => {
        const handler = () => handleMouseOver(index)
        handlers.push(handler)
        item.addEventListener('mouseover', handler)
      })

      return () => {
        menuLinkItems.forEach((item, index) => {
          item.removeEventListener('mouseover', handlers[index])
        })
      }
    },
    { scope: sectionRef, dependencies: [sectionRef] }
  )

  return (
    <div
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className='relative flex w-full items-center justify-center min-h-[420px] max-md:flex-col max-md:gap-6'
    >
      {/* Text links, zentriert */}
      <div className='relative z-10 flex-1 flex justify-center'>
        <ul className='flex flex-col items-center gap-2 text-2xl md:text-3xl font-display font-semibold tracking-tight'>
          {items.map(({ title }) => (
            <li
              key={title}
              className='menu-link-item cursor-pointer text-mid-gray hover:text-near-black dark:hover:text-white transition-colors duration-200 py-1'
            >
              {title}
            </li>
          ))}
        </ul>
      </div>

      {/* Bild rechts, rotiert, überlappend */}
      <div
        ref={previewContainerRef}
        className='relative z-0 w-[320px] h-[240px] md:w-[400px] md:h-[300px] rounded-lg overflow-hidden rotate-[12deg] -ml-16 max-md:ml-0 max-md:rotate-[8deg]'
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        <img src={items[0].imgUrl} className='h-full w-full object-cover' alt='' />

        <div
          ref={newImgRef}
          className='absolute h-full w-full'
          style={{ top: '125%', left: '-50%', transform: 'rotate(-30deg)' }}
        >
          <img
            src={items[1].imgUrl}
            className='h-full w-full object-cover'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
