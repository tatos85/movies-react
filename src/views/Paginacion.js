export default function Pagination(props){

    const getPages = () => {
        const result = [];

        for (let index = 0; index < props.total; index++) {
            let page = index+1;
            result.push(
           
                <a 
                onClick={()=> props.onChange(page)} 
                className={props.pagina === (page) ? "active" : ""} 
                >{(page)}
                </a>
            )
        }
        return result;
    }


    return (
        <div className="topbar-filter">
        <div className="pagination2">
            <span>Page {props.pagina} of {props.total}:</span>
            {getPages()}
        </div>
    </div>
    );       
}