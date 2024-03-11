import Card from "./components/Card"

const cards_content = [
  {
    id: 1,
    logo: 'google-testimonial.png',
    stars: 4,
    author: 'Samantha Lee',
    comment: 'The checklist ensures that the review process is thorough'
  },
  {
    id: 2,
    logo: 'meta-testimonial.png',
    stars: 5,
    author: 'Rachel Patel',
    comment: 'I highly recommend the Writecream Business Description'
  }
]


function App() {

  return (
    <>
      <div className='font-sora gap-10 md:flex md:flex-row mt-[162px] max-w-[1136px] items-center mx-auto sm:flex-col px-10'>
        
        {/* Left side content */}
        <div className='md:w-1/2 sm:w-full'>
          <p className="bg-custom-yellow rounded-full w-12 h-12 text-2xl flex items-center justify-center">⭐️</p>

          <h1 className="text-4xl font-medium mt-4">Reviewers</h1>

          <div className="text-xl	mt-3 mb-8 text-custom-grey font-light">
            <p>
              Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and consistent.
            </p>
          </div>
          <ul className="list-none text-sm flex flex-col gap-y-3 text-custom-grey font-light pb-10">
            <li className="flex items-center space-x-2">
              <img
                className="w-6 h-6 mr-[8px]"
                src="/Done_ring_round_fill.svg"
                alt="Checklist icon"
              />
              Checklist to Review an Academic Paper
            </li>
            <li className="flex items-center space-x-2">
              <img
                className="w-6 h-6 mr-[8px]"
                src="/Done_ring_round_fill.svg"
                alt="Peer icon"
              />
              Peer Review Checklist
            </li>
            <li className="flex items-center space-x-2">
              <img
                className="w-6 h-6 mr-[8px]"
                src="/Done_ring_round_fill.svg"
                alt="Checklist icon"
              />
              Checklist for Editors, Reviewers, and Authors of SPIE Journals
            </li>
          </ul>

        </div>

        {/* Cards */}
        <div className='grid justify-items-stretch gap-10 md:w-1/2 sm:w-full'>
          {cards_content.map((item) =>
          <div key={item.id} className={ (item.id % 2 == 0 ? "justify-self-start align-self-start" : "justify-self-end align-self-end" )}>
            <Card
              key={item.id}
              id={item.id}
              logo={item.logo}
              stars={item.stars}
              author={item.author}
              comment={item.comment}
            />
            </div>
            )
            
            
          }

        </div>
      </div>
    </>
  )
}

export default App
