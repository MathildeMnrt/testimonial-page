const Card = ({ logo, author, comment, stars, id }) => {
    return (
        <div className='w-[350px] bg-white rounded-lg px-10 py-7 text-base shadow-[0_30px_100px_0px_rgba(17,23,41,0.05)]'>
            <div className='flex flex-row'>
                <img
                    src={logo}
                    width={80}
                />
                <div className='flex flex-row ml-5'>
                    {stars < 1 ? <img src="Star_fill_gray.svg"/> : <img src="Star_fill.svg" /> }
                    {stars < 2 ? <img src="Star_fill_gray.svg"/> : <img src="Star_fill.svg" /> }
                    {stars < 3 ? <img src="Star_fill_gray.svg"/> : <img src="Star_fill.svg" /> }
                    {stars < 4 ? <img src="Star_fill_gray.svg"/> : <img src="Star_fill.svg" /> }
                    {stars === 5 ? <img src="Star_fill.svg"/> : <img src="Star_fill_gray.svg" /> }

                </div>
            </div>
            <h4 className='text-[#18181B] font-semibold pt-4 pb-2'>{author}</h4>
            <p className='text-custom-grey font-light'>{comment}</p>
        </div>
    )
}

export default Card