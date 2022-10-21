import './ExpensiveItem.css'
function ExpensiveItem(props) {
    const exMonth = props.date.toLocaleDateString('en-us', {month: 'long'});
    const exDay = props.date.toLocaleDateString('en-us', {day: '2-digit'});
    const exYear = props.date.getFullYear();
    return (
        <>
            <div className="addExpensiveItems">
                <div className="row align-items-center">
                    <div className="col-4">
                        <h3 className="text-primary text-left">{props.title}</h3>
                    </div>
                    <div className="col-4">
                        <h3 className="text-primary">{exMonth}</h3>
                        <h5 className="text-primary">{exDay}</h5>
                        <h4 className="text-primary">{exYear}</h4>
                        <p>aa 55</p> 
                    </div>
                    <div className="col-4">
                        <h3 className="text-success text-right">${props.cost}</h3>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default ExpensiveItem;