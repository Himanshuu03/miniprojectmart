/* eslint-disable react/prop-types */
function Card({ project }) {
  return (
        <div className="w-80 rounded overflow-hidden shadow-lg bg-slate-200 hover:scale-110">
        <img className="w-full h-[250px]" src={project.imgUrl} alt={project.id} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-700 text-base">
            {project.description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {
                project.tags.map(tag => (
                    <span key={tag} className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                ))
            }
        </div>
        <div className='flex justify-around'>
        <a target="_blank" href={project.code} className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Code
        </a>
        <a target="_blank" href={project.live} className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Live</a>
        </div>
        </div>
  )
}

export default Card