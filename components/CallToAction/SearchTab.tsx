import { ReactNode } from 'react';

interface SearchTabProps{
    content: string;
    rotate: string;
    children: ReactNode;
}

const SearchTab = ({content, rotate, children}: SearchTabProps) => {
  return (
    <div className={`hithere flex justify-between items-center py-2 px-3 w-fit gap-5 rounded-3xl bg-white ${rotate}`}>
      <p className='text-sm'>{content}</p>
      <div>
        {children}
      </div>
    </div>
  )
}

export default SearchTab;
