import Head from 'next/head'
import { useCallback, useLayoutEffect, useMemo } from 'react'

function Card({}) {
    return <div className='flex flex-col bg-gray-300 w-[200px] h-[100px]'></div>
}

function Gallery({ cards }) {
    return (
        <div className='flex w-full h-full flex-wrap gap-4'>
            {cards.map((c, i) => {
                return <Card key={i} />
            })}
        </div>
    )
}

const cards = [null, null, null, null, null]
export default function Home() {
    const iframeSelector = 'iframe'
    const handleResize = useCallback(
        throttle(function handleResize() {
            if (!parent?.document) {
                console.warn(`No document found for ${iframeSelector}`)
                return
            }
            const iframe: HTMLElement | null =
                parent.document.querySelector(iframeSelector)
            if (!iframe) {
                console.warn(`No iframe found for ${iframeSelector}`)
                return
            }
            console.log('resizing')
            iframe.style.height = document.body.scrollHeight + 'px'
        }, 300),
        [],
    )
    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return <Gallery cards={cards} />
}

function throttle(func, timeFrame) {
    var lastTime = 0
    return function () {
        let now = new Date().getTime()
        if (now - lastTime >= timeFrame) {
            func()
            lastTime = now
        }
    }
}
