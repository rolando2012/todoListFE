const Titles = ({ level, children }) => {
    const styles = {
        'h2': 'text-3xl',
        'h3': 'text-2xl',
    };

    const Tag = level;
        
    return (
        <Tag className={`${styles[level]} text-indigo-600 font-bold text-center m-3`}>
            {children}
        </Tag>
    ); 
};

export default Titles;
