export default function Category({ setSelectedTag, tag, selectedTag }) {
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      return setSelectedTag(null);
    }
    return setSelectedTag(tag);
  };

  return (
    <div
      key={tag}
      onClick={() => handleTagClick(tag)}
      className={`${
        selectedTag === tag && 'ring-2 ring-gray-900 text-gray-900'
      } inline-flex items-center px-3 py-1.5 uppercase bg-white rounded cursor-pointer border border-black transition hover:opacity-50`}
    >
      <span className="text-xs font-medium uppercase">{tag || 'All'}</span>
    </div>
  );
}
