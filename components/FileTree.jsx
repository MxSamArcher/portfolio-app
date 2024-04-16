import { useState } from "react";

export default function FileTree ({items}) {
  const sortItems = (a, b) => {
    if (a.type === 'dir' && b.type !== 'dir') {
      return -1
    }
    if (a.type !== 'dir' && b.type === 'dir') {
      return 1
    }
    return a.name.localeCompare(b.name)
  }

  const sortedItems = items.sort(sortItems)

  console.log(sortedItems)
  return (
    <div>
      {sortedItems.map((item, index) => (
        <FileOrDirectory
          key={index}
          item={item}
        />
      ))}
    </div>
  )
}

function FileOrDirectory ({item}) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  if (item.type === 'dir') {
    return (
      <div>
        <div onClick={toggle} className="cursor-pointer">
          {item.name}/
        </div>
        {isOpen && item.children && (
          <div className="ml-5">
            <FileTree items={item.children} />
          </div>
        )}
      </div>
    )
  } else {
    return <div>{item.name}</div>
  }
}