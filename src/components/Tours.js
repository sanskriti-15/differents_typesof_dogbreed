import Card from "./Cards"
function Tours({tours,removeTours})
{
    return(
        <div className='container'>
        <div>
        <h2 className='title'>Dog Breeds</h2>
    </div>

<div className='cards'>
{
        tours.map((op)=>
{
    return <Card {...op} removeTours={removeTours}></Card>
    })
}
</div>
</div>
    
    )

}

export default Tours;