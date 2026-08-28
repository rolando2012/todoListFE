export const ErrorMessage = ({message}) => {
    return(
        <>
            <div className='flex h-96 w-full items-center justify-center'>
                <p className='text-center text-indigo-500 m-2'>
                    {message}.
                </p>
            </div>
        </>
    )
}  