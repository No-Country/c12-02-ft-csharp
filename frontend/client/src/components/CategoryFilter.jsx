

const CategoryFilter = ({ data, handleChange }) => {
  
  const categories = [...new Set(data.map((product) => product.category))];

 

  return (
    <div className='bg-white rounded-lg p-4 border-2'>
      <h2 className='font-bold'>Categorias</h2>
    <div className='flex flex-col gap-2 px-5 mt-2 font-semibold'>
      {categories.map((category) => (
        <label key={category} className='flex gap-2'>
          <input
            type="checkbox"
            value={category}
            onChange={handleChange}
          />
          {category}
        </label>
      ))}
      </div>
      </div>
  )
}

export default CategoryFilter
