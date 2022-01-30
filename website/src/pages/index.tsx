import Head from 'next/head'

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
    return <Gallery cards={cards} />
}
