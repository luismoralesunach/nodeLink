'use client'

import { useState } from 'react'
import { useUser } from '../../context/UserContext'


export default function Links() {
  const { preview, setPreview } = useUser()
  const [links, setLinks] = useState(preview.links || [])

  const handleLinkChange = (id: string, field: string, value: string) => {
    const updatedLinks = links.map(link =>
      link.id === id ? { ...link, [field]: value } : link
    )
    setLinks(updatedLinks)
    setPreview(prev => ({ ...prev, links: updatedLinks }))
  }

  const handleAddLink = () => {
    const newLink = {
      id: uuidv4(),
      title: '',
      url: ''
    }
    const updatedLinks = [...links, newLink]
    setLinks(updatedLinks)
    setPreview(prev => ({ ...prev, links: updatedLinks }))
  }

  const handleDeleteLink = (id: string) => {
    const updatedLinks = links.filter(link => link.id !== id)
    setLinks(updatedLinks)
    setPreview(prev => ({ ...prev, links: updatedLinks }))
  }

  return (
    <div className="w-full max-w-xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit Links</h2>

      <div className="space-y-6">
        {links.map(link => (
          <div key={link.id} className="border border-gray-300 rounded-md p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={link.title}
                onChange={(e) => handleLinkChange(link.id, 'title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">URL</label>
              <input
                type="text"
                value={link.url}
                onChange={(e) => handleLinkChange(link.id, 'url', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <button
              onClick={() => handleDeleteLink(link.id)}
              className="text-red-600 hover:underline text-sm"
            >
              Delete
            </button>
          </div>
        ))}

        <button
          onClick={handleAddLink}
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
        >
          + Add New Link
        </button>
      </div>
    </div>
  )
}
