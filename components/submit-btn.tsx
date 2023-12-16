import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

const SubmitBtn = () => {

    const { pending } = useFormStatus()

    return (
        <button className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex justify-center items-center gap-2 focus:scale-110 hover:scale-110 hover-active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10" type="submit" disabled={pending}>
            {
                pending ?
                    <div className='animate-spin h-5 w-5 border border-b-2 rounded-full'></div>
                    : <>Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1" /></>
            } </button>
    )
}

export default SubmitBtn