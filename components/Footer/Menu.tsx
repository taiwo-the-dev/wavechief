interface MenuPropTypes {
    id:number
    title: string;
    lists: string[];
}
const Menu = ({id, title, lists}: MenuPropTypes) => {
  return (
    <div className={`w-full md:w-[30%] px-3 lg:px-6 py-10 lg:py-20 border-r ${id === 0 && 'border-l'} border-[#333]`}>
      <h3 className='uppercase text-16 text-[#636363]'>{title}</h3>
      <div>
        {lists.map((list, index) => <li key={index} className='text-white list-none my-3 text-16'>{list}</li>)}
      </div>
    </div>
  )
}

export default Menu
