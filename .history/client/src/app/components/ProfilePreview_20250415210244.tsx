'use client'
import { useUser } from '../context/UserContext'

export default function PreviewPage() {
  const { preview } = useUser()

  if (!preview) {
    return <p>No preview data available.</p>
  }

  return (
    <div style={{ backgroundColor: preview.background_color }} className="...">
      <img src="../PP.png" alt="Profile" />
      <h1 style={{ color: preview.bio_text_color }}>{preview.username}</h1>
      <p style={{ color: preview.bio_text_color }}>{preview.bio}</p>

      {preview.links.map((link: any) => (
        <a
          key={link.id}
          href={link.url}
          style={{ backgroundColor: preview.link_color }}
          className="..."
        >
          {link.title}
        </a>
      ))}
    </div>
  )
}
