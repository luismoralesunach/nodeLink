import { useState } from "react";
import { useUser } from "../context/UserContext";
import { isValidUrl } from "../utils/validate";
import { useLinks } from "../context/LinksContext";

export default function AddLink() {
  const { state } = useUser();

  const [newLink, setNewLink] = useState({
    user: state.user.id,
    url: "",
    title: ""
  });

  const [urlError, setUrlError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewLink(prev => ({ ...prev, [name]: value }));

    // Validate URL live while typing
    if (name === "url") {
      if (value.trim() === "") {
        setUrlError("");
      } else if (!isValidUrl(value)) {
        setUrlError("Please enter a valid URL (must start with http:// or https://)");
      } else {
        setUrlError("");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidUrl(newLink.url)) {
      setUrlError("Please enter a valid URL before submitting.");
      return;
    }

    // Proceed with submit logic (e.g., send to API)
    console.log("Submitting new link:", newLink);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Enter Link Title</label>
        <input
          type="text"
          name="title"
          value={newLink.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
      </div>

      <div>
        <label>Enter Link URL</label>
        <input
          type="text"
          name="url"
          value={newLink.url}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${urlError ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
        />
        {urlError && <p className="text-red-500 text-sm mt-1">{urlError}</p>}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!!urlError || !newLink.title || !newLink.url}
        className="border border-black px-4  py-2 rounded-md disabled:opacity-50"
      >
        Save
      </button>
    </form>
  );
}
