

const Titles = ({level, children}) =>{
    const styles = {
        'h2': 'text-3xl text-indigo-600 font-bold text-center',
        'h3': 'text-2xl text-indigo-600 font-bold text-center',
    };

    const Tag = level;
        
    return <Tag className={styles[level]} >{children}</Tag>; 
};

export default Titles;