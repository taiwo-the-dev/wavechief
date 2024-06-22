import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const lists = ['lugage 1', 'lugage 2', 'lugage 3', 'lugage 4', 'lugage 5']

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

const SelectInput = () => {
  const [selected, setSelected] = useState('Specify what you want move')

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>  
          <div className="relative w-full">
            <ListboxButton className="relative w-full cursor-default rounded-2xl bg-light-50 pl-3 pr-10 text-left text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-100 sm:text-sm sm:leading-6 py-3">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-black" aria-hidden="true" />
              </span>
            </ListboxButton>

            <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {lists.map((list, index) => (
                  <ListboxOption
                    key={index}
                    className={({ focus }) =>
                      classNames(
                        focus ? 'bg-accent-100 text-black' : '',
                        !focus ? 'text-black' : '',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={list}
                  >
                    {({ selected, focus }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {list}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              focus ? 'text-white' : 'text-gray-400',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className="h-5 w-5 text-accent-100" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default SelectInput;
