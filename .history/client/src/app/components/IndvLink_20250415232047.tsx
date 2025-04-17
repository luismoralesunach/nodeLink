import { useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useLinks } from '../context/LinksContext';
import { useUser } from '../context/UserContext';

export default function IndvLink({ link }: any) {
  const { removeLink, updateLink } = useLinks()
  const { state } = useUser()
  const { user } = state
  const [isEditable, setIsEditable] = useState(false)

  const [updatedLink, setUpdatedLink] = useState({
    user: user.id,
    title: link.title,
    url: link.url
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedLink(prev => ({ ...prev, [name]: value }));
  }

  const handleSave = () => {
    updateLink(linkupdatedLink)
    setIsEditable(false)
  }

  return (
    <div key={link.id} className="bg-gray-50 border border-black rounded-md mt-2 flex items-center justify-between px-2">
      <div className='flex flex-col w-[80%]'>
        {isEditable ? (
          <>
            <input
              name="title"
              value={updatedLink.title}
              onChange={handleChange}
              className="mb-1 px-2 py-1 border border-gray-300 rounded-md"
              placeholder="Title"
            />
            <input
              name="url"
              value={updatedLink.url}
              onChange={handleChange}
              className="px-2 py-1 border border-gray-300 rounded-md"
              placeholder="URL"
            />
          </>
        ) : (
          <>
            <div>{link.title}</div>
            <div>{link.url}</div>
          </>
        )}
      </div>

      <div
        onClick={() => {
          if (isEditable) {
            handleSave()
          } else {
            setIsEditable(true)
          }
        }}
        className='w-[10%] hover:scale-110 hover:cursor-pointer'
      >
        {!isEditable ? <FaPencilAlt /> : <FaCheck />}
      </div>

      <div
        onClick={() => removeLink(link.id)}
        className='w-[10%] hover:scale-110 hover:cursor-pointer'
      >
        <FaTrash />
      </div>
    </div>
  )
}
